import { GRAMMAR_TEST_LEVEL_BANK } from './grammar-test-bank.js';

export const PRACTICE_LEVEL_META = {
  A1: {
    title: 'A1 - Base',
    focus: 'survival phrases, present tense, family, numbers, simple questions',
    canDo: 'Understand and answer very short everyday sentences.',
  },
  A2: {
    title: 'A2 - Daily life',
    focus: 'past/future basics, common connectors, shopping, travel, routines',
    canDo: 'Handle familiar situations with simple connected sentences.',
  },
  B1: {
    title: 'B1 - Stories',
    focus: 'narration, opinions, contrast, preterite vs imperfect, useful fluency',
    canDo: 'Tell what happened, explain choices, and keep a conversation moving.',
  },
  B2: {
    title: 'B2 - Control',
    focus: 'subjunctive, nuance, argument, idioms, precise reading and listening',
    canDo: 'Discuss ideas clearly and understand longer authentic texts.',
  },
};

export function stripMarkers(value) {
  return String(value || '').replace(/[\[\]{}]/g, '');
}

export function normalizeForCompare(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[\[\]{}]/g, '')
    .replace(/[^a-z\sñü]/g, '')
    .trim();
}

export function shuffleList(list) {
  return [...(list || [])].sort(() => Math.random() - 0.5);
}

export function collectQuizPairs(source) {
  const pairs = [];
  function add(es, en) {
    if (!es || !en) return;
    const cleanEs = stripMarkers(String(es)).trim();
    const cleanEn = String(en).trim();
    if (cleanEs.length < 2 || cleanEn.length < 2) return;
    pairs.push({ es: cleanEs, en: cleanEn });
  }

  for (const section of source?.sections || []) {
    for (const ex of section.examples || []) add(ex.es, ex.en);
    for (const row of section.table?.rows || []) {
      if (row?.[0] && row?.[1]) add(row[1], `${row[0]} form`);
    }
  }

  for (const block of source?.blocks || []) {
    for (const p of block.pairs || []) add(p.es, p.en);
    for (const w of block.columns || []) add(w.es, w.en);
    for (const p of block.phrases || []) add(p.es, p.en);
    for (const word of block.words || []) add(word.es, word.en);
    for (const ex of block.examples || []) add(ex.es, ex.en);
    for (const row of block.table?.rows || []) {
      if (row?.[0] && row?.[1]) add(row[1], `${row[0]} form`);
    }
    for (const lesson of block.lessons || []) {
      for (const pair of collectQuizPairs(lesson)) add(pair.es, pair.en);
    }
  }

  const unique = [];
  const seen = new Set();
  for (const pair of pairs) {
    const key = normalizeForCompare(pair.es);
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(pair);
    }
  }
  return unique;
}

export function buildLessonQuiz(source, options = {}) {
  const requestedCount = Number(options.count) || 4;
  const pairs = collectQuizPairs(source);
  if (pairs.length < 2) return [];
  const safeCount = Math.max(2, Math.min(requestedCount, pairs.length));
  const picked = shuffleList(pairs).slice(0, safeCount);
  return picked.map((pair, index) => {
    const askSpanish = index % 2 === 0;
    const answer = askSpanish ? pair.es : pair.en;
    const distractors = shuffleList(pairs)
      .filter((candidate) => candidate !== pair)
      .map((candidate) => askSpanish ? candidate.es : candidate.en)
      .filter((value) => normalizeForCompare(value) !== normalizeForCompare(answer))
      .slice(0, 3);
    return {
      prompt: askSpanish ? pair.en : pair.es,
      answer,
      speak: pair.es,
      mode: askSpanish ? 'Elige el espanol' : 'Elige la traduccion',
      choices: shuffleList([answer, ...distractors]).slice(0, 4),
    };
  });
}

export function buildLessonTypingQuiz(source, count = 8) {
  const pairs = collectQuizPairs(source);
  if (pairs.length < 2) return [];
  const safeCount = Math.max(2, Math.min(count, pairs.length));
  const picked = shuffleList(pairs).slice(0, safeCount);
  return picked.map((pair, index) => {
    const askSpanish = index % 2 === 0;
    return {
      prompt: askSpanish ? pair.en : pair.es,
      answer: askSpanish ? pair.es : pair.en,
      speak: pair.es,
      mode: askSpanish ? 'Escribe en espanol' : 'Write in English',
      tip: askSpanish
        ? 'Escribe la traduccion en espanol. Puedes omitir mayusculas y tildes.'
        : 'Write the English translation.',
    };
  });
}

export function buildListeningQuiz(source, count = 8) {
  const pairs = collectQuizPairs(source);
  if (pairs.length < 2) return [];
  const safeCount = Math.max(2, Math.min(count, pairs.length));
  const picked = shuffleList(pairs).slice(0, safeCount);
  return picked.map((pair) => {
    const answer = pair.en;
    const distractors = shuffleList(pairs)
      .filter((candidate) => candidate !== pair)
      .map((candidate) => candidate.en)
      .filter((value) => normalizeForCompare(value) !== normalizeForCompare(answer))
      .slice(0, 3);
    return {
      prompt: 'Escucha y elige la traduccion correcta',
      answer,
      speak: pair.es,
      es: pair.es,
      choices: shuffleList([answer, ...distractors]).slice(0, 4),
    };
  });
}

export function buildGrammarBankQuiz(level, count = 12) {
  const bank = Array.isArray(GRAMMAR_TEST_LEVEL_BANK?.[level]) ? GRAMMAR_TEST_LEVEL_BANK[level] : [];
  if (!bank.length) return [];
  const safeCount = Math.max(4, Math.min(count, bank.length));
  const picked = shuffleList(bank).slice(0, safeCount);
  return picked.map((item) => {
    const choices = Array.isArray(item.choices) ? [...item.choices] : [];
    const answer = choices[item.answerIndex] || '';
    return {
      prompt: item.prompt || '',
      answer,
      speak: item.prompt || '',
      mode: `${item.level} - ${item.section || 'Grammar'}`,
      choices: shuffleList(choices).slice(0, 4),
      explanation: item.explanation || '',
    };
  }).filter((question) => question.prompt && question.answer && question.choices.length >= 2);
}

let quizFeedbackAudioCtx = null;

export function playQuizFeedbackSound(kind = 'correct') {
  if (typeof window === 'undefined') return;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  try {
    if (!quizFeedbackAudioCtx) quizFeedbackAudioCtx = new AudioContextClass();
    const ctx = quizFeedbackAudioCtx;
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    const now = ctx.currentTime;
    const gain = ctx.createGain();
    gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.08, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

    const oscA = ctx.createOscillator();
    oscA.type = 'sine';
    oscA.frequency.setValueAtTime(kind === 'correct' ? 760 : 300, now);
    oscA.connect(gain);
    oscA.start(now);
    oscA.stop(now + 0.22);

    if (kind === 'correct') {
      const oscB = ctx.createOscillator();
      oscB.type = 'triangle';
      oscB.frequency.setValueAtTime(1040, now + 0.1);
      oscB.connect(gain);
      oscB.start(now + 0.1);
      oscB.stop(now + 0.24);
    }
  } catch (_) {}
}

export function buildPracticeHealth({ score = 0, total = 0 } = {}) {
  const percent = total ? Math.round((score / total) * 100) : 0;
  if (percent >= 90) return { percent, status: 'mastered', label: 'Dominado' };
  if (percent >= 75) return { percent, status: 'strong', label: 'Fuerte' };
  if (percent >= 55) return { percent, status: 'understood', label: 'Entendido' };
  return { percent, status: 'practicing', label: 'Practicar mas' };
}
