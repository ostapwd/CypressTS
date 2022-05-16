import basePageTSPractice from "./basePageTSPractice";
import { CartPageTSPractice } from "./cartPageTSPractice";

export class ProductPageTSPractice extends basePageTSPractice {
    private addToCartButtons() { return cy.get("[id*='add-to-cart']"); }
    private inventoryItemsNames() { return cy.get(".inventory_item_name"); }
    private selectedProductsNumber() { return cy.get("#shopping_cart_container .shopping_cart_badge"); }
    private menu() { return cy.get("#react-burger-menu-btn"); }
    private logoutButton() { return cy.get("#logout_sidebar_link"); }
    public productsLabel() { return cy.get("#header_container .title"); }
    public linkInCart() { return cy.get(".shopping_cart_link"); }
    public urlProductsPage() { return cy.url(); }
    
    public openShoppingCart(){
        this.linkInCart().click();
            return new CartPageTSPractice()
    }

    public logAllProducts(){
        this.inventoryItemsNames().each(item => {
            cy.log(item.text())
        });

        super.waitForSeconds(1)
            return this
    }

    public addToCartAllproducts(){
        this.addToCartButtons().each(item => {
            item.click()
        });
        this.waitForSeconds(2)
            return this
    }

    public verifyNumberSelectedProducts(number){
        this.selectedProductsNumber().then( element => {
            expect(element.text()).to.be.equal("6");
        }); 
        return this
    }

    public openMenu() {
        this.menu().then(item => {
            item.click()
            this.waitForSeconds(1)
        })
        return this
    };

    public logoutApp() {
        this.logoutButton().click();
            return this
    } 

    public verifyUrlProductsPage(){
        this.urlProductsPage().should('eq', 'https://www.saucedemo.com/inventory.html');
        return this
    }

    public verifyProductsLabel(){
        this.productsLabel().should('be.visible').then((element) => {
            expect(element.text()).to.be.equal('Products')
        })
        return this
    }

    // public waitTime() {
    //     let waitTime :number;
    //     waitTime = cy.wait( 2000)
    //     return this
    // }
}

