import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Bookmark, Languages, X } from 'lucide-react';
import { cleanDictionaryWord, findStoredDictionaryEntry as findStoredDictionaryEntrySmart, getDictionaryLookupVariants as getDictionaryLookupVariantsSmart, normalizeDictionaryExact as normalizeDictionaryExactSmart, normalizeDictionaryLookup as normalizeDictionaryLookupSmart, translateWord as translateWordSmart } from './spanish-dictionary.js';

export function DictionaryPopup({ savedWords, onSave, onRemove, loadPalabrasGroups }) {
  const [popup, setPopup] = useState(null);
  const [vocabularyGroups, setVocabularyGroups] = useState([]);
  const [popupLayout, setPopupLayout] = useState(null);
  const popupRef = React.useRef(null);
  const savedWordsRef = React.useRef(savedWords);
  const vocabularyGroupsRef = React.useRef(vocabularyGroups);

  const cleanWord = cleanDictionaryWord;
  const translate = translateWordSmart;
  const loadVocabularyGroups = loadPalabrasGroups || (() => Promise.resolve([]));

  function findSentenceContext(text, word) {
    const raw = String(text || '').replace(/\s+/g, ' ').trim();
    const clean = cleanWord(word);
    if (!raw || !clean) return '';
    const sentences = raw.match(/[^.!?Â¡Â¿]+[.!?]?/g) || [raw];
    const match = sentences.find((sentence) => cleanWord(sentence).includes(clean));
    return (match || raw).trim().slice(0, 220);
  }

  function getNodeContext(node, word) {
    const container = node?.closest?.('.reading-paragraph, .lesson-text, .gl-text, .bio-paragraph, .poem-stanza-es, .song-lyric-es, .lesson-ex-es, .gl-ex-es, .example-es, .phrase-es, .vocab-es, article, section');
    return findSentenceContext(container?.innerText || container?.textContent || node?.textContent || '', word);
  }

  // --- Two-stage flow: selection shows a floating Translate button.
  //     Tapping the button opens the full popup. This prevents conflicts with
  //     the BOOX system text-selection menu and lets the user dismiss easily.
  const [floatingBtn, setFloatingBtn] = useState(null); // {word, x, y}

  useEffect(() => {
    savedWordsRef.current = savedWords;
  }, [savedWords]);

  useEffect(() => {
    vocabularyGroupsRef.current = vocabularyGroups;
  }, [vocabularyGroups]);

  useEffect(() => {
    let alive = true;
    loadVocabularyGroups().then((loadedGroups) => {
      if (!alive) return;
      setVocabularyGroups(loadedGroups);
    }).catch(() => {
      if (alive) setVocabularyGroups([]);
    });
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    let lastSelection = '';

    async function openPopupForWord(word, x, y, context = '') {
      const clean = cleanWord(word);
      if (!clean || clean.length < 2) return;
      setFloatingBtn(null);
      let stored = findStoredDictionaryEntrySmart(clean, savedWordsRef.current, vocabularyGroupsRef.current);
      if (!stored && vocabularyGroupsRef.current.length === 0) {
        try {
          const loadedGroups = await loadVocabularyGroups();
          vocabularyGroupsRef.current = loadedGroups;
          setVocabularyGroups(loadedGroups);
          stored = findStoredDictionaryEntrySmart(clean, savedWordsRef.current, loadedGroups);
        } catch (_) {}
      }
      if (stored) {
        setPopup({
          word: stored.matchedWord || clean,
          x,
          y,
          context,
          loading: false,
          result: stored,
          error: false,
        });
        return;
      }

      setPopup({ word: clean, x, y, context, loading: true, result: null, error: false });
      try {
        const result = await translate(clean);
        setPopup(prev => prev && prev.word === clean ? { ...prev, loading: false, result, error: !result } : prev);
      } catch (_) {
        setPopup(prev => prev && prev.word === clean ? { ...prev, loading: false, error: true } : prev);
      }
    }

    function handleDictionaryWordClick(e) {
      const target = e.target.closest && e.target.closest('[data-dict-word]');
      if (!target) return;
      const word = cleanWord(target.dataset.dictWord || target.textContent || '');
      if (!word || word.length < 2) return;
      const selection = window.getSelection?.();
      if (selection && !selection.isCollapsed && cleanWord(selection.toString()).length > 1) return;
      e.stopPropagation();
      const rect = target.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.bottom + 10;
      openPopupForWord(word, x, y, getNodeContext(target, word));
    }

    function handleSelectionChange() {
      // Debounce — wait until selection is stable
      clearTimeout(handleSelectionChange._t);
      handleSelectionChange._t = setTimeout(() => {
        const sel = window.getSelection();
        const raw = sel?.toString() || '';
        const word = cleanWord(raw);

        if (!word || word.length < 2 || word.split(/\s+/).length > 3) {
          if (lastSelection) setFloatingBtn(null);
          lastSelection = '';
          return;
        }
        if (word === lastSelection) return;
        lastSelection = word;

        let x = window.innerWidth / 2, y = 120;
        try {
          const range = sel.getRangeAt(0);
          const rect = range.getBoundingClientRect();
          x = rect.left + rect.width / 2;
          y = rect.top - 6; // float ABOVE the selection so the button is reachable
        } catch (_) {}

        // Keep button on-screen
        const BTN_W = 96;
        x = Math.max(BTN_W / 2 + 8, Math.min(x, window.innerWidth - BTN_W / 2 - 8));
        if (y < 50) y = 50;

        let context = '';
        try {
          const range = sel.getRangeAt(0);
          const node = range.commonAncestorContainer?.nodeType === 1 ? range.commonAncestorContainer : range.commonAncestorContainer?.parentElement;
          context = getNodeContext(node, word);
        } catch (_) {}

        setFloatingBtn({ word, x, y, context });
      }, 200);
    }

    function handleOutsideClick(e) {
      // If the user taps somewhere outside the popup AND outside the button,
      // dismiss everything.
      const insidePopup = popupRef.current && popupRef.current.contains(e.target);
      const insideBtn = e.target.closest && e.target.closest('.dict-floating-btn');
      const insideWord = e.target.closest && e.target.closest('[data-dict-word]');
      if (!insidePopup && !insideBtn && !insideWord) {
        setPopup(null);
        setFloatingBtn(null);
        lastSelection = '';
      }
    }

    // Expose openPopupForWord on the popup container so the floating button can call it
    window.__bookOpenPopup = openPopupForWord;

    document.addEventListener('selectionchange', handleSelectionChange);
    document.addEventListener('pointerup', handleDictionaryWordClick);
    document.addEventListener('pointerdown', handleOutsideClick);
    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
      document.removeEventListener('pointerup', handleDictionaryWordClick);
      document.removeEventListener('pointerdown', handleOutsideClick);
      delete window.__bookOpenPopup;
    };
  }, []);

  useLayoutEffect(() => {
    if (!popup || !popupRef.current) {
      setPopupLayout(null);
      return undefined;
    }

    function placePopup() {
      if (!popupRef.current) return;
      const margin = 10;
      const viewport = window.visualViewport;
      const viewportWidth = Math.round(viewport?.width || window.innerWidth || 0);
      const viewportHeight = Math.round(viewport?.height || window.innerHeight || 0);
      const viewportLeft = Math.round(viewport?.offsetLeft || 0);
      const viewportTop = Math.round(viewport?.offsetTop || 0);
      if (!viewportWidth || !viewportHeight) return;

      const rect = popupRef.current.getBoundingClientRect();
      const popupWidth = Math.ceil(rect.width || Math.min(320, viewportWidth - margin * 2));
      const popupHeight = Math.ceil(rect.height || 220);
      const anchorX = popup.x || viewportWidth / 2;
      const anchorY = popup.y || margin + 20;

      let left = anchorX - popupWidth / 2;
      left = Math.max(viewportLeft + margin, Math.min(left, viewportLeft + viewportWidth - popupWidth - margin));

      const spaceBelow = viewportTop + viewportHeight - anchorY - margin;
      const spaceAbove = anchorY - viewportTop - margin;

      let top;
      if (spaceBelow >= popupHeight || spaceBelow >= spaceAbove) {
        top = anchorY + 8;
      } else {
        top = anchorY - popupHeight - 10;
      }
      top = Math.max(viewportTop + margin, Math.min(top, viewportTop + viewportHeight - popupHeight - margin));

      setPopupLayout((prev) => {
        const nextLeft = Math.round(left);
        const nextTop = Math.round(top);
        if (prev && prev.left === nextLeft && prev.top === nextTop) return prev;
        return { left: nextLeft, top: nextTop };
      });
    }

    const raf1 = window.requestAnimationFrame(placePopup);
    const raf2 = window.requestAnimationFrame(placePopup);
    const viewport = window.visualViewport;
    window.addEventListener('resize', placePopup);
    window.addEventListener('orientationchange', placePopup);
    viewport?.addEventListener?.('resize', placePopup);
    viewport?.addEventListener?.('scroll', placePopup);

    return () => {
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
      window.removeEventListener('resize', placePopup);
      window.removeEventListener('orientationchange', placePopup);
      viewport?.removeEventListener?.('resize', placePopup);
      viewport?.removeEventListener?.('scroll', placePopup);
    };
  }, [popup]);

  if (!popup && !floatingBtn) return null;

  // Render the floating Translate button when there's a selection but no popup
  if (!popup && floatingBtn) {
    return (
      <button
        className="dict-floating-btn"
        style={{
          left: floatingBtn.x,
          top: floatingBtn.y,
        }}
        onClick={(e) => {
          e.stopPropagation();
          if (window.__bookOpenPopup) {
            window.__bookOpenPopup(floatingBtn.word, floatingBtn.x, floatingBtn.y + 50, floatingBtn.context);
          }
        }}
        onPointerDown={(e) => e.stopPropagation()}
      >
        <Languages size={14} />
        <span>Traducir</span>
      </button>
    );
  }

  const popupVariants = new Set(getDictionaryLookupVariantsSmart(popup.word));
  const popupExact = normalizeDictionaryExactSmart(popup.word);
  const savedMatch = savedWords.find(w => normalizeDictionaryExactSmart(w.word) === popupExact) ||
    savedWords.find(w => popupVariants.has(normalizeDictionaryLookupSmart(w.word)));
  const isSaved = Boolean(savedMatch);

  function handleSaveToggle() {
    if (isSaved) {
      onRemove(savedMatch.word);
    } else {
      // Allow saving even without a translation — the SpanishDict link still works
      onSave({
        word: popup.word,
        translation: popup.result?.main || '',
        pos: popup.result?.pos || '',
        extras: popup.result?.extras || [],
        context: popup.context || '',
        contexts: popup.context ? [popup.context] : [],
        savedAt: Date.now(),
      });
    }
  }

  return (
    <div
      ref={popupRef}
      className="dict-popup"
      style={{
        left: popupLayout?.left ?? popup.x ?? 12,
        top: popupLayout?.top ?? popup.y ?? 12,
        bottom: 'auto',
        visibility: popupLayout ? 'visible' : 'hidden',
      }}
    >
      {/* Header */}
      <div className="dict-header">
        <span className="dict-word">{popup.word}</span>
        <button className="dict-close-btn" onClick={() => setPopup(null)} aria-label="Close"><X size={14} /></button>
      </div>

      {/* Body */}
      <div className="dict-body">
        {popup.loading && (
          <div className="dict-loading"><span className="dict-spinner" /><span>Looking up…</span></div>
        )}
        {!popup.loading && popup.error && (
          <div className="dict-fallback">
            <div className="dict-not-found">No translation available offline</div>
            <a
              className="dict-fallback-link"
              href={`https://www.spanishdict.com/translate/${encodeURIComponent(popup.word)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Languages size={14} />
              Buscar "{popup.word}" en SpanishDict
            </a>
          </div>
        )}
        {!popup.loading && popup.result && (
          <>
            <div className={`dict-main-translation ${popup.result.isDefinition ? 'is-definition' : ''}`}>
              {popup.result.main}
            </div>
            {popup.context && (
              <div className="dict-context">
                <span>Contexto</span>
                <em>{popup.context}</em>
              </div>
            )}
            {popup.result.extras?.length > 0 && (
              <div className="dict-extras">
                {popup.result.extras.map((e, i) => <span key={i} className="dict-extra-tag">{e}</span>)}
              </div>
            )}
            {popup.result.meanings?.length > 0 && (
              <ul className="dict-meanings">
                {popup.result.meanings.map((m, i) => (
                  <li key={i} className="dict-meaning-item">{m}</li>
                ))}
              </ul>
            )}
            {popup.result.examples?.length > 0 && (
              <div className="dict-examples">
                <div className="dict-examples-label">Ejemplos</div>
                {popup.result.examples.map((ex, i) => (
                  <div key={i} className="dict-example">
                    <div className="dict-example-es">{ex.es}</div>
                    <div className="dict-example-en">{ex.en}</div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Save button — always available once loading is done */}
      {!popup.loading && (
        <button
          className={`dict-save-btn ${isSaved ? 'saved' : ''}`}
          onClick={handleSaveToggle}
          aria-label={isSaved ? 'Remove from Memoria' : 'Save to Memoria'}
        >
          <Bookmark size={14} className={isSaved ? 'filled' : ''} />
          {isSaved
            ? 'Guardado en Memoria ✓'
            : popup.result
              ? 'Guardar en Memoria'
              : 'Guardar palabra'}
        </button>
      )}

      {/* Footer */}
      <div className="dict-footer">
        <a className="dict-sd-link" href={`https://www.spanishdict.com/translate/${encodeURIComponent(popup.word)}`} target="_blank" rel="noopener noreferrer">
          <Languages size={12} />Ver en SpanishDict
        </a>
      </div>
    </div>
  );
}
