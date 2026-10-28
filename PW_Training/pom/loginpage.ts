import {expect, Locator, Page} from '@playwright/test'
export class Loginpage{
    private txtUserName:Locator;
    private txtPassWord:Locator;
    private btnLogin:Locator;
    private hdrLogin:Locator;

    constructor (page:Page){

        this.txtUserName = page.getByRole('textbox', { name: 'Username' }).describe("Username Textbox")
        this.txtPassWord = page.getByRole('textbox', { name: 'Password' }).describe("Password Textbox")
        this.btnLogin = page.getByRole('button', { name: 'Login' }).describe("Login Button")
        this.hdrLogin = page.getByRole('heading', { name: 'Login' }).describe("Login heading display")
    }
    
    public async enterusername(userName:string){
        await this.txtUserName.fill(userName);
        console.log(userName+"entered on"+this.txtUserName.description());
    }

    public async enterPassword(password:string){
        await this.txtPassWord.fill(password);
        console.log(`${password} entered on ${this.txtPassWord.description()}`);
    }
    public async clickOn(){
        await this.btnLogin.click();
        console.log(`Clicked on${this.btnLogin.description()}`);
    }

    public async verifyLoginPageDisplay(){
        await expect(this.hdrLogin).toBeVisible();
        console.log('Login page is displayed on top')
    }
}