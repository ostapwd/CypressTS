import BasePage from "./BasePageSwaglabs";



export class ProductPageSwaglabs extends BasePage {

    private inventoryItemNames() { return cy.get(".inventory_item_name"); }
    public checkProductsLabelInTheProductPage() { return cy.get("div .title"); }
    private addToCard() { return cy.get("#add-to-cart-sauce-labs-backpack"); }
    private shoppingCartContainer() { return cy.get('a[class="shopping_cart_link"]'); }
    public shoppingCardLable() { return cy.get("div .header_secondary_container"); }
    public addToCardAll() { return cy.xpath("//button[@class='btn btn_primary btn_small btn_inventory']"); }
    private productLinkSouseLabsBackpack() { return cy.get('a[href="#"][id="item_4_title_link"]'); }
    private productLinkSauceLabsBikeLight() { return cy.get('a[href="#"][id="item_0_title_link"]'); }
    private productLinkSauceLabsBoltTShirt() { return cy.get('a[href="#"][id="item_1_title_link"]'); }
    private productLinkSauceLabsFleeceJacket() { return cy.get('a[href="#"][id="item_5_title_link"]'); }
    private productLinkSauceLabsOnesie() { return cy.get('a[href="#"][id="item_2_title_link"]'); }
    private productLinkTestAllTheThingsTShirtRed() { return cy.get('a[href="#"][id="item_3_title_link"]'); }
    private buttonContinueShopping() { return cy.xpath('//button[@id="back-to-products"]'); }


    public addToCardOneProductandClick() {
        this.addToCard().click();
        super.waitForSeconds(3);
        return this;
    };

    public clickOnTheShoppingCartContainer() {
        this.shoppingCartContainer().click();
        return this
    };

    public shoppingCardLableShouldContainText() {
        return this.shoppingCardLable()
    };

    public addToCartAllProducts() {
        return this.addToCardAll()
    };

    public logAllProducts() {
        return this.inventoryItemNames()
    };

    public clickOnProductLinkSouseLabsCheck() {
        this.productLinkSouseLabsBackpack().click();
        return this;
    };

    public clickButtonBackToProducts() {
        this.buttonContinueShopping().click();
        return this;
    };

    public clickOnProductLinkSauceLabsBikeLight() {
        this.productLinkSauceLabsBikeLight().click();
        return this;
    };

    public clickOnProductLinkSauceLabsBoltTShirt() {
        this.productLinkSauceLabsBoltTShirt().click();
        return this;
    };

    public clickOnProductLinkSauceLabsFleeceJacket() {
        this.productLinkSauceLabsFleeceJacket().click();
        return this;
    };

    public clickOnProductLinkSauceLabsOnesie() {
        this.productLinkSauceLabsOnesie().click();
        return this;
    };

    public clickOnProductLinkTestAllTheThingsTShirtRed() {
        this.productLinkTestAllTheThingsTShirtRed().click();
        return this;
    };


}
export default new ProductPageSwaglabs();