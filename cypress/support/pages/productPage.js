class ProductPage {
    get addToCartButtons() { return cy.get("[id*='add-to-cart']"); }
    get inventoryItemsNames() { return cy.get(".inventory_item_name"); }
    get selectedProductsNumber() { return cy.get("#shopping_cart_container .shopping_cart_badge"); }
    get menu() { return cy.xpath("//*[@id='react-burger-menu-btn']"); }

    logAllProducts(){
        this.inventoryItemsNames.each(item => {
            cy.log(item.text())
        });

        return this
    }

    addToCartAllproducts(){
        this.addToCartButtons.each(item => {
            item.click()
        });

        return this
    }

    verifyThatNumberSelectedProductsEquals(number){
        this.selectedProductsNumber.then( element => {
            expect(element.text()).to.be.equal("6");
        }); 
    }
}

export default new ProductPage()
