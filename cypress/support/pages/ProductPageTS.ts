import BasePage from "./BasePage"

export class ProductsPageTS extends BasePage{
    private productsLabel() {return cy.get("#header_container .title")}
    private addToChartButtons() {return cy.get("[id*='add-to-cart']")}
    private inventoryItemNames() {return cy.get(".inventory_item_name")}
    private selectedProductsNumber() {return cy.get(".shopping_cart_badge")}
    private productSortContainer() {return cy.get(".product_sort_container")}

    public logAllProducts(){
        this.inventoryItemNames().each(item => {
            cy.log(item.text())
        })
        super.waitForSeconds(2)
        return this
    }

    public addAllProductsToCart(){
        this.addToChartButtons().each((item) => {item.click()})
        return this
    }

    public verifyProductsNumberInCart(number){
        this.selectedProductsNumber().then(element => {expect(element.text()).to.be.equal(number)})
        return this
    }

    public openCart(){
        this.selectedProductsNumber().click()
        return this
    }

    public verifyPageTitle(title){
        this.productsLabel().should((item) => {expect(item).to.contain(title)})
        return this
    }

    public sortByNamefromAtoZ(){
        this.productSortContainer().select('Name (A to Z)')
        return this
    }

    public sortByNamefromZtoA(){
        this.productSortContainer().select('Name (Z to A)')
        return this
    }

    public sortByPriceFromLowToHigh(){
        this.productSortContainer().select('Price (low to high)')
        return this
    }

    public sortByPriceFromHightoLow(){
        this.productSortContainer().select('Price (high to low)')
        return this
    }
}
