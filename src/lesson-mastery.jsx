import React, { useMemo, useState } from 'react';
import { Check, RotateCcw, Sparkles, X } from 'lucide-react';
import { SpeakBtn } from './audio-text.jsx';
import {
  buildLessonQuiz,
  buildPracticeHealth,
  collectQuizPairs,
  normalizeForCompare,
  playQuizFeedbackSound,
} from './practice-engine.js';

export function LessonMasteryQuiz({
  chapter,
  status,
  onStatusChange,
  onPracticeAttempt,
}) {
  const [open, setOpen] = useState(false);
  const [seed, setSeed] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);

  const pairCount = useMemo(() => collectQuizPairs(chapter).length, [chapter]);
  const questions = useMemo(() => (
    buildLessonQuiz(chapter, { count: Math.min(6, Math.max(4, pairCount)) })
  ), [chapter, pairCount, seed]);

  const answeredCount = Object.keys(answers).length;
  const score = questions.reduce((total, question, index) => (
    normalizeForCompare(answers[index]) === normalizeForCompare(question.answer) ? total + 1 : total
  ), 0);
  const health = buildPracticeHealth({ score, total: questions.length });

  if (pairCount < 2 || questions.length < 2) return null;

  function restart() {
    setSeed((value) => value + 1);
    setAnswers({});
    setFinished(false);
    setOpen(true);
  }

  function choose(index, choice, answer) {
    const correct = normalizeForCompare(choice) === normalizeForCompare(answer);
    playQuizFeedbackSound(correct ? 'correct' : 'incorrect');
    setAnswers((prev) => ({ ...prev, [index]: choice }));
  }

  function finish() {
    setFinished(true);
    onPracticeAttempt?.({
      mode: 'lesson-mastery',
      level: chapter.level || '',
      score,
      total: questions.length,
      percent: health.percent,
      sourceId: chapter.id,
      title: chapter.title,
      lessonId: chapter.id,
      questions: questions.map((question) => ({
        prompt: question.prompt || '',
        answer: question.answer || '',
        choices: Array.isArray(question.choices) ? question.choices : [],
      })),
    });
  }

  return (
    <section className={`lesson-mastery-quiz ${open ? 'open' : ''}`}>
      <div className="lesson-mastery-quiz-head">
        <div>
          <div className="lesson-mini-kicker">
            <Sparkles size={13} />
            Mastery quiz
          </div>
          <h2 className="lesson-heading">Prove this lesson</h2>
          <p className="lesson-text">
            A short recall check from this lesson. It is not for pressure; it is for memory.
          </p>
        </div>
        <button className="lesson-mini-reset" onClick={open ? restart : () => setOpen(true)}>
          {open ? <RotateCcw size={13} /> : <Sparkles size={13} />}
          {open ? 'Restart' : 'Start'}
        </button>
      </div>

      {open && (
        <>
          <div className="lesson-mini-list">
            {questions.map((question, index) => {
              const selected = answers[index];
              const isCorrect = selected && normalizeForCompare(selected) === normalizeForCompare(question.answer);
              return (
                <article key={`${question.prompt}-${index}`} className="lesson-mini-card">
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
                          onClick={() => choose(index, choice, question.answer)}
                        >
                          {choice}
                        </button>
                      );
                    })}
                  </div>
                  {selected && (
                    <div className={`lesson-mini-answer ${isCorrect ? 'correct' : 'wrong'}`}>
                      {isCorrect ? <Check size={14} /> : <X size={14} />}
                      <span>
                        {isCorrect ? 'Correct' : 'Answer'}: <strong>{question.answer}</strong>
                      </span>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <div className="lesson-mini-footer lesson-mastery-quiz-footer">
            <span>{answeredCount} / {questions.length} answered</span>
            <button
              className="lesson-mini-check"
              disabled={answeredCount < questions.length}
              onClick={finish}
            >
              Check result
            </button>
            {finished && <strong>{score} / {questions.length} - {health.percent}%</strong>}
          </div>

          {finished && (
            <div className="lesson-mastery-panel">
              <div>
                <span>Suggested status</span>
                <strong>{health.label}</strong>
              </div>
              <div className="lesson-mastery-actions">
                <button
                  className={status === 'practicing' ? 'active practice' : 'practice'}
                  onClick={() => onStatusChange?.('practicing')}
                >
                  Practice
                </button>
                <button
                  className={status === 'strong' ? 'active strong' : 'strong'}
                  onClick={() => onStatusChange?.('strong')}
                >
                  Strong
                </button>
                <button
                  className={status === 'mastered' ? 'active mastered' : 'mastered'}
                  onClick={() => onStatusChange?.('mastered')}
                >
                  Dominado
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
}
