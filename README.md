# Gregory Berezin — Portfolio

Personal portfolio for a Frontend Developer. The site presents
professional experience, technical expertise, selected work, and contact
details in English and Russian.

## Stack

- React 18 and TypeScript
- Vite
- Tailwind CSS
- i18next
- Framer Motion and AOS

## Development

```sh
npm ci
npm run dev
```

Quality checks:

```sh
npm run lint
npm run typecheck
npm run build
npm run check
```

## Architecture

- `src/components` contains page sections and focused UI components.
- `src/data.ts` contains typed navigation, project, and profile data.
- `src/i18n` contains English and Russian content.
- `src/hooks` contains browser preference integration.

The project intentionally remains a small client-side application. It does not
use application state management, routing, or server-state libraries because
the current product requirements do not need them.

## Deployment

The production site is published to
[GitHub Pages](https://gregorybv.github.io/my-portfolio/) from the `main`
branch. Pull requests and pushes are validated by GitHub Actions.

## Content policy

Professional experience and case-study descriptions are based on the current
resume. Confidential product details remain generalized.
