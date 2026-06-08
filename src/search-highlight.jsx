import React, { useMemo } from 'react';

const SEARCH_HIGHLIGHT_DIACRITICS_RE = /[\u0300-\u036f]/g;
const SEARCH_HIGHLIGHT_TOKEN_RE = /([\p{L}\p{N}]+)|([^\p{L}\p{N}]+)/gu;

function buildHighlightIndex(text) {
  const source = String(text || '');
  let normalized = '';
  const map = [];
  for (let i = 0; i < source.length; i += 1) {
    const normalizedChar = source[i]
      .normalize('NFD')
      .replace(SEARCH_HIGHLIGHT_DIACRITICS_RE, '')
      .toLowerCase();
    for (let j = 0; j < normalizedChar.length; j += 1) {
      normalized += normalizedChar[j];
      map.push(i);
    }
  }
  return { normalized, map };
}

function getSearchHighlightRanges(text, query) {
  const needle = buildHighlightIndex(String(query || '').trim()).normalized;
  if (!needle) return [];
  const { normalized, map } = buildHighlightIndex(text);
  const ranges = [];
  let fromIndex = 0;
  while (fromIndex < normalized.length) {
    const matchIndex = normalized.indexOf(needle, fromIndex);
    if (matchIndex === -1) break;
    ranges.push({
      start: map[matchIndex],
      end: map[matchIndex + needle.length - 1] + 1,
    });
    fromIndex = matchIndex + Math.max(needle.length, 1);
  }
  return ranges;
}

function splitByHighlightRanges(text, ranges, baseStart = 0) {
  const source = String(text || '');
  if (!ranges.length) return [{ text: source, highlighted: false }];
  const parts = [];
  let cursor = 0;
  const tokenEnd = baseStart + source.length;
  for (const range of ranges) {
    const start = Math.max(range.start, baseStart) - baseStart;
    const end = Math.min(range.end, tokenEnd) - baseStart;
    if (end <= cursor || start >= source.length) continue;
    if (start > cursor) {
      parts.push({ text: source.slice(cursor, start), highlighted: false });
    }
    parts.push({ text: source.slice(Math.max(start, cursor), end), highlighted: true });
    cursor = end;
  }
  if (cursor < source.length) {
    parts.push({ text: source.slice(cursor), highlighted: false });
  }
  return parts.length ? parts : [{ text: source, highlighted: false }];
}

export function SearchHighlightedText({ text, query }) {
  const ranges = useMemo(() => getSearchHighlightRanges(text, query), [text, query]);
  return (
    <>
      {splitByHighlightRanges(text, ranges).map((part, index) => (
        part.highlighted ? (
          <mark key={index} className="search-hit">{part.text}</mark>
        ) : (
          <React.Fragment key={index}>{part.text}</React.Fragment>
        )
      ))}
    </>
  );
}

export function SearchHighlightedDictionaryText({ text, query }) {
  const ranges = useMemo(() => getSearchHighlightRanges(text, query), [text, query]);
  const tokens = useMemo(() => {
    const result = [];
    const source = String(text || '');
    let match;
    SEARCH_HIGHLIGHT_TOKEN_RE.lastIndex = 0;
    while ((match = SEARCH_HIGHLIGHT_TOKEN_RE.exec(source)) !== null) {
      result.push({ text: match[0], isWord: !!match[1], charStart: match.index });
    }
    return result;
  }, [text]);

  return (
    <>
      {tokens.map((token, tokenIndex) => {
        const content = splitByHighlightRanges(token.text, ranges, token.charStart).map((part, partIndex) => (
          part.highlighted ? (
            <mark key={partIndex} className="search-hit">{part.text}</mark>
          ) : (
            <React.Fragment key={partIndex}>{part.text}</React.Fragment>
          )
        ));
        return token.isWord ? (
          <span key={tokenIndex} className="dict-word-token" data-dict-word={token.text}>
            {content}
          </span>
        ) : (
          <span key={tokenIndex}>{content}</span>
        );
      })}
    </>
  );
}
