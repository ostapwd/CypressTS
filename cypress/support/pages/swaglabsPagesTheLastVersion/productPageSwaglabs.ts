import BasePage from "./BasePageSwaglabs";

export class ProductPageSwaglabs extends BasePage {

    private addToChartButtons() { return cy.get("[id*='add-to-cart']"); }
    private inventoryItemNames() { return cy.get(".inventory_item_name"); }
    private selectedProductsNumber() { return cy.get(".shopping_cart_badge"); }
    private filterSelect() { return cy.get(".product_sort_container"); }

    private productsLabel() { return  cy.get("div .title"); }
    private addToCard() { return cy.get("#add-to-cart-sauce-labs-backpack"); }
    private shoppingCartContainer() { return cy.get('a[class="shopping_cart_link"]'); }
    private shoppingCardLable() { return cy.get("div .header_secondary_container"); }
    private addToCardAll() { return cy.xpath("//button[@class='btn btn_primary btn_small btn_inventory']"); }
    private allProductsInThePage () {return cy.get(".inventory_item_name"); }
    private allChoosedProducts() { return cy.get('.cart_quantity'); }

    private productLinkSouseLabsBackpack() { return cy.get('a[href="#"][id="item_4_title_link"]'); }
    private productLinkSauceLabsBikeLight() { return cy.get('a[href="#"][id="item_0_title_link"]'); }
    private productLinkSauceLabsBoltTShirt() { return cy.get('a[href="#"][id="item_1_title_link"]'); }
    private productLinkSauceLabsFleeceJacket() { return cy.get('a[href="#"][id="item_5_title_link"]'); }
    private productLinkSauceLabsOnesie() { return cy.get('a[href="#"][id="item_2_title_link"]'); }
    private productLinkTestAllTheThingsTShirtRed() { return cy.get('a[href="#"][id="item_3_title_link"]'); }
    private buttonContinueShopping() { return cy.xpath('//button[@id="back-to-products"]'); }
    


    public productLabelChecking() {
        this.productsLabel().should("contain", "Products");
        return this;
    }

    public addToCardOneProduct() {
        this.addToCard().click();
        return this;
    }

    public clickOnTheShoppingCartContainer() {
        this.shoppingCartContainer().click();
        return this;
    }

    public shoppingCardLableShouldContainText() {
        this.shoppingCardLable().should("contain", "Your Cart");
        return this;

    }

    public addToCartAllProducts() {
        this.addToCardAll().each(item => {
            item.click();
        });
            return this;
    }


    public logAllProducts() {
        this.inventoryItemNames().each(item => {
            cy.log(item.text())
        });
        super.waitForSeconds(1);
        return this;
    }

    public productLinkSouseLabsCheck() {
        this.productLinkSouseLabsBackpack().click();
        return this;
    }

    public clickButtonBackToProducts() {
        this.buttonContinueShopping().click();
        return this;
    }

    public clickProductLinkSauceLabsBikeLight() {
        this.productLinkSauceLabsBikeLight().click();
        return this;
    }

    public clickProductLinkSauceLabsBoltTShirt() {
        this.productLinkSauceLabsBoltTShirt().click();
        return this;
    }



    public clickProductLinkSauceLabsFleeceJacket() {
        this.productLinkSauceLabsFleeceJacket().click();
        return this;
    }
    public clickProductLinkSauceLabsOnesie() {
        this.productLinkSauceLabsOnesie().click();
        return this;
    }
    public clickProductLinkTestAllTheThingsTShirtRed() {
        this.productLinkTestAllTheThingsTShirtRed().click();
        return this;
    }



}         
            export default new ProductPageSwaglabs();