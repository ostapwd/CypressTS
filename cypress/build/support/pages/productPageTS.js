"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPageTS = void 0;
var purchasePageTS_1 = __importDefault(require("./purchasePageTS"));
var BasePage_1 = __importDefault(require("./BasePage"));
var ProductPageTS = /** @class */ (function (_super) {
    __extends(ProductPageTS, _super);
    function ProductPageTS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductPageTS.prototype.addToChartButtons = function () { return cy.get("[id*='add-to-cart']"); };
    ProductPageTS.prototype.removeToChartButtons = function () { return cy.get("[id*='remove']"); };
    ProductPageTS.prototype.inventoryItemNames = function () { return cy.get(".inventory_item_name"); };
    ProductPageTS.prototype.selectedProductsNumber = function () { return cy.get(".shopping_cart_badge"); };
    ProductPageTS.prototype.selector = function () { return cy.get(".product_sort_container"); };
    ProductPageTS.prototype.prise = function () { return cy.get(".inventory_item_price"); };
    ProductPageTS.prototype.menu = function () { return cy.get('#react-burger-menu-btn'); };
    ProductPageTS.prototype.menuArrea = function () { return cy.get('.bm-menu-wrap'); };
    ProductPageTS.prototype.allItemsInMenu = function () { return cy.get('#inventory_sidebar_link'); };
    ProductPageTS.prototype.about = function () { return cy.get('#about_sidebar_link'); };
    ProductPageTS.prototype.logOut = function () { return cy.get('#logout_sidebar_link'); };
    ProductPageTS.prototype.resetSidebar = function () { return cy.get('#reset_sidebar_link'); };
    ProductPageTS.prototype.sotialIcons = function () { return cy.get(".social > li > a"); };
    ProductPageTS.prototype.cartLink = function () { return cy.get('.shopping_cart_link'); };
    // Work with menu 
    ProductPageTS.prototype.openMenu = function () {
        this.menu().click();
        this.menuArrea().should('be.visible');
        return this;
    };
    ProductPageTS.prototype.openAllItemsInMenu = function () {
        this.allItemsInMenu().click();
        cy.log('Click "All Items" is successful');
        return this;
    };
    ProductPageTS.prototype.openAbout = function () {
        this.about().click();
        return this;
    };
    ProductPageTS.prototype.logOutOf = function () {
        this.logOut().click();
        return this;
    };
    ProductPageTS.prototype.resetSidebarLinks = function () {
        this.selectedSomeOF();
        this.verifyThatNumberOfSelectedProductsEqualsTo(3);
        this.resetSidebar().click();
        this.verityfyThatNamberExist();
        return this;
    };
    // Work with menu 
    // Log products
    ProductPageTS.prototype.logAllProducts = function () {
        this.inventoryItemNames().each(function (item) {
            cy.log(item.text());
        });
        return this;
    };
    // Select all items
    ProductPageTS.prototype.addToChartAllProducts = function () {
        this.addToChartButtons().each(function (item) {
            item.click();
        });
        return this;
    };
    // Select some of all items
    ProductPageTS.prototype.selectedSomeOF = function () {
        this.addToChartButtons().eq(0).click();
        this.addToChartButtons().eq(1).click();
        this.addToChartButtons().eq(2).click();
        return this;
    };
    // Remove all select items
    ProductPageTS.prototype.removeToChartAllProducts = function () {
        this.removeToChartButtons().each(function (item) {
            item.click();
        });
        return this;
    };
    // Did number of items visible?     
    ProductPageTS.prototype.verityfyThatNamberExist = function () {
        this.selectedProductsNumber().should('not.exist');
        return this;
    };
    // Do verify: are number of select equal the number on the img
    ProductPageTS.prototype.verifyThatNumberOfSelectedProductsEqualsTo = function (number) {
        this.selectedProductsNumber().should('exist');
        this.selectedProductsNumber().then(function (element) {
            expect(Number(element.text())).to.be.equal(number);
        });
        _super.prototype.waitForSeconds.call(this, 2);
        return this;
    };
    // Show all names of items
    ProductPageTS.prototype.allNames = function () {
        this.inventoryItemNames().should('be.visible');
        this.inventoryItemNames().each(function (item) {
            cy.log(item.text());
        });
        return this;
    };
    // Show all prises of items
    ProductPageTS.prototype.showAllPrise = function () {
        this.prise().should('be.visible');
        this.prise().each(function (item) {
            cy.log(item.text());
        });
        return this;
    };
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
    ProductPageTS.prototype.checkSotialIcons = function () {
        this.sotialIcons().eq(0).click();
        this.sotialIcons().eq(1).click();
        this.sotialIcons().eq(2).click();
        return this;
    };
    //Use selector for items
    ProductPageTS.prototype.useSelectorForItems = function () {
        this.selector().select('za');
        this.selector().select('hilo');
        this.selector().select('az');
        this.selector().select('lohi');
        return this;
    };
    // Went to make purchanse
    ProductPageTS.prototype.makePurchase = function () {
        this.cartLink().click();
        return purchasePageTS_1.default;
    };
    ProductPageTS.prototype.filterByIndex = function (index) {
        this.selector().select(index);
        return this;
    };
    return ProductPageTS;
}(BasePage_1.default));
exports.ProductPageTS = ProductPageTS;
exports.default = new ProductPageTS();
