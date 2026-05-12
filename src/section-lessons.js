export function getNestedLessonKey(chapterId, type, index, title) {
  return `${chapterId || 'chapter'}::${type}::${index}::${title}`;
}

function firstText(value) {
  if (!value) return '';
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) return value.find(Boolean) || '';
  return '';
}

function previewGrammarLesson(lesson) {
  return lesson.intro || firstText(lesson.sections?.[0]?.paragraphs) || lesson.sections?.[0]?.text || 'Open this grammar lesson and study it step by step.';
}

function previewStory(story) {
  return firstText(story.paragraphs) || 'Open this story and read it with audio.';
}

function previewBio(bio) {
  return firstText(bio.levels?.[0]?.paragraphs) || bio.subtitle || 'Open this biography and read it by level.';
}

function previewPoem(poem) {
  return poem.note || poem.opening || firstText(poem.stanzas?.map((s) => s.es)) || 'Open this poem with its translation and vocabulary.';
}

function previewSong(song) {
  return song.note || firstText(song.sections?.map((s) => s.es)) || 'Open this song with organized sections and vocabulary.';
}

function nestedCardsForChapter(chapter, section) {
  const cards = [];
  for (const block of chapter.blocks || []) {
    if (block.type === 'foldable-grammar') {
      block.lessons.forEach((lesson, index) => {
        const key = getNestedLessonKey(chapter.id, 'grammar', index, lesson.title);
        cards.push({
          id: key,
          statusKey: key,
          parentChapterId: chapter.id,
          sectionId: section.id,
          sectionLabel: section.label,
          level: lesson.level || chapter.level,
          title: lesson.title,
          subtitle: lesson.subtitle || chapter.title,
          intro: previewGrammarLesson(lesson),
          nestedTarget: { type: 'grammar', index, key, cardId: key, title: lesson.title },
        });
      });
    }
    if (block.type === 'foldable-stories') {
      block.stories.forEach((story, index) => {
        const key = getNestedLessonKey(chapter.id, 'story', index, story.title);
        cards.push({
          id: key,
          statusKey: key,
          parentChapterId: chapter.id,
          sectionId: section.id,
          sectionLabel: section.label,
          level: story.level || chapter.level,
          title: story.title,
          subtitle: `${story.paragraphs?.length || 0} paragraphs - audio reading`,
          intro: previewStory(story),
          nestedTarget: { type: 'story', index, key, cardId: key, title: story.title },
        });
      });
    }
    if (block.type === 'foldable-bios') {
      block.bios.forEach((bio, index) => {
        const key = getNestedLessonKey(chapter.id, 'bio', index, bio.title);
        const levels = [...new Set((bio.levels || []).map((item) => item.level).filter(Boolean))];
        cards.push({
          id: key,
          statusKey: key,
          parentChapterId: chapter.id,
          sectionId: section.id,
          sectionLabel: section.label,
          level: levels.join('-') || chapter.level,
          title: bio.title,
          subtitle: bio.subtitle || bio.dates || chapter.title,
          intro: previewBio(bio),
          nestedTarget: { type: 'bio', index, key, cardId: key, title: bio.title },
        });
      });
    }
    if (block.type === 'foldable-poems') {
      block.poems.forEach((poem, index) => {
        const key = getNestedLessonKey(chapter.id, 'poem', index, poem.title);
        cards.push({
          id: key,
          statusKey: key,
          parentChapterId: chapter.id,
          sectionId: section.id,
          sectionLabel: section.label,
          level: poem.level || chapter.level,
          title: poem.title,
          subtitle: poem.attribution || chapter.title,
          intro: previewPoem(poem),
          nestedTarget: { type: 'poem', index, key, cardId: key, title: poem.title },
        });
      });
    }
    if (block.type === 'foldable-songs') {
      block.songs.forEach((song, index) => {
        const key = getNestedLessonKey(chapter.id, 'song', index, song.title);
        cards.push({
          id: key,
          statusKey: key,
          parentChapterId: chapter.id,
          sectionId: section.id,
          sectionLabel: section.label,
          level: song.level || chapter.level,
          title: song.title,
          subtitle: song.attribution || chapter.title,
          intro: previewSong(song),
          nestedTarget: { type: 'song', index, key, cardId: key, title: song.title },
        });
      });
    }
  }
  return cards;
}

export function buildSectionLessonCards(section, visibleChapters = []) {
  if (!section) return [];
  const cards = [];
  for (const chapter of visibleChapters) {
    const nested = nestedCardsForChapter(chapter, section);
    if (nested.length > 0) {
      cards.push(...nested);
    } else {
      cards.push({
        ...chapter,
        id: chapter.id,
        statusKey: chapter.id,
        sectionId: section.id,
        sectionLabel: section.label,
      });
    }
  }
  return cards;
}
