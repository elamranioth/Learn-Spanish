import assert from 'node:assert/strict';
import {
  analyzeWritingDraft,
  buildEnhancedSearchResults,
  buildLearnerProfile,
  buildTeacherInsights,
  buildUnifiedReviewQueue,
  normalizeAnswer,
  scheduleReview,
} from './learning.js';
import {
  findStoredDictionaryEntry,
  getCachedDictionaryTranslation,
  getDictionaryLookupVariants,
  normalizeDictionaryExact,
  normalizeDictionaryLookup,
} from './spanish-dictionary.js';
import { buildRecommendedLessonCards, buildSectionProgress, buildVisibleFlatChapters, summarizeStudyProgress } from './progress.js';
import { mergeStudyTime, recordStudySecond } from './study-time.js';
import { mergeLessonStatus } from './lesson-status.js';
import { buildLessonQuiz, buildPracticeHealth, collectQuizPairs } from './practice-engine.js';
import { enrichSavedWordEntry, getMemoriaReviewStage } from './memoria-utils.js';

function test(name, fn) {
  try {
    fn();
    console.log(`ok - ${name}`);
  } catch (error) {
    console.error(`not ok - ${name}`);
    throw error;
  }
}

test('scheduleReview makes hard cards due sooner than easy cards', () => {
  const now = 1_700_000_000_000;
  const hard = scheduleReview(undefined, 'hard', now);
  const easy = scheduleReview(undefined, 'easy', now);
  assert.equal(hard.seen, true);
  assert.equal(easy.mastered, true);
  assert.ok(hard.dueAt < easy.dueAt);
});

test('normalizeAnswer strips accents and punctuation for forgiving checks', () => {
  assert.equal(normalizeAnswer('¡Hablé!'), 'hable');
  assert.equal(normalizeAnswer('[teng]{o}'), 'tengo');
});

test('dictionary lookup connects inflected Spanish forms to stored words', () => {
  assert.equal(normalizeDictionaryLookup('las familias'), 'familias');
  assert.ok(getDictionaryLookupVariants('puede').includes('poder'));
  assert.ok(getDictionaryLookupVariants('hablé').includes('hablar'));

  const saved = [{ word: 'familia', translation: 'family' }, { word: 'poder', translation: 'can / to be able' }];
  assert.equal(findStoredDictionaryEntry('familias', saved)?.main, 'family');
  assert.equal(findStoredDictionaryEntry('puede', saved)?.main, 'can / to be able');
});

test('dictionary lookup preserves meaning for accent-only word pairs', () => {
  assert.equal(normalizeDictionaryExact('Sí'), 'sí');
  assert.equal(normalizeDictionaryLookup('Sí'), 'si');
  assert.deepEqual(getDictionaryLookupVariants('Sí'), ['sí']);

  const saved = [{ word: 'si', translation: 'if' }, { word: 'sí', translation: 'yes' }];
  assert.equal(findStoredDictionaryEntry('Sí', saved)?.main, 'yes');
  assert.equal(findStoredDictionaryEntry('si', saved)?.main, 'if');
  assert.equal(getCachedDictionaryTranslation('SÃ­'), null);
});

test('writing analysis rewards richer Spanish drafts', () => {
  const feedback = analyzeWritingDraft('Hoy estudio espanol porque quiero hablar mejor. Tambien escribo una frase nueva.', { target: 'estudio' });
  assert.ok(feedback.words >= 10);
  assert.ok(feedback.connectors >= 1);
  assert.equal(feedback.targetUsed, true);
});

test('enhanced search finds nested lesson content', () => {
  const chapters = [{
    title: 'Grammar',
    sectionLabel: 'Gramática',
    level: 'A2',
    blocks: [{
      lessons: [{
        title: 'Objects',
        sections: [{ examples: [{ es: 'Lo veo.', en: 'I see it.' }] }],
      }],
    }],
  }];
  const results = buildEnhancedSearchResults('veo', chapters);
  assert.equal(results.length > 0, true);
  assert.equal(results[0].chapter.title, 'Grammar');
});

test('learner profile and unified queue combine multiple study sources', () => {
  const now = 2_000_000;
  const profile = buildLearnerProfile({
    chapters: [{ id: 'a' }, { id: 'b' }],
    visitedChapters: ['a'],
    lessonStatuses: { a: 'read', b: 'understood' },
    palabrasProgress: { hola: { seen: true, dueAt: now - 1 } },
    savedWords: [{ word: 'difícil', difficult: true, review: { seen: true, dueAt: now - 1 } }],
    writingEntries: [{ feedback: { words: 12, score: 55 } }],
  }, now);
  assert.equal(profile.chapters.unvisited, 1);
  assert.equal(profile.vocabulary.due, 2);
  assert.equal(profile.writing.needsPractice, 1);

  const queue = buildUnifiedReviewQueue({
    lessonStatuses: { a: 'read' },
    palabrasProgress: { hola: { seen: true, dueAt: now - 1, spanish: 'hola' } },
    savedWords: [{ word: 'difícil', difficult: true }],
    writingEntries: [{ prompt: 'Diario', feedback: { score: 50, tips: ['Add more detail.'] } }],
  }, now);
  assert.ok(queue.some((item) => item.type === 'palabra'));
  assert.ok(queue.some((item) => item.type === 'memoria'));
  assert.ok(queue.some((item) => item.type === 'writing'));
});

test('teacher insights choose the next useful study action', () => {
  const insights = buildTeacherInsights({
    learnerProfile: {
      vocabulary: { due: 3, difficult: 1 },
      writing: { needsPractice: 1 },
    },
    dailyStats: { grammarDone: false, readingDone: false },
    studyTime: { todaySeconds: 120 },
    recommendations: [{ title: 'Direct Object Pronouns' }],
  });
  assert.equal(insights[0].action, 'memoria');
  assert.ok(insights.some((item) => item.action === 'daily'));
});

test('progress counts nested lesson cards consistently', () => {
  const sections = [{
    id: 'gramatica',
    label: 'Gramática',
    chapters: [{
      id: 'grammar',
      level: 'A2',
      title: 'Grammar',
      blocks: [{ type: 'foldable-grammar', lessons: [{ title: 'Pronouns' }, { title: 'Prepositions' }] }],
    }],
  }];
  const visible = buildVisibleFlatChapters(sections, 'ALL');
  const summary = summarizeStudyProgress(sections, visible, [], { 'grammar::grammar::0::Pronouns': 'understood' });
  assert.equal(summary.total, 2);
  assert.equal(summary.completed, 1);
  assert.equal(buildSectionProgress(sections, visible, [], summary.lessons.reduce((acc) => acc, { 'grammar::grammar::0::Pronouns': 'understood' }))[0].total, 2);
  assert.equal(buildRecommendedLessonCards(summary.lessons, [], { 'grammar::grammar::0::Pronouns': 'understood' }, 1)[0].title, 'Prepositions');
});

test('lesson mastery statuses count as completed progress', () => {
  const sections = [{
    id: 'lectura',
    label: 'Lectura',
    chapters: [
      { id: 'a', level: 'A1', title: 'A', blocks: [] },
      { id: 'b', level: 'A1', title: 'B', blocks: [] },
    ],
  }];
  const visible = buildVisibleFlatChapters(sections, 'ALL');
  const summary = summarizeStudyProgress(sections, visible, [], { a: 'strong', b: 'mastered' });
  assert.equal(summary.completed, 2);
  assert.equal(summary.understood, 2);
  assert.equal(summary.mastered, 1);
  assert.equal(mergeLessonStatus('read', 'mastered'), 'mastered');
});

test('practice engine builds lesson recall quizzes from lesson content', () => {
  const chapter = {
    blocks: [{
      examples: [
        { es: 'Trabajo hoy.', en: 'I work today.' },
        { es: 'Vivo aqui.', en: 'I live here.' },
        { es: 'Como pan.', en: 'I eat bread.' },
      ],
    }],
  };
  assert.equal(collectQuizPairs(chapter).length, 3);
  const quiz = buildLessonQuiz(chapter, { count: 3 });
  assert.equal(quiz.length, 3);
  assert.ok(quiz.every((question) => question.choices.includes(question.answer)));
  assert.equal(buildPracticeHealth({ score: 3, total: 3 }).status, 'mastered');
  assert.equal(buildPracticeHealth({ score: 1, total: 3 }).status, 'practicing');
});

test('Memoria 2.0 enriches cards and labels review stages', () => {
  const now = 3_000_000;
  const fresh = enrichSavedWordEntry({ word: 'frase util', tags: ['phrase'] }, now);
  assert.equal(fresh.review.seen, false);
  assert.equal(getMemoriaReviewStage(fresh, now).key, 'new');
  const due = enrichSavedWordEntry({ word: 'hola', review: { seen: true, dueAt: now - 1 } }, now);
  assert.equal(getMemoriaReviewStage(due, now).key, 'due');
});

test('study time sync merges unique device sessions without losing minutes', () => {
  const local = recordStudySecond({}, 'lesson-a', 'phone-session', 2_000_000);
  const remote = recordStudySecond({}, 'lesson-b', 'laptop-session', 2_100_000);
  const merged = mergeStudyTime(local, remote);
  assert.equal(merged.totalSeconds, 2);
  assert.equal(merged.byChapter['lesson-a'], 1);
  assert.equal(merged.byChapter['lesson-b'], 1);
  assert.equal(merged.sessions.length, 2);
});
