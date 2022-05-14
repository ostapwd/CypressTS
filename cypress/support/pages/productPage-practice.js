
class ProductPage {

    get productsLabel() { return  cy.get("div .title"); }
    get addToCard() { return cy.get("#add-to-cart-sauce-labs-backpack"); }
    get shoppingCartContainer() { return cy.xpath("//div[@id='shopping_cart_container']"); }
    get burgerButton() { return cy.xpath("//div[@class='bm-burger-button']"); }
    get allItemsButton() { return  cy.xpath("//a[@id='inventory_sidebar_link']"); }
    get removeFromTheCard() { return cy.contains("Remove"); }
    get shoppingCardLable() { return cy.get("div .header_secondary_container"); }
    get addToCardAll() { return cy.xpath("//button[@class='btn btn_primary btn_small btn_inventory']"); }
    get remoutProductFromTheContainer() { return cy.get("button[name='remove-sauce-labs-backpack']"); }
    get buttonContinueShopping () { return cy.xpath("//button[@id='continue-shopping']"); }
    get allProdactsInThePage () {return cy.get(".inventory_item_name"); }
    get productsInCartList() { return cy.get('.cart_item'); }
    get allChosedProducts() { return cy.get('.cart_quantity'); }
    get removeAllProductsFromTheCart () { return cy.xpath('//button[@class="btn btn_secondary btn_small cart_button"]'); }
    get CualityOfItemsInTheCart() { return cy.xpath('//span[@class="shopping_cart_badge"]'); }
    


    logAllProducts() {this.allProdactsInThePage.each(item =>
        cy.log(item.text()) );
        return this;
}


    loginToTheApp(username, password) {
        this.usernameInput.type(username);
        this.passwordInput.type(password);
        this.loginButton.click();

        
    }

    addToCartAllProducts() {
        this.addToCardAll.each(item =>
            { item.click();
            });
        
            return this;
            }
    

    removeFromCardAllProducts () {
        this.removeAllProductsFromTheCart.each(item =>
            { item.click();
            });
        
            return this;
            }

            verifyThatNumbersOfSelectedProductsEquals(number) {
                this.CualityOfItemsInTheCart.then(element => {expect(element.text()).to.be.equal (number) })
            }
          

    }



export default new ProductPage()