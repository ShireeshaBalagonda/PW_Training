import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.apsrtconline.in/oprs-web/');
  await expect(page).toHaveTitle(/APSRTC/);
  
  page.on("dialog", async(dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    await page.waitForTimeout(2000);
    await dialog.dismiss();

  });
  
  page.once('dialog',async(dialog)=>{
    console.log(`Dialog message: ${dialog.message()}`);
    expect(dialog.message()).toContain("Please select start place.");
    await page.waitForTimeout(2000);
    dialog.dismiss();
  });

   await page.locator("#searchBtn").click();
// from place details

  await page.locator('#fromPlaceName').fill('HYDERABAD')
  await page.locator('//span[text()= "HYDERABAD"]').click();
   await page.locator("#searchBtn").click();
  /*page.once('dialog',async(dialog)=>{
    console.log(`Dialog message: ${dialog.message()}`);
    expect(dialog.message()).toContain("Please select end place.");
    await page.waitForTimeout(2000);
    dialog.dismiss();
  });

  await page.locator('#txtJourneyDate').click();

  /*await page.locator('#fromPlaceName').fill('HYDERABAD')
  await page.locator('//span[text()= "HYDERABAD"]').click();
  await page.locator('#toPlaceName').fill('VIJAYAWADA')
  await page.locator('//span[text()="VIJAYAWADA"]').click();
  await page.locator('#txtJourneyDate').click();*/
});