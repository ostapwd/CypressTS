import BasePage from "./BasePage"
export class CartPageTS extends BasePage{
    private removeButton() {return cy.get(".cart_button")}

    private checkoutBtn() {return cy.get("#checkout")}

    public removeAllItemsFromCart(){
        this.removeButton().each((item) => {item.click()})
        return this
    }

    public clickCheckout(){
        this.checkoutBtn().click()
    }
}