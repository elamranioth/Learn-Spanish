import React from 'react';
import { BookOpen, Check, Sparkles } from 'lucide-react';
import { isLessonReadStatus, isLessonUnderstoodStatus } from './lesson-status.js';

export function LessonStatusControl({ status, onChange }) {
  const isRead = isLessonReadStatus(status);
  const isUnderstood = isLessonUnderstoodStatus(status);
  const isMastered = status === 'mastered';

  function markRead() {
    onChange?.(status === 'read' ? null : 'read');
  }

  function markUnderstood() {
    onChange?.(status === 'understood' ? 'read' : 'understood');
  }

  function markMastered() {
    onChange?.(status === 'mastered' ? 'understood' : 'mastered');
  }

  return (
    <div className="lesson-status-control" aria-label="Lesson status">
      <span className="lesson-status-label">Estado</span>
      <button className={`lesson-status-btn read ${isRead ? 'active' : ''}`} onClick={markRead}>
        <BookOpen size={14} />
        Leído
      </button>
      <button className={`lesson-status-btn understood ${isUnderstood ? 'active' : ''}`} onClick={markUnderstood}>
        <Check size={14} />
        Entendido
      </button>
      <button className={`lesson-status-btn mastery ${isMastered ? 'active' : ''}`} onClick={markMastered}>
        <Sparkles size={14} />
        Dominado
      </button>
    </div>
  );
}
