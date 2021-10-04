import { test, expect } from '@playwright/test'

test.describe('Google WebSite Test', async () => {

    test('Google Search test', async ({ page }) => {

        await page.goto('https://www.google.com/');
        await page.type('input[name="q"]', 'playwright');
        // await page.click('input[name="btnK"]'); not working
        await page.keyboard.press('Enterder');
        await page.screenshot({ path: 'google.png', fullPage: true });

    });

})

