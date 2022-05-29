export class ProductsCart {
private getCartTitle(){ return cy.get('.title') }
private getInventoryItemName(){ return cy.get('.cart_item') }
private getCheckoutButton(){ return cy.get('.cart_footer #checkout') }

public checkTitleText(){
    return this.getCartTitle() 
}

public checkInventoryItemName(){
    return this.getInventoryItemName()
}

public clickCheckoutButton(){
     this.getCheckoutButton().click()
     return this
}
 
}




