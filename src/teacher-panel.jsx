import React from 'react';
import { ChevronRight, GraduationCap } from 'lucide-react';

export default function TeacherPanel({ insights = [], onAction }) {
  if (!insights.length) return null;

  return (
    <section className="teacher-panel" aria-label="Teacher recommendations">
      <div className="home-section-heading">
        <GraduationCap size={18} />
        Teacher notes
      </div>
      <div className="teacher-card-grid">
        {insights.map((item) => (
          <button key={item.key} className="teacher-card" onClick={() => onAction?.(item.action)}>
            <span className="teacher-card-title">{item.title}</span>
            <span className="teacher-card-detail">{item.detail}</span>
            <span className="teacher-card-action">
              {item.actionLabel || 'Open'}
              <ChevronRight size={14} />
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
