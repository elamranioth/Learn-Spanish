import { normalizeDictionaryExact as normalizeDictionaryExactSmart } from './spanish-dictionary.js';
import { mergeStudyTime } from './study-time.js';

export const GOOGLE_CLIENT_ID_KEY = 'google-drive-client-id-v1';
const GOOGLE_DRIVE_SYNC_FILE = 'learn-spanish-sync.json';
const GOOGLE_DRIVE_SCOPE = 'https://www.googleapis.com/auth/drive.appdata';

let googleIdentityPromise = null;

export function loadGoogleIdentityScript() {
  if (typeof window === 'undefined') return Promise.reject(new Error('No browser window'));
  if (window.google?.accounts?.oauth2) return Promise.resolve(window.google);
  if (!googleIdentityPromise) {
    googleIdentityPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = () => resolve(window.google);
      script.onerror = () => reject(new Error('Could not load Google sign-in'));
      document.head.appendChild(script);
    });
  }
  return googleIdentityPromise;
}

export async function requestGoogleDriveToken(clientId, prompt = '') {
  const google = await loadGoogleIdentityScript();
  return new Promise((resolve, reject) => {
    const tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: clientId,
      scope: GOOGLE_DRIVE_SCOPE,
      prompt,
      callback: (response) => {
        if (response?.access_token) resolve(response.access_token);
        else reject(new Error(response?.error || 'Google sign-in failed'));
      },
      error_callback: (error) => reject(new Error(error?.message || 'Google sign-in failed')),
    });
    tokenClient.requestAccessToken();
  });
}

async function googleDriveFetch(accessToken, url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!response.ok) {
    const text = await response.text().catch(() => '');
    throw new Error(text || `Google Drive HTTP ${response.status}`);
  }
  return response;
}

export async function findGoogleSyncFile(accessToken) {
  const params = new URLSearchParams({
    spaces: 'appDataFolder',
    fields: 'files(id,name,modifiedTime)',
    q: `name='${GOOGLE_DRIVE_SYNC_FILE}' and trashed=false`,
  });
  const response = await googleDriveFetch(accessToken, `https://www.googleapis.com/drive/v3/files?${params}`);
  const data = await response.json();
  return (data.files || [])[0] || null;
}

export async function readGoogleSyncPayload(accessToken, fileId) {
  if (!fileId) return null;
  const response = await googleDriveFetch(accessToken, `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`);
  return response.json();
}

export async function writeGoogleSyncPayload(accessToken, payload, fileId = null) {
  const metadata = fileId ? {} : { name: GOOGLE_DRIVE_SYNC_FILE, parents: ['appDataFolder'] };
  const boundary = `learn-spanish-${Date.now()}`;
  const body = [
    `--${boundary}`,
    'Content-Type: application/json; charset=UTF-8',
    '',
    JSON.stringify(metadata),
    `--${boundary}`,
    'Content-Type: application/json; charset=UTF-8',
    '',
    JSON.stringify(payload),
    `--${boundary}--`,
  ].join('\r\n');
  const url = fileId
    ? `https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=multipart`
    : 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart';
  const method = fileId ? 'PATCH' : 'POST';
  await googleDriveFetch(accessToken, url, {
    method,
    headers: { 'Content-Type': `multipart/related; boundary=${boundary}` },
    body,
  });
}

function mergeByNewestObject(localObj = {}, remoteObj = {}) {
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

function mergeLessonStatuses(localStatuses = {}, remoteStatuses = {}) {
  const merged = { ...remoteStatuses, ...localStatuses };
  for (const key of new Set([...Object.keys(localStatuses || {}), ...Object.keys(remoteStatuses || {})])) {
    if (localStatuses[key] === 'understood' || remoteStatuses[key] === 'understood') merged[key] = 'understood';
    else if (localStatuses[key] === 'read' || remoteStatuses[key] === 'read') merged[key] = 'read';
  }
  return merged;
}

export function mergeSyncPayloads(localPayload, remotePayload) {
  if (!remotePayload) return localPayload;
  const localTime = Date.parse(localPayload.exportedAt || '') || 0;
  const remoteTime = Date.parse(remotePayload.exportedAt || '') || 0;
  const newerSettings = localTime >= remoteTime ? localPayload : remotePayload;
  return {
    ...newerSettings,
    app: 'Learn Spanish',
    version: 4,
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
