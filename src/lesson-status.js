export const LESSON_STATUS_RANK = {
  reading: 1,
  read: 2,
  practicing: 3,
  understood: 4,
  strong: 5,
  mastered: 6,
};

export const LESSON_STATUS_LABELS = {
  reading: 'Leyendo',
  read: 'Leido',
  practicing: 'Practicando',
  understood: 'Entendido',
  strong: 'Fuerte',
  mastered: 'Dominado',
};

const READ_STATUSES = new Set(['read', 'understood', 'strong', 'mastered']);
const UNDERSTOOD_STATUSES = new Set(['understood', 'strong', 'mastered']);
const MASTERY_STATUSES = new Set(['strong', 'mastered']);

export function getLessonStatusRank(status) {
  return LESSON_STATUS_RANK[status] || 0;
}

export function isLessonReadStatus(status) {
  return READ_STATUSES.has(status);
}

export function isLessonUnderstoodStatus(status) {
  return UNDERSTOOD_STATUSES.has(status);
}

export function isLessonMasteryStatus(status) {
  return MASTERY_STATUSES.has(status);
}

export function getLessonStatusLabel(status, hasOpened = false) {
  if (status && LESSON_STATUS_LABELS[status]) return LESSON_STATUS_LABELS[status];
  return hasOpened ? 'Abierto' : 'Nuevo';
}

export function mergeLessonStatus(localStatus, remoteStatus) {
  return getLessonStatusRank(localStatus) >= getLessonStatusRank(remoteStatus)
    ? localStatus
    : remoteStatus;
}
