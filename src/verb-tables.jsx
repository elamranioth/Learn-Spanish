import React from 'react';
import { SpeakBtn } from './audio-text.jsx';
import { stripMarkers } from './practice-engine.js';
function parseForm(s) {
  const parts = [];
  let buf = '';
  let mode = 'normal'; // 'normal' | 'irreg' | 'ending'
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '[') {
      if (buf) parts.push({ text: buf, mode });
      buf = '';
      mode = 'irreg';
    } else if (c === ']') {
      if (buf) parts.push({ text: buf, mode: 'irreg' });
      buf = '';
      mode = 'normal';
    } else if (c === '{') {
      if (buf) parts.push({ text: buf, mode });
      buf = '';
      mode = 'ending';
    } else if (c === '}') {
      if (buf) parts.push({ text: buf, mode: 'ending' });
      buf = '';
      mode = 'normal';
    } else {
      buf += c;
    }
  }
  if (buf) parts.push({ text: buf, mode });
  return parts;
}

export function RenderForm({ raw }) {
  const clean = stripMarkers(raw);
  return (
    <span className="render-form" aria-label={clean}>
      {parseForm(raw).map((p, i) => {
        const cls = p.mode === 'irreg' ? 'irreg' : p.mode === 'ending' ? 'ending' : 'form-root';
        return <span key={i} className={`form-part ${cls}`}>{p.text}</span>;
      })}
    </span>
  );
}

function renderLessonTableCell(cell, ci) {
  return ci === 0 ? cell : <RenderForm raw={String(cell)} />;
}

export function LessonTable({ table, className = '' }) {
  const headers = table.headers || [];
  const tableClass = ['lesson-table', className].filter(Boolean).join(' ');

  return (
    <div className="lesson-table-shell">
      <div className="lesson-table-wrap">
        <table className={tableClass}>
          {headers.length > 0 && (
            <thead>
              <tr>{headers.map((h, hi) => <th key={hi}>{h}</th>)}</tr>
            </thead>
          )}
          <tbody>
            {table.rows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => (
                  <td key={ci}>{renderLessonTableCell(cell, ci)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="lesson-table-cards" aria-label="Tabla adaptada para movil">
        {table.rows.map((row, ri) => (
          <article key={ri} className="lesson-table-card">
            <div className="lesson-table-card-title">{row[0]}</div>
            <div className="lesson-table-card-grid">
              {row.slice(1).map((cell, ci) => (
                <div key={ci} className="lesson-table-card-item">
                  <span className="lesson-table-card-label">{headers[ci + 1] || `Forma ${ci + 1}`}</span>
                  <span className="lesson-table-card-value"><RenderForm raw={String(cell)} /></span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function VerbTableBlock({ block, chapterTitle }) {
  const tenseByName = Object.fromEntries(block.tenses.map((t) => [t.name, t]));
  const groups = block.tenseGroups || [
    ['Presente', 'Pretérito', 'Imperfecto'],
    ['Condicional', 'Futuro'],
  ];

  return (
    <section className="block verb-table-block">
      {block.participles && (
        <div className="participles">
          <div className="participles-label">Participios</div>
          <div className="participles-rows">
            <div className="participles-row">
              <span className="participles-key">Presente</span>
              <span className="participles-val"><RenderForm raw={block.participles.present} /></span>
            </div>
            <div className="participles-row">
              <span className="participles-key">Pasado</span>
              <span className="participles-val"><RenderForm raw={block.participles.past} /></span>
            </div>
          </div>
        </div>
      )}
      <div className="verb-table-header">
        <h2 className="verb-table-title">Indicativo de <em>"{String(chapterTitle || '').toLowerCase()}"</em></h2>
      </div>
      <table className="tense-reader-table" aria-label={`Indicativo de ${chapterTitle}`}>
        <thead>
          <tr>
            <th scope="col">Pronombre</th>
            {block.tenses.map((t) => (
              <th key={t.name} scope="col">{t.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.tenses[0]?.forms.map((_, ri) => (
            <tr key={ri}>
              <th scope="row" className="tg-pronoun">{block.tenses[0].forms[ri].p}</th>
              {block.tenses.map((t) => (
                <td key={t.name} className="tg-form">
                  <RenderForm raw={t.forms[ri].f} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="tense-stack">
        {groups.map((names, gi) => {
          const tenses = names.map((n) => tenseByName[n]).filter(Boolean);
          if (tenses.length === 0) return null;
          if (tenses.length === 1) {
            const t = tenses[0];
            return (
              <div key={gi} className="tense-block">
                <div className="tense-name-row">
                  <h3 className="tense-name">{t.name}</h3>
                  <SpeakBtn
                    text={t.forms.map(r => `${r.p} ${stripMarkers(r.f)}`).join('. ')}
                    size="md"
                    className="tense-speak-all"
                  />
                </div>
                <div className="tense-rows">
                  {t.forms.map((row, ri) => (
                    <React.Fragment key={ri}>
                      <span className="tense-pronoun">{row.p}</span>
                      <span className="tense-form">
                        <RenderForm raw={row.f} />
                        <SpeakBtn text={stripMarkers(row.f)} className="conjugation-speak" />
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            );
          }
          return (
            <React.Fragment key={gi}>
              <table className={`tense-group-table tense-group-count-${tenses.length}`}>
                <thead>
                  <tr>
                    <th aria-hidden="true"></th>
                    {tenses.map((t, ti) => (
                      <th key={ti} scope="col">
                        <div className="tg-th-inner">
                          <span>{t.name}</span>
                          <SpeakBtn text={t.forms.map(r => `${r.p} ${stripMarkers(r.f)}`).join('. ')} />
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tenses[0].forms.map((_, ri) => (
                    <tr key={ri}>
                      <th scope="row" className="tg-pronoun">{tenses[0].forms[ri].p}</th>
                      {tenses.map((t, ti) => (
                        <td key={ti} className="tg-form">
                          <RenderForm raw={t.forms[ri].f} />
                          <SpeakBtn text={stripMarkers(t.forms[ri].f)} className="conjugation-speak" />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="tense-mobile-stack">
                {tenses.map((t) => (
                  <article key={t.name} className="tense-mobile-card">
                    <div className="tense-mobile-head">
                      <h3>{t.name}</h3>
                      <SpeakBtn text={t.forms.map(r => `${r.p} ${stripMarkers(r.f)}`).join('. ')} size="md" />
                    </div>
                    <div className="tense-mobile-rows">
                      {t.forms.map((row) => (
                        <div key={`${t.name}-${row.p}`} className="tense-mobile-row">
                          <span className="tense-mobile-pronoun">{row.p}</span>
                          <span className="tense-mobile-form">
                            <RenderForm raw={row.f} />
                            <SpeakBtn text={stripMarkers(row.f)} className="conjugation-speak" />
                          </span>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div className="verb-legend">Las irregularidades aparecen en <span className="irreg">rojo</span>.</div>
    </section>
  );
}
