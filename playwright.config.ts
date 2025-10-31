// playwright.config.ts
import { defineConfig, devices, type Project } from '@playwright/test';
import { getSelectedEnvs } from './src/config/environments';

const envs = getSelectedEnvs();

const envBrowserProjects: Project[] = envs.flatMap((env) => [
  {
    name: `${env.name}-chromium`,
    use: { ...devices['Desktop Chrome'], baseURL: env.baseURL },
  },
  {
    name: `${env.name}-firefox`,
    use: { ...devices['Desktop Firefox'], baseURL: env.baseURL },
  },
  {
    name: `${env.name}-webkit`,
    use: { ...devices['Desktop Safari'], baseURL: env.baseURL },
  },
]);

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    viewport: { width: 1280, height: 800 },
  },
  projects: envBrowserProjects,
});
