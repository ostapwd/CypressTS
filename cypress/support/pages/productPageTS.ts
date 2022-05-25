
export class ProductPageTS{

    private addToChartButtons() { return cy.get("[id*='add-to-cart']"); }
    private inventoryItemNames() { return cy.get(".inventory_item_name"); }
    private selectedProductsNumber() { return cy.get(".shopping_cart_badge"); }
    //private menu(){return cy.xpath("//*[@id='react-burger-menu-btn']")}

    public logAllProducts(){
        this.inventoryItemNames().each(item => {
            cy.log(item.text())
        });


        return this;
    }

    public addToChartAllProducts() {
        this.addToChartButtons().each(item => {
            item.click();
        });

        return this;
    }

    public verifyThatNumberOfSelectedProductsEqualsTo(number){
        this.selectedProductsNumber().then(element => {
            expect(element.text()).to.be.equal(number);
        });
    }
}