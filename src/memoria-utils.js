export function getMemoriaTags(entry) {
  const tags = new Set(entry.tags || []);
  if (entry.pending) tags.add('pending');
  if (!entry.translation) tags.add('needs-translation');
  if (entry.favorite) tags.add('favorite');
  if (entry.difficult) tags.add('difficult');
  if (entry.review?.mastered) tags.add('mastered');
  if (entry.review?.seen && (entry.review?.dueAt || 0) <= Date.now()) tags.add('due');
  if (/Group 1|cognates|near-cognates/i.test(entry.pos || '')) tags.add('cognates');
  if (/Group 2|function/i.test(entry.pos || '')) tags.add('function-words');
  if (/Group 3|remaining/i.test(entry.pos || '')) tags.add('remaining');
  return [...tags];
}

export function getMemoriaSummary(words, now = Date.now()) {
  return {
    total: words.length,
    newCards: words.filter((entry) => !entry.review?.seen).length,
    due: words.filter((entry) => entry.review?.seen && (entry.review?.dueAt || 0) <= now).length,
    mastered: words.filter((entry) => entry.review?.mastered).length,
    difficult: words.filter((entry) => entry.difficult || entry.review?.lastRating === 'Hard').length,
    favorite: words.filter((entry) => entry.favorite).length,
    phrases: words.filter((entry) => (entry.tags || []).includes('phrase')).length,
  };
}

export function getMemoriaReviewStage(entry, now = Date.now()) {
  if (!entry?.review?.seen) return { key: 'new', label: 'New', detail: 'Start review' };
  if ((entry.review.dueAt || 0) <= now) return { key: 'due', label: 'Due now', detail: 'Review today' };
  if (entry.review.mastered) return { key: 'mastered', label: 'Stable', detail: 'Long interval' };
  if (entry.difficult || entry.review.lastRating === 'Hard') return { key: 'difficult', label: 'Difficult', detail: 'Needs example' };
  const days = Math.max(1, Math.ceil(((entry.review.dueAt || now) - now) / (24 * 60 * 60 * 1000)));
  return { key: 'scheduled', label: `In ${days}d`, detail: 'Scheduled' };
}

export function enrichSavedWordEntry(entry, now = Date.now()) {
  const review = entry.review || {
    seen: false,
    dueAt: now,
    intervalDays: 0,
    reps: 0,
    ease: 2.35,
  };
  return {
    ...entry,
    tags: Array.from(new Set(entry.tags || [])),
    contexts: Array.from(new Set([...(entry.contexts || []), entry.context].filter(Boolean))).slice(0, 8),
    review,
  };
}

export function exportMemoriaCsv(words) {
  const header = ['Spanish', 'English', 'Tags', 'Notes'];
  const lines = words.map((entry) => [
    entry.word,
    entry.translation || '',
    getMemoriaTags(entry).join(' | '),
    [...(entry.extras || []), entry.pos || ''].filter(Boolean).join(' | '),
  ]);
  const csv = [header, ...lines]
    .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    .join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'memoria-spanish.csv';
  a.click();
  URL.revokeObjectURL(url);
}
