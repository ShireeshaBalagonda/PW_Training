import {test} from '@playwright/test';
import { Loginpage } from '../pom/loginpage';

test('Login Test', async ({page})=> {
    await page.goto('https://qtpsudhakar-vibetestq-hrm.up.railway.app');
    const LoginPage = new Loginpage(page);
    await LoginPage.enterusername('testuser');
    await LoginPage.enterPassword('testPassword');
    await LoginPage.clickOn();

});