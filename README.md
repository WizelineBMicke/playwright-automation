# playwright-automation 🚀

A Playwright-based QA automation repository for testing the demo web pages used in practice exercises.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Install](#install)
- [Run tests](#run-tests)
- [Available npm scripts](#available-npm-scripts)
- [Configuration & Environments](#configuration--environments)
- [Debugging and Reports](#debugging-and-reports)
- [CI / Best Practices](#ci--best-practices)
- [Troubleshooting](#troubleshooting)
- [Project structure](#project-structure)
- [Contributing](#contributing)

---

## Overview

This repository contains Playwright tests, Page Objects and utilities used to automate E2E tests against the practice demo website.

**Practice page URL:** `https://demoqa.com/`

---

## Prerequisites ✅

- Node.js (LTS recommended, e.g., Node 18+). Use `nvm` to manage versions when needed.
- npm (comes with Node) or yarn.
- Git (to clone the repository).
- Optional: VSCode with **Playwright**, **ESLint**, and **Prettier** extensions.

---

## Install (Local setup) 🛠️

1. Clone the repo:

```bash
git clone <repository-url>
cd playwright-automation
```

2. Install dependencies:

```bash
npm install
# or for CI reproducible installs:
npm ci
```

3. Install Playwright browsers:

```bash
npx playwright install
```

> Tip: To install only a specific browser, use: `npx playwright install chromium`.

---

## Run tests ▶️

- Run tests (Chromium):

```bash
npm test
# Equivalent: npx playwright test --project=chromium
```

- Run a specific test (headed) — example for textbox tests:

```bash
npm run test:textbox
# Equivalent: npx playwright test textbox-elements.spec.ts --headed --project=chromium
```

- Run tests for a specific environment using the `APP_ENV` variable:

```bash
# Dev
npm run test:dev
# Staging
npm run test:staging
# Prod
npm run test:prod
```

- Run all browsers (projects defined in `playwright.config.ts`):

```bash
npx playwright test
```

---

## Available npm scripts 📦

- `npm test` — Run tests for `chromium` (defined in `package.json`).
- `npm run test:textbox` — Run `textbox-elements.spec.ts` in headed chromium.
- `npm run test:dev` / `test:staging` / `test:prod` — Run tests with `APP_ENV=dev|staging|prod` respectively.
- `npm run show-report` — Open Playwright HTML report (`npx playwright show-report`).
- `npm run lint` — Run ESLint.
- `npm run format` — Run Prettier formatting for `.ts` and `.json` files.

---

## Configuration & Environments 🌐

- Environment data lives in `data/environments.json` and contains `dev`, `staging`, and `prod` entries (with `baseURL` and `apiURL`).
- The selected environment is read in `utils/envConfig.ts` using the `APP_ENV` env var (defaults to `staging` if unset).

Examples:

```bash
# Run tests against dev environment
APP_ENV=dev npm run test:dev
```

> Note: `playwright.config.ts` uses `ENV_CONFIG.BASE_URL` to set `use.baseURL` for tests.

---

## Debugging and Reports 🐞

- Run tests in headed mode:

```bash
npx playwright test --headed
```

- Start Playwright Inspector (interactive debug):

```bash
PWDEBUG=1 npx playwright test
```

- View HTML report:

```bash
npm run show-report
```

- View traces and screenshots in `test-results` and `playwright-report` folders. Use `npx playwright show-trace <trace-file>` to open a trace in Playwright Trace Viewer.

---

## CI / Best Practices ✅

- Use `npm ci` in CI pipelines for consistent installs.
- Ensure Playwright browsers are installed in CI: `npx playwright install`.
- Example pipeline steps:
  1. `npm ci`
  2. `npx playwright install --with-deps` (if necessary)
  3. `npm test`
  4. Archive `playwright-report/` and `test-results/` as artifacts

---

## Troubleshooting ⚠️

- Browsers missing or `playwright` errors: run `npx playwright install`.
- Permission errors on macOS: try restarting the terminal and ensure Node is installed via `nvm` or official installer.
- Tests failing due to incorrect base URL: verify `APP_ENV` and `data/environments.json`.
- Corrupted node modules: remove `node_modules` and `package-lock.json` and run `npm ci`.

---

## Project structure (key files) 🔎

- `package.json` — npm scripts and dependencies
- `playwright.config.ts` — Playwright configuration (projects, reporter, baseURL)
- `tsconfig.json` — TypeScript config and path aliases (`@/pages/*`, `@/utils/*`)
- `data/environments.json` — environment definitions (dev/staging/prod)
- `utils/envConfig.ts` — loads current environment config
- `tests/` — test specs (`home.spec.ts`, `textbox-elements.spec.ts`, ...)
- `pages/` — Page Object classes used by tests
- `playwright-report/` & `test-results/` — generated reports & artifacts

---

## Contributing 🤝

- Please run `npm run format` and `npm run lint` before creating PRs.
- Add new tests under `tests/` and Page Objects under `pages/`.

---

**Happy testing!** 🎯
