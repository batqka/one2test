import { test, expect } from '@playwright/test';
import { GooglePage } from '../pages/googlePage';

test('Find one ', async ({ page }) => {
  await page.goto('https://www.google.ru/');

  let googlePage = new GooglePage(page);
  await googlePage.textArea.fill('Nicolas Cage images');
  await googlePage.textArea.press('Enter');

  await googlePage.results.imageTitles.first().waitFor({state: 'attached'});
  for(const e of await googlePage.results.imageTitles.all()) {
    expect(e).toBeVisible();
    console.log('Done one');
  }

  await page.waitForTimeout(5000);
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
