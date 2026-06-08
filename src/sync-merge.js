import { mergeLessonStatus } from './lesson-status.js';
import { normalizeDictionaryExact as normalizeDictionaryExactSmart } from './spanish-dictionary.js';
import { mergeStudyTime } from './study-time.js';
import { APP_VERSION } from './version-info.js';

export function mergeByNewestObject(localObj = {}, remoteObj = {}) {
  const merged = { ...remoteObj };
  for (const [key, localValue] of Object.entries(localObj || {})) {
    const remoteValue = merged[key];
    const localTime = localValue?.reviewedAt || localValue?.dueAt || 0;
    const remoteTime = remoteValue?.reviewedAt || remoteValue?.dueAt || 0;
    merged[key] = localTime >= remoteTime ? localValue : remoteValue;
  }
  return merged;
}

export function mergeSavedWords(localWords = [], remoteWords = []) {
  const byWord = new Map();
  for (const word of [...remoteWords, ...localWords]) {
    const key = normalizeDictionaryExactSmart(word.word);
    const existing = byWord.get(key);
    if (!existing) {
      byWord.set(key, word);
      continue;
    }
    const existingTime = Math.max(existing.savedAt || 0, existing.translatedAt || 0, existing.review?.reviewedAt || 0);
    const wordTime = Math.max(word.savedAt || 0, word.translatedAt || 0, word.review?.reviewedAt || 0);
    const newer = wordTime >= existingTime ? word : existing;
    const older = wordTime >= existingTime ? existing : word;
    byWord.set(key, {
      ...older,
      ...newer,
      tags: Array.from(new Set([...(older.tags || []), ...(newer.tags || [])])),
      extras: Array.from(new Set([...(older.extras || []), ...(newer.extras || [])])),
      favorite: Boolean(older.favorite || newer.favorite),
      difficult: Boolean(older.difficult || newer.difficult),
      review: (newer.review?.reviewedAt || 0) >= (older.review?.reviewedAt || 0) ? newer.review : older.review,
    });
  }
  return [...byWord.values()].sort((a, b) => (b.savedAt || 0) - (a.savedAt || 0));
}

export function mergeLessonStatuses(localStatuses = {}, remoteStatuses = {}) {
  const merged = { ...remoteStatuses, ...localStatuses };
  for (const key of new Set([...Object.keys(localStatuses || {}), ...Object.keys(remoteStatuses || {})])) {
    merged[key] = mergeLessonStatus(localStatuses[key], remoteStatuses[key]);
  }
  return merged;
}

export function mergeAppPayloads(localPayload = {}, remotePayload = {}) {
  if (!remotePayload) return localPayload;
  const localTime = Date.parse(localPayload.exportedAt || '') || 0;
  const remoteTime = Date.parse(remotePayload.exportedAt || '') || 0;
  const newerSettings = localTime >= remoteTime ? localPayload : remotePayload;

  return {
    ...newerSettings,
    app: 'Lexiora',
    version: APP_VERSION,
    exportedAt: new Date().toISOString(),
    savedWords: mergeSavedWords(localPayload.savedWords, remotePayload.savedWords),
    visitedChapters: Array.from(new Set([...(remotePayload.visitedChapters || []), ...(localPayload.visitedChapters || [])])),
    palabrasProgress: mergeByNewestObject(localPayload.palabrasProgress, remotePayload.palabrasProgress),
    lessonStatuses: mergeLessonStatuses(localPayload.lessonStatuses, remotePayload.lessonStatuses),
    studyTime: mergeStudyTime(localPayload.studyTime, remotePayload.studyTime),
    writingEntries: [...new Map([...(remotePayload.writingEntries || []), ...(localPayload.writingEntries || [])].map((entry) => [entry.id, entry])).values()]
      .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))
      .slice(0, 80),
    booxMode: Boolean(newerSettings.booxMode),
    fontScale: newerSettings.fontScale,
    audioSettings: newerSettings.audioSettings,
    translationMode: newerSettings.translationMode,
  };
}
