import PurchasePageTS from "./purchasePageTS"
import BasePage from "./BasePage";

export class ProductPageTS extends BasePage{

    private addToChartButtons() { return cy.get("[id*='add-to-cart']"); }
    private removeToChartButtons() { return cy.get("[id*='remove']"); }
    private inventoryItemNames() { return cy.get(".inventory_item_name"); }
    private selectedProductsNumber() { return cy.get(".shopping_cart_badge"); }
    private selector() { return cy.get(".product_sort_container"); }
    private prise() { return cy.get(".inventory_item_price"); }
    
    private menu() { return cy.get('#react-burger-menu-btn'); }
    private menuArrea() { return cy.get('.bm-menu-wrap'); }
    private allItemsInMenu() { return cy.get('#inventory_sidebar_link'); }
    private about() { return cy.get('#about_sidebar_link'); }
    private logOut() { return cy.get('#logout_sidebar_link'); }
    private resetSidebar() { return cy.get('#reset_sidebar_link'); }
    
    private sotialIcons() { return cy.get(".social > li > a"); }
    
    private cartLink() { return cy.get('.shopping_cart_link'); }

// Work with menu 
    public openMenu() {
        this.menu().click();
        this.menuArrea().should('be.visible');

        return this;
    }

    public openAllItemsInMenu() {
        this.allItemsInMenu().click();
        cy.log('Click "All Items" is successful')

        return this;
    }

    public openAbout() {
        this.about().click();

        return this;
    }
    public logOutOf() {
        this.logOut().click();

        return this;
    }
    public resetSidebarLinks() {
        this.selectedSomeOF();
        this.verifyThatNumberOfSelectedProductsEqualsTo(3);
        this.resetSidebar().click();
        this.verityfyThatNamberExist()

        return this;

    }
// Work with menu 

// Log products
    logAllProducts() {
        this.inventoryItemNames().each(item => {
            cy.log(item.text())
        });

        return this;
    }
// Select all items
    public addToChartAllProducts() {
        this.addToChartButtons().each(item => {
            item.click();
        });

        return this;
    }
// Select some of all items
    public selectedSomeOF() {
        this.addToChartButtons().eq(0).click();
        this.addToChartButtons().eq(1).click();
        this.addToChartButtons().eq(2).click();

        return this;
    }
// Remove all select items
    public removeToChartAllProducts() {
        this.removeToChartButtons().each(item => {
            item.click();
        });

        return this;
    }
// Did number of items visible?     
    verityfyThatNamberExist() {
        this.selectedProductsNumber().should('not.exist')

        return this;
    }
// Do verify: are number of select equal the number on the img
    public verifyThatNumberOfSelectedProductsEqualsTo(number){
        this.selectedProductsNumber().should('exist')
        this.selectedProductsNumber().then(element => {
            expect(Number(element.text())).to.be.equal(number);
        });
        super.waitForSeconds(2);
        return this;
    }

// Show all names of items
    public allNames() {
        this.inventoryItemNames().should('be.visible')
        this.inventoryItemNames().each(item => {
            cy.log(item.text())
        });
        return this;
    }
// Show all prises of items
    public showAllPrise() {
        this.prise().should('be.visible')
        this.prise().each(item => {
            cy.log(item.text())
        });
        return this;
    }
/*
    nameAndPrise() {
        let arr =[];
        this.inventoryItemNames().then(function(text1){
            for(let i=0; i < 6; i++){
                arr.push(text1[i].innerText)
            }
        return arr;
        })
    this.prise().then(function(text1){
            for(let i=0; i < 6; i++){
            arr[i] += ': ' + text1[i].innerText
            }
        })
        for(let i=0; i < 6; i++){
            cy.log(arr[i])
        }

        return this;
    }
*/
//Check icons of sotial media
    public checkSotialIcons() {
        this.sotialIcons().eq(0).click();
        this.sotialIcons().eq(1).click();
        this.sotialIcons().eq(2).click();
        return this;
    }
//Use selector for items
    public useSelectorForItems() {
        this.selector().select('za');
        this.selector().select('hilo');
        this.selector().select('az');
        this.selector().select('lohi');

        return this
    }
// Went to make purchanse
    public makePurchase() {
        this.cartLink().click()

    return PurchasePageTS;
    }

    public filterByIndex(index: number){
        this.selector().select(index);

        return this;
    }

}
export default new ProductPageTS();