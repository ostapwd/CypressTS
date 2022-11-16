
class ProductPage{

    get productLabel() { return cy.get("#header_container .title")}
    get addToCardButtons() {return cy.get("[id*='add-to-cart']")}
    get inventoryItemNames() {return  cy.get(".inventory_item_name")}
    get menu(){return cy.xpath("//*[@id='react-burger-menu-btn']")}
    get selectedItemsQuantity(){ return cy.get(".shopping_cart_badge")}

    logAllProducts(){
        this.inventoryItemNames.each(el=>{
            cy.log(el.text())
        })
        return this;
    }
    addToCardAllProducts(){
        this.addToCardButtons.each(el=>{
            el.click()
        })
        return this;
    }
    verifyQuantityOfproducts(number){
        this.selectedItemsQuantity.then(el=>{
            expect(el.text()).to.be.eq(number)
        })
        
    }
}

export default new ProductPage()