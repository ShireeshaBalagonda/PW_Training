import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.apsrtconline.in/oprs-web/');
  await expect(page).toHaveTitle(/APSRTC/);
  
  await page.locator('#fromPlaceName').fill('HYDERABAD')
  await page.locator('//span[text()= "HYDERABAD"]').click();
  await page.locator('#toPlaceName').fill('VIJAYAWADA')
  await page.locator('//span[text()="VIJAYAWADA"]').click();
  await page.locator('#txtJourneyDate').click();

  await page.locator("//span[text()='October']/following::a[text()='30'][1]").click();

  await page.locator("#searchBtn").click();

  await page.locator("//span[text()='Bus Type']").click();
  ////p[text()="Active Filters: "]/following::span[normalize-space()='A/C CLASS' ]
  await page.locator('//span[text()="Bus Type"]/following::span[normalize-space()="A/C CLASS" ]').click();

  await page.locator('//div[contains(@class,"srvceNO") and text()=3582]/../..//input[@value="Select Seats"]').click();
  
  

  await page.locator('//select[@name="onwardBoardId"]').click();
  await page.locator('//select[@name="onwardBoardId"]').selectOption({index:1});

    let selectedBoardingpoint:string = await page.locator('//select[@name="onwardBoardId"]').evaluate(e1 => e1.selectedOptions[0].textContent);
  console.log("Boarding point" + selectedBoardingpoint)
  let selectedBoardingpointpl = selectedBoardingpoint.trim().split("-")[0]
  let selectedBoardingpointtm = selectedBoardingpoint.trim().split("-")[1]
  await page.locator('//select[@name="onwardDroppingId"]').click();
  await page.locator('//select[@name="onwardDroppingId"]').selectOption({index:1});

  let selectedDroppingpoint:string = await page.locator('//select[@name="onwardDroppingId"]').evaluate(e1 => e1.selectedOptions[0].textContent);
  console.log("Boarding point" + selectedDroppingpoint  )
  let selectedDroppingpointpl = selectedDroppingpoint.trim().split("-")[0]
  let selectedDroppingpointtm = selectedDroppingpoint.trim().split("-")[1]

  await page.locator('//input[@value="Show layout"]').click();
  await page.locator('//li[contains(@class,"availSeatClassS")]').first().click();

  //await page.locator('li.availSeatClassS').first().click();
  let phonenu = '9787676561';
  await page.locator('//input[@name="mobileNo"]').fill(phonenu)
  let enteredemail = 'john@gmail.com'
  await page.locator('//input[@name="email"]').fill(enteredemail)
  await page.locator('//select[@name="genderCodeId"]').click()

  await page.locator('//select[@name="genderCodeId"]').selectOption({index:1});

  let SelectGndr =  await page.locator('//select[@name="genderCodeId"]').evaluate(eg => eg.selectedOptions[0].textContent);
  console.log("Gender" +  SelectGndr);
  await page.locator('//input[@name="passengerName"]').fill("John")
  /*let passengerName =  page.locator('//input[@name="passengerName"]').textContent;
  console.log(passengerName);*/
  await page.locator('//input[@name="passengerAge"]').fill('30')
  await page.locator('//select[@name="concessionIds"]').click();
  await page.locator('//select[@name="concessionIds"]').selectOption({index:1})
   
  
  await page.locator('input.continueBtn[value="Continue"]').click();
  //await page.locator('//td[normalize-space() = "From"]/following::td[contains(@class, "tktBoldTxt")]')
  //let boardingpt = page.getAttribute('//td[normalize-space() = "From"]/following::td[contains(@class, "tktBoldTxt")]');

  const expectedvalues = {
    pasgnrname : 'John',
    boaringcheck : selectedBoardingpointpl
  }

  await expect(page.locator('//td[normalize-space() = "From"]/following-sibling::td[normalize-space() ="MIYAPUR BLRM X ROAD" ]')).toHaveText(expectedvalues.boaringcheck);
  await expect(page.locator('//td[normalize-space()="Passenger Name"]/../following::td[1]')).toHaveText(expectedvalues.pasgnrname)

  //td[normalize-space()='From']/following-sibling::td[text()='textfrompreviouspage']
  
  //expect(boardingpt).toEqual(selectedDroppingpointdt)

  /*const actualOptions = await page.locator('#my-dropdown').evaluate(
  (select) => Array.from(select.options).map(opt => opt.text.trim())
);

expect(actualOptions).toEqual(['Option 1', 'Option 2', 'Option 3']);*/

});