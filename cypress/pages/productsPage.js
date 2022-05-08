class ProductsPage  {
    get getAllProducts(){ return cy.get('*[class="btn btn_primary btn_small btn_inventory"]') }
    get checkProducts(){ return cy.get('.shopping_cart_badge') }
    
    addAllButtons(){
        this.getAllProducts.each((item)=>{
            item.click()
        })
    }
    checkProductCart(){
        this.checkProducts.each((elements)=>{
            expect(elements.text()).to.be.equal('6')
        })
    }

    }
    
    export default new ProductsPage()