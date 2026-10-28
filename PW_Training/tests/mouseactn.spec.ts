import {test ,expect} from '@playwright/test';

test("mouse scroll and double clicks",async({page})) => {
    
    await pageXOffset.goto("https://api.jquery.com/dblclick/");
    await page.waitForTimeout(2000);
    await page.locator()
}