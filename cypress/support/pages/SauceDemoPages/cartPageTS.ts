import BasePage from "./BasePage"
export class CartPageTS extends BasePage{
    private removeButton() {return cy.get(".cart_button")}

    public removeAllItemsFromCart(){
        this.removeButton().each((item) => {item.click()})
        return this
    }
}