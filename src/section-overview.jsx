import React from 'react';
import { Sparkles } from 'lucide-react';
import { formatStudyDuration } from './study-time.js';

export function getNestedLessonKey(chapterId, type, index, title) {
  return `${chapterId || 'chapter'}::${type}::${index}::${title}`;
}

function firstText(value) {
  if (!value) return '';
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) return value.find(Boolean) || '';
  return '';
}

function previewGrammarLesson(lesson) {
  return lesson.intro || firstText(lesson.sections?.[0]?.paragraphs) || lesson.sections?.[0]?.text || 'Open this grammar lesson and study it step by step.';
}

function previewStory(story) {
  return firstText(story.paragraphs) || 'Open this story and read it with audio.';
}

function previewBio(bio) {
  return firstText(bio.levels?.[0]?.paragraphs) || bio.subtitle || 'Open this biography and read it by level.';
}

function previewPoem(poem) {
  return poem.note || poem.opening || firstText(poem.stanzas?.map((s) => s.es)) || 'Open this poem with its translation and vocabulary.';
}

function previewSong(song) {
  return song.note || firstText(song.sections?.map((s) => s.es)) || 'Open this song with organized sections and vocabulary.';
}

function nestedCardsForChapter(chapter, section) {
  const cards = [];
  for (const block of chapter.blocks || []) {
    if (block.type === 'foldable-grammar') {
      block.lessons.forEach((lesson, index) => {
        const key = getNestedLessonKey(chapter.id, 'grammar', index, lesson.title);
        cards.push({
          id: key,
          statusKey: key,
          parentChapterId: chapter.id,
          sectionId: section.id,
          sectionLabel: section.label,
          level: lesson.level || chapter.level,
          title: lesson.title,
          subtitle: lesson.subtitle || chapter.title,
          intro: previewGrammarLesson(lesson),
          nestedTarget: { type: 'grammar', index, key, cardId: key, title: lesson.title },
        });
      });
    }
    if (block.type === 'foldable-stories') {
      block.stories.forEach((story, index) => {
        const key = getNestedLessonKey(chapter.id, 'story', index, story.title);
        cards.push({
          id: key,
          statusKey: key,
          parentChapterId: chapter.id,
          sectionId: section.id,
          sectionLabel: section.label,
          level: story.level || chapter.level,
          title: story.title,
          subtitle: `${story.paragraphs?.length || 0} párrafos - lectura con audio`,
          intro: previewStory(story),
          nestedTarget: { type: 'story', index, key, cardId: key, title: story.title },
        });
      });
    }
    if (block.type === 'foldable-bios') {
      block.bios.forEach((bio, index) => {
        const key = getNestedLessonKey(chapter.id, 'bio', index, bio.title);
        const levels = [...new Set((bio.levels || []).map((item) => item.level).filter(Boolean))];
        cards.push({
          id: key,
          statusKey: key,
          parentChapterId: chapter.id,
          sectionId: section.id,
          sectionLabel: section.label,
          level: levels.join('-') || chapter.level,
          title: bio.title,
          subtitle: bio.subtitle || bio.dates || chapter.title,
          intro: previewBio(bio),
          nestedTarget: { type: 'bio', index, key, cardId: key, title: bio.title },
        });
      });
    }
    if (block.type === 'foldable-poems') {
      block.poems.forEach((poem, index) => {
        const key = getNestedLessonKey(chapter.id, 'poem', index, poem.title);
        cards.push({
          id: key,
          statusKey: key,
          parentChapterId: chapter.id,
          sectionId: section.id,
          sectionLabel: section.label,
          level: poem.level || chapter.level,
          title: poem.title,
          subtitle: poem.attribution || chapter.title,
          intro: previewPoem(poem),
          nestedTarget: { type: 'poem', index, key, cardId: key, title: poem.title },
        });
      });
    }
    if (block.type === 'foldable-songs') {
      block.songs.forEach((song, index) => {
        const key = getNestedLessonKey(chapter.id, 'song', index, song.title);
        cards.push({
          id: key,
          statusKey: key,
          parentChapterId: chapter.id,
          sectionId: section.id,
          sectionLabel: section.label,
          level: song.level || chapter.level,
          title: song.title,
          subtitle: song.attribution || chapter.title,
          intro: previewSong(song),
          nestedTarget: { type: 'song', index, key, cardId: key, title: song.title },
        });
      });
    }
  }
  return cards;
}

export function buildSectionLessonCards(section, visibleChapters = []) {
  if (!section) return [];
  const cards = [];
  for (const chapter of visibleChapters) {
    const nested = nestedCardsForChapter(chapter, section);
    if (nested.length > 0) {
      cards.push(...nested);
    } else {
      cards.push({
        ...chapter,
        id: chapter.id,
        statusKey: chapter.id,
        sectionId: section.id,
        sectionLabel: section.label,
      });
    }
  }
  return cards;
}

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
