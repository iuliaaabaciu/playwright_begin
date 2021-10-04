const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://www.wikipedia.org/
  await page.goto('https://www.wikipedia.org/');

  // Click input[name="search"]
  await page.click('input[name="search"]');

  // Fill input[name="search"]
  await page.fill('input[name="search"]', 'apple');

  // Press Enter
  await page.press('input[name="search"]', 'Enter');
  // assert.equal(page.url(), 'https://en.wikipedia.org/wiki/Apple');

  // Click text=Germanic paganism
  await page.click('text=Germanic paganism');
  // assert.equal(page.url(), 'https://en.wikipedia.org/wiki/Apple#Germanic_paganism');

  // Click text=religious traditions
  await page.click('text=religious traditions');
  // assert.equal(page.url(), 'https://en.wikipedia.org/wiki/World_religions');

await page.screenshot({ path: `wiki.png` });

  // ---------------------
  await context.close();
  await browser.close();
})();