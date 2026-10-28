import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.apsrtconline.in/oprs-web/');
  await page.getByRole('textbox', { name: 'Enter bording place name or' }).click();
  await page.getByRole('textbox', { name: 'Enter bording place name or' }).fill('Hyderabad');
  await page.getByText('HYDERABADHyderabad Hyderabad').click();
  await page.getByRole('textbox', { name: 'Enter alighting place name or' }).click();
  await page.getByRole('textbox', { name: 'Enter alighting place name or' }).fill('Vijayawada');
  await page.getByText('VIJAYAWADAAndhra Pradesh').click();
  await page.getByRole('button', { name: 'Check Availability' }).click();
  await page.getByRole('link', { name: '1' }).first().click();
  await page.getByRole('button', { name: 'Check Availability' }).click();
  await page.locator('.arrowDownCs').first().click();
  await page.locator('label').first().click();
  await page.getByRole('checkbox', { name: 'A/C CLASS', exact: true }).check();
});


import {test , except} from '@playwright/test';

test('test',async({page})=> {

});