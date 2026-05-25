import { mergeStudyTime } from './study-time.js';
import { mergeLessonStatus } from './lesson-status.js';
import { normalizeDictionaryExact as normalizeDictionaryExactSmart } from './spanish-dictionary.js';

const FIREBASE_VERSION = '12.13.0';
export const FIREBASE_CONFIG_STORAGE_KEY = 'firebase-web-config-v1';
export const FIREBASE_APP_STATE_DOC_ID = 'appState';

const REQUIRED_FIREBASE_CONFIG_KEYS = [
  'apiKey',
  'authDomain',
  'projectId',
  'storageBucket',
  'messagingSenderId',
  'appId',
];

let firebaseSdkPromise = null;
let firebaseContextPromise = null;
let persistenceStatusCache = { enabled: false, note: 'not-started' };

function trimOrEmpty(value) {
  return String(value ?? '').trim();
}

function normalizeFirebaseConfig(input) {
  if (!input || typeof input !== 'object') return null;
  const config = {};
  for (const key of REQUIRED_FIREBASE_CONFIG_KEYS) {
    config[key] = trimOrEmpty(input[key]);
  }
  if (trimOrEmpty(input.measurementId)) config.measurementId = trimOrEmpty(input.measurementId);
  if (trimOrEmpty(input.databaseURL)) config.databaseURL = trimOrEmpty(input.databaseURL);
  const ready = REQUIRED_FIREBASE_CONFIG_KEYS.every((key) => config[key]);
  return ready ? config : null;
}

function readStoredFirebaseConfig() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(FIREBASE_CONFIG_STORAGE_KEY);
    if (!raw) return null;
    return normalizeFirebaseConfig(JSON.parse(raw));
  } catch (_) {
    return null;
  }
}

function readWindowFirebaseConfig() {
  if (typeof window === 'undefined') return null;
  return normalizeFirebaseConfig(window.__LEXIORA_FIREBASE_CONFIG__);
}

function readEnvFirebaseConfig() {
  try {
    return normalizeFirebaseConfig({
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
      measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
      databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
    });
  } catch (_) {
    return null;
  }
}

export function resolveFirebaseConfig() {
  return readEnvFirebaseConfig() || readWindowFirebaseConfig() || readStoredFirebaseConfig();
}

export function hasFirebaseConfig() {
  return Boolean(resolveFirebaseConfig());
}

export function parseFirebaseConfigJson(text) {
  try {
    const parsed = JSON.parse(text);
    return normalizeFirebaseConfig(parsed);
  } catch (_) {
    return null;
  }
}

export function saveFirebaseConfigToStorage(configInput) {
  if (typeof window === 'undefined') return false;
  const normalized = normalizeFirebaseConfig(configInput);
  if (!normalized) return false;
  try {
    window.localStorage.setItem(FIREBASE_CONFIG_STORAGE_KEY, JSON.stringify(normalized));
    if (!firebaseContextPromise) {
      // No initialized app yet. Next auth request will use this config.
      return true;
    }
    // App already initialized. Keep running with current app; new config will apply on refresh.
    return true;
  } catch (_) {
    return false;
  }
}

async function loadFirebaseSdk() {
  if (!firebaseSdkPromise) {
    const base = `https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}`;
    firebaseSdkPromise = Promise.all([
      import(`${base}/firebase-app.js`),
      import(`${base}/firebase-auth.js`),
      import(`${base}/firebase-firestore.js`),
    ]).then(([appMod, authMod, firestoreMod]) => ({
      ...appMod,
      ...authMod,
      ...firestoreMod,
    }));
  }
  return firebaseSdkPromise;
}

async function ensureFirebase(configOverride = null) {
  if (!firebaseContextPromise) {
    firebaseContextPromise = (async () => {
      const sdk = await loadFirebaseSdk();
      const config = normalizeFirebaseConfig(configOverride) || resolveFirebaseConfig();
      if (!config) {
        throw new Error('Firebase config is missing. Add it in Sync setup first.');
      }
      const app = sdk.getApps().length ? sdk.getApp() : sdk.initializeApp(config);
      const auth = sdk.getAuth(app);
      const db = sdk.getFirestore(app);

      try {
        await sdk.enableIndexedDbPersistence(db);
        persistenceStatusCache = { enabled: true, note: 'enabled' };
      } catch (error) {
        persistenceStatusCache = {
          enabled: false,
          note: error?.code || error?.message || 'offline-persistence-unavailable',
        };
      }

      return { sdk, app, auth, db, config };
    })();
  }
  return firebaseContextPromise;
}

export function getFirebasePersistenceStatus() {
  return persistenceStatusCache;
}

function appStateDocRef(sdk, db, uid, docId = FIREBASE_APP_STATE_DOC_ID) {
  return sdk.doc(db, 'users', uid, 'data', docId);
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

function mergeSavedWords(localWords = [], remoteWords = []) {
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
    merged[key] = mergeLessonStatus(localStatuses[key], remoteStatuses[key]);
  }
  return merged;
}

export function mergeFirebasePayloads(localPayload, remotePayload) {
  if (!remotePayload) return localPayload;
  const localTime = Date.parse(localPayload.exportedAt || '') || 0;
  const remoteTime = Date.parse(remotePayload.exportedAt || '') || 0;
  const newerSettings = localTime >= remoteTime ? localPayload : remotePayload;
  return {
    ...newerSettings,
    app: 'Lexiora',
    version: 6,
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

export async function observeFirebaseAuthState(onChange, onError) {
  const { sdk, auth } = await ensureFirebase();
  return sdk.onAuthStateChanged(auth, onChange, onError);
}

export async function signInFirebaseAnonymously() {
  const { sdk, auth } = await ensureFirebase();
  const current = auth.currentUser;
  if (current) return current;
  const credential = await sdk.signInAnonymously(auth);
  return credential.user;
}

export async function signInFirebaseWithGoogle() {
  const { sdk, auth } = await ensureFirebase();
  const provider = new sdk.GoogleAuthProvider();
  if (auth.currentUser?.isAnonymous) {
    const upgraded = await sdk.linkWithPopup(auth.currentUser, provider);
    return upgraded.user;
  }
  const signedIn = await sdk.signInWithPopup(auth, provider);
  return signedIn.user;
}

export async function signOutFirebase() {
  const { sdk, auth } = await ensureFirebase();
  await sdk.signOut(auth);
}

export async function upsertUserRecordFromAuth(user, extra = {}) {
  if (!user?.uid) return;
  const { sdk, db } = await ensureFirebase();
  const userRef = sdk.doc(db, 'users', user.uid);
  const snapshot = await sdk.getDoc(userRef);
  const usernameGuess = extra.username
    || user.displayName
    || (user.email ? user.email.split('@')[0] : `user-${user.uid.slice(0, 6)}`);
  const payload = {
    username: usernameGuess,
    email: user.email || extra.email || '',
    photoUrl: user.photoURL || extra.photoUrl || null,
    lastLogin: sdk.serverTimestamp(),
  };
  if (!snapshot.exists()) payload.createdAt = sdk.serverTimestamp();
  await sdk.setDoc(userRef, payload, { merge: true });
}

export async function loadFirebaseAppState(uid, docId = FIREBASE_APP_STATE_DOC_ID) {
  const { sdk, db } = await ensureFirebase();
  const snapshot = await sdk.getDoc(appStateDocRef(sdk, db, uid, docId));
  if (!snapshot.exists()) return null;
  return snapshot.data()?.payload || null;
}

export async function saveFirebaseAppState(uid, payload, docId = FIREBASE_APP_STATE_DOC_ID) {
  const { sdk, db } = await ensureFirebase();
  await sdk.setDoc(
    appStateDocRef(sdk, db, uid, docId),
    {
      payload,
      updatedAt: sdk.serverTimestamp(),
    },
    { merge: true },
  );
}

export async function watchFirebaseAppState(uid, onPayload, onError, docId = FIREBASE_APP_STATE_DOC_ID) {
  const { sdk, db } = await ensureFirebase();
  return sdk.onSnapshot(
    appStateDocRef(sdk, db, uid, docId),
    (snapshot) => {
      if (!snapshot.exists()) return;
      onPayload?.(snapshot.data()?.payload || null, snapshot.metadata);
    },
    (error) => onError?.(error),
  );
}

// ===== Firestore mapping for your typed model =====
// User           -> users/{uid}
// Lesson         -> lessons/{lessonId}
// Quiz           -> quizzes/{quizId}
// Question       -> quizzes/{quizId}/questions/{questionId}
// QuizAttempt    -> users/{uid}/quizAttempts/{attemptId}
// UserLessonProgress -> users/{uid}/lessonProgress/{lessonId}

export async function upsertLesson(lessonId, lesson, uid = null) {
  if (!lessonId) return;
  const { sdk, db } = await ensureFirebase();
  const ref = uid
    ? sdk.doc(db, 'users', uid, 'lessons', lessonId)
    : sdk.doc(db, 'lessons', lessonId);
  const payload = {
    title: lesson.title || '',
    lessonNumber: Number(lesson.lessonNumber || 0),
    content: lesson.content || '',
    description: lesson.description || '',
    updatedAt: sdk.serverTimestamp(),
  };
  const current = await sdk.getDoc(ref);
  if (!current.exists()) payload.createdAt = sdk.serverTimestamp();
  await sdk.setDoc(ref, payload, { merge: true });
}

export async function upsertQuiz(quizId, quiz, uid = null) {
  if (!quizId) return;
  const { sdk, db } = await ensureFirebase();
  const ref = uid
    ? sdk.doc(db, 'users', uid, 'quizzes', quizId)
    : sdk.doc(db, 'quizzes', quizId);
  const payload = {
    title: quiz.title || '',
    description: quiz.description || '',
    lessonId: quiz.lessonId || null,
    updatedAt: sdk.serverTimestamp(),
  };
  const current = await sdk.getDoc(ref);
  if (!current.exists()) payload.createdAt = sdk.serverTimestamp();
  await sdk.setDoc(ref, payload, { merge: true });
}

export async function upsertQuestion(quizId, questionId, question, uid = null) {
  if (!quizId || !questionId) return;
  const { sdk, db } = await ensureFirebase();
  const ref = uid
    ? sdk.doc(db, 'users', uid, 'quizzes', quizId, 'questions', questionId)
    : sdk.doc(db, 'quizzes', quizId, 'questions', questionId);
  const payload = {
    text: question.text || '',
    type: question.type || 'multiple-choice',
    correctAnswer: question.correctAnswer || '',
    options: Array.isArray(question.options) ? question.options : [],
    updatedAt: sdk.serverTimestamp(),
  };
  const current = await sdk.getDoc(ref);
  if (!current.exists()) payload.createdAt = sdk.serverTimestamp();
  await sdk.setDoc(ref, payload, { merge: true });
}

export async function recordQuizAttempt(uid, attempt) {
  if (!uid) return;
  const { sdk, db } = await ensureFirebase();
  const attemptId = attempt.id || `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  const ref = sdk.doc(db, 'users', uid, 'quizAttempts', attemptId);
  await sdk.setDoc(ref, {
    score: Number(attempt.score || 0),
    total: Number(attempt.total || 0),
    percent: Number(attempt.percent || 0),
    mode: attempt.mode || 'multiple-choice',
    level: attempt.level || '',
    quizId: attempt.quizId || null,
    quizTitle: attempt.quizTitle || '',
    completedAt: sdk.serverTimestamp(),
  });
}

function toProgressStatus(status) {
  if (status === 'mastered' || status === 'strong' || status === 'understood') return 'completed';
  if (status === 'practicing' || status === 'read') return 'in_progress';
  return 'not_started';
}

export async function upsertUserLessonProgress(uid, lessonId, progress) {
  if (!uid || !lessonId) return;
  const { sdk, db } = await ensureFirebase();
  const ref = sdk.doc(db, 'users', uid, 'lessonProgress', lessonId);
  const snapshot = await sdk.getDoc(ref);
  const baseStatus = progress.status || 'read';
  const mappedStatus = toProgressStatus(baseStatus);
  const payload = {
    lessonId,
    status: mappedStatus,
    localStatus: baseStatus,
    updatedAt: sdk.serverTimestamp(),
  };
  if (!snapshot.exists()) payload.startedAt = sdk.serverTimestamp();
  if (mappedStatus === 'completed') payload.completedAt = sdk.serverTimestamp();
  await sdk.setDoc(ref, payload, { merge: true });
}

export async function listUserLessonProgress(uid, max = 400) {
  if (!uid) return [];
  const { sdk, db } = await ensureFirebase();
  const ref = sdk.collection(db, 'users', uid, 'lessonProgress');
  const q = sdk.query(ref, sdk.orderBy('updatedAt', 'desc'), sdk.limit(Math.max(1, max)));
  const snapshot = await sdk.getDocs(q);
  return snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...docSnap.data(),
  }));
}
