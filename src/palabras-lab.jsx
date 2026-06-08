import React, { useEffect, useMemo, useState } from 'react';
import { Bookmark, Sparkles } from 'lucide-react';
import { SpeakBtn, speak, warmupAudio } from './audio-text.jsx';
import { scheduleReview } from './learning.js';

export const PALABRAS_PROGRESS_KEY = 'palabras-progress-v1';

function palabraKey(groupId, entry) {
  return `${groupId}::${entry.rank}::${entry.spanish}`;
}

function getEntryGroupId(group, entry) {
  return entry.sourceGroupId || group.id;
}

function getEntryProgressKey(group, entry) {
  return palabraKey(getEntryGroupId(group, entry), entry);
}

export function normalizeVocabularyTerm(value) {
  return String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[¿?¡!.,;:()"']/g, '')
    .replace(/\s+/g, ' ')
    .replace(/^(el|la|los|las|un|una|unos|unas)\s+/, '')
    .trim();
}

const TOPIC_VOCABULARY_GROUPS = [
  {
    id: 'topic-work-professions',
    title: 'Trabajo y Profesiones',
    description: 'A focused work-life deck merged into the vocabulary bank without repeating existing entries.',
    terms: [
      { spanish: 'el trabajo', english: 'work, job' },
      { spanish: 'la oficina', english: 'office' },
      { spanish: 'el despacho', english: 'private office, study' },
      { spanish: 'la reunión', english: 'meeting' },
      { spanish: 'el cliente', english: 'client' },
      { spanish: 'el contrato', english: 'contract' },
      { spanish: 'el abogado', english: 'lawyer' },
      { spanish: 'el juez', english: 'judge' },
      { spanish: 'el tribunal', english: 'court' },
      { spanish: 'la demanda', english: 'lawsuit, claim' },
      { spanish: 'el sueldo', english: 'salary' },
      { spanish: 'el horario', english: 'schedule' },
      { spanish: 'el jefe', english: 'boss' },
      { spanish: 'el empleado', english: 'employee' },
      { spanish: 'la empresa', english: 'company' },
      { spanish: 'el negocio', english: 'business' },
      { spanish: 'el plazo', english: 'deadline, term' },
      { spanish: 'la firma', english: 'signature' },
    ],
  },
  {
    id: 'topic-emotions-feelings',
    title: 'Emociones y Sentimientos',
    description: 'A focused feelings deck merged into the vocabulary bank without repeating existing entries.',
    terms: [
      { spanish: 'la alegría', english: 'joy' },
      { spanish: 'la tristeza', english: 'sadness' },
      { spanish: 'el miedo', english: 'fear' },
      { spanish: 'la rabia', english: 'rage' },
      { spanish: 'el orgullo', english: 'pride' },
      { spanish: 'la vergüenza', english: 'shame' },
      { spanish: 'la culpa', english: 'guilt' },
      { spanish: 'el alivio', english: 'relief' },
      { spanish: 'la nostalgia', english: 'nostalgia' },
      { spanish: 'la añoranza', english: 'longing' },
      { spanish: 'el cariño', english: 'affection' },
      { spanish: 'el rencor', english: 'resentment' },
      { spanish: 'la esperanza', english: 'hope' },
      { spanish: 'la duda', english: 'doubt' },
      { spanish: 'la ilusión', english: 'excitement, hope' },
      { spanish: 'el desánimo', english: 'discouragement' },
    ],
  },
];

function buildTopicVocabularyGroups(baseGroups) {
  const entryByTerm = new Map();

  for (const group of baseGroups || []) {
    for (const entry of group.entries || []) {
      const key = normalizeVocabularyTerm(entry.spanish);
      if (!entryByTerm.has(key)) {
        entryByTerm.set(key, {
          ...entry,
          sourceGroupId: group.id,
          sourceGroupTitle: group.title,
        });
      }
    }
  }

  return TOPIC_VOCABULARY_GROUPS.map((topic) => {
    const seenTerms = new Set();
    const entries = topic.terms.map((term, index) => {
      const key = normalizeVocabularyTerm(term.spanish);
      if (seenTerms.has(key)) return null;
      seenTerms.add(key);

      const match = entryByTerm.get(key);
      const fallbackSpanish = term.spanish.replace(/^(el|la|los|las|un|una|unos|unas)\s+/i, '').trim();

      return {
        ...(match || {
          rank: `T${index + 1}`,
          spanish: fallbackSpanish,
          english: term.english,
          sourceGroupId: topic.id,
          sourceGroupTitle: topic.title,
        }),
        topicTerm: term.spanish,
        topicEnglish: term.english,
        topicOrder: index + 1,
      };
    }).filter(Boolean);

    return {
      id: topic.id,
      title: topic.title,
      description: topic.description,
      entries,
      isTopic: true,
    };
  });
}

function getDisplaySpanish(entry) {
  return entry.topicTerm || entry.spanish;
}

function getDisplayEnglish(entry) {
  return entry.topicEnglish || entry.english;
}

let _palabrasGroupsPromise = null;

export function loadPalabrasGroups() {
  if (!_palabrasGroupsPromise) {
    _palabrasGroupsPromise = import('./vocab-groups.json').then((module) => {
      const loadedGroups = module.default || [];
      return [...loadedGroups, ...buildTopicVocabularyGroups(loadedGroups)];
    });
  }
  return _palabrasGroupsPromise;
}

function clampInt(n, min, max) {
  return Math.max(min, Math.min(max, Math.round(n)));
}

function getPalabraProgressStats(groups, progress, now = Date.now()) {
  const stats = { total: 0, seen: 0, due: 0, mastered: 0, byGroup: {} };
  const countedProgressKeys = new Set();
  for (const group of groups || []) {
    const groupStats = { total: group.entries.length, seen: 0, due: 0, mastered: 0 };
    for (const entry of group.entries) {
      const progressKey = getEntryProgressKey(group, entry);
      const state = progress[progressKey];
      const alreadyCounted = countedProgressKeys.has(progressKey);

      if (!alreadyCounted) {
        countedProgressKeys.add(progressKey);
        stats.total++;
      }

      if (state?.seen) {
        groupStats.seen++;
        if (!alreadyCounted) stats.seen++;
        if (state.mastered) {
          groupStats.mastered++;
          if (!alreadyCounted) stats.mastered++;
        }
        if ((state.dueAt || 0) <= now) {
          groupStats.due++;
          if (!alreadyCounted) stats.due++;
        }
      }
    }
    stats.byGroup[group.id] = groupStats;
  }
  return stats;
}

function makePalabraExample(entry, groupId) {
  const word = entry.spanish.split(',')[0].trim();
  if (groupId === 'topic-work-professions') {
    return {
      es: `En mi trabajo uso "${word}" con frecuencia.`,
      en: `At work I use "${word}" often.`,
    };
  }
  if (groupId === 'topic-emotions-feelings') {
    return {
      es: `Hoy puedo nombrar "${word}" con calma.`,
      en: `Today I can name "${word}" calmly.`,
    };
  }
  if (groupId === 'function-words') {
    return {
      es: `Uso "${word}" para unir una idea con otra.`,
      en: `"${word}" helps connect one idea to another.`,
    };
  }
  if (/^to /.test(entry.english)) {
    return {
      es: `Hoy necesito ${word} en una frase clara.`,
      en: `Today I need "${word}" in a clear sentence.`,
    };
  }
  return {
    es: `Escribo "${word}" en mi cuaderno de espanol.`,
    en: `"${word}" means ${getDisplayEnglish(entry)}.`,
  };
}

export function PalabrasLab({ onSaveWord, savedWords = [], progress = {}, onProgressChange, onUpdateSavedWord }) {
  const [groups, setGroups] = useState(null);
  const [activeGroupId, setActiveGroupId] = useState('');
  const [query, setQuery] = useState('');
  const [cursor, setCursor] = useState(0);
  const [revealed, setRevealed] = useState({});
  const [showEnglish, setShowEnglish] = useState(false);
  const [dueOnly, setDueOnly] = useState(false);
  const [showBrowser, setShowBrowser] = useState(false);
  const [browserScrollTop, setBrowserScrollTop] = useState(0);
  const [listenMode, setListenMode] = useState(false);
  useEffect(() => {
    let alive = true;
    loadPalabrasGroups().then((mergedGroups) => {
      if (!alive) return;
      setGroups(mergedGroups);
      setActiveGroupId((current) => current || mergedGroups[0]?.id || '');
    });
    return () => { alive = false; };
  }, []);

  const isLoading = !groups;
  const activeGroup = groups?.find((g) => g.id === activeGroupId) || groups?.[0] || {
    id: 'loading',
    title: 'Cargando palabras',
    description: '',
    entries: [],
  };
  const filteredEntries = useMemo(() => {
    const q = normalizeVocabularyTerm(query);
    const base = q ? activeGroup.entries.filter((entry) => [
      entry.spanish,
      entry.english,
      entry.topicTerm,
      entry.topicEnglish,
      String(entry.rank),
    ].some((value) => normalizeVocabularyTerm(value || '').includes(q))) : activeGroup.entries;
    if (!dueOnly) return base;
    const now = Date.now();
    return base.filter((entry) => {
      const state = progress[getEntryProgressKey(activeGroup, entry)];
      return state?.seen && (state.dueAt || 0) <= now;
    });
  }, [activeGroup, query, dueOnly, progress]);
  const deckSize = 24;
  const deckStart = Math.min(cursor, Math.max(0, filteredEntries.length - 1));
  const deck = filteredEntries.slice(deckStart, deckStart + deckSize);
  const deckText = deck.map((entry) => getDisplaySpanish(entry)).join('. ');
  const progressStats = useMemo(() => getPalabraProgressStats(groups || [], progress), [groups, progress]);
  const activeStats = progressStats.byGroup[activeGroup.id] || { total: activeGroup.entries.length, seen: 0, due: 0, mastered: 0 };
  const rowHeight = 74;
  const browserHeight = 420;
  const browserStart = Math.max(0, Math.floor(browserScrollTop / rowHeight) - 4);
  const browserEnd = Math.min(filteredEntries.length, browserStart + Math.ceil(browserHeight / rowHeight) + 10);
  const browserRows = filteredEntries.slice(browserStart, browserEnd);

  useEffect(() => {
    setCursor(0);
    setRevealed({});
    setBrowserScrollTop(0);
  }, [activeGroupId, query, dueOnly]);

  if (isLoading) {
    return (
      <section className="block palabras-lab">
        <div className="palabras-empty">
          <Sparkles size={24} />
          <p>Cargando palabras...</p>
        </div>
      </section>
    );
  }

  function nextDeck() {
    setCursor((prev) => (prev + deckSize >= filteredEntries.length ? 0 : prev + deckSize));
    setRevealed({});
  }

  function surpriseDeck() {
    const maxStart = Math.max(0, filteredEntries.length - deckSize);
    setCursor(Math.floor(Math.random() * (maxStart + 1)));
    setRevealed({});
  }

  function toggleReveal(entry) {
    const key = `${activeGroup.id}-${entry.rank}-${entry.spanish}`;
    setRevealed((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function rateEntry(entry, rating) {
    const sourceGroupId = getEntryGroupId(activeGroup, entry);
    const key = palabraKey(sourceGroupId, entry);
    const review = scheduleReview(progress[key], rating);
    const next = {
      ...progress,
      [key]: {
        ...review,
        groupId: sourceGroupId,
        displayGroupId: activeGroup.id,
        topicId: activeGroup.isTopic ? activeGroup.id : undefined,
        spanish: getDisplaySpanish(entry),
        english: getDisplayEnglish(entry),
        rank: entry.rank,
      },
    };
    onProgressChange?.(next);
    setRevealed((prev) => ({ ...prev, [`${activeGroup.id}-${entry.rank}-${entry.spanish}`]: true }));
    const saved = savedWords.find((word) => normalizeVocabularyTerm(word.word) === normalizeVocabularyTerm(getDisplaySpanish(entry)));
    if (saved) {
      onUpdateSavedWord?.(saved.word, {
        review,
        difficult: rating === 'hard' || rating === 'again' ? true : saved.difficult,
      });
    } else if (rating === 'hard' || rating === 'again') {
      onSaveWord?.({
        word: getDisplaySpanish(entry),
        translation: getDisplayEnglish(entry),
        pos: activeGroup.isTopic ? `${activeGroup.title} topic` : activeGroup.title,
        extras: [`Rank ${entry.rank}`, activeGroup.description].filter(Boolean),
        tags: ['palabras', activeGroup.id, sourceGroupId, 'difficult'].filter(Boolean),
        review,
        difficult: true,
        savedAt: Date.now(),
      });
    }
  }

  function playActiveListening() {
    if (!deck.length) return;
    warmupAudio();
    if (listenMode) {
      window.speechSynthesis?.cancel();
      setListenMode(false);
      return;
    }
    const lines = deck.flatMap((entry) => {
      const example = makePalabraExample(entry, activeGroup.id);
      return [getDisplaySpanish(entry), example.es, getDisplaySpanish(entry)];
    });
    setListenMode(true);
    speak(lines.join('. '), {
      onend: () => setListenMode(false),
      onerror: () => setListenMode(false),
    });
  }

  function saveEntry(entry) {
    const sourceGroupId = getEntryGroupId(activeGroup, entry);
    const sourceLabel = activeGroup.isTopic && entry.sourceGroupTitle ? `Source ${entry.sourceGroupTitle}` : null;
    onSaveWord?.({
      word: getDisplaySpanish(entry),
      translation: getDisplayEnglish(entry),
      pos: activeGroup.isTopic ? `${activeGroup.title} topic` : activeGroup.title,
      extras: [`Rank ${entry.rank}`, activeGroup.description, sourceLabel].filter(Boolean),
      tags: ['palabras', activeGroup.id, sourceGroupId].filter(Boolean),
      savedAt: Date.now(),
    });
  }

  return (
    <section className="block palabras-lab">
      <div className="palabras-toolbar">
        <div className="palabras-group-tabs" role="tablist" aria-label="Vocabulary groups">
          {groups.map((group) => (
            <button
              key={group.id}
              className={`palabras-tab ${group.id === activeGroup.id ? 'active' : ''}`}
              onClick={() => setActiveGroupId(group.id)}
              role="tab"
              aria-selected={group.id === activeGroup.id}
            >
              <span>{group.title.replace(/^Group /, 'G')}</span>
              <strong>{group.entries.length}</strong>
            </button>
          ))}
        </div>
        <label className="palabras-search">
          <span>Buscar</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="palabra, meaning, rank..."
          />
        </label>
      </div>

      <div className="palabras-stage">
        <div className="palabras-stage-copy">
          <div className="palabras-stage-kicker">{activeGroup.isTopic ? 'Tema integrado' : 'Grupo intacto'}</div>
          <h2>{activeGroup.title}</h2>
          <p>{activeGroup.description}</p>
        </div>
        <div className="palabras-stage-stats">
          <div>
            <span>Mostrando</span>
            <strong>{deck.length}</strong>
          </div>
          <div>
            <span>Filtradas</span>
            <strong>{filteredEntries.length}</strong>
          </div>
          <div>
            <span>Entrada</span>
            <strong>{filteredEntries.length ? deckStart + 1 : 0}</strong>
          </div>
          <div>
            <span>Vencidas</span>
            <strong>{activeStats.due}</strong>
          </div>
          <div>
            <span>Vistas</span>
            <strong>{activeStats.seen}</strong>
          </div>
          <div>
            <span>Dominadas</span>
            <strong>{activeStats.mastered}</strong>
          </div>
        </div>
      </div>

      <div className="palabras-actions">
        <SpeakBtn text={deckText} size="md" className="palabras-read-btn" />
        <button className={`palabras-action-btn ${listenMode ? 'active' : ''}`} onClick={playActiveListening}>
          {listenMode ? 'Escuchando...' : 'Escucha activa'}
        </button>
        <button className={`palabras-action-btn ${dueOnly ? 'active' : ''}`} onClick={() => setDueOnly((prev) => !prev)}>
          {dueOnly ? 'Todas' : 'Vencidas'}
        </button>
        <button className="palabras-action-btn" onClick={() => setShowEnglish((prev) => !prev)}>
          {showEnglish ? 'Ocultar ingles' : 'Mostrar ingles'}
        </button>
        <button className="palabras-action-btn" onClick={nextDeck}>Siguiente ronda</button>
        <button className="palabras-action-btn" onClick={surpriseDeck}>Barajar</button>
        <button className={`palabras-action-btn ${showBrowser ? 'active' : ''}`} onClick={() => setShowBrowser((prev) => !prev)}>
          Lista completa
        </button>
      </div>

      {deck.length ? (
        <div className="palabras-grid">
          {deck.map((entry) => {
            const key = `${activeGroup.id}-${entry.rank}-${entry.spanish}`;
            const isRevealed = showEnglish || revealed[key];
            const reviewState = progress[getEntryProgressKey(activeGroup, entry)];
            const example = makePalabraExample(entry, activeGroup.id);
            return (
              <article key={key} className={`palabra-card ${isRevealed ? 'revealed' : ''}`}>
                <button className="palabra-main" onClick={() => toggleReveal(entry)}>
                  <span className="palabra-rank">#{entry.rank}</span>
                  <span className="palabra-es">{getDisplaySpanish(entry)}</span>
                  <span className="palabra-en">{isRevealed ? getDisplayEnglish(entry) : '...'}</span>
                  {isRevealed && (
                    <span className="palabra-example">
                      <span>{example.es}</span>
                      <em>{example.en}</em>
                    </span>
                  )}
                </button>
                <div className="palabra-card-actions">
                  <SpeakBtn text={getDisplaySpanish(entry)} />
                  <button className="palabra-save" onClick={() => saveEntry(entry)}>
                    <Bookmark size={13} />
                    Memoria
                  </button>
                </div>
                <div className="palabra-review-actions">
                  {['again', 'hard', 'good', 'easy'].map((rating) => (
                    <button key={rating} onClick={() => rateEntry(entry, rating)}>
                      {rating === 'again' ? 'Again' : rating === 'hard' ? 'Hard' : rating === 'good' ? 'Good' : 'Easy'}
                    </button>
                  ))}
                </div>
                {reviewState?.seen && (
                  <div className="palabra-review-state">
                    {reviewState.mastered ? 'Dominada' : `Due ${new Date(reviewState.dueAt || Date.now()).toLocaleDateString()}`}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      ) : (
        <div className="palabras-empty">
          <Sparkles size={24} />
          <p>No words match this search in the selected group.</p>
        </div>
      )}

      {showBrowser && (
        <div className="palabras-browser">
          <div className="palabras-browser-head">
            <span>Lista virtual</span>
            <strong>{filteredEntries.length} palabras</strong>
          </div>
          <div
            className="palabras-virtual-list"
            style={{ height: browserHeight }}
            onScroll={(e) => setBrowserScrollTop(e.currentTarget.scrollTop)}
          >
            <div style={{ height: filteredEntries.length * rowHeight, position: 'relative' }}>
              <div style={{ transform: `translateY(${browserStart * rowHeight}px)` }}>
                {browserRows.map((entry) => {
                  const state = progress[getEntryProgressKey(activeGroup, entry)];
                  return (
                    <div key={`${entry.rank}-${entry.spanish}`} className="palabras-virtual-row" style={{ height: rowHeight }}>
                      <span className="palabra-rank">#{entry.rank}</span>
                      <strong>{getDisplaySpanish(entry)}</strong>
                      <span>{getDisplayEnglish(entry)}</span>
                      <button onClick={() => rateEntry(entry, 'good')}>{state?.seen ? 'Actualizar' : 'Visto'}</button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
