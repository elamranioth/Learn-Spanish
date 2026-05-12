import { buildSectionLessonCards } from './section-lessons.js';

export function buildVisibleFlatChapters(sections = [], levelFilter = 'ALL') {
  const list = [];
  for (const section of sections) {
    for (const chapter of section.chapters || []) {
      if (chapter.alwaysVisible || levelFilter === 'ALL' || chapter.level === levelFilter) {
        list.push({ ...chapter, sectionId: section.id, sectionLabel: section.label });
      }
    }
  }
  return list;
}

export function buildStudyLessonCards(sections = [], visibleFlatChapters = []) {
  const cards = [];
  for (const section of sections) {
    const chapters = visibleFlatChapters.filter((chapter) => chapter.sectionId === section.id);
    cards.push(...buildSectionLessonCards(section, chapters));
  }
  return cards;
}

export function isLessonComplete(lesson, visitedSet = new Set(), lessonStatuses = {}) {
  const status = lessonStatuses[lesson.statusKey || lesson.id];
  return status === 'read' || status === 'understood' || visitedSet.has(lesson.id);
}

export function summarizeStudyProgress(sections = [], visibleFlatChapters = [], visitedChapters = [], lessonStatuses = {}) {
  const visitedSet = new Set(visitedChapters);
  const lessons = buildStudyLessonCards(sections, visibleFlatChapters);
  const completed = lessons.filter((lesson) => isLessonComplete(lesson, visitedSet, lessonStatuses)).length;
  const understood = lessons.filter((lesson) => lessonStatuses[lesson.statusKey || lesson.id] === 'understood').length;
  const read = lessons.filter((lesson) => {
    const status = lessonStatuses[lesson.statusKey || lesson.id];
    return status === 'read' || status === 'understood';
  }).length;

  return {
    lessons,
    total: lessons.length,
    completed,
    read,
    understood,
    percent: lessons.length ? Math.round((completed / lessons.length) * 100) : 0,
  };
}

export function buildSectionProgress(sections = [], visibleFlatChapters = [], visitedChapters = [], lessonStatuses = {}) {
  const visitedSet = new Set(visitedChapters);
  return sections.map((section) => {
    const chapters = visibleFlatChapters.filter((chapter) => chapter.sectionId === section.id);
    const lessons = buildSectionLessonCards(section, chapters);
    const visited = lessons.filter((lesson) => isLessonComplete(lesson, visitedSet, lessonStatuses)).length;
    return { id: section.id, label: section.label, total: lessons.length, visited };
  }).filter((item) => item.total > 0);
}

export function buildRecommendedLessonCards(lessons = [], visitedChapters = [], lessonStatuses = {}, limit = 4) {
  const visitedSet = new Set(visitedChapters);
  const unseen = lessons.filter((lesson) => !isLessonComplete(lesson, visitedSet, lessonStatuses));
  return (unseen.length ? unseen : lessons).slice(0, limit);
}
