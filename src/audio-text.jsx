import React, { useEffect, useMemo, useState } from 'react';
import { Headphones, Volume2 } from 'lucide-react';
import { showAppMessage } from './app-messages.jsx';

let _spanishVoice = null;
let _voicesLoaded = false;
let _audioWarmedUp = false;
let _audioSettings = { rate: 0.85, voiceURI: '' };

function getAudioRate() {
  return Math.max(0.65, Math.min(1.25, Number(_audioSettings.rate) || 0.85));
}

function setAudioSettings(settings = {}) {
  _audioSettings = {
    ..._audioSettings,
    ...settings,
    rate: Math.max(0.65, Math.min(1.25, Number(settings.rate ?? _audioSettings.rate) || 0.85)),
  };
  _spanishVoice = null;
}

function loadVoices() {
  if (typeof window === 'undefined' || !window.speechSynthesis) return [];
  return window.speechSynthesis.getVoices() || [];
}

function loadSpanishVoices() {
  return loadVoices().filter((voice) =>
    (voice.lang && voice.lang.toLowerCase().startsWith('es')) ||
    /spanish|espanol|espaÃ±ol/i.test(voice.name || '')
  );
}

function getSpanishVoice() {
  if (typeof window === 'undefined' || !window.speechSynthesis) return null;
  if (_spanishVoice) return _spanishVoice;
  const voices = loadVoices();
  if (voices.length === 0) return null;
  _voicesLoaded = true;
  if (_audioSettings.voiceURI) {
    const preferred = voices.find((x) => x.voiceURI === _audioSettings.voiceURI);
    if (preferred) { _spanishVoice = preferred; return preferred; }
  }
  // Prefer es-ES, then es-MX, then any Spanish
  const order = ['es-ES', 'es-MX', 'es-US', 'es-AR', 'es-CO', 'es-419', 'es'];
  for (const code of order) {
    const v = voices.find(x => x.lang && x.lang.toLowerCase().startsWith(code.toLowerCase()));
    if (v) { _spanishVoice = v; return v; }
  }
  // Last resort: any voice with "Spanish" or "español" in its name
  const v2 = voices.find(x => /spanish|español/i.test(x.name || ''));
  if (v2) { _spanishVoice = v2; return v2; }
  return null;
}

if (typeof window !== 'undefined' && window.speechSynthesis) {
  // Some browsers fire voiceschanged when voices arrive
  window.speechSynthesis.addEventListener?.('voiceschanged', () => {
    _spanishVoice = null;
    getSpanishVoice();
  });
  // Try once on load, and again after a delay (mobile Safari & some Android)
  getSpanishVoice();
  setTimeout(getSpanishVoice, 250);
  setTimeout(getSpanishVoice, 1000);
}

// Mobile browsers (especially iOS Safari and Chrome Android) require the FIRST
// speechSynthesis call to happen during a user gesture. This warmup primes the
// audio engine inside the click handler with a silent utterance.
function warmupAudio() {
  if (_audioWarmedUp) return;
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  try {
    // Speak a single space at zero volume to unlock the audio engine.
    // Must happen synchronously inside the click handler.
    const primer = new SpeechSynthesisUtterance(' ');
    primer.volume = 0;
    primer.rate = 1;
    window.speechSynthesis.speak(primer);
    _audioWarmedUp = true;
  } catch (_) {}
}

function stopAllAudio() {
  try {
    window.speechSynthesis?.cancel();
    window.dispatchEvent?.(new CustomEvent('learn-spanish-audio-stop'));
  } catch (_) {}
}

function speak(text, opts = {}) {
  if (typeof window === 'undefined' || !window.speechSynthesis || !text) {
    if (opts.onerror) opts.onerror({ error: 'no-speechSynthesis' });
    return null;
  }
  try {
    window.speechSynthesis.cancel(); // stop anything currently playing
    const utt = new SpeechSynthesisUtterance(text);
    const v = getSpanishVoice();
    if (v) utt.voice = v;
    utt.lang = v?.lang || 'es-ES';
    utt.rate = opts.rate ?? getAudioRate();
    utt.pitch = opts.pitch ?? 1.0;
    utt.volume = 1.0;
    if (opts.onend) utt.onend = opts.onend;
    if (opts.onerror) utt.onerror = (e) => {
      console.warn('[speech] error:', e?.error || 'unknown', { text: text.slice(0, 30), voice: v?.name });
      opts.onerror(e);
    };
    if (opts.onboundary) utt.onboundary = opts.onboundary;
    if (opts.onstart) utt.onstart = opts.onstart;
    window.speechSynthesis.speak(utt);

    // Some Android browsers freeze the queue after a few seconds. The classic
    // workaround: pause/resume every 14 seconds keeps it alive.
    const keepalive = setInterval(() => {
      if (!window.speechSynthesis.speaking) { clearInterval(keepalive); return; }
      window.speechSynthesis.pause();
      window.speechSynthesis.resume();
    }, 14000);
    const origOnEnd = utt.onend;
    utt.onend = (e) => { clearInterval(keepalive); if (origOnEnd) origOnEnd(e); };

    return utt;
  } catch (e) {
    console.warn('[speech] threw:', e);
    if (opts.onerror) opts.onerror({ error: e.message });
    return null;
  }
}

// =============================================================
// CLICKABLE SPANISH TEXT + KARAOKE TEXT
// Spanish words expose data-dict-word so the dictionary popup can
// open from one tap while audio highlighting stays synchronized.
// =============================================================
const DICTIONARY_TOKEN_RE = /([\p{L}\p{N}]+)|([^\p{L}\p{N}]+)/gu;

function tokenizeDictionaryText(text) {
  const result = [];
  const source = String(text || '');
  let m;
  DICTIONARY_TOKEN_RE.lastIndex = 0;
  while ((m = DICTIONARY_TOKEN_RE.exec(source)) !== null) {
    result.push({ text: m[0], isWord: !!m[1], charStart: m.index });
  }
  return result;
}

function InlineDictionaryText({ text }) {
  const tokens = useMemo(() => tokenizeDictionaryText(text), [text]);
  return (
    <>
      {tokens.map((tok, i) => (
        tok.isWord ? (
          <span key={i} className="dict-word-token" data-dict-word={tok.text}>
            {tok.text}
          </span>
        ) : (
          <span key={i}>{tok.text}</span>
        )
      ))}
    </>
  );
}

function KaraokeText({ text, paragraphClass = 'reading-paragraph', firstParagraph = false }) {
  // 1. Tokenize text — words separated from whitespace/punctuation
  const tokens = useMemo(() => tokenizeDictionaryText(text), [text]);

  // 2. Group tokens into sentences (split on . ! ? ; :) for natural prosody
  //    Each sentence carries: spoken text, the words inside it (with commaAfter flag)
  const sentences = useMemo(() => {
    const result = [];
    let curSpoken = '';
    let curWords = [];
    let lastWordIdx = -1; // index in curWords of the last added word

    function flush() {
      if (curWords.length > 0) {
        result.push({ spokenText: curSpoken.trim(), words: curWords });
      }
      curSpoken = '';
      curWords = [];
      lastWordIdx = -1;
    }

    for (let i = 0; i < tokens.length; i++) {
      const tok = tokens[i];
      if (!tok.isWord && curWords.length === 0 && /^\s+$/.test(tok.text)) {
        continue;
      }
      const localStart = curSpoken.length;
      curSpoken += tok.text;
      if (tok.isWord) {
        curWords.push({
          tokenIdx: i,
          text: tok.text,
          charStart: localStart,
          charEnd: localStart + tok.text.length,
          commaAfter: false,
        });
        lastWordIdx = curWords.length - 1;
      } else {
        // Mark trailing comma on the previous word (for pause estimation)
        if (/,/.test(tok.text) && lastWordIdx >= 0) {
          curWords[lastWordIdx].commaAfter = true;
        }
        // Sentence-ending punctuation flushes the current sentence
        if (/[.!?;:]/.test(tok.text)) {
          flush();
        }
      }
    }
    flush();
    return result;
  }, [tokens]);

  const [activeWordIdx, setActiveWordIdx] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const wordRefs = React.useRef([]);
  const timersRef = React.useRef([]);
  const stopRef = React.useRef(false);

  // Calibrated speech rate — milliseconds per character.
  // Starts on the slow side (110 ms/char ≈ 9 chars/sec) so the first sentence's
  // highlights err BEHIND the voice rather than running ahead.
  // After each sentence, this gets calibrated from the actual measured duration.
  const msPerCharRef = React.useRef(110);

  function clearTimers() {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }

  function handlePlay(e) {
    e.stopPropagation();

    if (typeof window === 'undefined' || !window.speechSynthesis) {
      showAppMessage('Tu navegador no soporta lectura en voz alta.', {
        title: 'Audio no disponible',
        tone: 'warning',
      });
      return;
    }
    // Critical for mobile: warm up audio engine synchronously inside the click
    warmupAudio();

    if (playing) {
      stopRef.current = true;
      stopAllAudio();
      clearTimers();
      setPlaying(false);
      setActiveWordIdx(-1);
      return;
    }

    if (sentences.length === 0) return;

    stopAllAudio();
    clearTimers();
    stopRef.current = false;
    setPlaying(true);
    msPerCharRef.current = 110; // reset calibration each play

    let sentenceIdx = 0;

    function speakSentence() {
      if (stopRef.current) return;
      if (sentenceIdx >= sentences.length) {
        setPlaying(false);
        setActiveWordIdx(-1);
        return;
      }

      const sentence = sentences[sentenceIdx];
      if (!sentence || sentence.words.length === 0) {
        sentenceIdx++;
        speakSentence();
        return;
      }

      const utt = new SpeechSynthesisUtterance(sentence.spokenText);
      const v = getSpanishVoice();
      if (v) utt.voice = v;
      utt.lang = v?.lang || 'es-ES';
      utt.rate = getAudioRate();
      utt.pitch = 1.0;

      let onstartFired = false;
      let onendHandled = false;
      let boundarySeen = false;
      let fallbackScheduled = false;
      let utteranceStartTime = 0;
      // Constants used in BOTH scheduling and calibration — they must match
      const INTER_WORD_MS = 30;
      const COMMA_PAUSE_MS = 200;

      function findBoundaryWord(charIndex) {
        const pos = Math.max(0, Number(charIndex) || 0);
        let match = sentence.words[0];
        for (const word of sentence.words) {
          if (word.charStart <= pos + 1) {
            match = word;
          } else {
            break;
          }
        }
        return match;
      }

      function scheduleEstimatedHighlights() {
        if (fallbackScheduled || boundarySeen || stopRef.current) return;
        fallbackScheduled = true;
        let elapsed = 0;
        for (let wi = 0; wi < sentence.words.length; wi++) {
          const word = sentence.words[wi];
          const myDelay = elapsed;
          const t = setTimeout(() => {
            if (!stopRef.current && !boundarySeen) setActiveWordIdx(word.tokenIdx);
          }, myDelay);
          timersRef.current.push(t);
          elapsed += word.text.length * msPerCharRef.current + INTER_WORD_MS;
          if (word.commaAfter) elapsed += COMMA_PAUSE_MS;
        }
      }

      utt.onstart = () => {
        if (onstartFired) return;
        onstartFired = true;
        utteranceStartTime = performance.now();
        const fallback = setTimeout(scheduleEstimatedHighlights, 350);
        timersRef.current.push(fallback);
      };

      utt.onboundary = (event) => {
        if (stopRef.current || typeof event.charIndex !== 'number') return;
        const word = findBoundaryWord(event.charIndex);
        if (!word) return;
        boundarySeen = true;
        setActiveWordIdx(word.tokenIdx);
      };

      // Fallback: if onstart never fires (some engines skip it), estimate after 500 ms.
      const onstartFallback = setTimeout(() => {
        if (!onstartFired && !stopRef.current) {
          onstartFired = true;
          utteranceStartTime = performance.now();
          scheduleEstimatedHighlights();
        }
      }, 500);
      timersRef.current.push(onstartFallback);

      function handleSentenceEnd() {
        if (onendHandled) return;
        onendHandled = true;
        if (stopRef.current) return;

        // Calibrate msPerChar from the actual measured duration of this sentence.
        // Strip out our estimated overhead (inter-word gaps + comma pauses) to get
        // pure speech time, then divide by total word characters.
        if (utteranceStartTime > 0) {
          const actualMs = performance.now() - utteranceStartTime;
          const totalWordChars = sentence.words.reduce((s, w) => s + w.text.length, 0);
          const commaCount = sentence.words.filter(w => w.commaAfter).length;
          const overheadMs = sentence.words.length * INTER_WORD_MS + commaCount * COMMA_PAUSE_MS;
          const speechMs = Math.max(100, actualMs - overheadMs);
          if (totalWordChars > 0) {
            const measured = speechMs / totalWordChars;
            // Sanity: ignore wildly improbable values (e.g., utterance was cancelled)
            if (measured >= 40 && measured <= 300) {
              // Light EMA smoothing — 60% new, 40% old — to absorb noise from short sentences
              msPerCharRef.current = measured * 0.6 + msPerCharRef.current * 0.4;
            }
          }
        }

        // Drop any unfired highlight timers for this sentence
        clearTimers();

        sentenceIdx++;
        // Tiny gap between sentences — the engine adds its own ~50–100ms gap too
        const gapTimer = setTimeout(speakSentence, 30);
        timersRef.current.push(gapTimer);
      }

      utt.onend = handleSentenceEnd;
      utt.onerror = handleSentenceEnd;

      // Hard safety: if onend never fires, force-advance after a generous bound
      const safetyMs = Math.max(5000, sentence.spokenText.length * 220);
      const safety = setTimeout(handleSentenceEnd, safetyMs);
      timersRef.current.push(safety);

      window.speechSynthesis.speak(utt);
    }

    speakSentence();
  }

  // Cleanup on unmount
  useEffect(() => {
    function handleGlobalStop() {
      stopRef.current = true;
      clearTimers();
      setPlaying(false);
      setActiveWordIdx(-1);
    }
    window.addEventListener?.('learn-spanish-audio-stop', handleGlobalStop);
    return () => {
      stopRef.current = true;
      clearTimers();
      window.removeEventListener?.('learn-spanish-audio-stop', handleGlobalStop);
      window.speechSynthesis?.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-scroll active word into view when it goes near the edge
  useEffect(() => {
    if (activeWordIdx < 0) return;
    const el = wordRefs.current[activeWordIdx];
    if (!el || typeof el.getBoundingClientRect !== 'function') return;
    const rect = el.getBoundingClientRect();
    const viewportH = window.innerHeight || document.documentElement.clientHeight;
    if (rect.bottom > viewportH - 100 || rect.top < 80) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeWordIdx]);

  if (typeof window !== 'undefined' && !window.speechSynthesis) {
    // Still render the paragraph with a button — but the button shows an alert when tapped
    return (
      <p className={paragraphClass}>
        <button
          className="speak-btn speak-btn-sm paragraph-speak"
          onClick={(e) => {
            e.stopPropagation();
            showAppMessage('Tu navegador no soporta lectura en voz alta.', {
              title: 'Audio no disponible',
              tone: 'warning',
            });
          }}
          aria-label="Audio not supported"
          title="Audio no disponible"
        >
          <Volume2 size={12} />
        </button>
        <InlineDictionaryText text={text} />
      </p>
    );
  }

  return (
    <p className={`${paragraphClass} karaoke-paragraph ${playing ? 'is-playing' : ''}`}>
      <button
        className={`speak-btn speak-btn-sm paragraph-speak ${playing ? 'playing' : ''}`}
        onClick={handlePlay}
        onPointerDown={e => e.stopPropagation()}
        aria-label={playing ? 'Stop' : 'Play audio with highlighting'}
        title={playing ? 'Detener' : 'Escuchar con resaltado'}
      >
        <Volume2 size={12} />
      </button>
      {tokens.map((tok, i) => {
        if (!tok.isWord) {
          return <span key={i} className="kt-space">{tok.text}</span>;
        }
        const isActive = i === activeWordIdx;
        return (
          <span
            key={i}
            ref={el => wordRefs.current[i] = el}
            className={`kt-word ${isActive ? 'kt-active' : ''}`}
            data-dict-word={tok.text}
          >
            {tok.text}
          </span>
        );
      })}
    </p>
  );
}

function SpeakBtn({ text, size = 'sm', className = '' }) {
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    function handleGlobalStop() { setPlaying(false); }
    window.addEventListener?.('learn-spanish-audio-stop', handleGlobalStop);
    return () => window.removeEventListener?.('learn-spanish-audio-stop', handleGlobalStop);
  }, []);

  function handleClick(e) {
    e.stopPropagation();
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      showAppMessage('Tu navegador no soporta lectura en voz alta.', {
        title: 'Audio no disponible',
        tone: 'warning',
      });
      return;
    }
    // Critical for mobile: must call speechSynthesis synchronously inside the
    // click handler to unlock the audio engine. Warmup primes it.
    warmupAudio();
    if (playing) {
      stopAllAudio();
      setPlaying(false);
      return;
    }
    stopAllAudio();
    setPlaying(true);
    speak(text, {
      onend: () => setPlaying(false),
      onerror: (e) => {
        setPlaying(false);
        if (e?.error && e.error !== 'canceled' && e.error !== 'interrupted') {
          showAppMessage(`Error al leer: ${e.error}. Asegurate de tener una voz en espanol instalada.`, {
            title: 'Audio necesita atencion',
            tone: 'warning',
          });
        }
      },
    });
  }
  return (
    <button
      className={`speak-btn speak-btn-${size} ${playing ? 'playing' : ''} ${className}`}
      onClick={handleClick}
      onPointerDown={e => e.stopPropagation()}
      aria-label={playing ? 'Stop' : 'Play audio'}
      title={playing ? 'Detener' : 'Escuchar'}
    >
      <Volume2 size={size === 'sm' ? 12 : 14} />
    </button>
  );
}

function AudioSettings({ settings, onChange }) {
  const [voices, setVoices] = useState(() => loadSpanishVoices());

  useEffect(() => {
    setAudioSettings(settings);
  }, [settings]);

  useEffect(() => {
    function refresh() {
      setVoices(loadSpanishVoices());
    }
    refresh();
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.addEventListener?.('voiceschanged', refresh);
      const t = setTimeout(refresh, 600);
      return () => {
        clearTimeout(t);
        window.speechSynthesis.removeEventListener?.('voiceschanged', refresh);
      };
    }
    return undefined;
  }, []);

  function update(patch) {
    const next = { ...settings, ...patch };
    setAudioSettings(next);
    onChange?.(next);
  }

  return (
    <div className="audio-settings" aria-label="Audio settings">
      <div className="audio-settings-label">
        <Headphones size={14} />
        Audio
      </div>
      <select
        className="audio-rate-select"
        value={String(settings.rate)}
        onChange={(e) => update({ rate: Number(e.target.value) })}
        aria-label="Audio speed"
      >
        <option value="0.7">0.70x</option>
        <option value="0.85">0.85x</option>
        <option value="1">1.00x</option>
        <option value="1.15">1.15x</option>
      </select>
      <select
        className="audio-voice-select"
        value={settings.voiceURI || ''}
        onChange={(e) => update({ voiceURI: e.target.value })}
        aria-label="Spanish voice"
      >
        <option value="">Voz espanola</option>
        {voices.map((voice) => (
          <option key={voice.voiceURI} value={voice.voiceURI}>
            {voice.name} ({voice.lang})
          </option>
        ))}
      </select>
    </div>
  );
}

function ExamplePair({ es, en, esClass = 'vu-ex-es', enClass = 'vu-ex-en' }) {
  const esLen = (es || '').length;
  const enLen = (en || '').length;
  // Strict: each side ≤ 18 chars, combined ≤ 36 chars
  const isShort = esLen <= 18 && enLen <= 18 && (esLen + enLen) <= 36;
  if (isShort) {
    return (
      <div className={`${esClass} inline-pair`}>
        <SpeakBtn text={es} />
        <InlineDictionaryText text={es} /> <span className={`${enClass} inline-en`}>({en})</span>
      </div>
    );
  }
  return (
    <>
      <div className={esClass}>
        <SpeakBtn text={es} />
        <InlineDictionaryText text={es} />
      </div>
      <div className={enClass}>{en}</div>
    </>
  );
}

export {
  AudioSettings,
  ExamplePair,
  InlineDictionaryText,
  KaraokeText,
  SpeakBtn,
  getAudioRate,
  getSpanishVoice,
  loadSpanishVoices,
  setAudioSettings,
  speak,
  stopAllAudio,
  warmupAudio,
};
