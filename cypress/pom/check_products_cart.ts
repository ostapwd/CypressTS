export class CheckCart {
    private checkingQuantityProductsInCart(){ return cy.get('.shopping_cart_badge') }

    public chekAddedProducts(){
        this.checkingQuantityProductsInCart().then((element)=>{
            cy.log(element.text())
        })}
}
