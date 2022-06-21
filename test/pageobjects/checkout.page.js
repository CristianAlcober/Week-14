class CheckoutPage {
    get firstNameFS() { return $('#first-name') }
    get lastNameFS() { return $('#last-name') }
    get zipFS() { return $('#postal-code') }
    get btnCancel() { return $('#cancel') }
    get btnContinue() { return $('#continue') }
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
    get logoHead() { return $('.app_logo') }
    get errorMessage() { return $('.error-message-container.error') }

    async continue(firstName, lastName, zip) {
        await this.firstNameFS.setValue(firstName);
        await this.lastNameFS.setValue(lastName);
        await this.zipFS.setValue(zip);
        await this.btnContinue.click();
    }
}

module.exports = new CheckoutPage();