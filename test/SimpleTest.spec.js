// const { chromium } = require('@playwright/test'); // use the chromium browser 

(async() => {
    const browser = await chromium.launch({
        headless: false
    });
    const page = await browser.newPage();

    await page.goto("https://humanitas.ro/");
    await page.screenshot({path: `humanitas.png`})
    await browser.close();

})();

// const { test, expect } = require('@playwright/test');

// test('basic test', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   const title = page.locator('.navbar__inner .navbar__title');
//   await expect(title).toHaveText('Playwright');
// });