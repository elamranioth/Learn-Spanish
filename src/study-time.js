export const STUDY_TIME_KEY = 'study-time-v1';
const MAX_STUDY_SESSIONS = 240;

export function getStudyDateKey(now = new Date()) {
  return now.toISOString().slice(0, 10);
}

function normalizeStudySession(session) {
  if (!session || typeof session !== 'object') return null;
  const id = String(session.id || '').trim();
  if (!id) return null;
  const seconds = Math.max(0, Math.floor(Number(session.seconds) || 0));
  if (!seconds) return null;
  return {
    id,
    chapterId: String(session.chapterId || 'unknown'),
    date: session.date || getStudyDateKey(new Date(Number(session.startedAt) || Date.now())),
    seconds,
    startedAt: Number(session.startedAt) || Number(session.updatedAt) || Date.now(),
    updatedAt: Number(session.updatedAt) || Number(session.startedAt) || Date.now(),
  };
}

function normalizedSessions(value = {}) {
  return (Array.isArray(value.sessions) ? value.sessions : [])
    .map(normalizeStudySession)
    .filter(Boolean)
    .sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0))
    .slice(0, MAX_STUDY_SESSIONS);
}

function sumSessions(sessions, predicate = () => true) {
  return sessions.reduce((total, session) => total + (predicate(session) ? session.seconds : 0), 0);
}

function sumSessionsByChapter(sessions) {
  const byChapter = {};
  for (const session of sessions) {
    byChapter[session.chapterId] = (byChapter[session.chapterId] || 0) + session.seconds;
  }
  return byChapter;
}

export function normalizeStudyTimeState(value = {}) {
  const today = getStudyDateKey();
  const date = value.date === today ? value.date : today;
  const todaySeconds = value.date === today ? Math.max(0, Number(value.todaySeconds) || 0) : 0;
  const sessions = normalizedSessions(value);
  return {
    totalSeconds: Math.max(0, Number(value.totalSeconds) || 0),
    todaySeconds,
    date,
    byChapter: value.byChapter && typeof value.byChapter === 'object' ? value.byChapter : {},
    sessions,
    updatedAt: value.updatedAt || Date.now(),
  };
}

export function mergeStudyTime(localTime = {}, remoteTime = {}) {
  const local = normalizeStudyTimeState(localTime);
  const remote = normalizeStudyTimeState(remoteTime);
  const sessionMap = new Map();
  for (const session of [...remote.sessions, ...local.sessions]) {
    const existing = sessionMap.get(session.id);
    if (!existing || (session.updatedAt || 0) >= (existing.updatedAt || 0)) {
      sessionMap.set(session.id, session);
    }
  }
  const sessions = [...sessionMap.values()]
    .sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0))
    .slice(0, MAX_STUDY_SESSIONS);
  const localSessionTotal = sumSessions(local.sessions);
  const remoteSessionTotal = sumSessions(remote.sessions);
  const mergedSessionTotal = sumSessions(sessions);
  const today = getStudyDateKey();
  const localTodaySessions = sumSessions(local.sessions, (session) => session.date === today);
  const remoteTodaySessions = sumSessions(remote.sessions, (session) => session.date === today);
  const mergedTodaySessions = sumSessions(sessions, (session) => session.date === today);
  const byChapterSessions = sumSessionsByChapter(sessions);
  const byChapter = { ...byChapterSessions };
  for (const key of new Set([...Object.keys(remote.byChapter || {}), ...Object.keys(local.byChapter || {})])) {
    const localSessionChapterTotal = sumSessions(local.sessions, (session) => session.chapterId === key);
    const remoteSessionChapterTotal = sumSessions(remote.sessions, (session) => session.chapterId === key);
    const localBase = Math.max(0, (Number(local.byChapter?.[key]) || 0) - localSessionChapterTotal);
    const remoteBase = Math.max(0, (Number(remote.byChapter?.[key]) || 0) - remoteSessionChapterTotal);
    byChapter[key] = Math.max(localBase, remoteBase) + (byChapterSessions[key] || 0);
  }
  const legacyBase = Math.max(
    Math.max(0, local.totalSeconds - localSessionTotal),
    Math.max(0, remote.totalSeconds - remoteSessionTotal)
  );
  const legacyTodayBase = Math.max(
    Math.max(0, local.todaySeconds - localTodaySessions),
    Math.max(0, remote.todaySeconds - remoteTodaySessions)
  );
  return {
    totalSeconds: legacyBase + mergedSessionTotal,
    todaySeconds: legacyTodayBase + mergedTodaySessions,
    date: today,
    byChapter,
    sessions,
    updatedAt: Math.max(Number(local.updatedAt) || 0, Number(remote.updatedAt) || 0, Date.now()),
  };
}

export function recordStudySecond(value = {}, chapterId, sessionId, now = Date.now()) {
  const base = normalizeStudyTimeState(value);
  const date = getStudyDateKey(new Date(now));
  const id = sessionId || `${date}-${chapterId || 'lesson'}`;
  const sessions = [...base.sessions];
  const index = sessions.findIndex((session) => session.id === id);
  if (index >= 0) {
    sessions[index] = {
      ...sessions[index],
      chapterId,
      date,
      seconds: sessions[index].seconds + 1,
      updatedAt: now,
    };
  } else {
    sessions.unshift({
      id,
      chapterId,
      date,
      seconds: 1,
      startedAt: now,
      updatedAt: now,
    });
  }
  return {
    ...base,
    totalSeconds: base.totalSeconds + 1,
    todaySeconds: base.date === date ? base.todaySeconds + 1 : 1,
    date,
    byChapter: {
      ...base.byChapter,
      [chapterId]: (Number(base.byChapter?.[chapterId]) || 0) + 1,
    },
    sessions: sessions
      .sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0))
      .slice(0, MAX_STUDY_SESSIONS),
    updatedAt: now,
  };
}

export function formatStudyDuration(totalSeconds = 0) {
  const seconds = Math.max(0, Math.floor(Number(totalSeconds) || 0));
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  if (hours > 0) return `${hours}h ${String(minutes).padStart(2, '0')}m`;
  if (minutes > 0) return `${minutes}m`;
  return `${seconds}s`;
}
