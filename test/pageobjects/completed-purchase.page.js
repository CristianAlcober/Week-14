class CompletedPurchasePage {
    get thanksMessage() { return $('.complete-header') }
    get deployInfo() { return $('.complete-text') }
    get ponyExpressImage() { return $('.pony_express') }
    get btnBack() { return $('#back-to-products') }
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

}

module.exports = new CompletedPurchasePage();