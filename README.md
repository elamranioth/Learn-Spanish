# Learn Spanish

An interactive Spanish reading book built with React and Vite. It includes a daily study path, progress map, lesson chapters, stories, poems, a deduplicated songbook, verb practice, text-to-speech pronunciation, spaced-repetition vocabulary, grouped memorization, level filtering, resume reading, saved vocabulary review/export tools, and installable offline support.

Live site: https://elamranioth.github.io/Learn-Spanish/

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The Vite base path is configured for GitHub Pages at `/Learn-Spanish/`.

The `Palabras` section is generated from `spanish_vocab_grouped.docx` and preserves the document's three original vocabulary groups. It also includes topic decks for `Trabajo y Profesiones` and `Emociones y Sentimientos` that reuse existing entries instead of duplicating words.

The vocabulary system supports Again/Hard/Good/Easy spaced repetition, active listening, example sentences, due-word review, and a virtualized full-list browser.

The `Lectura` section includes `Canciones`, a songbook generated from `Canciones.docx` with repeated chorus ideas condensed into organized Spanish/English study sections.

## Deploy

Pushes to `main` run `.github/workflows/deploy-pages.yml`, build the app, and publish `dist` to the `gh-pages` branch.

The app uses browser speech synthesis for pronunciation, localStorage for saved words and reading progress, and a service worker for cached offline access.
