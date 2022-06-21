class OverviewPage {
    get btnCancel() { return $('#cancel') }
    get btnFinish() { return $('#finish') }
    get summaryInformation() { return $('.summary_info') }
    get summaryValue() { return $('.summary_info_label') }
    get subTotalValue() { return $('.summary_subtotal_label') }
    get taxesValue() { return $('.summary_tax_label') }
    get totalValue() { return $('.summary_total_label') }
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
    get productsNames() { return $('.inventory_item_name') }
    get productPrices() { return $('.inventory_item_price') }
    get productDescription() { return $('.inventory_item_description') }
    get qtyText() { return $('.cart_quantity_label') }
    get descText() { return $('.cart_desc_label') }
}

module.exports = new OverviewPage();