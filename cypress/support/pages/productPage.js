class ProductPage {

    get addToChartButtons() { return cy.get("[id*='add-to-cart']"); }
    get inventoryItemNames() { return cy.get(".inventory_item_name"); }
    get selectedProductsNumber() { return cy.get(".shopping_cart_badge"); }
    get menu(){return cy.xpath("//*[@id='react-burger-menu-btn']")}

    logAllProducts(){
        this.inventoryItemNames.each(item => {
            cy.log(item.text())
        });

        return this;
    }

    addToChartAllProducts() {
        this.addToChartButtons.each(item => {
            item.click();
        });

        return this;
    }

    verifyThatNumberOfSelectedProductsEqualsTo(number){
        this.selectedProductsNumber.then(element => {
            expect(element.text()).to.be.equal(number);
        });
    }
}

export default new ProductPage()