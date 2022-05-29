import basePageSwagLabsTS from "./basePageSwagLabsTS";
import { checkoutStepOnePageSwagLabsTS } from './checkoutStepOnePageSwagLabsTS';

export class shoppingCartSwagLabs extends basePageSwagLabsTS{

    private inventoryItemsNamesInCart() { return cy.get(".inventory_item_name"); }
    private selectedProductQuantityInCart() { return cy.get(".cart_quantity"); }
    public shoppingCartLabel() { return cy.get("#header_container .title"); }
    private checkoutButton() { return cy.get("#checkout"); }

    public logAllProductsInCart() {
        this.inventoryItemsNamesInCart().each(item => {
            cy.log(item.text())
        });

        super.waitForSeconds(1)
            return this
    }

    public quantityOfSelectedProductsInCart() {
        this.selectedProductQuantityInCart().each(element => {
            expect(element.text()).to.be.equal("1");
        });

        super.waitForSeconds(1)
            return this
    }

    public getCheckoutButton(){
        return this.checkoutButton()
    }

    public clickOpenCheckoutStepOnePage(){
        this.checkoutButton().click()
            return new checkoutStepOnePageSwagLabsTS()
    }
}