import { expect, test} from '@playwright/test';
// import test from './next-fixture';

test.beforeEach(async ({ page }) => {
  await page.goto(`http://localhost:3000`);
});

test.describe('Blog Homepage', () => {
  test('Should display correct h1 title', async ({ page }) => {
    // await page.goto(`http://localhost:3000`);
    const h1 = await page.textContent('h1');
    expect(h1).toBe('Blog.');
  });

  // test('Blog', async ({ page }) => {
  //   await page.getByText('Learning Playwright Workflows').click();
  //   await page.waitForLoadState('networkidle');
  //   const h1 = await page.textContent('h1');
  //   expect(h1).toBe('Learning Playwright Workflows');
  // });

  test('Blog2', async ({ page}) => {
    await page.goto(`/posts/learning-playwright-workflows`);
    page.route('/posts/learning-playwright-workflows', (route, request) => {
      console.log(request.url());
      route.continue();
  }); 
    // await page.waitForLoadState('networkidle');
    const h1 = await page.textContent('h1');
    expect(h1).toBe('Learning Playwright Workflows');
  });

});
