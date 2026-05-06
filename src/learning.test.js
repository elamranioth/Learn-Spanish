import assert from 'node:assert/strict';
import {
  analyzeWritingDraft,
  buildEnhancedSearchResults,
  buildLearnerProfile,
  buildUnifiedReviewQueue,
  normalizeAnswer,
  scheduleReview,
} from './learning.js';
import {
  findStoredDictionaryEntry,
  getDictionaryLookupVariants,
  normalizeDictionaryExact,
  normalizeDictionaryLookup,
} from './spanish-dictionary.js';

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
