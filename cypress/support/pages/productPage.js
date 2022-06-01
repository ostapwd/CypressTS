import purchasePage from "./purchasePage";

class ProductPage {

    get addToChartButtons() { return cy.get("[id*='add-to-cart']"); }
    get removeToChartButtons() { return cy.get("[id*='remove']"); }
    get inventoryItemNames() { return cy.get(".inventory_item_name"); }
    get selectedProductsNumber() { return cy.get(".shopping_cart_badge"); }
    get prise() { return cy.get(".inventory_item_price"); }

    get menu() { return cy.get('#react-burger-menu-btn'); }
    get menuArrea() { return cy.get('.bm-menu-wrap'); }
    get allItems() { return cy.get('#inventory_sidebar_link'); }
    get about() { return cy.get('#about_sidebar_link'); }
    get logOut() { return cy.get('#logout_sidebar_link'); }
    get resetSidebar() { return cy.get('#reset_sidebar_link'); }

    get logo() { return cy.get('.app_logo') }
    get sotialIcons() { return cy.get(".social > li > a"); }

    get selector() { return cy.get(".product_sort_container"); }
    
    get cartLink() { return cy.get('.shopping_cart_link'); }


    openMenu() {
        this.menu.click();
        this.menuArrea.should('be.visible');

        return this;
    }
    openAllItems() {
        this.openMenu();
        this.allItems.click();
        cy.log('Click "All Items" is successful')

        return this;
    }
    openAbout() {
        this.about.click();

        return this;
    }
    logOutOf() {
        this.logOut.click();

        return this;
    }
    resetSidebarLinks() {
        this.selectedSomeOF();
        this.verifyThatNumberOfSelectedProductsEqualsTo(3);
        this.resetSidebar.click();
        this.verityfyThatNamberExist()

        return this;

    }

    logAllProducts() {
        this.inventoryItemNames.each(item => {
            cy.log(item.text())
        });

        return this;
    }
    addToChartAllProducts() {
        this.addToChartButtons.each(item => {
            item.click();
        });

        return this;
    }
    selectedSomeOF() {
        this.addToChartButtons.eq(0).click();
        this.addToChartButtons.eq(1).click();
        this.addToChartButtons.eq(2).click();

        return this;
    }
    removeToChartAllProducts() {
        this.removeToChartButtons.each(item => {
            item.click();
        });

        return this;
    }
    verityfyThatNamberExist() {
        this.selectedProductsNumber.should('not.exist')

        return this;
    }
    verifyThatNumberOfSelectedProductsEqualsTo(number) {
        this.selectedProductsNumber.should('exist')
        this.selectedProductsNumber.then(element => {
            expect(Number(element.text())).to.be.equal(number);
        });
        return this;
    }


    allNames() {
        this.inventoryItemNames.should('be.visible')
        this.inventoryItemNames.each(item => {
            cy.log(item.text())
        });
        return this;
    }
    allPrise() {
        this.prise.should('be.visible')
        this.prise.each(item => {
            cy.log(item.text())
        });
        return this;
    }

    nameAndPrise() {
        let arr =[];
        this.inventoryItemNames.then(function(text1){
            for(let i=0; i < 6; i++){
                arr.push(text1[i].innerText)
            }
           return arr;
        })
       this.prise.then(function(text1){
            for(let i=0; i < 6; i++){
               arr[i] += ': ' + text1[i].innerText
            }
        })
        for(let i=0; i < 6; i++){
            cy.log(arr[i])
         }
  
        return this;
    }
    checkSotialIcons() {
        this.sotialIcons.eq(0).click();
        this.sotialIcons.eq(1).click();
        this.sotialIcons.eq(2).click();
        return this;
    }
    useSelectorForItems() {
        this.selector.select('za')
        this.selector.select('lohi')
        this.selector.select('hilo')
        this.selector.select('az')
        
        return this;
    }
    makePurchase() {
        this.cartLink.click()

        return purchasePage;
    }

    wait() {
        cy.wait(500);

        return this;
    }
}

export default new ProductPage()