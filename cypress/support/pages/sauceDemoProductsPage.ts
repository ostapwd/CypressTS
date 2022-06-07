export class ProductsPage {
    private getButtonAddToCart(){ return cy.get('#add-to-cart-sauce-labs-backpack') }
    private getButtonProductCart(){ return cy.get('#shopping_cart_container a') }
    private getProductsTitle(){ return cy.get('.header_secondary_container') }

        public clickOnTheButtonAddToTheCart(){
            this.getButtonAddToCart().click()
            return this
        }

        public clickOnTheButtonProductCart(){
            this.getButtonProductCart().click()
            return this
        }

        public checkProductsTitle(){
           return this.getProductsTitle().click()
            
        }

}