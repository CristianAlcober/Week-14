const LoginPage = require('../pageobjects/login.page')

describe('Trying to login with locked_out_user', () => {
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
    it('Login error', async () => {
        await LoginPage.login('locked_out_user', 'secret_sauce');
        expect(LoginPage.errorContainer).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    })
})