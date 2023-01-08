import { expect, test, webkit} from '@playwright/test';
// import test from './next-fixture';

// test.beforeEach(async ({ page }) => {
//   await page.goto(`http://localhost:3000`);
// });

test.describe('Blog Homepage', () => {
  test('Should display correct h1 title', async ({page, baseURL}) => {
    await page.goto(baseURL || 'http://localhost:3000');

    const h1 = await page.textContent('h1');
    expect(h1).toBe('Blog.');
  });

  test('should access Blog 1 by click', async ({ page }) => {
    await page.getByText('Learning Playwright Workflows').click();
    await page.waitForLoadState('networkidle');
    const h1 = await page.textContent('h1');
    expect(h1).toBe('Learning Playwright Workflows');
  });

  test('should access Blog2 by redirect', async ({page},...rest) => {

    await page.goto(`/posts/learning-contentful`);
    await page.waitForLoadState('networkidle');
    const h1 = await page.textContent('h1');
    expect(h1).toBe('Learning Contentful');
  });

});
