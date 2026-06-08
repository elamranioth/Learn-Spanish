import React, { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Search, X } from 'lucide-react';
import { SpeakBtn } from './audio-text.jsx';
import { normalizeForCompare } from './practice-engine.js';
import { SearchHighlightedDictionaryText, SearchHighlightedText } from './search-highlight.jsx';

const EXPRESSIONS_PAGE_KEY_PREFIX = 'lexiora-frases-page-v1';

function getExpressionsPageKey(library) {
  const raw = String(library?.title || library?.eyebrow || 'default')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'default';
  return `${EXPRESSIONS_PAGE_KEY_PREFIX}:${raw}`;
}

function readStoredExpressionsPage(key) {
  if (typeof window === 'undefined') return 0;
  try {
    const parsed = Number(window.localStorage?.getItem(key));
    return Number.isFinite(parsed) && parsed >= 0 ? Math.floor(parsed) : 0;
  } catch (_) {
    return 0;
  }
}

function writeStoredExpressionsPage(key, page) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage?.setItem(key, String(Math.max(0, Math.floor(Number(page) || 0))));
  } catch (_) {}
}

export function ExpressionsLibraryBlock({ library }) {
  const pageStorageKey = useMemo(() => getExpressionsPageKey(library), [library?.title, library?.eyebrow]);
  const [query, setQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [page, setPage] = useState(() => readStoredExpressionsPage(pageStorageKey));
  const searchInputRef = React.useRef(null);
  const perPage = Math.max(1, Number(library?.perPage) || 50);
  const itemLabel = library?.itemLabel || 'expression';
  const itemLabelPlural = library?.itemLabelPlural || `${itemLabel}s`;

  function normalizeExpressionFamily(text) {
    return String(text || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '');
  }

  function diacriticCount(text) {
    const marks = String(text || '')
      .normalize('NFD')
      .match(/[\u0300-\u036f]/g);
    return marks ? marks.length : 0;
  }

  const allExpressions = useMemo(() => {
    const groups = Array.isArray(library?.groups) ? library.groups : [];
    const flattened = [];
    groups.forEach((group, groupIndex) => {
      (group.entries || []).forEach((entry, entryIndex) => {
        flattened.push({
          ...entry,
          groupId: group.id,
          groupTitle: group.title,
          groupTone: group.tone,
          groupIndex,
          entryIndex,
          orderKey: groupIndex * 10_000 + (Number(entry.rank) || 0) * 10 + entryIndex,
        });
      });
    });

    const orderedEntries = flattened.sort((a, b) => (
      a.groupIndex - b.groupIndex ||
      (Number(a.rank) || 0) - (Number(b.rank) || 0) ||
      a.entryIndex - b.entryIndex
    ));

    if (library?.preserveOrder) {
      return orderedEntries.map((entry, index) => ({
        ...entry,
        globalRank: index + 1,
      }));
    }

    const families = new Map();
    orderedEntries.forEach((entry, index) => {
      const familyKey = normalizeExpressionFamily(entry.es);
      if (!families.has(familyKey)) {
        families.set(familyKey, { familyKey, firstIndex: index, entries: [] });
      }
      families.get(familyKey).entries.push(entry);
    });

    const orderedFamilies = [...families.values()].sort((a, b) => a.firstIndex - b.firstIndex);
    const arranged = [];
    orderedFamilies.forEach((family) => {
      family.entries.sort((a, b) => (
        (Number(a.rank) || 0) - (Number(b.rank) || 0) ||
        diacriticCount(a.es) - diacriticCount(b.es) ||
        String(a.es).localeCompare(String(b.es), 'es', { sensitivity: 'base' })
      ));
      arranged.push(...family.entries);
    });

    return arranged.map((entry, index) => ({
      ...entry,
      globalRank: index + 1,
    }));
  }, [library]);

  const filtered = useMemo(() => {
    const q = normalizeForCompare(query.trim());
    if (!q) return allExpressions;
    return allExpressions.filter((entry) => (
      normalizeForCompare(entry.es).includes(q) ||
      normalizeForCompare(entry.en).includes(q) ||
      normalizeForCompare(entry.example).includes(q) ||
      normalizeForCompare(entry.exampleEn).includes(q)
    ));
  }, [allExpressions, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const safePage = Math.min(page, totalPages - 1);
  const visibleEntries = filtered.slice(safePage * perPage, (safePage + 1) * perPage);
  const firstVisible = filtered.length ? safePage * perPage + 1 : 0;
  const lastVisible = Math.min(filtered.length, (safePage + 1) * perPage);
  const pageProgress = `${Math.max(4, Math.round(((safePage + 1) / totalPages) * 100))}%`;

  function goPreviousPage() {
    setPage((p) => Math.max(0, p - 1));
  }

  function goNextPage() {
    setPage((p) => Math.min(totalPages - 1, p + 1));
  }

  function renderPager(extraClass = '') {
    const previousPageLabel = Math.max(1, safePage);
    const nextPageLabel = Math.min(totalPages, safePage + 2);
    return (
      <div className={`expressions-pager ${extraClass}`.trim()} aria-label={`${library.title} pages`}>
        <button
          className="expressions-page-btn prev"
          disabled={safePage === 0}
          onClick={goPreviousPage}
          aria-label={`Previous page ${previousPageLabel} of ${totalPages}`}
        >
          <ChevronLeft size={18} />
          <span>
            <strong>Anterior</strong>
            <em>p. {previousPageLabel} / {totalPages}</em>
          </span>
        </button>

        <div className="expressions-page-chip" aria-live="polite">
          <span>Page</span>
          <strong>{safePage + 1} / {totalPages}</strong>
          <em>{firstVisible}-{lastVisible} of {filtered.length}</em>
        </div>

        <button
          className="expressions-page-btn next"
          disabled={safePage >= totalPages - 1}
          onClick={goNextPage}
          aria-label={`Next page ${nextPageLabel} of ${totalPages}`}
        >
          <span>
            <strong>Siguiente</strong>
            <em>p. {nextPageLabel} / {totalPages}</em>
          </span>
          <ChevronRight size={18} />
        </button>

        <div className="expressions-page-progress" aria-hidden="true">
          <span style={{ width: pageProgress }} />
        </div>
      </div>
    );
  }

  useEffect(() => {
    if (query.trim()) {
      setPage(0);
    } else {
      setPage(readStoredExpressionsPage(pageStorageKey));
    }
  }, [query, pageStorageKey]);

  useEffect(() => {
    if (!query.trim()) writeStoredExpressionsPage(pageStorageKey, safePage);
  }, [pageStorageKey, query, safePage]);

  useEffect(() => {
    if (searchOpen) {
      window.requestAnimationFrame(() => searchInputRef.current?.focus());
    }
  }, [searchOpen]);

  function closeSearch() {
    setQuery('');
    setSearchOpen(false);
  }

  return (
    <section className="block expressions-library-block expressions-lines-block">
      <div className="expressions-hero">
        <div className="expressions-eye">{library.eyebrow}</div>
        <h2>{library.title}</h2>
        <p>{library.description || 'All expressions are shown in one clean sequence with similar forms kept together.'}</p>
        <div className="expressions-stats">
          <div>
            <strong>{allExpressions.length}</strong>
            <span>Total {itemLabelPlural}</span>
          </div>
          <div>
            <strong>{perPage}</strong>
            <span>Per page</span>
          </div>
          <div>
            <strong>{safePage + 1}</strong>
            <span>Current page</span>
          </div>
          <div>
            <strong>{totalPages}</strong>
            <span>Total pages</span>
          </div>
        </div>
      </div>

      <div className="expressions-toolbar">
        <div className={`expressions-search ${searchOpen ? 'open' : ''} ${query.trim() ? 'has-query' : ''}`}>
          {!searchOpen ? (
            <button
              type="button"
              className="expressions-search-toggle"
              onClick={() => setSearchOpen(true)}
              aria-label={`Search ${itemLabelPlural}`}
            >
              <Search size={18} />
            </button>
          ) : (
            <div className="expressions-search-panel">
              <Search size={15} />
              <input
                ref={searchInputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Search ${itemLabel}, meaning, or example...`}
              />
              <button
                type="button"
                className="expressions-search-close"
                onClick={closeSearch}
                aria-label="Close search"
              >
                <X size={15} />
              </button>
            </div>
          )}
        </div>
        <div className="expressions-count">
          {filtered.length} {filtered.length === 1 ? itemLabel : itemLabelPlural} found
        </div>
        {renderPager()}
      </div>

      {visibleEntries.length > 0 ? (
        <div className="expressions-lines">
          {visibleEntries.map((entry) => {
            const key = `${entry.groupId}-${entry.rank}-${entry.es}`;
            return (
              <article key={key} className="expression-line-item">
                <div className="expression-line-main">
                  <span className="expression-rank">#{entry.globalRank}</span>
                  <div className="expression-line-text">
                    <p className="expression-line-head">
                      <SpeakBtn text={entry.es} />
                      <strong><SearchHighlightedDictionaryText text={entry.es} query={query} /></strong>
                      <span className="expression-line-eq">=</span>
                      <em><SearchHighlightedText text={entry.en} query={query} /></em>
                    </p>
                    {entry.example && (
                      <div className="expression-line-example-wrap">
                        <p className="expression-line-example">
                          <span className="expression-line-example-label">Ejemplo</span>{' '}
                          <SpeakBtn text={entry.example} />
                          <SearchHighlightedDictionaryText text={entry.example} query={query} />
                        </p>
                        {entry.exampleEn && (
                          <p className="expression-line-example-en">
                            <SearchHighlightedText text={entry.exampleEn} query={query} />
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="expressions-empty">
          <Search size={24} />
          No {itemLabelPlural} found. Try a different search.
        </div>
      )}

      {renderPager('expressions-pager-bottom')}

      <div className="expressions-foot">{library.sourceNote}</div>
    </section>
  );
}
