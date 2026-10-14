# Harness Testing Repository

[![Coverage: V8](https://img.shields.io/badge/coverage-V8-4c1.svg)](https://vitest.dev/guide/coverage.html)

This is a [Next.js](https://nextjs.org) project bootstrapped with
[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `app/page.tsx`. The page
auto-updates as you edit the file.

This project uses
[`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
to automatically optimize and load [Geist](https://vercel.com/font), a new font
family for Vercel.

## Testing

Run the Vitest suite with:

```bash
pnpm test
```

The test command reports coverage through Vitest's V8 coverage provider (the
supported successor to its c8 integration), writes LCOV output to
`coverage/lcov.info`, and writes JUnit results to `reports/junit.xml`.

Install Playwright's Chromium browser and run the end-to-end suite with:

```bash
pnpm test:e2e:install
pnpm test:e2e
```

Playwright runs the UI tests in desktop and mobile Chromium profiles. Its HTML,
JUnit, trace, screenshot, and video output is written under
`reports/playwright/`.

## Docker

Build and run the production container:

```bash
docker build -t harness-next .
docker run --rm -p 3000:3000 harness-next
```

Open [http://localhost:3000](http://localhost:3000) to view the application.
