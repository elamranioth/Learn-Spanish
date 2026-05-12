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
    due: words.filter((entry) => entry.review?.seen && (entry.review?.dueAt || 0) <= now).length,
    mastered: words.filter((entry) => entry.review?.mastered).length,
    difficult: words.filter((entry) => entry.difficult || entry.review?.lastRating === 'Hard').length,
    favorite: words.filter((entry) => entry.favorite).length,
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
