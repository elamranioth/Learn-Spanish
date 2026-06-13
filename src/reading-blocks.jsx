import React, { useEffect, useState } from 'react';
import { ChevronDown, Lightbulb, NotebookPen } from 'lucide-react';
import { ExamplePair, InlineDictionaryText, KaraokeText, SpeakBtn } from './audio-text.jsx';
import { getLessonStatusLabel } from './lesson-status.js';
import { LessonStatusControl } from './lesson-status-control.jsx';
import { ReadingPhraseSaver } from './reading-tools.jsx';
import { getNestedLessonKey } from './section-lessons.js';
import { LessonTable } from './verb-tables.jsx';

// =============================================================
// FOLDABLE GRAMMAR — list of collapsible grammar lessons
// Each lesson has sections with headings, text, tables, examples, tips
// =============================================================
function GrammarSection({ s }) {
  return (
    <div className="gl-section">
      {s.heading && <h3 className="gl-heading">{s.heading}</h3>}
      {s.text && <p className="gl-text"><InlineDictionaryText text={s.text} /></p>}
      {s.table && <LessonTable table={s.table} className="gl-table" />}
      {s.examples && (
        <ul className="gl-examples">
          {s.examples.map((ex, ei) => (
            <li key={ei}>
              <ExamplePair es={ex.es} en={ex.en} esClass="gl-ex-es" enClass="gl-ex-en" />
            </li>
          ))}
        </ul>
      )}
      {s.tip && (
        <aside className="gl-tip">
          <Lightbulb size={16} className="gl-tip-icon" />
          <p>{s.tip}</p>
        </aside>
      )}
      {s.takeaway && (
        <aside className="gl-takeaway">
          <div className="gl-takeaway-label"><NotebookPen size={12} /> Lo que te llevas</div>
          <p>{s.takeaway}</p>
        </aside>
      )}
    </div>
  );
}

// =============================================================
// FOLDABLE BIOGRAPHIES — two-level accordion
// Top level: biography card (open/close)
// Inside: level sections (A1, A2, B1, B2) stacked with badges
// =============================================================
const LEVEL_COLORS = {
  A1: { bg: '#EAF3DE', color: '#3B6D11', border: '#C0DD97' },
  A2: { bg: '#E6F1FB', color: '#185FA5', border: '#B5D4F4' },
  B1: { bg: '#FAEEDA', color: '#854F0B', border: '#FAC775' },
  B2: { bg: '#EEEDFE', color: '#534AB7', border: '#CECBF6' },
};

function BioBadge({ level }) {
  const c = LEVEL_COLORS[level] || {};
  return (
    <span className="bio-level-badge" style={{ background: c.bg, color: c.color, borderColor: c.border }}>
      {level}
    </span>
  );
}

function useAutoOpenNested(activeNestedTarget, type, setOpenIndex, itemRefs) {
  useEffect(() => {
    if (activeNestedTarget?.type !== type || typeof activeNestedTarget.index !== 'number') return;
    setOpenIndex(activeNestedTarget.index);
    window.setTimeout(() => {
      const el = itemRefs.current?.[activeNestedTarget.index];
      el?.scrollIntoView?.({ behavior: 'smooth', block: 'start' });
    }, 80);
  }, [activeNestedTarget, type, setOpenIndex, itemRefs]);
}

// =============================================================
// FOLDABLE POEMS — two-column stanza layout (ES | EN)
// Each poem folds open showing stanzas, vocab, and learning note
// =============================================================
export function FoldablePoemsBlock({ poems, chapterId, lessonStatuses = {}, onLessonStatusChange, activeNestedTarget, onSavePhrase }) {
  const [openIndex, setOpenIndex] = useState(null);
  const itemRefs = React.useRef([]);
  useAutoOpenNested(activeNestedTarget, 'poem', setOpenIndex, itemRefs);
  function toggle(i) { setOpenIndex(prev => prev === i ? null : i); }
  return (
    <section className="block foldable-poems">
      {poems.map((poem, i) => {
        const isOpen = openIndex === i;
        const statusKey = getNestedLessonKey(chapterId, 'poem', i, poem.title);
        return (
          <div key={i} ref={(el) => { itemRefs.current[i] = el; }} className={`poem-item ${isOpen ? 'open' : 'closed'}`}>
            <button className="poem-toggle" onClick={() => toggle(i)} aria-expanded={isOpen}>
              <div className="poem-toggle-inner">
                <span className="poem-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="poem-toggle-text">
                  <span className="poem-title-line">{poem.title}</span>
                  <span className="poem-attribution">{poem.attribution}</span>
                </div>
              </div>
              <div className="poem-toggle-right">
                <span className="poem-level-tag">{poem.level}</span>
                {lessonStatuses[statusKey] && (
                  <span className={`story-status-pill ${lessonStatuses[statusKey]}`}>
                    {getLessonStatusLabel(lessonStatuses[statusKey])}
                  </span>
                )}
                <ChevronDown size={18} className={`poem-chevron ${isOpen ? 'open' : ''}`} />
              </div>
            </button>
            {isOpen && (
              <div className="poem-body">
                <LessonStatusControl
                  status={lessonStatuses[statusKey]}
                  onChange={(status) => onLessonStatusChange?.(statusKey, status)}
                />
                <ReadingPhraseSaver chapterTitle={poem.title} onSavePhrase={onSavePhrase} />
                {poem.note && (
                  <p className="poem-intro-note">{poem.note}</p>
                )}
                {poem.opening && (
                  <blockquote className="poem-opening-quote">
                    <SpeakBtn text={poem.opening} size="md" className="poem-quote-speak" />
                    {poem.opening}
                  </blockquote>
                )}
                <div className="poem-tools">
                  <SpeakBtn text={poem.stanzas.map(s => s.es).join('. ')} size="md" />
                  <span className="poem-speak-label">Escuchar el poema</span>
                </div>
                <div className="poem-stanzas">
                  {poem.stanzas.map((s, si) => (
                    <div key={si} className="poem-stanza">
                      <div className="poem-stanza-num">{si + 1}</div>
                      <KaraokeText text={s.es} paragraphClass="poem-stanza-es" />
                      <div className="poem-stanza-en">{s.en}</div>
                    </div>
                  ))}
                </div>
                {poem.vocab && poem.vocab.length > 0 && (
                  <div className="poem-vocab-block">
                    <div className="poem-vocab-label">Vocabulario poético</div>
                    <div className="poem-vocab-grid">
                      {poem.vocab.map((v, vi) => (
                        <div key={vi} className="poem-vocab-row">
                          <span className="poem-vocab-es">{v.es}</span>
                          <span className="poem-vocab-dash">—</span>
                          <span className="poem-vocab-en">{v.en}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {poem.learningNote && (
                  <aside className="poem-learning-note">
                    <div className="poem-learning-label"><Lightbulb size={14} /> Nota de lectura</div>
                    <p>{poem.learningNote}</p>
                  </aside>
                )}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

export function FoldableSongsBlock({ songs, chapterId, lessonStatuses = {}, onLessonStatusChange, activeNestedTarget, onSavePhrase }) {
  const [openIndex, setOpenIndex] = useState(null);
  const itemRefs = React.useRef([]);
  useAutoOpenNested(activeNestedTarget, 'song', setOpenIndex, itemRefs);
  function toggle(i) { setOpenIndex(prev => prev === i ? null : i); }

  return (
    <section className="block foldable-poems foldable-songs">
      {songs.map((song, i) => {
        const isOpen = openIndex === i;
        const speakText = song.sections.map((section) => section.es).join('. ');
        const statusKey = getNestedLessonKey(chapterId, 'song', i, song.title);
        return (
          <div key={song.title} ref={(el) => { itemRefs.current[i] = el; }} className={`poem-item song-item ${isOpen ? 'open' : 'closed'}`}>
            <button className="poem-toggle" onClick={() => toggle(i)} aria-expanded={isOpen}>
              <div className="poem-toggle-inner">
                <span className="poem-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="poem-toggle-text">
                  <span className="poem-title-line">{song.title}</span>
                  <span className="poem-attribution">{song.attribution}</span>
                </div>
              </div>
              <div className="poem-toggle-right">
                <span className="poem-level-tag">{song.level}</span>
                {lessonStatuses[statusKey] && (
                  <span className={`story-status-pill ${lessonStatuses[statusKey]}`}>
                    {getLessonStatusLabel(lessonStatuses[statusKey])}
                  </span>
                )}
                <ChevronDown size={18} className={`poem-chevron ${isOpen ? 'open' : ''}`} />
              </div>
            </button>

            {isOpen && (
              <div className="poem-body song-body">
                <LessonStatusControl
                  status={lessonStatuses[statusKey]}
                  onChange={(status) => onLessonStatusChange?.(statusKey, status)}
                />
                <ReadingPhraseSaver chapterTitle={song.title} onSavePhrase={onSavePhrase} />
                <p className="poem-intro-note">{song.note}</p>
                <div className="poem-tools">
                  <SpeakBtn text={speakText} size="md" />
                  <span className="poem-speak-label">Escuchar secciones</span>
                </div>
                <div className="song-sections">
                  {song.sections.map((section, si) => (
                    <div key={section.label} className="song-section">
                      <div className="song-section-label">{String(si + 1).padStart(2, '0')} · {section.label}</div>
                      <div className="song-section-grid">
                        <KaraokeText text={section.es} paragraphClass="song-lyric-es" />
                        <p className="song-lyric-en">{section.en}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {song.vocab && song.vocab.length > 0 && (
                  <div className="poem-vocab-block song-vocab-block">
                    <div className="poem-vocab-label">Vocabulario de la canción</div>
                    <div className="poem-vocab-grid">
                      {song.vocab.map((v, vi) => (
                        <div key={vi} className="poem-vocab-row">
                          <span className="poem-vocab-es">{v.es}</span>
                          <span className="poem-vocab-dash">—</span>
                          <span className="poem-vocab-en">{v.en}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {song.learningNote && (
                  <aside className="poem-learning-note">
                    <div className="poem-learning-label"><Lightbulb size={14} /> Nota de canción</div>
                    <p>{song.learningNote}</p>
                  </aside>
                )}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

export function FoldableBiosBlock({ bios, chapterId, lessonStatuses = {}, onLessonStatusChange, activeNestedTarget, onSavePhrase }) {
  const [openIndex, setOpenIndex] = useState(null);
  const itemRefs = React.useRef([]);
  useAutoOpenNested(activeNestedTarget, 'bio', setOpenIndex, itemRefs);
  function toggle(i) { setOpenIndex(prev => prev === i ? null : i); }
  return (
    <section className="block foldable-bios">
      {bios.map((bio, i) => {
        const isOpen = openIndex === i;
        const statusKey = getNestedLessonKey(chapterId, 'bio', i, bio.title);
        return (
          <div key={i} ref={(el) => { itemRefs.current[i] = el; }} className={`bio-item ${isOpen ? 'open' : 'closed'}`}>
            <button className="bio-toggle" onClick={() => toggle(i)} aria-expanded={isOpen}>
              <div className="bio-toggle-left">
                <span className="bio-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="bio-toggle-text">
                  <span className="bio-name">{bio.title}</span>
                  <span className="bio-subtitle-line">{bio.subtitle}</span>
                  <span className="bio-dates">{bio.dates}</span>
                </div>
              </div>
              <div className="bio-toggle-right">
                <div className="bio-level-pills">
                  {[...new Set(bio.levels.map(l => l.level))].map(lv => (
                    <BioBadge key={lv} level={lv} />
                  ))}
                  {lessonStatuses[statusKey] && (
                    <span className={`story-status-pill ${lessonStatuses[statusKey]}`}>
                      {getLessonStatusLabel(lessonStatuses[statusKey])}
                    </span>
                  )}
                </div>
                <ChevronDown size={18} className={`bio-chevron ${isOpen ? 'open' : ''}`} />
              </div>
            </button>
            {isOpen && (
              <div className="bio-body">
                <LessonStatusControl
                  status={lessonStatuses[statusKey]}
                  onChange={(status) => onLessonStatusChange?.(statusKey, status)}
                />
                <ReadingPhraseSaver chapterTitle={bio.title} onSavePhrase={onSavePhrase} />
                {bio.levels.map((section, si) => (
                  <div key={si} className="bio-section">
                    <div className="bio-section-header">
                      <BioBadge level={section.level} />
                      <h3 className="bio-section-title">{section.heading}</h3>
                      <SpeakBtn text={section.paragraphs.join(' ')} size="md" className="bio-section-speak" />
                    </div>
                    {section.paragraphs.map((p, pi) => (
                      <KaraokeText key={pi} text={p} paragraphClass="bio-paragraph" />
                    ))}
                    {section.vocab && (
                      <div className="bio-vocab">
                        <span className="bio-vocab-label">Vocabulario</span>
                        {section.vocab}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

export function FoldableGrammarBlock({ lessons, chapterId, lessonStatuses = {}, onLessonStatusChange, activeNestedTarget }) {
  const [openIndex, setOpenIndex] = useState(null);
  const itemRefs = React.useRef([]);
  useAutoOpenNested(activeNestedTarget, 'grammar', setOpenIndex, itemRefs);
  function toggle(i) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }
  return (
    <section className="block foldable-grammar">
      {lessons.map((lesson, i) => {
        const isOpen = openIndex === i;
        const statusKey = getNestedLessonKey(chapterId, 'grammar', i, lesson.title);
        return (
          <div key={i} ref={(el) => { itemRefs.current[i] = el; }} className={`gl-item ${isOpen ? 'open' : 'closed'}`}>
            <button
              className="gl-toggle"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              touch-action="manipulation"
            >
              <span className="gl-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="gl-level-badge">{lesson.level}</span>
              <div className="gl-toggle-text">
                <span className="gl-title">{lesson.title}</span>
                <span className="gl-subtitle">{lesson.subtitle}</span>
              </div>
              {lessonStatuses[statusKey] && (
                <span className={`gl-status-pill ${lessonStatuses[statusKey]}`}>
                  {getLessonStatusLabel(lessonStatuses[statusKey])}
                </span>
              )}
              <ChevronDown size={18} className={`gl-chevron ${isOpen ? 'open' : ''}`} />
            </button>
            {isOpen && (
              <div className="gl-body">
                <LessonStatusControl
                  status={lessonStatuses[statusKey]}
                  onChange={(status) => onLessonStatusChange?.(statusKey, status)}
                />
                {lesson.intro && <p className="gl-intro">{lesson.intro}</p>}
                {lesson.sections.map((s, si) => (
                  <GrammarSection key={si} s={s} />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

// =============================================================
// FOLDABLE STORIES — list of collapsible reading texts
// Each story title is a button. Click to expand/collapse the body.
// =============================================================
export function FoldableStoriesBlock({ stories, chapterId, lessonStatuses = {}, onLessonStatusChange, activeNestedTarget, onSavePhrase }) {
  const [openIndex, setOpenIndex] = useState(null);
  const itemRefs = React.useRef([]);
  useAutoOpenNested(activeNestedTarget, 'story', setOpenIndex, itemRefs);
  function toggle(i) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }
  return (
    <section className="block foldable-stories">
      {stories.map((s, i) => {
        const isOpen = openIndex === i;
        const statusKey = getNestedLessonKey(chapterId, 'story', i, s.title);
        return (
          <div key={i} ref={(el) => { itemRefs.current[i] = el; }} className={`story-item ${isOpen ? 'open' : 'closed'}`}>
            <button
              className="bio-toggle story-toggle"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
            >
              <div className="bio-toggle-left">
                <span className="bio-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="bio-toggle-text">
                  <span className="bio-name">{s.title}</span>
                  <span className="bio-subtitle-line">{s.paragraphs.length} párrafos · lectura con audio</span>
                </div>
              </div>
              <div className="bio-toggle-right">
                <div className="bio-level-pills">
                  <BioBadge level={s.level} />
                  {lessonStatuses[statusKey] && (
                    <span className={`story-status-pill ${lessonStatuses[statusKey]}`}>
                      {getLessonStatusLabel(lessonStatuses[statusKey])}
                    </span>
                  )}
                </div>
                <ChevronDown size={18} className={`bio-chevron ${isOpen ? 'open' : ''}`} />
              </div>
            </button>
            {isOpen && (
              <div className="bio-body story-body">
                <div className="bio-section story-section">
                  <div className="bio-section-header">
                    <BioBadge level={s.level} />
                    <h3 className="bio-section-title">{s.title}</h3>
                    <SpeakBtn text={s.paragraphs.join(' ')} size="md" className="bio-section-speak" />
                  </div>
                  <LessonStatusControl
                    status={lessonStatuses[statusKey]}
                    onChange={(status) => onLessonStatusChange?.(statusKey, status)}
                  />
                  <ReadingPhraseSaver chapterTitle={s.title} onSavePhrase={onSavePhrase} />
                  {s.paragraphs.map((p, pi) => (
                    isStoryChapterHeading(p) ? (
                      <h4 key={pi} className="story-chapter-heading">
                        <InlineDictionaryText text={p} />
                      </h4>
                    ) : (
                      <KaraokeText key={pi} text={p} paragraphClass="bio-paragraph story-paragraph" />
                    )
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

function isStoryChapterHeading(text) {
  return /^(cap[ií]tulo|resumen final)\b/i.test(String(text || '').trim());
}

// =============================================================
// PALABRAS LAB - grouped vocabulary study deck
// =============================================================
