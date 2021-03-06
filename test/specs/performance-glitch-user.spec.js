const LoginPage = require('../pageobjects/login.page')
const CartPage = require('../pageobjects/cart.page');
const InventoryPage = require('../pageobjects/inventory.page');
const CheckoutPage = require('../pageobjects/checkout.page')
const OverviewPage = require('../pageobjects/overview.page')
const CompletedPurchasePage = require('../pageobjects/completed-purchase.page')

describe('Login with performance_glitch_user, wait to select items from inventory, proceed to cart and purchase', () => {
    beforeAll('open browser', () => {
        browser.url('https://www.saucedemo.com/');
    })
    it('Login successfully', async () => {
        await LoginPage.login('performance_glitch_user', 'secret_sauce');
    })
    it('Cart icon should display correctly', async () => {
        await expect(InventoryPage.cartIcon).toBeDisplayed();
    })
    it('Cart icon should work correctly', async () => {
        await expect(InventoryPage.cartIcon).toBeClickable();
    })
    it('The names of the products should display correctly', async () => {
        await expect(InventoryPage.productsNames).toBeDisplayed();
    })
    it('The prices of the products should display correctly', async () => {
        await expect(InventoryPage.productPrices).toBeDisplayed();
    })
    it('The descriptions of the products should display correctly', async () => {
        await expect(InventoryPage.productDescription).toBeDisplayed();
    })
    it('The images of the products should display correctly', async () => {
        await expect(InventoryPage.productsImages).toBeDisplayed();
    })
    it('Buttons to add the products to cart should display correctly', async () => {
        await expect(InventoryPage.btnsAddToCart).toBeDisplayed();
    })
    it('The names of the products should work correctly', async () => {
        await expect(InventoryPage.productOneName).toBeClickable();
        await expect(InventoryPage.productTwoName).toBeClickable();
        await expect(InventoryPage.productThreeName).toBeClickable();
        await expect(InventoryPage.productFourName).toBeClickable();
        await expect(InventoryPage.productFiveName).toBeClickable();
        await expect(InventoryPage.productSixName).toBeClickable();
    })
    it('The images of the products should work correctly', async () => {
        await expect(InventoryPage.productOneImage).toBeClickable();
        await expect(InventoryPage.productTwoImage).toBeClickable();
        await expect(InventoryPage.productThreeImage).toBeClickable();
        await expect(InventoryPage.productFourImage).toBeClickable();
        await expect(InventoryPage.productFiveImage).toBeClickable();
        await expect(InventoryPage.productSixImage).toBeClickable();
    })
    it('Buttons to add the products to cart should work correctly', async () => {
        await expect(InventoryPage.btnsAddToCart).toBeClickable();
    })
    it('Add to cart and press icon', async () => {
        InventoryPage.addEverythingToCart();
        await InventoryPage.cartIcon.click();
    })
    it('The Continue Shopping button should display correctly', async () => {
        await expect(CartPage.btnContinueShop).toBeDisplayed();
    })
    it('The Continue Shopping button should work correctly', async () => {
        await expect(CartPage.btnContinueShop).toBeClickable();
    })
    it('The Checkout button should display correctly', async () => {
        await expect(CartPage.btnCheckout).toBeDisplayed();
    })
    it('The Checkout button should work correctly', async () => {
        await expect(CartPage.btnCheckout).toBeClickable();
    })
    it('The remove from cart buttons should display correctly', async () => {
        CartPage.addEverythingToCart();
        await expect(CartPage.btnsRemoveCart).toBeDisplayed();
        CartPage.removeEverythingFromCart();
    })
    it('Clicking the checkout button should lead to next page', async () => {
        await CartPage.btnCheckout.click();
    })
    it('The fieldsets should be displayed correctly', async () => {
        await expect(CheckoutPage.firstNameFS).toBeDisplayed();
        await expect(CheckoutPage.lastNameFS).toBeDisplayed();
        await expect(CheckoutPage.zipFS).toBeDisplayed();
    })
    it('The fieldsets should work correctly', async () => {
        await expect(CheckoutPage.firstNameFS).toBeClickable();
        await expect(CheckoutPage.lastNameFS).toBeClickable();
        await expect(CheckoutPage.zipFS).toBeClickable();
    })
    it('The Continue button should display correctly', async () => {
        await expect(CheckoutPage.btnContinue).toBeDisplayed();
    })
    it('The Continue button should work correctly', async () => {
        await expect(CheckoutPage.btnContinue).toBeClickable();
    })
    it('The Cancel button should display correctly', async () => {
        await expect(CheckoutPage.btnCancel).toBeDisplayed();
    })
    it('The Cancel button should display correctly', async () => {
        await expect(CheckoutPage.btnCancel).toBeClickable();
    })
    it('The fieldsets should get filled correctly and continue with the purchase', async () => {
        CheckoutPage.continue('Sandard', 'User', 2000);
    })
    /* it('The names of the products should display correctly', async () => {
        await expect(OverviewPage.productsNames).toBeDisplayed();
    })
    it('The prices of the products should display correctly', async () => {
        await expect(OverviewPage.productPrices).toBeDisplayed();
    })
    it('The descriptions of the products should display correctly', async () => {
        await expect(OverviewPage.productDescription).toBeDisplayed();
    }) */
    it('Social media icons should display correctly', async () => {
        await expect(OverviewPage.twitterIcon).toBeDisplayed();
        await expect(OverviewPage.facebookIcon).toBeDisplayed();
        await expect(OverviewPage.linkedInIcon).toBeDisplayed();
    })
    it('The quantity header text should display correctly', async () => {
        await expect(OverviewPage.qtyText).toBeDisplayed();
    })
    it('The description header text should display correctly', async () => {
        await expect(OverviewPage.descText).toBeDisplayed();
    })
    it('The copyright text should display correctly', async () => {
        await expect(OverviewPage.copyrightText).toBeDisplayed();
    })
    it('The Finish button should display correctly', async () => {
        await expect(OverviewPage.btnFinish).toBeDisplayed();
    })
    it('The Finish button should work correctly', async () => {
        await expect(OverviewPage.btnFinish).toBeClickable();
    })
    it('The Cancel button should display correctly', async () => {
        await expect(OverviewPage.btnCancel).toBeDisplayed();
    })
    it('The Cancel button should display correctly', async () => {
        await expect(OverviewPage.btnCancel).toBeClickable();
    })
    it('The summary info should display correctly', async () => {
        await expect(OverviewPage.summaryInformation).toBeDisplayed();
        await expect(OverviewPage.summaryValue).toBeDisplayed();
        await expect(OverviewPage.subTotalValue).toBeDisplayed();
        await expect(OverviewPage.taxesValue).toBeDisplayed();
        await expect(OverviewPage.totalValue).toBeDisplayed();
    })
    it('The finish button should be clicked and the process should finish', async () => {
        await OverviewPage.btnFinish.click();
    })
    it('The screen should display the correct message and image', async () => {
        await expect(CompletedPurchasePage.thanksMessage).toBeDisplayed();
        await expect(CompletedPurchasePage.deployInfo).toBeDisplayed();
        await expect(CompletedPurchasePage.ponyExpressImage).toBeDisplayed();
    })
    it('The back button should be displayed', async () => {
        await expect(CompletedPurchasePage.btnBack).toBeDisplayed();
    })
    it('The back button should work correctly', async () => {
        await expect(CompletedPurchasePage.btnBack).toBeClickable();
    })
})