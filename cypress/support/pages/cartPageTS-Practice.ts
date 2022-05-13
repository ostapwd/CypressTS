import BasePage from "./basePageTS-Practice";

export class CartPageTS extends BasePage {

    private inventoryItemsNamesInCart() { return cy.get(".inventory_item_name"); }
    private selectedProductQuantityInCart() { return cy.get(".cart_quantity"); }
    private urlCart() { return cy.url(); }

    public logAllProductsInCart() {
        this.inventoryItemsNamesInCart().each(item => {
            cy.log(item.text())
        });

        super.waitForSeconds(2)

        return this
    }

    public quantityOfSelectedProductsInCart() {
        this.selectedProductQuantityInCart().each(element => {
            expect(element.text()).to.be.equal("1");
        });

        super.waitForSeconds(2)
        return this
    }

    public verifyUrlCart() {
        this.urlCart().should('eq', 'https://www.saucedemo.com/cart.html')
        
        return this
    }
}


