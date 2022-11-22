
export class ProductPageTS{

   // private productLabel() { return cy.get("#header_container .title")}
    private addToCardButtons() {return cy.get("[id*='add-to-cart']")}
    private inventoryItemNames() {return  cy.get(".inventory_item_name")}
   // private menu(){return cy.xpath("//*[@id='react-burger-menu-btn']")}
   private selectedItemsQuantity(){ return cy.get(".shopping_cart_badge")}

   public logAllProducts(){
        this.inventoryItemNames().each(el=>{
            cy.log(el.text())
        })
        return this;
    }
    public addToCardAllProducts(){
        this.addToCardButtons().each(el=>{
            el.click()
        })
        return this;
    }
    public verifyQuantityOfproducts(number: number){
        this.selectedItemsQuantity().then(el=>{
            expect(el.text()).to.be.eq(number)
        })
        
    }
}

