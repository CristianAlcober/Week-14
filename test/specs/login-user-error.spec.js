const LoginPage = require('../pageobjects/login.page')

describe('Login username errors page testing', () => {

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
    it('An empty username should result in an error', async () => {
        await LoginPage.login('', 'secret_sauce');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username is required');
    })
    it('An invalid username should result in an error', async () => {
        await LoginPage.login('hello', 'secret_sauce');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service');
    })
})