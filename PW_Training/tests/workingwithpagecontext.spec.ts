import {test , expect} from '@playwright/test';

test('pages/context/browser concept', async({page})=> {

    await page.goto("https://qtpsudhakar-vibetestq-hrm.up.railway.app/web/index.php/auth/login");

    let newpromisedef = page.context().waitForEvent('page');
    await page.getByRole('link', { name: 'Visit VibeTestQ for New Test' }).click();
    let newpage = await newpromisedef;

    await page.waitForTimeout(2000);

    let [newpage1] = await Promise.all([
        page.context().waitForEvent('page'),
         newpage.getByRole('link', { name: 'Request a Trial' }).first().click()
    ])

    await newpage1.getByRole('textbox', { name: 'Full name' }).fill('John');
});

