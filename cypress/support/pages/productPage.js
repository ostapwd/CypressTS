class ProductPage {
    get addToCartButtons() { return cy.get("[id*='add-to-cart']"); }
    get inventoryItemsNames() { return cy.get(".inventory_item_name"); }
    get selectedProductsNumber() { return cy.get("#shopping_cart_container .shopping_cart_badge"); }
    get menu() { return cy.get("#react-burger-menu-btn"); }
    get logoutButton() { return cy.get("#logout_sidebar_link"); }
    get productsLabel() { return cy.get("#header_container .title"); }
    

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

        return this
    }

    openMenu() {
        this.menu.then(item => {
            item.click()})
        return this
    };

    logoutApp() {
        this.logoutButton.click();
        return this
    } 

    
    waitTime() {
        let waitTime;
        waitTime = cy.wait(2000)
        return this
    }

}

export default new ProductPage()
