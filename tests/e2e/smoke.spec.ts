import { test, expect } from '@playwright/test';

test('homepage title contains "Toolshop"', async ({ page }, testInfo) => {
  console.log('Project:', testInfo.project.name, 'baseURL:', testInfo.project.use.baseURL);
  await page.goto('/');
  await expect(page).toHaveTitle(/Toolshop/i);
});
