import React, { useEffect, useMemo, useState } from 'react';
import { Check, ChevronRight, RotateCcw, Sparkles, X } from 'lucide-react';
import { SpeakBtn } from './audio-text.jsx';
import { GRAMMAR_TEST_LEVEL_BANK } from './grammar-test-bank.js';
import { PRACTICE_LEVEL_META, buildGrammarBankQuiz, buildLessonQuiz, buildLessonTypingQuiz, buildListeningQuiz, collectQuizPairs, normalizeForCompare, playQuizFeedbackSound, shuffleList, stripMarkers } from './practice-engine.js';

const LEVELS = ['A1', 'A2', 'B1', 'B2'];
const CEFR_LEVEL_ORDER = ['A1', 'A2', 'B1', 'B2'];

function parseCefrLevels(levelLabel) {
  const raw = String(levelLabel || '').toUpperCase().replace(/\s+/g, '');
  if (!raw) return [];
  const tokens = raw.match(/[AB][12]/g) || [];
  if (!tokens.length) return [];
  const uniqueTokens = [...new Set(tokens)];
  if (raw.includes('-') && uniqueTokens.length >= 2) {
    const startIndex = CEFR_LEVEL_ORDER.indexOf(uniqueTokens[0]);
    const endIndex = CEFR_LEVEL_ORDER.indexOf(uniqueTokens[uniqueTokens.length - 1]);
    if (startIndex >= 0 && endIndex >= startIndex) {
      return CEFR_LEVEL_ORDER.slice(startIndex, endIndex + 1);
    }
  }
  return uniqueTokens.filter((token) => CEFR_LEVEL_ORDER.includes(token));
}

function chapterMatchesCefrLevel(chapter, selectedLevel) {
  if (selectedLevel === 'ALL') return true;
  const levels = parseCefrLevels(chapter?.level);
  if (!levels.length) return false;
  return levels.includes(selectedLevel);
}
function VerbPractice({ tenses, verbName }) {
  const [open, setOpen] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState(null); // 'correct' | 'incorrect' | null
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  function buildQuiz() {
    // Flatten all forms across all tenses
    const all = [];
    for (const t of tenses) {
      for (const row of (t.forms || [])) {
        all.push({
          tense: t.name,
          pronoun: row.p,
          answer: stripMarkers(row.f),
        });
      }
    }
    // Shuffle and pick 8
    const shuffled = [...all].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(8, shuffled.length));
  }

  function startQuiz() {
    setQuestions(buildQuiz());
    setCurrent(0);
    setInput('');
    setFeedback(null);
    setScore(0);
    setDone(false);
    setOpen(true);
  }

  function checkAnswer(e) {
    if (e) e.preventDefault();
    if (feedback) return; // already answered, ignore
    const q = questions[current];
    const correct = normalizeForCompare(input) === normalizeForCompare(q.answer);
    setFeedback(correct ? 'correct' : 'incorrect');
    if (correct) setScore(s => s + 1);
  }

  function nextQuestion() {
    if (current + 1 >= questions.length) {
      setDone(true);
      return;
    }
    setCurrent(c => c + 1);
    setInput('');
    setFeedback(null);
  }

  function close() {
    window.speechSynthesis?.cancel();
    setOpen(false);
  }

  const q = questions[current];
  const total = questions.length;

  return (
    <>
      <button className="quiz-trigger-btn" onClick={startQuiz}>
        <Sparkles size={14} />
        Practicar
      </button>

      {open && (
        <div className="quiz-overlay" onClick={close}>
          <div className="quiz-modal" onClick={e => e.stopPropagation()}>
            <header className="quiz-header">
              <div>
                <div className="quiz-eyebrow">Practicar conjugación</div>
                <h2 className="quiz-title">{verbName}</h2>
              </div>
              <button className="quiz-close" onClick={close} aria-label="Close">
                <X size={18} />
              </button>
            </header>

            {!done ? (
              <>
                <div className="quiz-progress">
                  <div className="quiz-progress-text">
                    Pregunta {current + 1} de {total}
                  </div>
                  <div className="quiz-progress-bar">
                    <div
                      className="quiz-progress-fill"
                      style={{ width: `${((current) / total) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="quiz-question">
                  <div className="quiz-tense-label">{q.tense}</div>
                  <div className="quiz-prompt">
                    <span className="quiz-pronoun">{q.pronoun}</span>
                    <span className="quiz-blank">________</span>
                  </div>
                  <div className="quiz-instruction">
                    Conjuga el verbo <em>{verbName.toLowerCase()}</em> para esta persona.
                  </div>
                </div>

                <form onSubmit={checkAnswer} className="quiz-form">
                  <input
                    type="text"
                    className={`quiz-input ${feedback || ''}`}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Escribe tu respuesta…"
                    autoFocus
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck="false"
                    disabled={!!feedback}
                  />
                  {!feedback && (
                    <button type="submit" className="quiz-check-btn" disabled={!input.trim()}>
                      Comprobar
                    </button>
                  )}
                </form>

                {feedback && (
                  <div className={`quiz-feedback ${feedback}`}>
                    {feedback === 'correct' ? (
                      <>
                        <div className="quiz-feedback-icon"><Check size={18} /></div>
                        <div>
                          <div className="quiz-feedback-title">¡Correcto!</div>
                          <div className="quiz-feedback-answer">{q.answer}</div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="quiz-feedback-icon"><X size={18} /></div>
                        <div>
                          <div className="quiz-feedback-title">No es correcto</div>
                          <div className="quiz-feedback-answer">
                            La respuesta es: <strong>{q.answer}</strong>
                          </div>
                        </div>
                      </>
                    )}
                    <SpeakBtn text={q.answer} size="md" className="quiz-feedback-speak" />
                  </div>
                )}

                {feedback && (
                  <button className="quiz-next-btn" onClick={nextQuestion}>
                    {current + 1 >= total ? 'Ver resultados' : 'Siguiente'}
                    <ChevronRight size={16} />
                  </button>
                )}

                <div className="quiz-score-line">
                  Puntuación: <strong>{score}</strong> / {current + (feedback ? 1 : 0)}
                </div>
              </>
            ) : (
              <div className="quiz-results">
                <div className="quiz-results-circle">
                  <div className="quiz-results-pct">{Math.round((score / total) * 100)}%</div>
                  <div className="quiz-results-fraction">{score} / {total}</div>
                </div>
                <h3 className="quiz-results-title">
                  {score === total ? '¡Perfecto!' :
                    score >= total * 0.75 ? 'Muy bien' :
                    score >= total * 0.5 ? 'Sigue practicando' :
                    'Vamos a repasar'}
                </h3>
                <p className="quiz-results-msg">
                  {score === total
                    ? 'Conjugaste todas las formas correctamente. Estás listo para el siguiente verbo.'
                    : score >= total * 0.5
                    ? 'Buen progreso. Repite la práctica unas veces más para dominar las formas que fallaste.'
                    : 'Vuelve a leer la tabla, escucha cada forma en voz alta, y vuelve a la práctica en cinco minutos.'}
                </p>
                <div className="quiz-results-actions">
                  <button className="quiz-retry-btn" onClick={startQuiz}>
                    <RotateCcw size={14} />
                    Otra vez
                  </button>
                  <button className="quiz-done-btn" onClick={close}>
                    Cerrar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export function PracticeHubBlock({ chapter, practiceChapters = [], lessonStatuses = {}, onLessonStatusChange, onPracticeAttempt }) {
  const [selectedLevel, setSelectedLevel] = useState('');
  const [mode, setMode] = useState('multiple-choice');
  const [sourceId, setSourceId] = useState('');
  const [scope, setScope] = useState('lesson');
  const [questionCount, setQuestionCount] = useState(20);
  const [sessionSeed, setSessionSeed] = useState(0);
  const [mcAnswers, setMcAnswers] = useState({});
  const [mcFinished, setMcFinished] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingInput, setTypingInput] = useState('');
  const [typingFeedback, setTypingFeedback] = useState(null);
  const [typingScore, setTypingScore] = useState(0);
  const [typingDone, setTypingDone] = useState(false);
  const [listeningAnswers, setListeningAnswers] = useState({});
  const [listeningFinished, setListeningFinished] = useState(false);
  const [activeVerbId, setActiveVerbId] = useState('');
  const [activeContextualId, setActiveContextualId] = useState('');
  const emittedAttemptsRef = React.useRef(new Set());
  const levelChosen = LEVELS.includes(selectedLevel);

  const levelCards = useMemo(() => (
    LEVELS.map((level) => {
      const levelChapters = practiceChapters.filter((candidate) => (
        candidate
        && candidate.id !== chapter.id
        && candidate.sectionId !== 'practicar'
        && chapterMatchesCefrLevel(candidate, level)
      ));
      const lessonCount = levelChapters.filter((candidate) => collectQuizPairs(candidate).length >= 2).length;
      const grammarCount = Array.isArray(GRAMMAR_TEST_LEVEL_BANK[level]) ? GRAMMAR_TEST_LEVEL_BANK[level].length : 0;
      return {
        level,
        meta: PRACTICE_LEVEL_META[level],
        lessonCount,
        grammarCount,
        ready: lessonCount > 0 || grammarCount > 0,
      };
    })
  ), [practiceChapters, chapter.id]);

  const filteredPracticeChapters = useMemo(() => (
    (levelChosen ? practiceChapters.filter((candidate) => (
      candidate
      && candidate.id !== chapter.id
      && candidate.sectionId !== 'practicar'
      && chapterMatchesCefrLevel(candidate, selectedLevel)
    )) : [])
  ), [practiceChapters, chapter.id, selectedLevel, levelChosen]);

  const grammarBankAvailable = levelChosen && Array.isArray(GRAMMAR_TEST_LEVEL_BANK[selectedLevel]) && GRAMMAR_TEST_LEVEL_BANK[selectedLevel].length > 0;

  const lessonSources = useMemo(() => {
    const list = [];
    for (const candidate of filteredPracticeChapters) {
      if (!candidate) continue;
      const pairCount = collectQuizPairs(candidate).length;
      if (pairCount < 2) continue;
      list.push({
        id: candidate.id,
        chapter: candidate,
        pairCount,
        sectionLabel: candidate.sectionLabel || candidate.sectionId || 'Leccion',
      });
    }
    return list.sort((a, b) => b.pairCount - a.pairCount);
  }, [filteredPracticeChapters]);

  const verbSources = useMemo(() => {
    const list = [];
    for (const candidate of filteredPracticeChapters) {
      if (!candidate) continue;
      (candidate.blocks || []).forEach((block, blockIndex) => {
        if (block.type !== 'verb-table' || !Array.isArray(block.tenses) || block.tenses.length === 0) return;
        list.push({
          id: `${candidate.id}::${blockIndex}`,
          chapterTitle: candidate.title,
          sectionLabel: candidate.sectionLabel || candidate.sectionId || 'Verbos',
          tenses: block.tenses,
        });
      });
    }
    return list;
  }, [filteredPracticeChapters]);

  const contextualQuizzes = useMemo(() => {
    const list = [];
    for (const candidate of filteredPracticeChapters) {
      if (!candidate) continue;
      (candidate.blocks || []).forEach((block, blockIndex) => {
        if (block.type !== 'choice-quiz' || !Array.isArray(block.questions) || block.questions.length === 0) return;
        list.push({
          id: `${candidate.id}::choice::${blockIndex}`,
          block,
          chapterTitle: candidate.title,
          sectionLabel: candidate.sectionLabel || candidate.sectionId || 'Leccion',
        });
      });
    }
    return list;
  }, [filteredPracticeChapters]);

  useEffect(() => {
    if (!lessonSources.length) {
      setSourceId('');
      return;
    }
    if (!lessonSources.some((source) => source.id === sourceId)) {
      setSourceId(lessonSources[0].id);
    }
  }, [lessonSources, sourceId]);

  useEffect(() => {
    if (!verbSources.length) {
      setActiveVerbId('');
      return;
    }
    if (!verbSources.some((source) => source.id === activeVerbId)) {
      setActiveVerbId(verbSources[0].id);
    }
  }, [verbSources, activeVerbId]);

  useEffect(() => {
    if (!contextualQuizzes.length) {
      setActiveContextualId('');
      return;
    }
    if (!contextualQuizzes.some((quiz) => quiz.id === activeContextualId)) {
      setActiveContextualId(contextualQuizzes[0].id);
    }
  }, [contextualQuizzes, activeContextualId]);

  useEffect(() => {
    setMcAnswers({});
    setMcFinished(false);
    setTypingIndex(0);
    setTypingInput('');
    setTypingFeedback(null);
    setTypingScore(0);
    setTypingDone(false);
    setListeningAnswers({});
    setListeningFinished(false);
  }, [mode, sourceId, scope, questionCount, selectedLevel, sessionSeed]);

  useEffect(() => {
    if (!lessonSources.length && mode !== 'multiple-choice') {
      setMode('multiple-choice');
    }
  }, [lessonSources.length, mode]);

  const selectedSource = lessonSources.find((source) => source.id === sourceId) || lessonSources[0] || null;
  const selectedVerbSource = verbSources.find((source) => source.id === activeVerbId) || verbSources[0] || null;
  const selectedContextualQuiz = contextualQuizzes.find((quiz) => quiz.id === activeContextualId) || contextualQuizzes[0] || null;
  const sectionSources = useMemo(() => {
    if (!selectedSource) return [];
    return lessonSources.filter((source) => source.sectionLabel === selectedSource.sectionLabel);
  }, [lessonSources, selectedSource]);

  const pairPool = useMemo(() => {
    function dedupePairs(pairs) {
      const seen = new Set();
      const unique = [];
      for (const pair of pairs) {
        const key = `${normalizeForCompare(pair.es)}::${normalizeForCompare(pair.en)}`;
        if (seen.has(key)) continue;
        seen.add(key);
        unique.push(pair);
      }
      return unique;
    }
    if (!selectedSource) return [];
    if (scope === 'all') {
      const combined = [];
      for (const source of lessonSources) combined.push(...collectQuizPairs(source.chapter));
      return dedupePairs(combined);
    }
    if (scope === 'section') {
      const combined = [];
      for (const source of sectionSources) combined.push(...collectQuizPairs(source.chapter));
      return dedupePairs(combined);
    }
    return dedupePairs(collectQuizPairs(selectedSource.chapter));
  }, [selectedSource, lessonSources, sectionSources, scope]);

  const poolSource = useMemo(() => ({
    blocks: [
      {
        pairs: pairPool,
      },
    ],
  }), [pairPool]);

  const multipleChoiceQuestions = useMemo(() => {
    const combined = [];
    if (selectedSource) {
      combined.push(...buildLessonQuiz(poolSource, { count: questionCount * 2 }));
    }
    if (grammarBankAvailable) {
      combined.push(...buildGrammarBankQuiz(selectedLevel, questionCount * 2));
    }
    if (!combined.length) return [];
    return shuffleList(combined).slice(0, Math.min(questionCount, combined.length));
  }, [selectedSource, poolSource, questionCount, selectedLevel, grammarBankAvailable, sessionSeed]);

  const typingQuestions = useMemo(() => (
    selectedSource ? buildLessonTypingQuiz(poolSource, questionCount) : []
  ), [selectedSource, poolSource, questionCount, sessionSeed]);

  const listeningQuestions = useMemo(() => (
    selectedSource ? buildListeningQuiz(poolSource, questionCount) : []
  ), [selectedSource, poolSource, questionCount, sessionSeed]);

  const mcScore = multipleChoiceQuestions.reduce((total, question, index) => (
    normalizeForCompare(mcAnswers[index]) === normalizeForCompare(question.answer) ? total + 1 : total
  ), 0);
  const mcPercent = multipleChoiceQuestions.length
    ? Math.round((mcScore / multipleChoiceQuestions.length) * 100)
    : 0;
  const listeningScore = listeningQuestions.reduce((total, question, index) => (
    normalizeForCompare(listeningAnswers[index]) === normalizeForCompare(question.answer) ? total + 1 : total
  ), 0);
  const listeningPercent = listeningQuestions.length
    ? Math.round((listeningScore / listeningQuestions.length) * 100)
    : 0;

  const typedQuestion = typingQuestions[typingIndex];
  const typingTotal = typingQuestions.length;
  const typingPercent = typingTotal ? Math.round((typingScore / typingTotal) * 100) : 0;
  const sourceTitle = selectedSource?.chapter?.title || (grammarBankAvailable ? `Nivel ${selectedLevel}` : '');
  const sourceLabel = selectedSource?.sectionLabel || (grammarBankAvailable ? 'Banco de gramatica' : '');
  const grammarQuestionPoolCount = grammarBankAvailable ? GRAMMAR_TEST_LEVEL_BANK[selectedLevel].length : 0;
  const selectedLessonStatus = selectedSource ? lessonStatuses[selectedSource.chapter.id] : null;
  const roundFinished = mode === 'multiple-choice' ? mcFinished : mode === 'typing' ? typingDone : listeningFinished;
  const roundPercent = mode === 'multiple-choice' ? mcPercent : mode === 'typing' ? typingPercent : listeningPercent;
  const roundSuggestion = roundPercent >= 85 ? 'mastered' : roundPercent >= 65 ? 'strong' : 'practicing';
  const dictLookupHref = sourceTitle
    ? `https://www.spanishdict.com/translate/${encodeURIComponent(sourceTitle)}`
    : 'https://www.spanishdict.com/';
  const verbLookup = selectedVerbSource?.chapterTitle || sourceTitle;
  const conjugationHref = verbLookup
    ? `https://www.spanishdict.com/conjugate/${encodeURIComponent(verbLookup.toLowerCase())}`
    : 'https://www.spanishdict.com/conjugation';

  function restartSession() {
    emittedAttemptsRef.current.clear();
    setSessionSeed((value) => value + 1);
  }

  function emitPracticeAttempt(modeName, score, total, questions = []) {
    if (!onPracticeAttempt || !total || total < 1) return;
    const sourceKey = selectedSource?.id || `${modeName}-level-${selectedLevel}`;
    const dedupeKey = `${sessionSeed}:${modeName}:${sourceKey}:${score}:${total}`;
    if (emittedAttemptsRef.current.has(dedupeKey)) return;
    emittedAttemptsRef.current.add(dedupeKey);
    onPracticeAttempt({
      mode: modeName,
      level: selectedLevel,
      score,
      total,
      percent: Math.round((score / total) * 100),
      sourceId: sourceKey,
      title: sourceTitle || `${modeName} ${selectedLevel}`,
      lessonId: selectedSource?.chapter?.id || null,
      questions: questions.map((question) => ({
        prompt: question.prompt || '',
        answer: question.answer || '',
        choices: Array.isArray(question.choices) ? question.choices : [],
      })),
    });
  }

  function startLevel(level) {
    if (!LEVELS.includes(level)) return;
    setSelectedLevel(level);
    setMode('multiple-choice');
    setScope('all');
    restartSession();
  }

  function chooseMultipleChoice(index, choice, answer) {
    const isCorrect = normalizeForCompare(choice) === normalizeForCompare(answer);
    playQuizFeedbackSound(isCorrect ? 'correct' : 'incorrect');
    setMcAnswers((prev) => ({ ...prev, [index]: choice }));
  }

  function submitTyping(e) {
    if (e) e.preventDefault();
    if (!typedQuestion || typingFeedback) return;
    const ok = normalizeForCompare(typingInput) === normalizeForCompare(typedQuestion.answer);
    playQuizFeedbackSound(ok ? 'correct' : 'incorrect');
    setTypingFeedback(ok ? 'correct' : 'incorrect');
    if (ok) setTypingScore((value) => value + 1);
  }

  function nextTypingQuestion() {
    if (typingIndex + 1 >= typingQuestions.length) {
      setTypingDone(true);
      const gained = typingFeedback === 'correct' ? 1 : 0;
      emitPracticeAttempt('typing', Math.min(typingScore + gained, typingQuestions.length), typingQuestions.length, typingQuestions);
      return;
    }
    setTypingIndex((value) => value + 1);
    setTypingInput('');
    setTypingFeedback(null);
  }

  function chooseListening(index, choice, answer) {
    const isCorrect = normalizeForCompare(choice) === normalizeForCompare(answer);
    playQuizFeedbackSound(isCorrect ? 'correct' : 'incorrect');
    setListeningAnswers((prev) => ({ ...prev, [index]: choice }));
  }

  const hasAnyPracticeSource = lessonSources.length > 0 || grammarBankAvailable;
  const canPairBasedPractice = lessonSources.length > 0;

  if (!levelChosen) {
    return (
      <section className="block practice-hub-block">
        <div className="practice-hub-top">
          <div>
            <div className="lesson-mini-kicker"><Sparkles size={13} /> Practica por nivel</div>
            <h2 className="lesson-heading">Centro de practica</h2>
            <p className="lesson-text">Elige tu nivel para iniciar el test inmediatamente.</p>
          </div>
        </div>
        <div className="practice-level-grid">
          {levelCards.map((card) => (
            <button
              key={card.level}
              className={`practice-level-card ${card.ready ? '' : 'empty'}`.trim()}
              onClick={() => startLevel(card.level)}
            >
              <span className="practice-level-tag">{card.level}</span>
              <strong>{card.meta?.title || card.level}</strong>
              <span>{card.meta?.canDo}</span>
              <em>{card.lessonCount} lecciones - {card.grammarCount} preguntas</em>
            </button>
          ))}
        </div>
      </section>
    );
  }

  if (!hasAnyPracticeSource) {
    return (
      <section className="block practice-hub-block">
        <div className="home-section-heading">
          <Sparkles size={16} />
          Practicar
        </div>
        <h2 className="lesson-heading">Centro de practica</h2>
        <p className="lesson-text">No hay ejercicios disponibles para este nivel todavia. Elige otro nivel.</p>
        <div className="practice-level-grid compact">
          {levelCards.map((card) => (
            <button
              key={card.level}
              className={`practice-level-card ${card.ready ? '' : 'empty'} ${selectedLevel === card.level ? 'active' : ''}`.trim()}
              onClick={() => startLevel(card.level)}
            >
              <span className="practice-level-tag">{card.level}</span>
              <strong>{card.meta?.title || card.level}</strong>
              <span>{card.lessonCount} lecciones - {card.grammarCount} preguntas</span>
            </button>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="block practice-hub-block">
      <div className="practice-hub-top">
        <div>
          <div className="lesson-mini-kicker"><Sparkles size={13} /> Practica centralizada</div>
          <h2 className="lesson-heading">Practicar con tus lecciones</h2>
          <p className="lesson-text">
            Practica grande estilo SpanishDict: banco amplio, rondas largas, y feedback inmediato.
          </p>
        </div>
        <button className="lesson-mini-reset" onClick={restartSession}>
          <RotateCcw size={13} />
          Nueva ronda
        </button>
      </div>

      <div className="practice-level-grid compact">
        {levelCards.map((card) => (
          <button
            key={card.level}
            className={`practice-level-card ${card.ready ? '' : 'empty'} ${selectedLevel === card.level ? 'active' : ''}`.trim()}
            onClick={() => startLevel(card.level)}
          >
            <span className="practice-level-tag">{card.level}</span>
            <strong>{card.meta?.title || card.level}</strong>
            <span>{card.meta?.focus}</span>
          </button>
        ))}
      </div>

      <div className="practice-training-map" aria-label="Practice skills">
        {[
          { label: 'Recall', detail: 'Multiple choice from lessons and grammar bank' },
          { label: 'Write', detail: 'Type the Spanish or English from memory' },
          { label: 'Listen', detail: 'Hear Spanish, choose the meaning' },
          { label: 'Mastery', detail: 'Use results to mark lessons strong or dominated' },
        ].map((item) => (
          <div key={item.label}>
            <strong>{item.label}</strong>
            <span>{item.detail}</span>
          </div>
        ))}
      </div>

      <div className="practice-hub-toolbar">
        <label className="practice-hub-field">
          <span>Leccion</span>
          <select value={selectedSource?.id || ''} onChange={(e) => setSourceId(e.target.value)} disabled={!canPairBasedPractice}>
            {lessonSources.map((source) => (
              <option key={source.id} value={source.id}>
                {source.chapter.title} ({source.pairCount})
              </option>
            ))}
          </select>
        </label>
        <label className="practice-hub-field">
          <span>Alcance</span>
          <select value={scope} onChange={(e) => setScope(e.target.value)} disabled={!canPairBasedPractice}>
            <option value="lesson">Solo esta leccion</option>
            <option value="section">Toda la seccion</option>
            <option value="all">Todo el libro</option>
          </select>
        </label>
        <label className="practice-hub-field">
          <span>Cantidad</span>
          <select value={questionCount} onChange={(e) => setQuestionCount(Number(e.target.value) || 20)}>
            <option value={10}>10 preguntas</option>
            <option value={20}>20 preguntas</option>
            <option value={30}>30 preguntas</option>
            <option value={40}>40 preguntas</option>
            <option value={50}>50 preguntas</option>
          </select>
        </label>
        <div className="practice-hub-modes" role="tablist" aria-label="Quiz format">
          <button
            className={mode === 'multiple-choice' ? 'active' : ''}
            onClick={() => setMode('multiple-choice')}
          >
            Multiple choice
          </button>
          <button
            className={mode === 'typing' ? 'active' : ''}
            disabled={!canPairBasedPractice}
            onClick={() => setMode('typing')}
          >
            Escribir
          </button>
          <button
            className={mode === 'listening' ? 'active' : ''}
            disabled={!canPairBasedPractice}
            onClick={() => setMode('listening')}
          >
            Escuchar
          </button>
        </div>
      </div>

      <div className="practice-hub-source-line">
        <strong>{sourceTitle}</strong>
        <span>{sourceLabel}</span>
        <span className="practice-hub-pool">
          {canPairBasedPractice ? `${pairPool.length} pares disponibles` : 'Solo gramatica de nivel'}
        </span>
        {grammarBankAvailable && (
          <span className="practice-hub-pool">{grammarQuestionPoolCount} preguntas importadas</span>
        )}
      </div>

      {mode === 'multiple-choice' && (
        <div className="lesson-mini-quiz practice-mc">
          {!multipleChoiceQuestions.length && (
            <p className="lesson-text">No hay preguntas multiple choice para este filtro. Cambia nivel o alcance.</p>
          )}
          <div className="lesson-mini-list">
            {multipleChoiceQuestions.map((question, index) => {
              const selected = mcAnswers[index];
              const isCorrect = selected && normalizeForCompare(selected) === normalizeForCompare(question.answer);
              return (
                <div key={`${question.prompt}-${index}`} className="lesson-mini-card">
                  <div className="lesson-mini-meta">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <em>{question.mode}</em>
                    <SpeakBtn text={question.speak} />
                  </div>
                  <p className="lesson-mini-prompt">{question.prompt}</p>
                  <div className="lesson-mini-choices">
                    {question.choices.map((choice) => {
                      const active = selected === choice;
                      const stateClass = active ? (isCorrect ? 'correct' : 'wrong') : '';
                      return (
                        <button
                          key={choice}
                          className={`${active ? 'active' : ''} ${stateClass}`.trim()}
                          onClick={() => chooseMultipleChoice(index, choice, question.answer)}
                        >
                          {choice}
                        </button>
                      );
                    })}
                  </div>
                  {selected && !isCorrect && (
                    <div className="lesson-mini-answer">Correcto: <strong>{question.answer}</strong></div>
                  )}
                  {selected && question.explanation && (
                    <div className="lesson-mini-answer">{question.explanation}</div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="lesson-mini-footer">
            <span>{Object.keys(mcAnswers).length} / {multipleChoiceQuestions.length} respondidas</span>
            <button
              className="lesson-mini-check"
              disabled={multipleChoiceQuestions.length === 0 || Object.keys(mcAnswers).length < multipleChoiceQuestions.length}
              onClick={() => {
                setMcFinished(true);
                emitPracticeAttempt('multiple-choice', mcScore, multipleChoiceQuestions.length, multipleChoiceQuestions);
              }}
            >
              Comprobar
            </button>
            {mcFinished && <strong>{mcScore} / {multipleChoiceQuestions.length}</strong>}
          </div>
        </div>
      )}

      {mode === 'typing' && (
        <div className="practice-typing-shell">
          {!typingDone && typedQuestion && (
            <>
              <div className="quiz-progress">
                <div className="quiz-progress-text">
                  Pregunta {typingIndex + 1} de {typingTotal}
                </div>
                <div className="quiz-progress-bar">
                  <div
                    className="quiz-progress-fill"
                    style={{ width: `${(typingIndex / typingTotal) * 100}%` }}
                  />
                </div>
              </div>
              <div className="quiz-question">
                <div className="quiz-tense-label">{typedQuestion.mode}</div>
                <div className="quiz-prompt">{typedQuestion.prompt}</div>
                <div className="quiz-instruction">{typedQuestion.tip}</div>
              </div>
              <form className="quiz-form" onSubmit={submitTyping}>
                <input
                  value={typingInput}
                  onChange={(e) => setTypingInput(e.target.value)}
                  className={`quiz-input ${typingFeedback || ''}`}
                  placeholder="Escribe tu respuesta..."
                  autoComplete="off"
                />
                {!typingFeedback ? (
                  <button type="submit" className="quiz-check-btn" disabled={!typingInput.trim()}>
                    Comprobar
                  </button>
                ) : (
                  <div className={`quiz-feedback ${typingFeedback}`}>
                    {typingFeedback === 'correct' ? (
                      <>
                        <div className="quiz-feedback-icon"><Check size={18} /></div>
                        <div>
                          <div className="quiz-feedback-title">Correcto</div>
                          <div className="quiz-feedback-answer">{typedQuestion.answer}</div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="quiz-feedback-icon"><X size={18} /></div>
                        <div>
                          <div className="quiz-feedback-title">No es correcto</div>
                          <div className="quiz-feedback-answer">Respuesta: {typedQuestion.answer}</div>
                        </div>
                      </>
                    )}
                    <SpeakBtn text={typedQuestion.speak} size="md" className="quiz-feedback-speak" />
                  </div>
                )}
              </form>
              {typingFeedback && (
                <div className="quiz-score-line">
                  <button className="quiz-next-btn" onClick={nextTypingQuestion}>
                    {typingIndex + 1 >= typingTotal ? 'Ver resultado' : 'Siguiente'}
                  </button>
                </div>
              )}
            </>
          )}
          {!typingDone && !typedQuestion && (
            <p className="lesson-text">No hay ejercicios de escritura para este nivel. Prueba multiple choice o cambia nivel.</p>
          )}
          {typingDone && (
            <div className="quiz-results">
              <div className="quiz-results-circle">
                <div className="quiz-results-pct">{typingPercent}%</div>
                <div className="quiz-results-fraction">{typingScore} / {typingTotal}</div>
              </div>
              <h3 className="quiz-results-title">Sesion completada</h3>
              <p className="quiz-results-msg">
                {typingPercent >= 85
                  ? 'Excelente control. Puedes marcar esta leccion como dominada.'
                  : typingPercent >= 65
                    ? 'Buen progreso. Repite una ronda mas para fijarlo.'
                    : 'Haz otra ronda corta para consolidar.'}
              </p>
              <div className="quiz-results-actions">
                <button className="quiz-retry-btn" onClick={restartSession}>Repetir</button>
              </div>
            </div>
          )}
        </div>
      )}

      {mode === 'listening' && (
        <div className="lesson-mini-quiz practice-listening">
          {!listeningQuestions.length && (
            <p className="lesson-text">No hay ejercicios de escucha para este filtro. Cambia nivel o alcance.</p>
          )}
          <div className="lesson-mini-list">
            {listeningQuestions.map((question, index) => {
              const selected = listeningAnswers[index];
              const isCorrect = selected && normalizeForCompare(selected) === normalizeForCompare(question.answer);
              return (
                <div key={`${question.es}-${index}`} className="lesson-mini-card">
                  <div className="lesson-mini-meta">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <em>Listening</em>
                    <SpeakBtn text={question.speak} />
                  </div>
                  <p className="lesson-mini-prompt">{question.prompt}</p>
                  <p className="practice-listening-es">{question.es}</p>
                  <div className="lesson-mini-choices">
                    {question.choices.map((choice) => {
                      const active = selected === choice;
                      const stateClass = active ? (isCorrect ? 'correct' : 'wrong') : '';
                      return (
                        <button
                          key={choice}
                          className={`${active ? 'active' : ''} ${stateClass}`.trim()}
                          onClick={() => chooseListening(index, choice, question.answer)}
                        >
                          {choice}
                        </button>
                      );
                    })}
                  </div>
                  {selected && !isCorrect && (
                    <div className="lesson-mini-answer">Correcto: <strong>{question.answer}</strong></div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="lesson-mini-footer">
            <span>{Object.keys(listeningAnswers).length} / {listeningQuestions.length} respondidas</span>
            <button
              className="lesson-mini-check"
              disabled={listeningQuestions.length === 0 || Object.keys(listeningAnswers).length < listeningQuestions.length}
              onClick={() => {
                setListeningFinished(true);
                emitPracticeAttempt('listening', listeningScore, listeningQuestions.length, listeningQuestions);
              }}
            >
              Comprobar
            </button>
            {listeningFinished && <strong>{listeningScore} / {listeningQuestions.length}</strong>}
          </div>
        </div>
      )}

      {selectedSource && roundFinished && (
        <div className="lesson-mastery-panel" aria-live="polite">
          <div>
            <span>Mastery check</span>
            <strong>
              {roundSuggestion === 'mastered'
                ? 'Excelente. Esta leccion esta lista para dominado.'
                : roundSuggestion === 'strong'
                  ? 'Buen nivel. Una ronda extra la deja firme.'
                  : 'Mantener en practica unos dias mas.'}
            </strong>
          </div>
          <div className="lesson-mastery-actions">
            <button
              className={selectedLessonStatus === 'practicing' ? 'active practice' : 'practice'}
              onClick={() => onLessonStatusChange?.(selectedSource.chapter.id, 'practicing')}
            >
              Needs practice
            </button>
            <button
              className={selectedLessonStatus === 'strong' ? 'active strong' : 'strong'}
              onClick={() => onLessonStatusChange?.(selectedSource.chapter.id, 'strong')}
            >
              Strong
            </button>
            <button
              className={selectedLessonStatus === 'mastered' ? 'active mastered' : 'mastered'}
              onClick={() => onLessonStatusChange?.(selectedSource.chapter.id, 'mastered')}
            >
              Mastered
            </button>
          </div>
        </div>
      )}

      <div className="practice-hub-footer">
        <div className="practice-hub-links">
          <a href={dictLookupHref} target="_blank" rel="noreferrer">Abrir en SpanishDict</a>
          <a href={conjugationHref} target="_blank" rel="noreferrer">Conjugacion en SpanishDict</a>
        </div>
        {selectedVerbSource && (
          <div className="practice-hub-verb">
            <label>
              Drill de conjugacion:
              <select value={selectedVerbSource.id} onChange={(e) => setActiveVerbId(e.target.value)}>
                {verbSources.map((verb) => (
                  <option key={verb.id} value={verb.id}>
                    {verb.chapterTitle} - {verb.sectionLabel}
                  </option>
                ))}
              </select>
            </label>
            <VerbPractice tenses={selectedVerbSource.tenses} verbName={selectedVerbSource.chapterTitle} />
          </div>
        )}
      </div>

      {selectedContextualQuiz && (
        <div className="practice-contextual">
          <div className="practice-contextual-toolbar">
            <label className="practice-hub-field">
              <span>Prueba contextual</span>
              <select value={selectedContextualQuiz.id} onChange={(e) => setActiveContextualId(e.target.value)}>
                {contextualQuizzes.map((quiz) => (
                  <option key={quiz.id} value={quiz.id}>
                    {quiz.block.title} - {quiz.chapterTitle}
                  </option>
                ))}
              </select>
            </label>
            <span className="practice-contextual-note">{selectedContextualQuiz.sectionLabel}</span>
          </div>
          <ChoiceQuizBlock block={selectedContextualQuiz.block} />
        </div>
      )}
    </section>
  );
}

function ChoiceQuizBlock({ block }) {
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);

  const score = block.questions.reduce((total, q, index) => (
    normalizeForCompare(answers[index]) === normalizeForCompare(q.answer) ? total + 1 : total
  ), 0);

  function restart() {
    setAnswers({});
    setFinished(false);
  }

  return (
    <section className="block contextual-quiz-block">
      <div className="contextual-quiz-head">
        <div>
          <div className="lesson-mini-kicker"><Sparkles size={13} /> Prueba contextual</div>
          <h2>{block.title}</h2>
        </div>
        <button onClick={restart}>
          <RotateCcw size={14} />
          Reiniciar
        </button>
      </div>
      <div className="contextual-quiz-list">
        {block.questions.map((q, index) => {
          const selected = answers[index];
          const isCorrect = selected && normalizeForCompare(selected) === normalizeForCompare(q.answer);
          return (
            <article key={q.prompt} className={`contextual-quiz-card ${selected ? (isCorrect ? 'correct' : 'wrong') : ''}`}>
              <div className="contextual-quiz-num">{String(index + 1).padStart(2, '0')}</div>
              <p>{q.prompt}</p>
              <div className="contextual-quiz-choices">
                {q.choices.map((choice) => (
                  <button
                    key={choice}
                    className={selected === choice ? 'active' : ''}
                    onClick={() => {
                      const isCorrect = normalizeForCompare(choice) === normalizeForCompare(q.answer);
                      playQuizFeedbackSound(isCorrect ? 'correct' : 'incorrect');
                      setAnswers((prev) => ({ ...prev, [index]: choice }));
                    }}
                  >
                    {choice}
                  </button>
                ))}
              </div>
              {selected && (
                <div className="contextual-quiz-feedback">
                  <strong>{isCorrect ? 'Correcto.' : `Correcto: ${q.answer}.`}</strong>
                  <span>{q.explanation}</span>
                </div>
              )}
            </article>
          );
        })}
      </div>
      <div className="contextual-quiz-score">
        <span>{Object.keys(answers).length} / {block.questions.length} respondidas</span>
        <button onClick={() => setFinished(true)}>Ver resultado</button>
        {finished && <strong>{score} / {block.questions.length}</strong>}
      </div>
    </section>
  );
}
