import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByText('Learning Playwright Workflows').click();
  await page.goto('http://localhost:3000/posts/learning-playwright-workflows/');
});