import { Page,Locator,expect } from "@playwright/test";

export class PIMPage{
    private hdrPIM:Locator;
    private LnkAddEmp:Locator;
    

    constructor(page:Page){
        this.hdrPIM=page.getByRole('heading', { name: 'PIM' }).describe("PIM Header");
        this.LnkAddEmp = page.getByRole('link', { name: 'Add Employee' }).describe("Add EMployee link");
        
    }

    public async PIMhdrDisplay(){
        await expect(this.hdrPIM).toBeVisible();
        console.log("PIM Header Visible")
    }
    
    public async clickOnAddEmployeeLink(){
        await this.LnkAddEmp.click();
        console.log(`Clickedon ${this.LnkAddEmp.description()}`)
    }
    
}