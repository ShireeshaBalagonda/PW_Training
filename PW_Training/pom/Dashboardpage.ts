import { Page,Locator,expect } from "@playwright/test";

export class DashboardPage{
    private hdrDashboard:Locator;
    private InkPIM:Locator;
    private InkAdmin:Locator;

    constructor(page:Page){
        this.hdrDashboard=page.getByRole('link', { name: 'Dashboard' }).describe("Dashboard link");
        this.InkPIM = page.getByRole('link', { name: 'PIM' }).describe("PIM link");
        this.InkAdmin = page.getByRole('link', { name: 'Admin' }).describe('Admin Link');
    }

    public async verifyDashboardDisplay(){
        await expect(this.hdrDashboard).toBeVisible();
        console.log("Dashboard Visible")
    }
    
    public async clickOnPIMLink(){
        await this.InkPIM.click();
        console.log(`Clickedon ${this.InkPIM.description()}`)
    }
    public async AdminLink(){
        await this.InkAdmin.click();
        console.log(`clicked on ${this.InkAdmin.description()}`)
    }
}