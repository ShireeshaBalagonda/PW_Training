import { test, expect } from '@playwright/test';

test('Login test', async ({ page }) => {
  await page.goto("https://qtpsudhakar-vibetestq-hrm.up.railway.app/");
    await page.getByPlaceholder("Username").fill("admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button",{name:"Login"}).click();
})