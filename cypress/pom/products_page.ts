export class ProductsTS {
    private selectAllProducts(){ return cy.get('.btn_inventory') }
    public addAllProducts(){
        this.selectAllProducts().then((element)=>{
            element.click()
        })
    }
}