import BasePage from "./BasePage";

export class ProductPageTS extends BasePage{

    private addToChartButtons() { return cy.get("[id*='add-to-cart']"); }
    private inventoryItemNames() { return cy.get(".inventory_item_name"); }
    private selectedProductsNumber() { return cy.get(".shopping_cart_badge"); }
    //private menu(){return cy.xpath("//*[@id='react-burger-menu-btn']")}
    private filterSelect() { return cy.get(".product_sort_container"); }


    public filterByText(option: string){
        this.filterSelect().select(option);

        return this;
    }

    public filterByIndex(index: number){
        this.filterSelect().select(index);

        return this;
    }

    public logAllProducts(){
        this.inventoryItemNames().each(item => {
            cy.log(item.text())
        });

        super.waitForSeconds(1);

        return this;
    }

    public addToChartAllProducts() {
        this.addToChartButtons().each(item => {
            item.click();
            super.waitForSeconds(1);
        });

        return this;
    }

    public verifyThatNumberOfSelectedProductsEqualsTo(number){
        this.selectedProductsNumber().then(element => {
            expect(element.text()).to.be.equal(number);
        });
    }
}