import BasePage from "./BasePageSwaglabs";

export class YourCardPageSwaglabs {

    private removeFromTheCard() { return cy.contains("Remove"); }
    private removeProductFromTheContainer() { return cy.get("button[name='remove-sauce-labs-backpack']"); }
    private buttonContinueShopping() { return cy.xpath("//button[@id='continue-shopping']"); }
    private productsInCartList() { return cy.get('.cart_item'); } // how many item there are in the card
    private allChoosedProducts() { return cy.get('.cart_quantity'); }
    private removeAllProductsFromTheCart() { return cy.xpath('//button[@class="btn btn_secondary btn_small cart_button"]'); }
    private checkoutButton() { return cy.xpath("//button[@data-test='checkout']"); }
    private qualityOfItemsInTheCart() { return cy.xpath('//span[@class="shopping_cart_badge"]'); }

    public qualityOfItemsInTheCartMustBee() {
        return this.qualityOfItemsInTheCart()
    };

    public verifyThatNumbersOfSelectedProductsEquals() {
        return this.qualityOfItemsInTheCart()
    };

    public checkoutButtonClickOnPageYourCard() {
        this.checkoutButton().click();
        return this;
    };

    public removeItemFromTheCard() {
        return this.removeFromTheCard()
    };

    public clickRemoveOneProductFromTheContainer() {
        this.removeProductFromTheContainer().click();
    };

    public clickOnTheButtonContinueShopping() {
        this.buttonContinueShopping().click();
        return this;
    };

    public allChoosedProductsShouldContainNumber() {
        return this.allChoosedProducts()
    };

    public removeFromCardAllProducts() {
        return this.removeAllProductsFromTheCart()
    };
}
export default new YourCardPageSwaglabs();