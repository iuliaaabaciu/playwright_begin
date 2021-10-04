import { test, expect } from '@playwright/test'

test.describe('ExecuteAutomation EAApp Site Test', async() => {

    test('ConfigTest @fast ', async ({ page }) => {

        await test.step('Step 1: open eaapp site', async() => {
            await page.goto('http://eaapp.somee.com/');
        });
        
        await test.step('Step 2: perform login', async() => {
            await page.click('text=Login');
            await page.type('#UserName', 'admin');
            await page.type('#Password', 'password');
        });

        await test.step('Step 3: take screenshot', async() => {
            await page.screenshot({ path: 'eaapp.png', fullPage: true});
        });
})

    test('LoginClick @slow ', async ({ page }) => {

        await test.step('Step 1: open eaapp site', async() => {
            await page.goto('http://eaapp.somee.com/');
        });
        
        await test.step('Step 2: perform login', async() => {
            await page.click('text=Login');
        });

        await test.step('Step 3: take screenshot', async() => {
            await page.screenshot({ path: 'eaapp.png', fullPage: true});
        });        

    })

});

