import { test, expect } from '@playwright/test';

test('homepage title contains "Toolshop"', async ({ page }) => {
  // 1. Go to the site (Playwright uses the baseURL from your env config)
  await page.goto('/');

  // 2. Check that the title includes "Toolshop"
  await expect(page).toHaveTitle(/Toolshop/i);
});
