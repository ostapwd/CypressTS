import basePageSwagLabsTS from "./basePageSwagLabsTS";
import { shoppingCartSwagLabs } from "./shoppingCartSwagLabsTS";

export class ProductPageSwagLabsTS extends basePageSwagLabsTS {
    private addToCartButtons() { return cy.get("[id*='add-to-cart']"); }
    private deleteFromCartButtons() { return cy.get("[id*='remove']"); }
    private inventoryItemsNames() { return cy.get(".inventory_item_name"); }
    private quantityProductsInCart() { return cy.get("#shopping_cart_container .shopping_cart_badge"); }
    private menu() { return cy.get("#react-burger-menu-btn"); }
    private logoutButton() { return cy.get("#logout_sidebar_link"); }
    public shoppingCartLink() { return cy.get(".shopping_cart_link"); }
    public selectFilterProductsLabel() {return cy.xpath("//select[@data-test='product_sort_container']")}
    public nameOfFirstProductOnProductsPage() {return cy.xpath("(//*[@class='inventory_item_name'])[1]")}
    public priceOfFirstProductOnProductsPage() {return cy.xpath("(//*[@class='inventory_item_price'])[1]")}
    
    public openShoppingCart(){
        this.shoppingCartLink().click();
            return new shoppingCartSwagLabs()
    }

    public getLogAllProducts(){
        return this.inventoryItemsNames()
    }

    public addToCartAllproducts(){
        this.addToCartButtons().each(item => {
            item.click()
        });
        this.waitForSeconds(1)
            return this
    }

    public deleteFromCartAllproducts(){
        this.deleteFromCartButtons().each(item => {
            item.click()
        });
        this.waitForSeconds(1)
            return this
    }

    public getQuantityProductsInCart(){
       return this.quantityProductsInCart()
    }

    public getQuantityProductsInEmptyCart(){
       return this.shoppingCartLink()
    }

    public openBurgerMenu() {
        this.menu().click()
        this.waitForSeconds(1)
            return this
    };

    public logoutOfTheApp() {
        this.openBurgerMenu();
        this.logoutButton().click();
            return this
    } 

    public getShoppingCartLabel(){
        return this.shoppingCartLink()
    }

    public getSelectFilter(option: string){
       return this.selectFilterProductsLabel()
    }

    public getSelectFilterByIndex(index: number){
       this.selectFilterProductsLabel().select(index)
       return this
    }

    public getFirstProductName(){
       return this.nameOfFirstProductOnProductsPage()
    }

    public getFirstProductPrice(){
        return this.priceOfFirstProductOnProductsPage()
     }
}