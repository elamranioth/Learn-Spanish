import React from 'react';
import { Sparkles } from 'lucide-react';
import { formatStudyDuration } from './study-time.js';

export { buildSectionLessonCards, getNestedLessonKey } from './section-lessons.js';

export function SectionOverviewView({ section, lessons, visitedSet, lessonStatuses, studyTime, onSelectChapter, SectionIconComponent }) {
  if (!section) return null;
  const cards = lessons || [];
  const completedCount = cards.filter((lesson) => {
    const status = lessonStatuses?.[lesson.statusKey || lesson.id];
    return status === 'read' || status === 'understood' || visitedSet.has(lesson.id);
  }).length;
  const understoodCount = cards.filter((lesson) => lessonStatuses?.[lesson.statusKey || lesson.id] === 'understood').length;
  const intro = section.id === 'tiempos'
    ? 'Choose one tense lesson at a time. Start with the simple map, then move into compound tenses when the timeline feels clear.'
    : 'Choose one lesson from this section and read it slowly. Your progress stays attached to the exact lesson you open.';

  return (
    <article className="section-overview">
      <header className="section-overview-hero">
        <div className="chapter-icon-row">
          <div className="chapter-icon-wrap">
            {SectionIconComponent ? <SectionIconComponent id={section.id} size={22} /> : null}
          </div>
          <div>
            <div className="chapter-level-tag">Sección</div>
            <h1 className="chapter-title">{section.label}</h1>
            <p className="chapter-subtitle">{section.sublabel}</p>
          </div>
        </div>
        <p className="chapter-intro">{intro}</p>
        <div className="section-overview-stats" aria-label="Section progress">
          <span><strong>{cards.length}</strong> lecciones</span>
          <span><strong>{completedCount}</strong> abiertas</span>
          <span><strong>{understoodCount}</strong> entendidas</span>
        </div>
      </header>

      {cards.length ? (
        <div className="section-lesson-grid">
          {cards.map((lesson, index) => {
            const status = lessonStatuses?.[lesson.statusKey || lesson.id];
            const hasOpened = visitedSet.has(lesson.id);
            const seconds = Number(studyTime?.byChapter?.[lesson.id]) || 0;
            const preview = lesson.intro || lesson.subtitle || 'Open the lesson and work through it at your own pace.';
            return (
              <button
                key={lesson.id}
                type="button"
                className={`section-lesson-card ${status ? `status-${status}` : hasOpened ? 'status-opened' : ''}`}
                onClick={() => onSelectChapter(lesson)}
              >
                <span className="section-lesson-topline">
                  <span className="section-lesson-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="section-lesson-level">{lesson.level}</span>
                </span>
                <span className="section-lesson-title">{lesson.title}</span>
                {lesson.subtitle && <span className="section-lesson-subtitle">{lesson.subtitle}</span>}
                <span className="section-lesson-preview">{preview}</span>
                <span className="section-lesson-footer">
                  <span className="section-lesson-status">
                    {status === 'understood' ? 'Entendido' : status === 'read' ? 'Leído' : hasOpened ? 'Abierto' : 'Nuevo'}
                  </span>
                  {seconds > 0 && <span className="section-lesson-time">{formatStudyDuration(seconds)}</span>}
                </span>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="empty">
          <Sparkles size={28} />
          <p>No hay lecciones en este nivel.</p>
        </div>
      )}
    </article>
  );
}
