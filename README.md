# Learn Spanish

An interactive Spanish reading book built with React and Vite. It includes a study dashboard, lesson chapters, verb practice, text-to-speech pronunciation, level filtering, resume reading, saved vocabulary, and installable offline support.

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

## Deploy

Pushes to `main` run `.github/workflows/deploy-pages.yml`, build the app, and publish `dist` to the `gh-pages` branch.

The app uses browser speech synthesis for pronunciation, localStorage for saved words and reading progress, and a service worker for cached offline access.
