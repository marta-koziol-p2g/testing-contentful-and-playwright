import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('heading', { name: 'More Stories' }).click();
  await page.getByRole('link', { name: 'Learning Playwright Workflows' }).first().click();
});