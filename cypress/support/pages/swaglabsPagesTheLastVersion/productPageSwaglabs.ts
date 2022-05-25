import BasePage from "./BasePageSwaglabs";

export class ProductPageSwaglabs extends BasePage{

    private addToChartButtons() { return cy.get("[id*='add-to-cart']"); }
    private inventoryItemNames() { return cy.get(".inventory_item_name"); }
    private selectedProductsNumber() { return cy.get(".shopping_cart_badge"); }
    //private menu(){return cy.xpath("//*[@id='react-burger-menu-btn']")}
    private filterSelect() { return cy.get(".product_sort_container"); }

    private productsLabel() { return  cy.get("div .title"); }
    private addToCard() { return cy.get("#add-to-cart-sauce-labs-backpack"); }
    private shoppingCartContainer() { return cy.get('a[class="shopping_cart_link"]'); }
    private burgerButton() { return cy.xpath("//div[@class='bm-burger-button']"); }
    private allItemsButton() { return  cy.xpath("//a[@id='inventory_sidebar_link']"); }
    private removeFromTheCard() { return cy.contains("Remove"); }
    private shoppingCardLable() { return cy.get("div .header_secondary_container"); }
    private addToCardAll() { return cy.xpath("//button[@class='btn btn_primary btn_small btn_inventory']"); }
    private remoutProductFromTheContainer() { return cy.get("button[name='remove-sauce-labs-backpack']"); }
    private buttonContinueShopping () { return cy.xpath("//button[@id='continue-shopping']"); }
    private allProdactsInThePage () {return cy.get(".inventory_item_name"); }
    private productsInCartList() { return cy.get('.cart_item'); }
    private allChosedProducts() { return cy.get('.cart_quantity'); }
    private removeAllProductsFromTheCart () { return cy.xpath('//button[@class="btn btn_secondary btn_small cart_button"]'); }
    private qualityOfItemsInTheCart() { return cy.xpath('//span[@class="shopping_cart_badge"]'); }
    private productLinkSouseLabs() { return cy.get('a[href="#"][id="item_4_title_link"]'); }


    public puroductLabelChecking() {
        this.productsLabel().should("contain", "Products");
        return this;
    }

    public addToCardOneProduct() {
        this.addToCard().click();
        return this;
    }

    public clickOnTheShoppingCartContainer() {
        this.shoppingCartContainer().click();
        return this;
    }

    public clickOnTheBurgerButton() {
        this.burgerButton(). click();
        return this;
    }

    public clickOnTheAllItemsButton() {
        this.allItemsButton().click();
        return this;
    }

    public removeItemFromTheCard() {
        this.removeFromTheCard().each(item => {
            cy.log(item.text()).click()
        })
    }

    public shoppingCardLableShouldContainText() {
        this.shoppingCardLable().should("contain", "Your Cart");
        return this;

    }

    public addToCartAllProducts() {
        this.addToCardAll().each(item => {
            item.click();
        });
            return this;
    }

    public removeOneProductFromTheContainer() {
        this.remoutProductFromTheContainer().click();
        return this;
    }
    
    public clickOnTheButtonContinueShopping() {
        this.buttonContinueShopping().click();
        return this;
    }

    public allChoosedProductsShouldContainNumber() {
        this.allChosedProducts().should("contain", "1");
        return this;
    }

    public qualityOfItemsInTheCartMustBee() {
        this.qualityOfItemsInTheCart().then(element => {
            expect(element.text()).to.be.equal('6');
        });
        return this;
    }

    public removeFromCardAllProducts() {
        this.removeAllProductsFromTheCart().each(item =>{ item.click();
            });
            return this;
    }

    public logAllProducts() {
        this.inventoryItemNames().each(item => {
            cy.log(item.text())
        });
        super.waitForSeconds(1);
        return this;
    }

    public verifyThatNumbersOfSelectedProductsEquals(number) {
        this.qualityOfItemsInTheCart().then(element => {
            expect(element.text()).to.be.equal (number) 
            })
            return this;
    }

    public productLinkSouseLabsCheck() {
        this.productLinkSouseLabs().click();
        return this;
    }







   /* 


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

   /* public propertyValue() { 
        this.propertyValueOfContent.then($els => {
            let win = $els[0].ownerDocument.defaultView;
            const after = win.getComputedStyle($els[0], 'after');
            const contentValue = after.getPropertyValue('content');
            expect(contentValue).to.eq('""');
            
         }); 
         return this;
    }*/

    /*logAllProducts() {this.allProdactsInThePage.each(item =>
        cy.log(item.text()) );
        return this;
    }


            verifyThatNumbersOfSelectedProductsEquals(number) {
                this.CualityOfItemsInTheCart.then(element => {expect(element.text()).to.be.equal (number) })
            }*/
}         
            export default new ProductPageSwaglabs();