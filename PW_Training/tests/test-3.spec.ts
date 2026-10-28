import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qtpsudhakar-vibetestq-hrm.up.railway.app/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('testadmin');
  await page.getByRole('textbox', { name: 'Password' }).fill('Vibetestq@123#');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.pause();
  await page.getByRole('textbox', { name: 'First Name' }).fill('John');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('G');
  await page.getByRole('textbox').nth(4).fill('11213421');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('span').filter({ hasText: 'test admin' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});