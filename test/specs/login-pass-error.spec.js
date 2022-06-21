const LoginPage = require('../pageobjects/login.page')

describe('Login password errors page testing', () => {

    beforeAll('open browser', () => {
        browser.url('https://www.saucedemo.com/');
    })
    it('Robot image should display correctly', async () => {
        await expect(LoginPage.botImg).toBeDisplayed();
    })
    it('Logo should display correctly', async () => {
        await expect(LoginPage.logoHead).toBeDisplayed();
    })
    it('Username input should display correctly', async () => {
        await expect(LoginPage.inputUsername).toBeDisplayed();
    })
    it('Password input should display correctly', async () => {
        await expect(LoginPage.inputPassword).toBeDisplayed();
    })
    it('Login button should display correctly', async () => {
        await expect(LoginPage.btnLogin).toBeDisplayed();
    })
    it('Username input should be clickable', async () => {
        await expect(LoginPage.inputUsername).toBeClickable();
    })
    it('Password input should be clickable', async () => {
        await expect(LoginPage.inputPassword).toBeClickable();
    })
    it('Login button should be clickable', async () => {
        await expect(LoginPage.btnLogin).toBeClickable();
    })
    it('An empty password should result in an error', async () => {
        await LoginPage.login('standard_user', '');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Password is required');
    })
    it('An invalid password should result in an error', async () => {
        await LoginPage.login('standard_user', 'hello');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service');
    })
})