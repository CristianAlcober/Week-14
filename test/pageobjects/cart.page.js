class CartPage {
    get sideBarIcon() { return $('#react-burger-menu-btn') }
    get cartIcon() { return $('#shopping_cart_container') }
    get robotFooter() { return $('.footer_robot') }
    get productsTitle() { return $('.header_secondary_container')}
    get twitterIcon() { return $('.social_twitter') }
    get facebookIcon() { return $('.social_facebook') }
    get linkedInIcon() { return $('.social_linkedin') }
    get copyrightText() { return $('.footer_copy') }
    get sidebarCross() { return $('#react-burger-cross-btn') }
    get sidebarOptionOne() { return $('#inventory_sidebar_link') }
    get sidebarOptionTwo() { return $('#about_sidebar_link') }
    get sidebarOptionThree() { return $('#logout_sidebar_link') }
    get sidebarOptionFour() { return $('#reset_sidebar_link') }
    get btnCheckout() { return $('#checkout') }
    get btnContinueShop() { return $('#continue-shopping') }
    get btnOneRemoveCart() { return $('#remove-sauce-labs-backpack') }
    get btnTwoRemoveCart() { return $('#remove-sauce-labs-bike-light') }
    get btnThreeRemoveCart() { return $('#remove-sauce-labs-bolt-t-shirt') }
    get btnFourRemoveCart() { return $('#remove-sauce-labs-fleece-jacket') }
    get btnFiveRemoveCart() { return $('#remove-sauce-labs-onesie') }
    get btnSixRemoveCart() { return $('#remove-test\.allthethings\(\)-t-shirt-\(red\)') }
    get btnsRemoveCart() { return $('.btn_secondary') }
    get productOneName() { return $('#item_4_title_link') }
    get productTwoName() { return $('#item_0_title_link') }
    get productThreeName() { return $('#item_1_title_link') }
    get productFourName() { return $('#item_5_title_link') }
    get productFiveName() { return $('#item_2_title_link') }
    get productSixName() { return $('#item_3_title_link') }
    get productsNames() { return $('.inventory_item_name') }
    get productPrices() { return $('.pricebar') }
    get productDescription() { return $('.inventory_item_description') }
    get logoHead() { return $('.app_logo') }
    get qtyText() { return $('.cart_quantity_label') }
    get descText() { return $('.cart_desc_label') }
    get btnOneAddToCart() { return $('#add-to-cart-sauce-labs-backpack') }
    get btnTwoAddToCart() { return $('#add-to-cart-sauce-labs-bike-light') }
    get btnThreeAddToCart() { return $('#add-to-cart-sauce-labs-bolt-t-shirt') }
    get btnFourAddToCart() { return $('#add-to-cart-sauce-labs-fleece-jacket') }
    get btnFiveAddToCart() { return $('#add-to-cart-sauce-labs-onesie') }
    get btnSixAddToCart() { return $('#add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)') }

    async addEverythingToCart() {
        await this.btnOneAddToCart.click();
        await this.btnTwoAddToCart.click();
        await this.btnThreeAddToCart.click();
        await this.btnFourAddToCart.click();
        await this.btnFiveAddToCart.click();
        await this.btnSixAddToCart.click();
    }

    async removeEverythingFromCart() {
        await this.btnOneRemoveCart.click();
        await this.btnTwoRemoveCart.click();
        await this.btnThreeRemoveCart.click();
        await this.btnFourRemoveCart.click();
        await this.btnFiveRemoveCart.click();
        await this.btnSixRemoveCart.click();
    }
}

module.exports = new CartPage();