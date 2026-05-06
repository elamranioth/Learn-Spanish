import { getDictionaryLookupVariants } from './spanish-dictionary.js';

export const DAY_MS = 24 * 60 * 60 * 1000;
export const LEARNER_PROFILE_KEY = 'learner-profile-v1';

export function normalizeTerm(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[¿?¡!.,;:()"']/g, '')
    .replace(/\s+/g, ' ')
    .replace(/^(el|la|los|las|un|una|unos|unas)\s+/, '')
    .trim();
}

export function normalizeAnswer(value) {
  return normalizeTerm(value)
    .replace(/[\[\]{}]/g, '')
    .replace(/[^a-z\sñü]/g, '')
    .trim();
}

export function scheduleReview(previous, rating, now = Date.now()) {
  const oldInterval = previous?.intervalDays || 0;
  const oldEase = previous?.ease || 2.35;
  const oldReps = previous?.reps || 0;
  const config = {
    again: { label: 'Again', easeDelta: -0.18, minDays: 10 / 1440, multiplier: 0.2 },
    hard: { label: 'Hard', easeDelta: -0.08, minDays: 1, multiplier: 1.15 },
    good: { label: 'Good', easeDelta: 0.02, minDays: oldReps ? 2 : 1, multiplier: oldEase },
    easy: { label: 'Easy', easeDelta: 0.12, minDays: oldReps ? 4 : 3, multiplier: oldEase + 0.7 },
  }[rating] || { label: 'Good', easeDelta: 0, minDays: 1, multiplier: oldEase };

  const ease = Math.max(1.35, Math.min(3.2, oldEase + config.easeDelta));
  const intervalDays = rating === 'again'
    ? config.minDays
    : Math.max(config.minDays, (oldInterval || 1) * config.multiplier);

  return {
    ...previous,
    ease,
    intervalDays,
    dueAt: now + intervalDays * DAY_MS,
    reps: rating === 'again' ? 0 : oldReps + 1,
    lapses: rating === 'again' ? (previous?.lapses || 0) + 1 : previous?.lapses || 0,
    seen: true,
    mastered: rating === 'easy' || intervalDays >= 7,
    lastRating: config.label,
    reviewedAt: now,
  };
}

export function collectChapterText(block) {
  const parts = [block.title, block.heading, block.text];
  for (const p of block.paragraphs || []) parts.push(p);
  for (const p of block.pairs || []) parts.push(p.es, p.en);
  for (const w of block.columns || []) parts.push(w.es, w.en);
  for (const p of block.phrases || []) parts.push(p.es, p.en);
  for (const w of block.words || []) parts.push(w.es, w.en);
  for (const lesson of block.lessons || []) {
    parts.push(lesson.title, lesson.subtitle, lesson.intro);
    for (const section of lesson.sections || []) {
      parts.push(section.heading, section.text, section.tip, section.takeaway);
      for (const row of section.table?.rows || []) parts.push(...row);
      for (const ex of section.examples || []) parts.push(ex.es, ex.en);
    }
  }
  for (const story of block.stories || []) parts.push(story.title, story.level, ...(story.paragraphs || []));
  for (const bio of block.bios || []) {
    parts.push(bio.title, bio.subtitle, bio.dates);
    for (const level of bio.levels || []) parts.push(level.heading, ...(level.paragraphs || []), level.vocab);
  }
  for (const poem of block.poems || []) {
    parts.push(poem.title, poem.attribution, poem.note, poem.opening, poem.learningNote);
    for (const stanza of poem.stanzas || []) parts.push(stanza.es, stanza.en);
    for (const vocab of poem.vocab || []) parts.push(vocab.es, vocab.en);
  }
  for (const song of block.songs || []) {
    parts.push(song.title, song.attribution, song.note, song.learningNote);
    for (const section of song.sections || []) parts.push(section.label, section.es, section.en);
    for (const vocab of song.vocab || []) parts.push(vocab.es, vocab.en);
  }
  return parts.filter(Boolean).join(' ');
}

export function buildEnhancedSearchResults(query, chapters, savedWords = [], writingEntries = []) {
  const q = normalizeTerm(query);
  if (q.length < 2) return [];
  const results = [];

  for (const chapter of chapters || []) {
    const chapterText = [chapter.title, chapter.subtitle, chapter.intro, chapter.sectionLabel, chapter.level].filter(Boolean).join(' ');
    if (normalizeTerm(chapterText).includes(q)) {
      results.push({ type: 'chapter', title: chapter.title, meta: `${chapter.sectionLabel} - ${chapter.level}`, chapter, context: chapter.subtitle || chapter.intro || '' });
    }
    for (const block of chapter.blocks || []) {
      const blockText = collectChapterText(block);
      if (normalizeTerm(blockText).includes(q)) {
        results.push({
          type: 'match',
          title: chapter.title,
          meta: `${chapter.sectionLabel} - match inside lesson`,
          chapter,
          context: findSnippet(blockText, query),
        });
      }
    }
  }

  for (const entry of savedWords || []) {
    const text = [entry.word, entry.translation, entry.pos, ...(entry.tags || [])].join(' ');
    if (normalizeTerm(text).includes(q)) {
      results.push({ type: 'memoria', title: entry.word, meta: entry.translation || 'Memoria', context: (entry.tags || []).join(', ') });
    }
  }

  for (const entry of writingEntries || []) {
    const text = [entry.prompt, entry.text].join(' ');
    if (normalizeTerm(text).includes(q)) {
      results.push({ type: 'writing', title: 'Writing entry', meta: new Date(entry.createdAt || Date.now()).toLocaleDateString(), context: findSnippet(text, query) });
    }
  }

  const seen = new Set();
  return results.filter((item) => {
    const key = `${item.type}:${item.title}:${item.context}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, 18);
}

function findSnippet(text, query) {
  const raw = String(text || '').replace(/\s+/g, ' ').trim();
  const normalizedQuery = normalizeTerm(query);
  const directIdx = raw.toLowerCase().indexOf(String(query || '').toLowerCase());
  if (directIdx >= 0) {
    return raw.slice(Math.max(0, directIdx - 45), directIdx + 95).trim();
  }

  let normalized = '';
  const rawIndexByNormalizedIndex = [];
  for (let i = 0; i < raw.length; i++) {
    const normalizedChar = raw[i]
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[¿?¡!.,;:()"']/g, '');
    if (!normalizedChar) continue;
    for (const ch of normalizedChar) {
      normalized += ch;
      rawIndexByNormalizedIndex.push(i);
    }
  }

  const idx = normalized.indexOf(normalizedQuery);
  if (idx < 0) return raw.slice(0, 120);
  const rawStart = rawIndexByNormalizedIndex[Math.max(0, idx - 45)] ?? 0;
  const rawEnd = rawIndexByNormalizedIndex[Math.min(rawIndexByNormalizedIndex.length - 1, idx + normalizedQuery.length + 95)] ?? raw.length;
  return raw.slice(rawStart, rawEnd).trim();
}

export function analyzeWritingDraft(draft, prompt = {}) {
  const text = String(draft || '');
  const normalized = normalizeTerm(text);
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const sentenceParts = text.split(/[.!?]+/).map((part) => part.trim()).filter(Boolean);
  const sentences = (text.match(/[.!?]/g) || []).length || (sentenceParts.length ? 1 : 0);
  const accents = (text.match(/[áéíóúñüÁÉÍÓÚÑÜ]/g) || []).length;
  const connectors = (text.match(/\b(pero|porque|aunque|entonces|tambien|también|ademas|además|sin embargo|por eso|cuando|mientras)\b/gi) || []).length;
  const verbs = (text.match(/\b(soy|eres|es|somos|son|estoy|estas|está|esta|estamos|estan|están|tengo|tienes|tiene|tenemos|tienen|quiero|quieres|quiere|puedo|puedes|puede|voy|vas|va|vamos|van|hago|haces|hace|digo|dices|dice|veo|ves|ve|vivo|vives|vive|trabajo|trabajas|trabaja|estudio|estudias|estudia|fui|fue|era|tenia|tenía|hablo|hablas|habla|aprendo|aprendes|aprende)\b/gi) || []).length;
  const targetVariants = prompt?.target ? getDictionaryLookupVariants(prompt.target).map(normalizeTerm) : [];
  const targetUsed = prompt?.target ? targetVariants.some((term) => normalized.includes(term)) : true;
  const likelyEnglish = (text.match(/\b(the|and|but|because|with|from|about|today|question|answer|write|spanish)\b/gi) || []).length;
  const accentCandidates = (text.match(/\b(tambien|ademas|tenia|dias|mas|esta|si|tu|el)\b/gi) || []).length;
  const spanishSignals = (text.match(/\b(el|la|los|las|un|una|yo|tu|tú|usted|nosotros|porque|pero|que|de|con|para|por|en|mi|mis|su|sus|muy|mas|más|tambien|también)\b/gi) || []).length;
  const repeatedStarts = sentenceParts
    .map((part) => normalizeTerm(part).split(' ')[0])
    .filter(Boolean)
    .reduce((count, word, index, arr) => count + (index > 0 && word === arr[index - 1] ? 1 : 0), 0);
  const longSentences = sentenceParts.filter((part) => part.split(/\s+/).filter(Boolean).length > 28).length;
  const tips = [];

  if (words < 20) tips.push('Add more detail.');
  if (sentences < 2) tips.push('Use at least two complete sentences.');
  if (!targetUsed) tips.push('Use the prompt word or idea.');
  if (accents === 0) tips.push('Check accents when needed.');
  if (accentCandidates > 0) tips.push('Look for missing accents: también, además, tenía, días, más, está, sí, tú, él.');
  if (likelyEnglish > 0) tips.push('Replace the English words with Spanish before saving.');
  if (connectors < 1 && words >= 20) tips.push('Add a connector like porque, aunque, or entonces.');
  if (verbs < 2 && words >= 15) tips.push('Use more conjugated verbs.');
  if (spanishSignals < 3 && words >= 12) tips.push('Make it sound more Spanish with small glue words: que, de, en, para, por, con.');
  if (repeatedStarts > 0) tips.push('Vary how your sentences begin.');
  if (longSentences > 0) tips.push('Split one long sentence into two clearer sentences.');
  if (words >= 35 && sentences >= 3 && connectors >= 1 && likelyEnglish === 0 && accentCandidates === 0) tips.push('Strong draft. Next: try one sentence in a different tense.');

  const score = Math.max(0, Math.min(100,
    20 +
    Math.min(words, 60) +
    Math.min(sentences * 8, 20) +
    Math.min(connectors * 6, 12) +
    Math.min(verbs * 4, 16) +
    Math.min(spanishSignals * 2, 10) +
    (targetUsed ? 10 : -10) -
    Math.min(likelyEnglish * 8, 24) -
    Math.min(accentCandidates * 3, 12) -
    Math.min(repeatedStarts * 4, 8) -
    Math.min(longSentences * 5, 10)
  ));

  return { words, sentences, accents, connectors, verbs, targetUsed, likelyEnglish, accentCandidates, spanishSignals, repeatedStarts, longSentences, tips, score };
}

export function buildLearnerProfile({ chapters = [], visitedChapters = [], lessonStatuses = {}, palabrasProgress = {}, savedWords = [], writingEntries = [] } = {}, now = Date.now()) {
  const lessonValues = Object.values(lessonStatuses || {});
  const palabrasValues = Object.values(palabrasProgress || {});
  const savedReview = savedWords.map((entry) => entry.review).filter(Boolean);
  const reviewValues = [...palabrasValues, ...savedReview];
  return {
    chapters: {
      total: chapters.length,
      visited: chapters.filter((chapter) => visitedChapters.includes(chapter.id)).length,
      unvisited: Math.max(0, chapters.length - chapters.filter((chapter) => visitedChapters.includes(chapter.id)).length),
    },
    lessons: {
      read: lessonValues.filter((status) => status === 'read' || status === 'understood').length,
      understood: lessonValues.filter((status) => status === 'understood').length,
    },
    vocabulary: {
      seen: reviewValues.filter((state) => state?.seen).length,
      due: reviewValues.filter((state) => state?.seen && (state.dueAt || 0) <= now).length,
      mastered: reviewValues.filter((state) => state?.mastered).length,
      difficult: savedWords.filter((entry) => entry.difficult || entry.review?.lastRating === 'Hard').length,
      favorite: savedWords.filter((entry) => entry.favorite).length,
    },
    writing: {
      count: writingEntries.length,
      words: writingEntries.reduce((sum, entry) => sum + (entry.feedback?.words || 0), 0),
      needsPractice: writingEntries.filter((entry) => (entry.feedback?.score || 0) < 70).length,
    },
  };
}

export function buildUnifiedReviewQueue({ chapters = [], lessonStatuses = {}, palabrasProgress = {}, savedWords = [], writingEntries = [] } = {}, now = Date.now()) {
  const queue = [];
  for (const state of Object.values(palabrasProgress || {})) {
    if (!state?.seen) continue;
    if ((state.dueAt || 0) <= now || state.lastRating === 'Hard') {
      queue.push({
        type: 'palabra',
        title: state.spanish || 'Palabra',
        detail: state.english || state.lastRating || '',
        dueAt: state.dueAt || now,
        priority: state.lastRating === 'Again' ? 3 : state.lastRating === 'Hard' ? 2 : 1,
      });
    }
  }
  for (const entry of savedWords || []) {
    const due = entry.review?.seen && (entry.review?.dueAt || 0) <= now;
    if (due || entry.difficult || !entry.translation) {
      queue.push({
        type: 'memoria',
        title: entry.word,
        detail: entry.translation || 'Needs translation',
        dueAt: entry.review?.dueAt || now,
        priority: entry.difficult ? 3 : due ? 2 : 1,
      });
    }
  }
  for (const [key, status] of Object.entries(lessonStatuses || {})) {
    if (status === 'read') {
      const title = key.split('::').pop() || key;
      queue.push({ type: 'lesson', title, detail: 'Mark understood after review', dueAt: now, priority: 1 });
    }
  }
  for (const entry of writingEntries || []) {
    if ((entry.feedback?.score || 0) < 70 || entry.feedback?.tips?.length) {
      queue.push({ type: 'writing', title: entry.prompt || 'Writing practice', detail: (entry.feedback?.tips || [])[0] || 'Rewrite once', dueAt: entry.createdAt || now, priority: 1 });
    }
  }
  if (queue.length < 6) {
    for (const chapter of chapters || []) {
      if (!chapter.alwaysVisible) {
        queue.push({ type: 'chapter', title: chapter.title, detail: `${chapter.sectionLabel} - ${chapter.level}`, chapter, dueAt: now + queue.length, priority: 0 });
      }
      if (queue.length >= 6) break;
    }
  }
  return queue.sort((a, b) => (b.priority - a.priority) || ((a.dueAt || 0) - (b.dueAt || 0))).slice(0, 24);
}
