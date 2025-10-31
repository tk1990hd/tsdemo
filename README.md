# tsdemo — TypeScript + Playwright Automation Demo

Testing framework built in **TypeScript** with **Playwright**, demonstrating clear, maintainable test design for a modern web app (a sample e-commerce "Toolshop").

---

## Tech Stack

| Purpose      | Tool                                              |
| ------------ | ------------------------------------------------- |
| Language     | TypeScript (strict mode)                          |
| Test Runner  | Playwright Test                                   |
| Test Style   | Gherkin-like scenarios (Given/When/Then, non-BDD) |
| Structure    | Page Object Model (POM)                           |
| Browsers     | Chromium, Firefox, WebKit                         |
| Environments | `dev` and `preprod` (switchable via `PW_ENVS`)    |
| CI/CD Ready  | npm scripts for consistent runs                   |

---

## Setup

### 1. Install dependencies

npm install

### 2. Run Playwright setup (first time only)

npx playwright install

### 3. Confirm the structure

npm run e2e -- --list
This lists all projects (e.g. dev-chromium, preprod-firefox, etc.).

## Running Tests

Run all browsers & envs
npm run e2e

Run specific environment
PW_ENVS=preprod npm run e2e

Run single browser
npx playwright test --project=dev-chromium

Run a single spec file
npx playwright test tests/e2e/integration/visitor-default-search.spec.ts

Open Playwright UI
npx playwright test --ui

## Environments

The active environments are defined in
src/config/environments.ts:

export const ENABLED_ENVS: EnvName[] = ['dev', 'preprod'];

To override on the command line:

PW_ENVS=dev,preprod npx playwright test

Each env contributes its baseURL automatically — so tests can call:

await page.goto('/');

…without hard-coding domains.

## Page Objects

HomePage

Lists product cards (a.card[data-test^="product-"])

Supports pagination navigation

Assertions for card count and structure

ProductPage

Validates title, image, price, metadata badges

Provides quantity and “Add to Cart” interactions

## Test Layers

Integration

Checks homepage loads correctly

Ensures at least 9 products show

Confirms product cards have title/image/price

Confirms pagination is visible

Regression

Verifies pagination navigation (First/Middle/Last)

Opens sample products from multiple pages

Asserts each product page shows title, image, price

## Useful npm scripts

"scripts": {
"e2e": "playwright test",
"e2e:dev": "PW_ENVS=dev playwright test",
"e2e:preprod": "PW_ENVS=preprod playwright test",
"show-report": "npx playwright show-report"
}

## Reports

After each run, Playwright generates:

playwright-report/
test-results/

View the latest HTML report:

npx playwright show-report

## Notes

The green “Run Test” arrow in VS Code runs only the currently selected Playwright project (usually dev-chromium).
Change via Testing → Profile → All Projects to run all envs/browsers.

The test data (e.g. product counts) assumes a populated environment.
