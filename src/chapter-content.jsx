import React, { useState } from 'react';
import { ChevronRight, Languages, Lightbulb, NotebookPen, Sparkles } from 'lucide-react';
import { ExamplePair, InlineDictionaryText, KaraokeText, SpeakBtn } from './audio-text.jsx';
import { LessonMasteryQuiz } from './lesson-mastery.jsx';
import { LessonStatusControl } from './lesson-status-control.jsx';
import { PalabrasLab } from './palabras-lab.jsx';
import { ReadingPhraseSaver } from './reading-tools.jsx';
import {
  FoldableBiosBlock,
  FoldableGrammarBlock,
  FoldablePoemsBlock,
  FoldableSongsBlock,
  FoldableStoriesBlock,
} from './reading-blocks.jsx';
import { LessonTable, RenderForm, VerbTableBlock } from './verb-tables.jsx';

const ExpressionsLibraryBlock = React.lazy(() => import('./expressions-library-view.jsx').then((module) => ({ default: module.ExpressionsLibraryBlock })));
const PracticeHubBlock = React.lazy(() => import('./practice-hub.jsx').then((module) => ({ default: module.PracticeHubBlock })));

function LazyBlockFallback({ label }) {
  return (
    <section className="block lazy-loading-block">
      <div className="home-section-heading"><Sparkles size={16} /> {label}</div>
      <p className="lesson-text">Preparing this study tool...</p>
    </section>
  );
}

export function ChapterContent({ chapter, sectionId, section, activeNestedTarget, onOpenSection, onSaveWord, savedWords = [], onUpdateSavedWord, palabrasProgress, onPalabrasProgressChange, lessonStatuses = {}, onLessonStatusChange, practiceChapters = [], onPracticeAttempt, SectionIconComponent }) {
  const hasNestedLessonStatus = chapter.blocks.some((block) => (
    block.type === 'foldable-grammar' ||
    block.type === 'foldable-stories' ||
    block.type === 'foldable-bios' ||
    block.type === 'foldable-poems' ||
    block.type === 'foldable-songs'
  ));
  return (
    <article className="chapter-body">
      <header className="chapter-header">
        {section && (
          <div className="lesson-breadcrumb">
            <button type="button" onClick={() => onOpenSection?.(section)}>
              {section.label}
            </button>
            <ChevronRight size={14} />
            <span>{activeNestedTarget?.title || chapter.title}</span>
          </div>
        )}
        <div className="chapter-icon-row">
          {sectionId && (
            <div className="chapter-icon-wrap">
              {SectionIconComponent && <SectionIconComponent id={sectionId} size={22} />}
            </div>
          )}
          <div className="chapter-level-tag">
            {chapter.rank ? `Nº ${String(chapter.rank).padStart(2, '0')} · ` : ''}Nivel {chapter.level}
          </div>
        </div>
        <h1 className="chapter-title">{chapter.title}</h1>
        {chapter.subtitle && <p className="chapter-subtitle">{chapter.subtitle}</p>}
        {!hasNestedLessonStatus && (
          <LessonStatusControl
            status={lessonStatuses[chapter.id]}
            onChange={(status) => onLessonStatusChange?.(chapter.id, status)}
          />
        )}
        <div className="chapter-rule" />
      </header>

      {chapter.intro && <p className="chapter-intro drop-cap"><InlineDictionaryText text={chapter.intro} /></p>}

      {chapter.blocks.map((block, i) => {
        switch (block.type) {
          case 'tense-atlas':
            return <TenseAtlasBlock key={i} block={block} />;
          case 'indicative-hero':
            return <IndicativeHeroBlock key={i} block={block} />;
          case 'indicative-tense-cards':
            return <IndicativeTenseCardsBlock key={i} block={block} />;
          case 'participio-section':
            return <ParticipleSectionBlock key={i} block={block} />;
          case 'indicative-timeline':
            return <IndicativeTimelineBlock key={i} block={block} />;
          case 'indicative-reference':
            return <IndicativeReferenceBlock key={i} block={block} />;
          case 'conjugation':
            return (
              <section key={i} className="block">
                <h2 className="block-heading">{block.title}</h2>
                <div className="conjugation-grid">
                  {block.verbs.map((v, j) => (
                    <div key={j} className="conjugation-card">
                      <div className="conjugation-verb">{v.name}</div>
                      <ul className="conjugation-list">
                        {v.forms.map((f, k) => (
                          <li key={k}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            );
          case 'examples':
            return (
              <section key={i} className="block">
                <h2 className="block-heading">{block.title}</h2>
                <ul className="examples-list">
                  {block.pairs.map((p, j) => (
                    <li key={j} className="example-item">
                      <ExamplePair es={p.es} en={p.en} esClass="example-es" enClass="example-en" />
                    </li>
                  ))}
                </ul>
              </section>
            );
          case 'rule':
            return (
              <section key={i} className="block">
                <dl className="rule-list">
                  {block.items.map((it, j) => (
                    <div key={j} className="rule-row">
                      <dt>{it.label}</dt>
                      <dd>{it.value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            );
          case 'reading':
            return (
              <section key={i} className="block reading-block">
                <ReadingPhraseSaver chapterTitle={chapter.title} onSavePhrase={onSaveWord} />
                {block.paragraphs.map((p, j) => (
                  <KaraokeText key={j} text={p} paragraphClass="reading-paragraph" />
                ))}
              </section>
            );
          case 'lazy-loading':
            return (
              <section key={i} className="block lazy-loading-block">
                <div className="home-section-heading">
                  <Sparkles size={16} />
                  Loading lesson pack
                </div>
                <h2 className="lesson-heading">{block.heading}</h2>
                <p className="lesson-text">{block.text}</p>
              </section>
            );
          case 'foldable-poems':
            return (
              <FoldablePoemsBlock
                key={i}
                poems={block.poems}
                chapterId={chapter.id}
                lessonStatuses={lessonStatuses}
                onLessonStatusChange={onLessonStatusChange}
                activeNestedTarget={activeNestedTarget}
                onSavePhrase={onSaveWord}
              />
            );
          case 'foldable-songs':
            if (block.lazySongsKey && !block.songs?.length) {
              return (
                <section key={i} className="block lazy-loading-block">
                  <div className="home-section-heading"><Sparkles size={16} /> Loading canciones</div>
                  <p className="lesson-text">Preparing the songbook...</p>
                </section>
              );
            }
            return (
              <FoldableSongsBlock
                key={i}
                songs={block.songs}
                chapterId={chapter.id}
                lessonStatuses={lessonStatuses}
                onLessonStatusChange={onLessonStatusChange}
                activeNestedTarget={activeNestedTarget}
                onSavePhrase={onSaveWord}
              />
            );
          case 'foldable-bios':
            return (
              <FoldableBiosBlock
                key={i}
                bios={block.bios}
                chapterId={chapter.id}
                lessonStatuses={lessonStatuses}
                onLessonStatusChange={onLessonStatusChange}
                activeNestedTarget={activeNestedTarget}
                onSavePhrase={onSaveWord}
              />
            );
          case 'foldable-grammar':
            return (
              <FoldableGrammarBlock
                key={i}
                lessons={block.lessons}
                chapterId={chapter.id}
                lessonStatuses={lessonStatuses}
                onLessonStatusChange={onLessonStatusChange}
                activeNestedTarget={activeNestedTarget}
              />
            );
          case 'foldable-stories':
            return (
              <FoldableStoriesBlock
                key={i}
                stories={block.stories}
                chapterId={chapter.id}
                lessonStatuses={lessonStatuses}
                onLessonStatusChange={onLessonStatusChange}
                activeNestedTarget={activeNestedTarget}
                onSavePhrase={onSaveWord}
              />
            );
          case 'glossary':
            return (
              <section key={i} className="block">
                <h2 className="block-heading"><Languages size={16} className="inline-icon" /> Glosario</h2>
                <div className="glossary-grid">
                  {block.words.map((w, j) => (
                    <div key={j} className="glossary-row">
                      <span className="glossary-es">{w.es}</span>
                      <span className="glossary-dash">—</span>
                      <span className="glossary-en">{w.en}</span>
                    </div>
                  ))}
                </div>
              </section>
            );
          case 'vocab':
            return (
              <section key={i} className="block">
                <div className="vocab-grid">
                  {block.columns.map((w, j) => (
                    <div key={j} className="vocab-row">
                      <SpeakBtn text={w.es} />
                      <span className="vocab-es">{w.es}</span>
                      <span className="vocab-en">{w.en}</span>
                    </div>
                  ))}
                </div>
              </section>
            );
          case 'vocab-lab':
            return (
              <PalabrasLab
                key={i}
                onSaveWord={onSaveWord}
                savedWords={savedWords}
                progress={palabrasProgress}
                onProgressChange={onPalabrasProgressChange}
                onUpdateSavedWord={onUpdateSavedWord}
              />
            );
          case 'practice-hub':
            return (
              <React.Suspense fallback={<LazyBlockFallback label="Loading practice center" />}>
                <PracticeHubBlock
                  key={i}
                  chapter={chapter}
                  practiceChapters={practiceChapters}
                  lessonStatuses={lessonStatuses}
                  onLessonStatusChange={onLessonStatusChange}
                  onPracticeAttempt={onPracticeAttempt}
                />
              </React.Suspense>
            );
          case 'phraselist':
            return (
              <section key={i} className="block">
                <ul className="phrase-list">
                  {block.phrases.map((p, j) => (
                    <li key={j} className="phrase-item">
                      <span className="phrase-num">{String(j + 1).padStart(2, '0')}</span>
                      <div className="phrase-content">
                        <p className="phrase-es">
                          <SpeakBtn text={p.es} className="paragraph-speak" />
                          <InlineDictionaryText text={p.es} />
                        </p>
                        <p className="phrase-en">{p.en}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            );
          case 'expressions-library':
            if (block.lazyLibraryKey && !block.library?.groups) {
              return (
                <section key={i} className="block lazy-loading-block">
                  <div className="home-section-heading"><Sparkles size={16} /> Loading expresiones</div>
                  <p className="lesson-text">Preparing the expression library...</p>
                </section>
              );
            }
            return (
              <React.Suspense fallback={<LazyBlockFallback label="Loading expresiones" />}>
                <ExpressionsLibraryBlock key={i} library={block.library} />
              </React.Suspense>
            );
          case 'steps':
            return (
              <section key={i} className="block">
                <ol className="steps-list">
                  {block.steps.map((s, j) => (
                    <li key={j} className="step-item">
                      <div className="step-num">{j + 1}</div>
                      <div>
                        <h3 className="step-title">{s.title}</h3>
                        <p className="step-text">{s.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            );
          case 'big-takeaways':
            return (
              <section key={i} className="block">
                <div className="big-takeaways">
                  {block.items.map((it, j) => (
                    <div key={j} className="big-takeaway-card">
                      <div className="big-takeaway-num">{it.n}</div>
                      <h3 className="big-takeaway-title">{it.title}</h3>
                      <p className="big-takeaway-text">{it.text}</p>
                    </div>
                  ))}
                </div>
              </section>
            );
          case 'tip':
            return (
              <aside key={i} className="block tip-block">
                <Lightbulb size={18} className="tip-icon" />
                <p>{block.text}</p>
              </aside>
            );
          case 'takeaway':
            return (
              <aside key={i} className="block takeaway-block">
                <div className="takeaway-label"><NotebookPen size={14} /> Lo que te llevas</div>
                <p>{block.text}</p>
              </aside>
            );
          case 'verb-table':
            return <VerbTableBlock key={i} block={block} chapterTitle={chapter.title} />;
          case 'verb-uses':
            return (
              <section key={i} className="block verb-uses-block">
                {block.heading && <h2 className="verb-uses-heading">{block.heading}</h2>}
                {block.categories.map((cat, ci) => (
                  <div key={ci} className="vu-category">
                    <div className="vu-category-head">
                      <div className="vu-category-label">{cat.label}</div>
                      {cat.note && <div className="vu-category-note">{cat.note}</div>}
                    </div>
                    <div className="vu-senses">
                      {cat.senses.map((s, si) => (
                        <div key={si} className="vu-sense">
                          <div className="vu-sense-num">{s.n}</div>
                          <div className="vu-sense-body">
                            <div className="vu-sense-meaning">{s.meaning}</div>
                            {s.subnote && <div className="vu-sense-subnote">{s.subnote}</div>}
                            <ul className="vu-examples">
                              {s.examples.map((ex, ei) => (
                                <li key={ei}>
                                  <ExamplePair es={ex.es} en={ex.en} esClass="vu-ex-es" enClass="vu-ex-en" />
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            );
          case 'subjunctive-hero':
            return <SubjunctiveHeroBlock key={i} block={block} />;
          case 'golden-rule':
            return <GoldenRuleBlock key={i} block={block} />;
          case 'subjunctive-tense-cards':
            return <SubjunctiveTenseCardsBlock key={i} cards={block.cards} />;
          case 'trigger-grid':
            return <TriggerGridBlock key={i} block={block} />;
          case 'conditional-pattern':
            return <ConditionalPatternBlock key={i} block={block} />;
          case 'tips-grid':
            return <TipsGridBlock key={i} tips={block.tips} />;
          case 'choice-quiz':
            return null;
          case 'lesson-section':
            return (
              <section key={i} className="block lesson-section">
                {block.heading && <h2 className="lesson-heading">{block.heading}</h2>}
                {block.text && <p className="lesson-text"><InlineDictionaryText text={block.text} /></p>}
                {block.paragraphs && block.paragraphs.map((p, pi) => (
                  <p key={pi} className="lesson-text"><InlineDictionaryText text={p} /></p>
                ))}
                {block.table && <LessonTable table={block.table} />}
                {block.examples && (
                  <ul className="lesson-examples">
                    {block.examples.map((ex, ei) => (
                      <li key={ei}>
                        <ExamplePair es={ex.es} en={ex.en} esClass="lesson-ex-es" enClass="lesson-ex-en" />
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            );
          default:
            return null;
        }
      })}

      {!hasNestedLessonStatus && (
        <LessonMasteryQuiz
          chapter={chapter}
          status={lessonStatuses[chapter.id]}
          onStatusChange={(status) => onLessonStatusChange?.(chapter.id, status)}
          onPracticeAttempt={onPracticeAttempt}
        />
      )}
    </article>
  );
}

function TenseAtlasBlock({ block }) {
  return (
    <section className="block tense-atlas-block">
      {block.eras.map((era, eraIndex) => (
        <section key={era.id} className={`tense-era-section ${era.tone}`}>
          <header className="tense-era-header">
            <div className="tense-era-number">{String(eraIndex + 1).padStart(2, '0')}</div>
            <div>
              <span>{era.label}</span>
              <h3>{era.title}</h3>
              <p><InlineDictionaryText text={era.description} /></p>
            </div>
          </header>
          <div className="tense-atlas-cards">
            {era.tenses.map((tense, tenseIndex) => (
              <TenseAtlasCard
                key={tense.id}
                tense={tense}
                eraTone={era.tone}
                number={String(tenseIndex + 1).padStart(2, '0')}
              />
            ))}
          </div>
        </section>
      ))}

      {block.comparison && (
        <section className="tense-atlas-comparison">
          <div className="tense-atlas-comparison-copy">
            <span>Comparación esencial</span>
            <h3>{block.comparison.title}</h3>
            <p><InlineDictionaryText text={block.comparison.text} /></p>
            <div className="tense-atlas-example">
              <ExamplePair
                es={block.comparison.example.es}
                en={block.comparison.example.en}
                esClass="lesson-ex-es"
                enClass="lesson-ex-en"
              />
            </div>
          </div>
          <LessonTable table={block.comparison.table} className="tense-atlas-table" />
        </section>
      )}
    </section>
  );
}

function TenseAtlasCard({ tense, eraTone, number }) {
  return (
    <article id={tense.id} className={`tense-atlas-card ${eraTone}`}>
      <header className="tense-atlas-card-head">
        <div className="tense-atlas-card-number">{number}</div>
        <div>
          <span>{tense.mood}</span>
          <h4>{tense.title}</h4>
          <p>{tense.english}{tense.alias ? ` - ${tense.alias}` : ''}</p>
        </div>
      </header>

      <div className="tense-atlas-formula">{tense.formula}</div>
      <p className="tense-atlas-use"><InlineDictionaryText text={tense.use} /></p>

      <div className="tense-atlas-example">
        <ExamplePair
          es={tense.example.es}
          en={tense.example.en}
          esClass="lesson-ex-es"
          enClass="lesson-ex-en"
        />
      </div>

      {tense.signals && (
        <div className="tense-atlas-signals">
          <strong>Señales</strong>
          <span>{tense.signals}</span>
        </div>
      )}

      {tense.notes?.length > 0 && (
        <ul className="tense-atlas-notes">
          {tense.notes.map((note) => (
            <li key={note}><InlineDictionaryText text={note} /></li>
          ))}
        </ul>
      )}

      <LessonTable table={tense.table} className="tense-atlas-table" />
    </article>
  );
}

function IndicativeHeroBlock({ block }) {
  return (
    <section className="block indicative-hero-block">
      <div className="indicative-eyebrow">{block.eyebrow}</div>
      <h2>{block.title}</h2>
      <p><InlineDictionaryText text={block.text} /></p>
      <div className="indicative-formula">
        {block.formula.map((part, index) => (
          <span key={`${part}-${index}`} className={part === '+' || part === '=' ? 'operator' : ''}>
            {part}
          </span>
        ))}
      </div>
      <div className="indicative-tags">
        {block.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
    </section>
  );
}

function IndicativeReferenceBlock({ block }) {
  const [activeId, setActiveId] = useState(block.tenses?.[0]?.id || '');
  const activeTense = block.tenses?.find((tense) => tense.id === activeId) || block.tenses?.[0];

  if (!activeTense) return null;

  return (
    <section className="block indicative-reference-block">
      <div className="indicative-reference-hero">
        <div className="indicative-eyebrow">{block.eyebrow}</div>
        <h2>{block.title}</h2>
        <p className="indicative-reference-subtitle">{block.subtitle}</p>
        <div className="indicative-reference-intro">
          {block.intro?.map((line) => (
            <p key={line}><InlineDictionaryText text={line} /></p>
          ))}
        </div>
      </div>

      <div className="indicative-reference-overview">
        <h3>Panorama general</h3>
        <div className="indicative-ref-table-shell">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Tiempo</th>
                <th>Tipo</th>
                <th>English</th>
                <th>Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              {block.overview?.map((row) => (
                <tr key={`${row.number}-${row.name}`}>
                  <td>{row.number}</td>
                  <td><strong>{row.name}</strong></td>
                  <td><span className={`indicative-ref-type ${row.type === 'Compuesto' ? 'compound' : 'simple'}`}>{row.type}</span></td>
                  <td>{row.english}</td>
                  <td><em>{row.example}</em></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="indicative-reference-picker">
        {block.groups?.map((group) => (
          <div key={group.title} className="indicative-reference-group">
            <div className="indicative-reference-group-head">
              <h3>{group.title}</h3>
              <p>{group.text}</p>
            </div>
            {group.intro?.map((line) => (
              <p key={line} className="indicative-reference-group-note"><InlineDictionaryText text={line} /></p>
            ))}
            <div className="indicative-reference-tabs">
              {group.cardIds.map((id) => {
                const tense = block.tenses.find((item) => item.id === id);
                if (!tense) return null;
                return (
                  <button
                    key={id}
                    type="button"
                    className={activeTense.id === id ? 'active' : ''}
                    onClick={() => setActiveId(id)}
                  >
                    <span>{tense.number}</span>
                    {tense.title}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <IndicativeTenseReference tense={activeTense} />

      {block.appendices?.length > 0 && (
        <div className="indicative-reference-appendix">
          <h3>Apéndices útiles</h3>
          {block.appendices.map((appendix) => (
            <article key={appendix.title} className="indicative-reference-appendix-card">
              <h4>{appendix.title}</h4>
              <IndicativeReferenceTable table={appendix.table} />
            </article>
          ))}
        </div>
      )}

      {block.sourceNote && <p className="indicative-reference-source">{block.sourceNote}</p>}
    </section>
  );
}

function canMergeIndicativeTables(tables = []) {
  if (!Array.isArray(tables) || tables.length < 2) return false;
  const baseRows = tables[0]?.rows;
  if (!Array.isArray(baseRows) || baseRows.length === 0) return false;
  const baseLabels = baseRows.map((row) => String(row?.[0] || '').trim().toLowerCase());

  return tables.every((table) => (
    Array.isArray(table?.rows) &&
    table.rows.length === baseRows.length &&
    table.rows.every((row, index) => (
      row?.length >= 2 &&
      String(row[0] || '').trim().toLowerCase() === baseLabels[index]
    ))
  ));
}

function mergeIndicativeTables(tables = []) {
  if (!canMergeIndicativeTables(tables)) return tables;
  const headers = [
    'Pronombre',
    ...tables.map((table, index) => table.caption || table.headers?.[1] || `Forma ${index + 1}`),
  ];
  const rows = tables[0].rows.map((row, rowIndex) => [
    row[0],
    ...tables.map((table) => table.rows[rowIndex]?.[1] || ''),
  ]);

  return [{
    caption: tables.map((table) => table.caption).filter(Boolean).join(' | '),
    headers,
    rows,
    merged: true,
  }];
}

function IndicativeTenseReference({ tense }) {
  const formationTables = mergeIndicativeTables(tense.conjugationTables);

  return (
    <article className="indicative-reference-detail">
      <header className="indicative-reference-detail-head">
        <div className="indicative-reference-number">{tense.number}</div>
        <div>
          <h3>{tense.title}</h3>
          <p>{tense.english}</p>
        </div>
      </header>

      {tense.uses?.length > 0 && (
        <section className="indicative-reference-panel">
          <h4>¿Para qué se usa?</h4>
          <ul className="indicative-reference-use-list">
            {tense.uses.map((use) => (
              <li key={use}><InlineDictionaryText text={use} /></li>
            ))}
          </ul>
        </section>
      )}

      {tense.formula && (
        <section className="indicative-reference-formula">
          <span>Fórmula</span>
          <p><InlineDictionaryText text={tense.formula} /></p>
        </section>
      )}

      {formationTables?.length > 0 && (
        <section className="indicative-reference-panel">
          <h4>Formación</h4>
          <div className={`indicative-reference-table-grid ${formationTables.length === 1 ? 'single' : `count-${Math.min(formationTables.length, 3)}`}`}>
            {formationTables.map((table, index) => (
              <IndicativeReferenceTable key={`${table.caption}-${index}`} table={table} />
            ))}
          </div>
        </section>
      )}

      {tense.examples?.length > 0 && (
        <section className="indicative-reference-panel">
          <h4>Ejemplos</h4>
          <div className="indicative-reference-examples">
            {tense.examples.map((example) => (
              <ExamplePair key={example.es} es={example.es} en={example.en} esClass="lesson-ex-es" enClass="lesson-ex-en" />
            ))}
          </div>
        </section>
      )}

      {tense.irregularTables?.length > 0 && (
        <section className="indicative-reference-panel">
          <h4>Irregulares importantes</h4>
          <div className="indicative-reference-irregulars">
            {tense.irregularTables.map((table, index) => (
              <IndicativeReferenceTable key={`${tense.id}-irregular-${index}`} table={table} />
            ))}
          </div>
        </section>
      )}

      {tense.notes?.length > 0 && (
        <div className="indicative-reference-notes">
          {tense.notes.map((note) => (
            <aside key={note}><InlineDictionaryText text={note} /></aside>
          ))}
        </div>
      )}
    </article>
  );
}

function IndicativeReferenceTable({ table }) {
  const cardClass = ['indicative-ref-table-card', table.merged ? 'merged' : ''].filter(Boolean).join(' ');

  return (
    <div className={cardClass}>
      {table.caption && <h5>{table.caption}</h5>}
      <div className="indicative-ref-table-shell">
        <table>
          {table.headers?.length > 0 && (
            <thead>
              <tr>
                {table.headers.map((header, index) => <th key={`${header}-${index}`}>{header}</th>)}
              </tr>
            </thead>
          )}
          <tbody>
            {table.rows?.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  cellIndex === 0 ? (
                    <th key={`${rowIndex}-${cellIndex}`} scope="row" className="indicative-ref-row-head">{cell}</th>
                  ) : (
                    <td key={`${rowIndex}-${cellIndex}`} className="indicative-ref-form-cell">
                      <RenderForm raw={cell} />
                    </td>
                  )
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function IndicativeTenseCardsBlock({ block }) {
  const [active, setActive] = useState(0);

  return (
    <section className="block indicative-tense-block">
      <h2 className="lesson-heading">{block.title}</h2>
      <div className="indicative-card-grid">
        {block.cards.map((card, index) => (
          <article
            key={card.title}
            className={`indicative-card ${card.tone} ${active === index ? 'active' : ''}`}
            onClick={() => setActive(index)}
          >
            <header className="indicative-card-head">
              <div className="indicative-card-mark">{String(index + 1).padStart(2, '0')}</div>
              <div>
                <h3>{card.title}</h3>
                <p>{card.english}</p>
              </div>
            </header>
            <p className="indicative-card-use"><InlineDictionaryText text={card.use} /></p>
            <table className="indicative-conj-table">
              <tbody>
                {card.forms.map(([pronoun, form]) => (
                  <tr key={`${card.title}-${pronoun}`}>
                    <td>{pronoun}</td>
                    <td><RenderForm raw={form} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="indicative-example">
              <ExamplePair es={card.example.es} en={card.example.en} esClass="lesson-ex-es" enClass="lesson-ex-en" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ParticipleSectionBlock({ block }) {
  return (
    <section className="block participle-workshop-block">
      <h2 className="lesson-heading">{block.title}</h2>
      <p className="lesson-text"><InlineDictionaryText text={block.text} /></p>
      <div className="participle-workshop-grid">
        <article>
          <h3>Participios regulares</h3>
          <table>
            <tbody>
              {block.regular.map(([left, right]) => (
                <tr key={`${left}-${right}`}>
                  <td>{left}</td>
                  <td><RenderForm raw={right} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
        <article>
          <h3>Participios irregulares</h3>
          <table>
            <tbody>
              {block.irregular.map(([left, right]) => (
                <tr key={`${left}-${right}`}>
                  <td>{left}</td>
                  <td><RenderForm raw={right} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </div>
    </section>
  );
}

function IndicativeTimelineBlock({ block }) {
  return (
    <section className="block indicative-timeline-block">
      <h2 className="lesson-heading">{block.title}</h2>
      <div className="indicative-timeline-wrap">
        <div className="indicative-timeline-line">
          {block.events.map((event) => (
            <div
              key={event.label}
              className={`indicative-timeline-event ${event.lane} ${event.tone}`}
              style={{ left: `${event.position}%` }}
            >
              <span className="timeline-dot" />
              <strong>{event.label}</strong>
              <em>{event.sub}</em>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SubjunctiveHeroBlock({ block }) {
  return (
    <section className="block subj-hero-block">
      <div className="subj-hero-eyebrow">{block.eyebrow}</div>
      <h2>{block.title}</h2>
      <p className="subj-hero-accent">{block.accent}</p>
      <div className="subj-hero-formula">{block.formula}</div>
      <ul>
        {block.points.map((point) => (
          <li key={point}><InlineDictionaryText text={point} /></li>
        ))}
      </ul>
    </section>
  );
}

function GoldenRuleBlock({ block }) {
  return (
    <section className="block golden-rule-block">
      <div className="golden-rule-label">{block.title}</div>
      <p><InlineDictionaryText text={block.text} /></p>
      <div className="golden-rule-examples">
        {block.examples.map((ex, index) => (
          <div key={index} className="golden-rule-pair">
            <div><span>No</span><RenderForm raw={ex.bad} /></div>
            <div><span>Sí</span><RenderForm raw={ex.good} /></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SubjunctiveTenseCardsBlock({ cards }) {
  const [active, setActive] = useState(0);

  return (
    <section className="block subj-tense-block">
      <div className="subj-tense-tabs">
        {cards.map((card, index) => (
          <button
            key={card.title}
            className={`${card.tone} ${active === index ? 'active' : ''}`}
            onClick={() => setActive(index)}
          >
            <span>{index + 1}</span>
            {card.title}
          </button>
        ))}
      </div>
      <div className={`subj-tense-card ${cards[active].tone}`}>
        <div className="subj-tense-head">
          <div>
            <h2>{cards[active].title}</h2>
            <p>{cards[active].english}</p>
          </div>
          <span>{cards[active].mainClause}</span>
        </div>
        <div className="subj-tense-formula"><RenderForm raw={cards[active].formula} /></div>
        <p className="subj-tense-use"><InlineDictionaryText text={cards[active].use} /></p>
        <div className="subj-tense-grid">
          <table>
            <tbody>
              {cards[active].forms.map(([pronoun, form]) => (
                <tr key={`${pronoun}-${form}`}>
                  <td>{pronoun}</td>
                  <td><RenderForm raw={form} /></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="subj-tense-examples">
            {cards[active].examples.map((ex) => (
              <div key={ex.es}>
                <ExamplePair es={ex.es} en={ex.en} esClass="lesson-ex-es" enClass="lesson-ex-en" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TriggerGridBlock({ block }) {
  return (
    <section className="block trigger-grid-block">
      <h2 className="lesson-heading">{block.heading}</h2>
      <p className="lesson-text"><InlineDictionaryText text={block.text} /></p>
      <div className="trigger-grid">
        {block.categories.map((cat) => (
          <article key={cat.title} className="trigger-card">
            <h3>{cat.title}</h3>
            <div className="trigger-expression">{cat.trigger}</div>
            {cat.examples.map((ex) => (
              <div key={ex.es} className="trigger-example">
                <ExamplePair es={ex.es} en={ex.en} esClass="lesson-ex-es" enClass="lesson-ex-en" />
              </div>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}

function ConditionalPatternBlock({ block }) {
  return (
    <section className="block conditional-pattern-block">
      <h2>{block.heading}</h2>
      <div className="conditional-formula"><RenderForm raw={block.formula} /></div>
      <p><InlineDictionaryText text={block.text} /></p>
      <div className="conditional-examples">
        {block.examples.map((ex, index) => (
          <article key={ex.es}>
            <div className="conditional-num">{String(index + 1).padStart(2, '0')}</div>
            <ExamplePair es={ex.es} en={ex.en} esClass="lesson-ex-es" enClass="lesson-ex-en" />
            <p>{ex.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function TipsGridBlock({ tips }) {
  return (
    <section className="block tips-grid-block">
      {tips.map((tip) => (
        <article key={tip.title} className="subj-tip-card">
          <Lightbulb size={18} />
          <h3>{tip.title}</h3>
          <p><InlineDictionaryText text={tip.text} /></p>
        </article>
      ))}
    </section>
  );
}

export default ChapterContent;
