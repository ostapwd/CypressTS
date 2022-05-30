import BasePage from "./basePage-practice";

export class ProductPageTs extends BasePage {

    public get productsLabel() { return cy.get("div .title"); }
    private get addToCard() { return cy.get("#add-to-cart-sauce-labs-backpack"); }
    private get shoppingCartContainer() { return cy.xpath("//div[@id='shopping_cart_container']"); }
    private get burgerButton() { return cy.xpath("//div[@class='bm-burger-button']"); }
    private get allItemsButton() { return cy.xpath("//a[@id='inventory_sidebar_link']"); }
    private get removeFromTheCard() { return cy.contains("Remove"); }
    private get shoppingCardLable() { return cy.get("div .header_secondary_container"); }
    private get addToCardAll() { return cy.xpath("//button[@class='btn btn_primary btn_small btn_inventory']"); }
    private get removeProductFromTheContainer() { return cy.get("button[name='remove-sauce-labs-backpack']"); }
    private get buttonContinueShopping() { return cy.xpath("//button[@id='continue-shopping']"); }
    private get allProductsInThePage() { return cy.get(".inventory_item_name"); }
    private get productsInCartList() { return cy.get('.cart_item'); }
    private get allSelectedProducts() { return cy.get('.cart_quantity'); }
    private get removeAllProductsFromTheCart() { return cy.xpath('//button[@class="btn btn_secondary btn_small cart_button"]'); }
    private get quantityOfItemsInTheCart() { return cy.xpath('//span[@class="shopping_cart_badge"]'); }


    public addToCartAllProducts() {
        this.addToCardAll.each(item => {
            item.click();
        });
        super.waitForSeconds(1);
        return this;
    }

    public removeOneProductFromTheCard() {
        this.removeFromTheCard.each(item => {
            item.click();
        });
        return this;
    }
    public removeFromCardAllProducts() {
        this.removeAllProductsFromTheCart.each(item => {
            item.click();
        });

        return this;
    }

    public verifyThatNumbersOfSelectedProductsEquals(number) {
        this.quantityOfItemsInTheCart.then(element => {
            expect(element.text()).to.be.equal(number)
        });
    }

    public logAllProducts() {
        this.allProductsInThePage.each(item => {
            cy.log(item.text());
        });
        return this;
    }

}

export default new ProductPageTs()