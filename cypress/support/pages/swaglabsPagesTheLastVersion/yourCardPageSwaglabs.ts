import BasePage from "./BasePageSwaglabs";

export class YourCardPageSwaglabs extends BasePage{

    private removeFromTheCard() { return cy.contains("Remove"); }
    private removeProductFromTheContainer() { return cy.get("button[name='remove-sauce-labs-backpack']"); }
    private buttonContinueShopping () { return cy.xpath("//button[@id='continue-shopping']"); }
    private productsInCartList() { return cy.get('.cart_item'); } // how many item there are in the card
    private allChoosedProducts() { return cy.get('.cart_quantity'); }
    private removeAllProductsFromTheCart () { return cy.xpath('//button[@class="btn btn_secondary btn_small cart_button"]'); }
    private checkoutButton() { return  cy.xpath("//button[@data-test='checkout']"); }
    private qualityOfItemsInTheCart() { return cy.xpath('//span[@class="shopping_cart_badge"]'); }

    public qualityOfItemsInTheCartMustBee() {
        this.qualityOfItemsInTheCart().then(element => {
            expect(element.text()).to.be.equal('6');
        });
        return this;
    }

    public verifyThatNumbersOfSelectedProductsEquals(number) {
        this.qualityOfItemsInTheCart().then(element => {
            expect(element.text()).to.be.equal (number) 
            })
            return this;
    }


    public checkoutButtonClick() {
        this.checkoutButton().click();
        return this;
    }
    public removeItemFromTheCard() {
        this.removeFromTheCard().each(item => {
            cy.log(item.text()).click()
        })
    }

    public removeOneProductFromTheContainer() {
        this.removeProductFromTheContainer().click();
        return this;
    }

    public clickOnTheButtonContinueShopping() {
        this.buttonContinueShopping().click();
        return this;
    }
    public allChoosedProductsShouldContainNumber() {
        this.allChoosedProducts().should("contain", "1");
        return this;
    }

    public removeFromCardAllProducts() {
        this.removeAllProductsFromTheCart().each(item =>{ 
            item.click();
            });
            return this;
    }
}
    export default new YourCardPageSwaglabs();