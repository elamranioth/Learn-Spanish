export const STUDY_TIME_KEY = 'study-time-v1';

export function getStudyDateKey(now = new Date()) {
  return now.toISOString().slice(0, 10);
}

export function normalizeStudyTimeState(value = {}) {
  const today = getStudyDateKey();
  const date = value.date === today ? value.date : today;
  const todaySeconds = value.date === today ? Math.max(0, Number(value.todaySeconds) || 0) : 0;
  return {
    totalSeconds: Math.max(0, Number(value.totalSeconds) || 0),
    todaySeconds,
    date,
    byChapter: value.byChapter && typeof value.byChapter === 'object' ? value.byChapter : {},
    updatedAt: value.updatedAt || Date.now(),
  };
}

export function mergeStudyTime(localTime = {}, remoteTime = {}) {
  const local = normalizeStudyTimeState(localTime);
  const remote = normalizeStudyTimeState(remoteTime);
  const byChapter = {};
  for (const key of new Set([...Object.keys(remote.byChapter || {}), ...Object.keys(local.byChapter || {})])) {
    byChapter[key] = Math.max(Number(local.byChapter?.[key]) || 0, Number(remote.byChapter?.[key]) || 0);
  }
  return {
    totalSeconds: Math.max(local.totalSeconds, remote.totalSeconds),
    todaySeconds: Math.max(local.todaySeconds, remote.todaySeconds),
    date: getStudyDateKey(),
    byChapter,
    updatedAt: Math.max(Number(local.updatedAt) || 0, Number(remote.updatedAt) || 0, Date.now()),
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
