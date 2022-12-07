import { expect, test } from '@playwright/test';
// import test from './next-fixture';

test.beforeEach(async ({ page }) => {
  await page.goto(`http://localhost:3000`);
});

test.describe('Blog Homepage', () => {
  test('Should display correct h1 title', async ({ page }) => {
    const h1 = await page.textContent('h1');
    expect(h1).toBe('Blog.');
  });

});
