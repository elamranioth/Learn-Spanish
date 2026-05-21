import React from 'react';
import {
  BarChart3,
  BookCheck,
  Bookmark,
  ChevronRight,
  Clock,
  Compass,
  GraduationCap,
  PenLine,
  Target,
  Zap,
} from 'lucide-react';
import TeacherPanel from './teacher-panel.jsx';
import { formatStudyDuration } from './study-time.js';

function TeacherMetric({ icon: Icon, label, value, detail }) {
  return (
    <div className="teacher-metric">
      <Icon size={16} />
      <span>{label}</span>
      <strong>{value}</strong>
      <em>{detail}</em>
    </div>
  );
}

export default function HomeView({
  totalLessons,
  visitedCount,
  savedWordsCount,
  levelFilter,
  palabrasSummary,
  lessonSummary,
  memoriaSummary,
  learnerProfile,
  reviewQueue,
  studyTime,
  dailyPlan,
  dailyProgress,
  teacherInsights,
  writingCount,
  sectionProgress,
  recommendations,
  onStart,
  onStartDaily,
  onDailyStep,
  onOpenMemoria,
  onOpenPalabras,
  onOpenVerb,
  onOpenReading,
  onOpenWriting,
  onSelectChapter,
  onTeacherAction,
}) {
  const progress = totalLessons ? Math.round((visitedCount / totalLessons) * 100) : 0;
  const nextStep = dailyPlan.find((item) => !item.complete) || dailyPlan[0];
  const teacherFocus = teacherInsights?.[0] || {
    title: 'Begin today gently',
    detail: 'Open the next lesson, read one page, then save one useful word in Memoria.',
    action: 'daily',
    actionLabel: 'Start',
  };
  const masteryCount = lessonSummary?.mastered || 0;
  const teacherAction = teacherFocus.action || 'daily';

  return (
    <article className="chapter-body home-dashboard">
      <header className="home-hero">
        <div className="home-kicker">
          <GraduationCap size={18} />
          Daily Teacher Mode
        </div>
        <h1 className="home-title">Lexiora</h1>
        <p className="home-subtitle">
          A calm Spanish study room: one lesson, one review queue, one clear next action.
        </p>
        <div className="home-actions">
          <button className="home-primary" onClick={onStartDaily || onStart}>
            Start Daily Lesson
            <ChevronRight size={16} />
          </button>
          <button className="home-secondary" onClick={onOpenMemoria}>
            <Bookmark size={15} />
            Memoria
          </button>
        </div>
      </header>

      <section className="daily-teacher-panel" aria-label="Daily teacher mode">
        <div className="daily-teacher-main">
          <span className="home-section-heading">
            <Target size={18} />
            Teacher focus
          </span>
          <h2>{teacherFocus.title}</h2>
          <p>{teacherFocus.detail}</p>
          <div className="daily-teacher-actions">
            <button onClick={() => onTeacherAction?.(teacherAction)}>
              {teacherFocus.actionLabel || 'Open'}
              <ChevronRight size={15} />
            </button>
            {nextStep && (
              <button className="secondary" onClick={() => onDailyStep(nextStep.key)}>
                Next: {nextStep.title}
              </button>
            )}
          </div>
        </div>
        <div className="daily-teacher-card">
          <span>{dailyProgress.completed} / {dailyProgress.total}</span>
          <strong>Today</strong>
          <em>{dailyProgress.streak} day streak</em>
        </div>
      </section>

      <section className="teacher-metrics" aria-label="Today's study metrics">
        <TeacherMetric icon={Clock} label="Today" value={formatStudyDuration(studyTime.todaySeconds)} detail={`${formatStudyDuration(studyTime.totalSeconds)} total`} />
        <TeacherMetric icon={BookCheck} label="Mastery" value={masteryCount} detail={`${lessonSummary.understood} understood`} />
        <TeacherMetric icon={Bookmark} label="Memoria" value={savedWordsCount} detail={`${memoriaSummary.due} due`} />
        <TeacherMetric icon={PenLine} label="Writing" value={writingCount} detail={`${learnerProfile.writing?.needsPractice || 0} to rewrite`} />
      </section>

      <TeacherPanel insights={teacherInsights} onAction={onTeacherAction} />

      <section className="home-stats" aria-label="Study progress">
        <div className="home-stat">
          <span className="home-stat-label">Progreso</span>
          <strong>{progress}%</strong>
          <span>{visitedCount} / {totalLessons} lecciones</span>
        </div>
        <div className="home-stat">
          <span className="home-stat-label">Nivel</span>
          <strong>{levelFilter === 'ALL' ? 'Todo' : levelFilter}</strong>
          <span>Filtro activo</span>
        </div>
        <div className="home-stat">
          <span className="home-stat-label">Palabras due</span>
          <strong>{palabrasSummary.due}</strong>
          <span>{palabrasSummary.mastered} dominadas</span>
        </div>
        <div className="home-stat">
          <span className="home-stat-label">Lecciones</span>
          <strong>{lessonSummary.understood}</strong>
          <span>{lessonSummary.read} leidas</span>
        </div>
      </section>

      <section className="home-daily">
        <div className="home-section-heading">
          <Zap size={18} />
          Ruta diaria
        </div>
        <div className="home-daily-grid">
          {dailyPlan.map((item) => (
            <button
              key={item.key}
              className={`home-daily-step ${item.complete ? 'complete' : ''}`}
              onClick={() => onDailyStep(item.key)}
            >
              <span>{item.index}</span>
              <strong>{item.title}</strong>
              <em>{item.detail}</em>
              <small>{item.complete ? 'Done' : 'Open'}</small>
            </button>
          ))}
        </div>
      </section>

      <section className="home-review-queue">
        <div className="home-section-heading">
          <BarChart3 size={18} />
          Cola de repaso
        </div>
        <div className="home-review-list">
          {reviewQueue.slice(0, 8).map((item, index) => (
            <button
              key={`${item.type}-${item.title}-${index}`}
              onClick={() => item.chapter ? onSelectChapter(item.chapter) : item.type === 'writing' ? onOpenWriting() : onOpenMemoria()}
            >
              <span className={`review-type ${item.type}`}>{item.type}</span>
              <strong>{item.title}</strong>
              <em>{item.detail}</em>
            </button>
          ))}
        </div>
        <div className="home-review-summary">
          {learnerProfile.vocabulary.due} vocabulary due - {learnerProfile.writing.needsPractice} writing rewrites - {learnerProfile.chapters.unvisited} lesson groups to open
        </div>
      </section>

      <section className="home-progress-map">
        <div className="home-section-heading">
          <Compass size={18} />
          Mapa de progreso
        </div>
        <div className="home-progress-list">
          {sectionProgress.map((item) => {
            const pct = item.total ? Math.round((item.visited / item.total) * 100) : 0;
            return (
              <div key={item.id} className="home-progress-row">
                <div className="home-progress-top">
                  <span>{item.label}</span>
                  <strong>{item.visited} / {item.total}</strong>
                </div>
                <div className="home-progress-track">
                  <span style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="home-path">
        <div className="home-section-heading">
          <Clock size={18} />
          Siguiente lectura
        </div>
        <div className="home-recommendations">
          {recommendations.map((chapter, index) => (
            <button
              key={chapter.id}
              className="home-rec"
              onClick={() => onSelectChapter(chapter)}
            >
              <span className="home-rec-index">{String(index + 1).padStart(2, '0')}</span>
              <span className="home-rec-main">
                <span className="home-rec-title">{chapter.title}</span>
                <span className="home-rec-meta">{chapter.sectionLabel} - {chapter.level}</span>
              </span>
              <ChevronRight size={16} />
            </button>
          ))}
        </div>
      </section>
    </article>
  );
}
