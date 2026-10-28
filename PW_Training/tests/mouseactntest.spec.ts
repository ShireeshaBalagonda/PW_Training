import {test , expect} from '@playwright/test'

test("mouseactins drag and drop" , async({page})=>{
    await page.goto("https://jqueryui.com/droppable/");
    let frm = page.frameLocator('iframe.demo-frame');
    await frm.locator('#draggable').dragTo(frm.locator('#droppable'));
}

)

test("mouse scroll and doubleclick", async({page})=>{
    await page.goto("https://api.jquery.com/dblclick/");

    await page.waitForTimeout(2000);
    await page.locator('div.demo.code-demo').scrollIntoViewIfNeeded

    let frmele = page.frameLocator('div.demo.code-demo iframe')
    await page.waitForTimeout(2000);

    await frmele.locator('div').dblclick();
    await page.waitForTimeout(2000);
    await frmele.locator("div").dblclick();

});

test('double-click right' , async({page})=> {


    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    await page.locator('//span[text() = "right click me"]').click({button: 'right'});
    await page.waitForTimeout(2000)
});

test ("mouse hover action", async({page})=> {

    await page.goto('https://api.jquery.com/hover/');
    let frameel = page.frameLocator("#entry-examples iframe");
    await frameel.getByText('Milk').hover();
    await expect(frameel.getByText('Milk ***')).toBeVisible();
});
