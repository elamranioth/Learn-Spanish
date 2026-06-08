import React, { useEffect, useMemo, useState } from 'react';
import { AlertTriangle, Bookmark, BookOpen, Check, Clock, Languages, Quote, Star, X } from 'lucide-react';
import { SpeakBtn } from './audio-text.jsx';
import { scheduleReview } from './learning.js';
import { exportMemoriaCsv, getMemoriaReviewStage, getMemoriaSummary, getMemoriaTags } from './memoria-utils.js';

export function MemoriaView({ savedWords, onRemove, onClear, onUpdateWord }) {
  const [flipped, setFlipped] = useState({});
  const [view, setView] = useState('grid'); // 'grid' | 'list'
  const [query, setQuery] = useState('');
  const [tagFilter, setTagFilter] = useState('ALL');
  const [focusFilter, setFocusFilter] = useState('ALL');
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewFlipped, setReviewFlipped] = useState(false);
  const [tagDraft, setTagDraft] = useState('');
  const [deleteRequest, setDeleteRequest] = useState(null);

  function toggleFlip(word) {
    setFlipped(prev => ({ ...prev, [word]: !prev[word] }));
  }

  function confirmRemoveWord(word) {
    setDeleteRequest({ type: 'word', word });
  }

  function confirmClearWords() {
    setDeleteRequest({ type: 'clear' });
  }

  function applyDeleteRequest() {
    if (deleteRequest?.type === 'word') onRemove?.(deleteRequest.word);
    if (deleteRequest?.type === 'clear') onClear?.();
    setDeleteRequest(null);
  }

  const sorted = [...savedWords].sort((a, b) => {
    const aDue = a.review?.seen && (a.review?.dueAt || 0) <= Date.now();
    const bDue = b.review?.seen && (b.review?.dueAt || 0) <= Date.now();
    if (aDue !== bDue) return aDue ? -1 : 1;
    return b.savedAt - a.savedAt;
  });
  const allTags = useMemo(() => {
    const tags = new Set();
    for (const entry of sorted) getMemoriaTags(entry).forEach((tag) => tags.add(tag));
    return [...tags].sort();
  }, [sorted]);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sorted.filter((entry) => {
      const tags = getMemoriaTags(entry);
      const isDue = entry.review?.seen && (entry.review?.dueAt || 0) <= Date.now();
      const matchesTag = tagFilter === 'ALL' || tags.includes(tagFilter);
      const matchesFocus =
        focusFilter === 'ALL' ||
        (focusFilter === 'due' && isDue) ||
        (focusFilter === 'difficult' && entry.difficult) ||
        (focusFilter === 'favorite' && entry.favorite) ||
        (focusFilter === 'mastered' && entry.review?.mastered);
      const matchesQuery = !q ||
        entry.word.toLowerCase().includes(q) ||
        (entry.translation || '').toLowerCase().includes(q) ||
        tags.some((tag) => tag.toLowerCase().includes(q));
      return matchesTag && matchesFocus && matchesQuery;
    });
  }, [sorted, query, tagFilter, focusFilter]);
  const reviewWord = filtered[reviewIndex % Math.max(1, filtered.length)];
  const memoriaSummary = useMemo(() => getMemoriaSummary(sorted), [sorted]);

  useEffect(() => {
    setReviewIndex(0);
    setReviewFlipped(false);
  }, [query, tagFilter, focusFilter, savedWords.length]);

  function addTag(word) {
    const tag = tagDraft.trim().toLowerCase().replace(/\s+/g, '-');
    if (!tag) return;
    const entry = savedWords.find((w) => w.word === word);
    const tags = Array.from(new Set([...(entry?.tags || []), tag]));
    onUpdateWord?.(word, { tags });
    setTagDraft('');
  }

  function toggleWordFlag(word, flag) {
    const entry = savedWords.find((w) => w.word === word);
    onUpdateWord?.(word, { [flag]: !entry?.[flag] });
  }

  function rateSavedWord(word, rating) {
    const entry = savedWords.find((w) => w.word === word);
    const review = scheduleReview(entry?.review, rating);
    onUpdateWord?.(word, {
      review,
      difficult: rating === 'hard' ? true : entry?.difficult,
    });
    nextReview();
  }

  function nextReview() {
    setReviewIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
    setReviewFlipped(false);
  }

  if (sorted.length === 0) {
    return (
      <div className="memoria-empty">
        <Bookmark size={36} className="memoria-empty-icon" />
        <h2 className="memoria-empty-title">Tu Memoria está vacía</h2>
        <p className="memoria-empty-text">Selecciona cualquier palabra en el libro, tradúcela, y pulsa <strong>Guardar en Memoria</strong>. La palabra aparecerá aquí.</p>
      </div>
    );
  }

  return (
    <article className="chapter-body memoria-view">
      <header className="chapter-header">
        <div className="chapter-meta">
          <span className="chapter-level">Mis palabras</span>
        </div>
        <h1 className="chapter-title">Memoria</h1>
        <p className="chapter-subtitle">{sorted.length} {sorted.length === 1 ? 'palabra guardada' : 'palabras guardadas'}</p>
        <p className="chapter-intro">
          {view === 'grid'
            ? 'Toca una tarjeta para voltearla y ver la traducción.'
            : 'Lista completa de tus palabras con traducción.'}
        </p>
      </header>

        <div className="memoria-summary-strip">
          <span><BookOpen size={13} /> {memoriaSummary.newCards} new</span>
          <span><Clock size={13} /> {memoriaSummary.due} due</span>
          <span><Quote size={13} /> {memoriaSummary.phrases} phrases</span>
          <span><Star size={13} /> {memoriaSummary.favorite} favoritas</span>
          <span><AlertTriangle size={13} /> {memoriaSummary.difficult} dificiles</span>
          <span><Check size={13} /> {memoriaSummary.mastered} dominadas</span>
        </div>
      <div className="memoria-focus-board" aria-label="Memoria focus filters">
        {[
          { key: 'ALL', label: 'All cards', detail: `${sorted.length} saved` },
          { key: 'due', label: 'Due now', detail: `${memoriaSummary.due} to review` },
          { key: 'difficult', label: 'Difficult', detail: `${memoriaSummary.difficult} need examples` },
          { key: 'favorite', label: 'Favorites', detail: `${memoriaSummary.favorite} important` },
          { key: 'mastered', label: 'Mastered', detail: `${memoriaSummary.mastered} stable` },
        ].map((item) => (
          <button
            key={item.key}
            className={focusFilter === item.key ? 'active' : ''}
            onClick={() => {
              setFocusFilter(item.key);
              if (item.key === 'due' || item.key === 'difficult') setView('review');
            }}
          >
            <strong>{item.label}</strong>
            <span>{item.detail}</span>
          </button>
        ))}
      </div>
      {/* View toggle */}
      <div className="memoria-view-toggle">
        <button
          className={`memoria-view-btn ${view === 'grid' ? 'active' : ''}`}
          onClick={() => setView('grid')}
        >
          Tarjetas
        </button>
        <button
          className={`memoria-view-btn ${view === 'list' ? 'active' : ''}`}
          onClick={() => setView('list')}
        >
          Lista
        </button>
        <button
          className={`memoria-view-btn ${view === 'review' ? 'active' : ''}`}
          onClick={() => setView('review')}
        >
          Repaso
        </button>
      </div>
      <div className="memoria-tools">
        <label>
          <span>Buscar</span>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="palabra, translation, tag..." />
        </label>
        <label>
          <span>Etiqueta</span>
          <select value={tagFilter} onChange={(e) => setTagFilter(e.target.value)}>
            <option value="ALL">Todas</option>
            {allTags.map((tag) => <option key={tag} value={tag}>{tag}</option>)}
          </select>
        </label>
        <button className="memoria-tool-btn" onClick={() => exportMemoriaCsv(filtered)}>Export CSV</button>
      </div>

      {view === 'review' ? (
        <div className="memoria-review">
          {reviewWord ? (
            <>
              <button className={`memoria-review-card ${reviewFlipped ? 'flipped' : ''}`} onClick={() => setReviewFlipped((prev) => !prev)}>
                <span className="memoria-review-count">{filtered.length ? `${reviewIndex + 1} / ${filtered.length}` : '0 / 0'}</span>
                <strong>{reviewFlipped ? reviewWord.translation || 'Sin traduccion' : reviewWord.word}</strong>
                <em>{reviewFlipped ? (reviewWord.context || reviewWord.contexts?.[0] || reviewWord.word) : 'toca para revelar'}</em>
                <span className={`memoria-stage ${getMemoriaReviewStage(reviewWord).key}`}>
                  {getMemoriaReviewStage(reviewWord).label}
                </span>
              </button>
              <div className="memoria-review-actions">
                <SpeakBtn text={reviewWord.word} size="md" />
                <input value={tagDraft} onChange={(e) => setTagDraft(e.target.value)} placeholder="add-tag" />
                <button onClick={() => addTag(reviewWord.word)}>Tag</button>
                <button onClick={() => toggleWordFlag(reviewWord.word, 'favorite')}>
                  <Star size={13} />
                  {reviewWord.favorite ? 'Unfavorite' : 'Favorite'}
                </button>
                <button onClick={() => toggleWordFlag(reviewWord.word, 'difficult')}>
                  <AlertTriangle size={13} />
                  {reviewWord.difficult ? 'Not hard' : 'Difficult'}
                </button>
                <button onClick={nextReview}>Siguiente</button>
              </div>
              <div className="memoria-srs-actions">
                {['again', 'hard', 'good', 'easy'].map((rating) => (
                  <button key={rating} onClick={() => rateSavedWord(reviewWord.word, rating)}>
                    {rating === 'again' ? 'Again' : rating === 'hard' ? 'Hard' : rating === 'good' ? 'Good' : 'Easy'}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="memoria-empty-text">No hay palabras para este filtro.</div>
          )}
        </div>
      ) : view === 'grid' ? (
        <div className="memoria-grid">
          {filtered.map((entry) => {
            const isFlipped = flipped[entry.word];
            const isPending = entry.pending;
            const tags = getMemoriaTags(entry);
            const stage = getMemoriaReviewStage(entry);
            return (
              <div
                key={entry.word}
                className={`memoria-card ${isFlipped ? 'flipped' : ''}`}
                onClick={() => toggleFlip(entry.word)}
              >
                <div className="memoria-card-inner">
                  {/* Front — Spanish + translation preview */}
                  <div className="memoria-face front">
                    <div className="memoria-word">{entry.word}</div>
                    {entry.pos && <div className="memoria-pos">{entry.pos}</div>}
                    {/* Translation preview shown on the front, below the word */}
                    {entry.translation ? (
                      <div className="memoria-front-translation">{entry.translation}</div>
                    ) : isPending ? (
                      <div className="memoria-front-pending">
                        <span className="dict-spinner" />
                        <span>traduciendo…</span>
                      </div>
                    ) : (
                      <div className="memoria-hint">toca para detalles</div>
                    )}
                    {tags.length > 0 && (
                      <div className="memoria-tags">
                        {tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}
                      </div>
                    )}
                    <div className={`memoria-stage ${stage.key}`}>
                      <strong>{stage.label}</strong>
                      <span>{stage.detail}</span>
                    </div>
                    <div className="memoria-label-actions">
                      <button
                        className={entry.favorite ? 'active' : ''}
                        onClick={(e) => { e.stopPropagation(); toggleWordFlag(entry.word, 'favorite'); }}
                        aria-label="Toggle favorite"
                      >
                        <Star size={12} />
                      </button>
                      <button
                        className={entry.difficult ? 'active hard' : ''}
                        onClick={(e) => { e.stopPropagation(); toggleWordFlag(entry.word, 'difficult'); }}
                        aria-label="Toggle difficult"
                      >
                        <AlertTriangle size={12} />
                      </button>
                    </div>
                  </div>
                  {/* Back — full details */}
                  <div className="memoria-face back">
                    {entry.translation ? (
                      <>
                        <div className="memoria-translation">{entry.translation}</div>
                      {entry.extras?.length > 0 && (
                        <div className="memoria-extras">
                          {entry.extras.slice(0, 3).map((e, i) => (
                            <span key={i} className="memoria-extra-tag">{e}</span>
                          ))}
                        </div>
                      )}
                      {(entry.context || entry.contexts?.[0]) && (
                        <div className="memoria-context">{entry.context || entry.contexts[0]}</div>
                      )}
                      </>
                    ) : (
                      <div className="memoria-no-translation">Sin traducción guardada</div>
                    )}
                    <a
                      className="memoria-sd-link"
                      href={`https://www.spanishdict.com/translate/${encodeURIComponent(entry.word)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                    >
                      SpanishDict →
                    </a>
                  </div>
                </div>
                <button
                  className="memoria-remove"
                  onClick={e => { e.stopPropagation(); confirmRemoveWord(entry.word); }}
                  aria-label={`Remove ${entry.word}`}
                >
                  <X size={13} />
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="memoria-list">
          {filtered.map((entry) => {
            const isPending = entry.pending;
            const tags = getMemoriaTags(entry);
            const stage = getMemoriaReviewStage(entry);
            return (
              <div key={entry.word} className="memoria-list-row">
                <div className="memoria-list-main">
                  <div className="memoria-list-es">
                    <span className="memoria-list-word">{entry.word}</span>
                    {entry.pos && <span className="memoria-list-pos">{entry.pos}</span>}
                  </div>
                  {entry.translation ? (
                    <div className="memoria-list-en">{entry.translation}</div>
                  ) : isPending ? (
                    <div className="memoria-list-en pending">
                      <span className="dict-spinner" />
                      traduciendo…
                    </div>
                  ) : (
                    <div className="memoria-list-en empty">Sin traducción</div>
                  )}
                  {entry.extras?.length > 0 && (
                    <div className="memoria-list-extras">
                      {entry.extras.slice(0, 4).map((e, i) => (
                        <span key={i} className="memoria-list-extra-tag">{e}</span>
                      ))}
                    </div>
                  )}
                  {tags.length > 0 && (
                    <div className="memoria-list-extras">
                      {tags.map((tag) => <span key={tag} className="memoria-list-extra-tag">{tag}</span>)}
                    </div>
                  )}
                  {(entry.context || entry.contexts?.[0]) && (
                    <div className="memoria-list-context">{entry.context || entry.contexts[0]}</div>
                  )}
                  <div className={`memoria-list-stage ${stage.key}`}>
                    {stage.label} - {stage.detail}
                  </div>
                </div>
                <div className="memoria-list-actions">
                  <button
                    className={`memoria-list-remove ${entry.favorite ? 'active-label' : ''}`}
                    onClick={() => toggleWordFlag(entry.word, 'favorite')}
                    aria-label="Toggle favorite"
                  >
                    <Star size={14} />
                  </button>
                  <button
                    className={`memoria-list-remove ${entry.difficult ? 'active-hard' : ''}`}
                    onClick={() => toggleWordFlag(entry.word, 'difficult')}
                    aria-label="Toggle difficult"
                  >
                    <AlertTriangle size={14} />
                  </button>
                  <a
                    className="memoria-list-sd"
                    href={`https://www.spanishdict.com/translate/${encodeURIComponent(entry.word)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open in SpanishDict"
                  >
                    <Languages size={14} />
                  </a>
                  <button
                    className="memoria-list-remove"
                    onClick={() => confirmRemoveWord(entry.word)}
                    aria-label={`Remove ${entry.word}`}
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {sorted.length > 0 && (
        <div className="memoria-actions">
          <button className="memoria-clear-btn" onClick={confirmClearWords}>
            Borrar todo
          </button>
        </div>
      )}

      {deleteRequest && (
        <div className="memoria-confirm-overlay" role="dialog" aria-modal="true" aria-label="Confirm Memoria deletion">
          <div className="memoria-confirm-card">
            <div className="memoria-confirm-kicker">Confirmar</div>
            <h3>
              {deleteRequest.type === 'word'
                ? `Remove "${deleteRequest.word}"?`
                : 'Remove all Memoria words?'}
            </h3>
            <p>
              {deleteRequest.type === 'word'
                ? 'This word will leave your saved cards, review queue, and list.'
                : 'This clears every saved word in Memoria for this browser.'}
            </p>
            <div className="memoria-confirm-actions">
              <button className="memoria-confirm-cancel" onClick={() => setDeleteRequest(null)}>Keep it</button>
              <button className="memoria-confirm-danger" onClick={applyDeleteRequest}>
                {deleteRequest.type === 'word' ? 'Remove word' : 'Clear all'}
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
