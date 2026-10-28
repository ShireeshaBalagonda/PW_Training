import { Page,Locator,expect } from "@playwright/test";

export class AddEmp{
    private hdrAddEmp:Locator;
    private txtFirstName:Locator;
    private txtLastName:Locator;
    private txtEmpId:Locator;
    private btnSave:Locator;
    

    constructor(page:Page){
        this.hdrAddEmp=page.getByRole('heading', { name: 'Add Employee' }).describe("Add Employee Header");
        this.txtFirstName = page.getByRole('textbox', { name: 'First Name' }).describe("First name textbox");
        this.txtLastName = page.getByRole('textbox', { name: 'Last Name' }).describe("Last name textbox");
        this.txtEmpId = page.getByRole('textbox').within(page.getByLabel('Employee Id').locator('..').locator('..')).describe('Employee id field')
        this.btnSave = page.getByRole('button', { name: 'Save' }).describe("Save button")
    }

    public async headerDisplay(){
        await expect(this.hdrAddEmp).toBeVisible();
        console.log("Add Employee Header Visible")
    }
    
    public async enterFirstname(firstname:string){
        await this.txtFirstName.fill(firstname);
         console.log(`${firstname} entered on ${this.txtFirstName.description()}`);
    }
    public async enterLastname(lastname:string){
        await this.txtLastName.fill(lastname);
         console.log(`${lastname} entered on ${this.txtLastName.description()}`);
    }

    public async enterEmployeeId(emplyId:string){
        await this.txtEmpId.fill(emplyId);
         console.log(`${emplyId} entered on ${this.txtEmpId.description()}`);
    }

    public async clickSave(){
        await this.btnSave.click();
        console.log(`Clicked on ${this.btnSave.description()}`)
    }
}