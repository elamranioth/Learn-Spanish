const IRREGULAR_LEMMAS = {
  soy: ['ser'],
  eres: ['ser'],
  es: ['ser'],
  somos: ['ser'],
  son: ['ser'],
  fui: ['ser', 'ir'],
  fuiste: ['ser', 'ir'],
  fue: ['ser', 'ir'],
  fuimos: ['ser', 'ir'],
  fueron: ['ser', 'ir'],
  era: ['ser'],
  eras: ['ser'],
  eramos: ['ser'],
  eran: ['ser'],
  estoy: ['estar'],
  estas: ['estar'],
  esta: ['estar'],
  estamos: ['estar'],
  estan: ['estar'],
  estuve: ['estar'],
  estuvo: ['estar'],
  estuvieron: ['estar'],
  tengo: ['tener'],
  tienes: ['tener'],
  tiene: ['tener'],
  tenemos: ['tener'],
  tienen: ['tener'],
  tuve: ['tener'],
  tuvo: ['tener'],
  tuvieron: ['tener'],
  voy: ['ir'],
  vas: ['ir'],
  va: ['ir'],
  vamos: ['ir'],
  van: ['ir'],
  iba: ['ir'],
  ibas: ['ir'],
  iban: ['ir'],
  puedo: ['poder'],
  puedes: ['poder'],
  puede: ['poder'],
  podemos: ['poder'],
  pueden: ['poder'],
  pude: ['poder'],
  pudo: ['poder'],
  pudieron: ['poder'],
  quiero: ['querer'],
  quieres: ['querer'],
  quiere: ['querer'],
  queremos: ['querer'],
  quieren: ['querer'],
  quise: ['querer'],
  quiso: ['querer'],
  hago: ['hacer'],
  haces: ['hacer'],
  hace: ['hacer'],
  hacemos: ['hacer'],
  hacen: ['hacer'],
  hice: ['hacer'],
  hizo: ['hacer'],
  hicieron: ['hacer'],
  digo: ['decir'],
  dices: ['decir'],
  dice: ['decir'],
  decimos: ['decir'],
  dicen: ['decir'],
  dije: ['decir'],
  dijo: ['decir'],
  dijeron: ['decir'],
  veo: ['ver'],
  ves: ['ver'],
  ve: ['ver'],
  vemos: ['ver'],
  ven: ['ver'],
  vi: ['ver'],
  vio: ['ver'],
  vieron: ['ver'],
  vengo: ['venir'],
  vienes: ['venir'],
  viene: ['venir'],
  vienen: ['venir'],
  vine: ['venir'],
  vino: ['venir'],
  vinieron: ['venir'],
  pongo: ['poner'],
  pones: ['poner'],
  pone: ['poner'],
  ponen: ['poner'],
  puse: ['poner'],
  puso: ['poner'],
  pusieron: ['poner'],
  salgo: ['salir'],
  sales: ['salir'],
  sale: ['salir'],
  salen: ['salir'],
  se: ['saber', 'ser'],
  sabe: ['saber'],
  saben: ['saber'],
  supe: ['saber'],
  supo: ['saber'],
  dijeron: ['decir'],
  doy: ['dar'],
  das: ['dar'],
  da: ['dar'],
  dan: ['dar'],
  di: ['dar', 'decir'],
  dio: ['dar'],
  dieron: ['dar'],
};

export function cleanDictionaryWord(raw) {
  return String(raw || '')
    .replace(/Ã¡/g, 'á')
    .replace(/Ã©/g, 'é')
    .replace(/Ã­/g, 'í')
    .replace(/Ã³/g, 'ó')
    .replace(/Ãº/g, 'ú')
    .replace(/Ã±/g, 'ñ')
    .replace(/Ã¼/g, 'ü')
    .replace(/Â¡/g, '¡')
    .replace(/Â¿/g, '¿')
    .trim()
    .replace(/^[\s"'“”‘’¡!¿?.,;:()[\]{}<>*_/\\—–-]+|[\s"'“”‘’¡!¿?.,;:()[\]{}<>*_/\\—–-]+$/gu, '')
    .trim()
    .toLowerCase();
}

export function normalizeDictionaryLookup(value) {
  return cleanDictionaryWord(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/^(el|la|los|las|un|una|unos|unas)\s+/, '')
    .trim();
}

function addVerbGuess(variants, base, suffix, endings) {
  if (!base.endsWith(suffix) || base.length <= suffix.length + 1) return;
  const stem = base.slice(0, -suffix.length);
  endings.forEach((ending) => variants.add(`${stem}${ending}`));
}

export function getDictionaryLookupVariants(value) {
  const base = normalizeDictionaryLookup(value);
  const variants = new Set([base]);
  if (!base) return [];

  for (const lemma of IRREGULAR_LEMMAS[base] || []) variants.add(lemma);

  // Plural and gender forms: familias -> familia, bonitas -> bonita/bonito.
  if (base.endsWith('ces') && base.length > 5) variants.add(`${base.slice(0, -3)}z`);
  if (base.endsWith('es') && base.length > 4) variants.add(base.slice(0, -2));
  if (base.endsWith('s') && base.length > 3) variants.add(base.slice(0, -1));
  if (base.endsWith('as') && base.length > 4) {
    variants.add(base.slice(0, -1));
    variants.add(`${base.slice(0, -2)}o`);
  }
  if (base.endsWith('os') && base.length > 4) variants.add(base.slice(0, -1));
  if (base.endsWith('a') && base.length > 3) variants.add(`${base.slice(0, -1)}o`);

  [
    ['amos', ['ar']], ['ando', ['ar']], ['ado', ['ar']], ['aste', ['ar']], ['aron', ['ar']],
    ['aba', ['ar']], ['abas', ['ar']], ['abamos', ['ar']], ['aban', ['ar']],
    ['arian', ['ar']], ['aria', ['ar']], ['are', ['ar']], ['aras', ['ar']], ['ara', ['ar']],
    ['as', ['ar']], ['an', ['ar']], ['a', ['ar']], ['e', ['ar']], ['o', ['ar']],
    ['emos', ['er']], ['iendo', ['er', 'ir']], ['ido', ['er', 'ir']], ['iste', ['er', 'ir']],
    ['ieron', ['er', 'ir']], ['ia', ['er', 'ir']], ['ias', ['er', 'ir']], ['iamos', ['er', 'ir']],
    ['ian', ['er', 'ir']], ['eria', ['er']], ['irian', ['ir']], ['iria', ['ir']],
    ['ere', ['er']], ['ire', ['ir']], ['es', ['er', 'ir']], ['en', ['er', 'ir']],
    ['e', ['er', 'ir']], ['imos', ['ir']], ['io', ['er', 'ir']], ['i', ['er', 'ir']],
    ['o', ['er', 'ir']],
  ].forEach(([suffix, endings]) => addVerbGuess(variants, base, suffix, endings));

  return [...variants].filter(Boolean);
}

export function getDisplaySpanish(entry) {
  return entry.topicTerm || entry.spanish;
}

export function getDisplayEnglish(entry) {
  return entry.topicEnglish || entry.english;
}

export function findStoredDictionaryEntry(word, savedWords = [], vocabularyGroups = []) {
  const variants = new Set(getDictionaryLookupVariants(word));
  const savedMatch = savedWords.find((entry) => variants.has(normalizeDictionaryLookup(entry.word)));
  if (savedMatch) {
    return {
      main: savedMatch.translation || 'Saved in Memoria',
      extras: savedMatch.extras || [],
      pos: savedMatch.pos || 'Memoria',
      source: 'Memoria',
      stored: true,
      matchedWord: savedMatch.word,
    };
  }

  for (const group of vocabularyGroups || []) {
    for (const entry of group.entries || []) {
      const labels = [entry.spanish, entry.topicTerm, getDisplaySpanish(entry)];
      if (labels.some((label) => variants.has(normalizeDictionaryLookup(label)))) {
        return {
          main: getDisplayEnglish(entry),
          extras: entry.topicEnglish && entry.topicEnglish !== entry.english ? [entry.english].filter(Boolean) : [],
          pos: group.title || entry.sourceGroupTitle || 'Palabras',
          source: 'Palabras',
          stored: true,
          matchedWord: getDisplaySpanish(entry),
        };
      }
    }
  }

  return null;
}

export async function translateWord(word) {
  const errors = [];
  const clean = cleanDictionaryWord(word);
  const candidates = [...new Set([clean, ...getDictionaryLookupVariants(clean)])].filter(Boolean).slice(0, 4);
  const timeout = (ms) => (typeof AbortSignal !== 'undefined' && AbortSignal.timeout) ? AbortSignal.timeout(ms) : undefined;

  async function tryCandidate(candidate) {
    const w = encodeURIComponent(candidate);

    try {
      const r = await fetch(`https://linguee-api.fly.dev/api/v2/translations?query=${w}&src=es&dst=en`, { signal: timeout(3500) });
      if (r.ok) {
        const data = await r.json();
        if (Array.isArray(data) && data.length > 0) {
          const lemma = data[0];
          const main = lemma?.translations?.[0]?.text?.trim();
          if (main) {
            const extras = (lemma.translations || [])
              .slice(1, 5)
              .map(t => t.text?.trim())
              .filter(Boolean);
            const examples = [];
            for (const tr of (lemma.translations || [])) {
              for (const ex of (tr.examples || [])) {
                if (ex.src && ex.dst && examples.length < 2) examples.push({ es: ex.src, en: ex.dst });
              }
              if (examples.length >= 2) break;
            }
            return { main, extras, pos: lemma.pos || lemma.translations?.[0]?.pos || '', examples, source: 'Linguee', matchedWord: candidate };
          }
        }
      } else {
        errors.push(`Linguee ${candidate}: HTTP ${r.status}`);
      }
    } catch (e) {
      errors.push(`Linguee ${candidate}: ${e.message}`);
    }

    try {
      const r = await fetch(`https://glosbe.com/gapi/translate?from=spa&dest=eng&format=json&phrase=${w}&pretty=true`, { signal: timeout(3500) });
      if (r.ok) {
        const data = await r.json();
        const tucs = data?.tuc || [];
        const phrases = tucs.map(t => t?.phrase?.text?.trim()).filter(Boolean);
        const meanings = tucs.flatMap(t => (t?.meanings || []).map(m => m?.text?.trim())).filter(Boolean);
        if (phrases.length > 0) {
          const main = phrases[0];
          const extras = phrases.slice(1, 5).filter(p => p.toLowerCase() !== main.toLowerCase());
          return { main, extras, pos: '', meanings: meanings.slice(0, 3), source: 'Glosbe', matchedWord: candidate };
        }
      } else {
        errors.push(`Glosbe ${candidate}: HTTP ${r.status}`);
      }
    } catch (e) {
      errors.push(`Glosbe ${candidate}: ${e.message}`);
    }

    try {
      const r = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/es/${w}`, { signal: timeout(3500) });
      if (r.ok) {
        const data = await r.json();
        if (Array.isArray(data) && data.length > 0) {
          const entry = data[0];
          const meaning = entry?.meanings?.[0];
          const def = meaning?.definitions?.[0]?.definition?.trim();
          if (def) {
            return { main: def, extras: [], pos: meaning?.partOfSpeech || '', source: 'Diccionario', isDefinition: true, matchedWord: candidate };
          }
        }
      } else {
        errors.push(`FreeDict ${candidate}: HTTP ${r.status}`);
      }
    } catch (e) {
      errors.push(`FreeDict ${candidate}: ${e.message}`);
    }

    return null;
  }

  for (const candidate of candidates) {
    const result = await tryCandidate(candidate);
    if (result) return result;
  }

  const googleQuery = encodeURIComponent(clean);
  try {
    const r = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=en&dt=t&dj=1&q=${googleQuery}`, { signal: timeout(4000) });
    if (r.ok) {
      const data = await r.json();
      const main = data?.sentences?.[0]?.trans?.trim();
      if (main && main.toLowerCase() !== clean.toLowerCase()) return { main, extras: [], pos: '', source: 'Google' };
    }
  } catch (e) {
    errors.push(`Google: ${e.message}`);
  }

  try {
    const r = await fetch(`https://api.mymemory.translated.net/get?q=${googleQuery}&langpair=es|en`, { signal: timeout(4000) });
    if (r.ok) {
      const data = await r.json();
      const main = data?.responseData?.translatedText?.trim();
      if (main && main.toLowerCase() !== clean.toLowerCase() && !/PLEASE|MYMEMORY|INVALID|QUOTA/i.test(main)) {
        return { main, extras: [], pos: '', source: 'MyMemory' };
      }
    }
  } catch (e) {
    errors.push(`MyMemory: ${e.message}`);
  }

  if (errors.length) console.warn('Lookup failed for', word, errors);
  return null;
}
