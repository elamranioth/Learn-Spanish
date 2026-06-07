import React, { useState } from 'react';
import { Bookmark, Check, Quote } from 'lucide-react';
import { showAppMessage } from './app-messages.jsx';

function getSelectedTextInside(container) {
  if (typeof window === 'undefined') return '';
  const selection = window.getSelection?.();
  const text = String(selection?.toString?.() || '').replace(/\s+/g, ' ').trim();
  if (!text || text.length < 2) return '';
  if (!container || selection.rangeCount === 0) return text;
  const range = selection.getRangeAt(0);
  const anchor = range.commonAncestorContainer;
  const node = anchor.nodeType === Node.TEXT_NODE ? anchor.parentElement : anchor;
  return container.contains(node) ? text : '';
}

export function ReadingPhraseSaver({ chapterTitle, onSavePhrase }) {
  const [manualPhrase, setManualPhrase] = useState('');
  const [saved, setSaved] = useState('');
  const shellRef = React.useRef(null);

  function savePhrase() {
    const selected = getSelectedTextInside(null);
    const phrase = (selected || manualPhrase).replace(/\s+/g, ' ').trim();
    if (phrase.length < 2) {
      showAppMessage('Select a phrase in the reading, or type one here first.', {
        title: 'No phrase selected',
        tone: 'warning',
      });
      return;
    }
    onSavePhrase?.({
      word: phrase,
      translation: '',
      pos: 'Reading phrase',
      tags: ['phrase', 'reading'],
      context: chapterTitle ? `From ${chapterTitle}` : 'Saved while reading',
      savedAt: Date.now(),
    });
    setSaved(phrase);
    setManualPhrase('');
    showAppMessage('Saved to Memoria as a phrase.', {
      title: 'Phrase saved',
      tone: 'success',
    });
  }

  return (
    <div ref={shellRef} className="reading-phrase-saver">
      <div className="reading-phrase-saver-copy">
        <Quote size={15} />
        <span>Select a useful phrase while reading, then save it to Memoria.</span>
      </div>
      <div className="reading-phrase-saver-actions">
        <input
          value={manualPhrase}
          onChange={(event) => setManualPhrase(event.target.value)}
          placeholder="or type a phrase..."
          aria-label="Phrase to save"
        />
        <button onClick={savePhrase}>
          <Bookmark size={14} />
          Save phrase
        </button>
      </div>
      {saved && (
        <div className="reading-phrase-saved">
          <Check size={13} />
          <span>{saved}</span>
        </div>
      )}
    </div>
  );
}
