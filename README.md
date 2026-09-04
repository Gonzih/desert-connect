# ISOC Nevada Chapter website

Public site for the Internet Society Nevada Chapter, deployed at [isocnv.org](https://isocnv.org).

## Development

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — local development server
- `npm run build` — production build (includes SPA `404.html` for GitHub Pages)
- `npm run preview` — preview the production build
- `npm run test` — run Vitest tests
- `npm run lint` — ESLint

## Deployment

Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yml`.
