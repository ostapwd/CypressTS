"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPageTS = void 0;
var ProductPageTS = /** @class */ (function () {
    function ProductPageTS() {
    }
    ProductPageTS.prototype.addToChartButtons = function () { return cy.get("[id*='add-to-cart']"); };
    ProductPageTS.prototype.inventoryItemNames = function () { return cy.get(".inventory_item_name"); };
    ProductPageTS.prototype.selectedProductsNumber = function () { return cy.get(".shopping_cart_badge"); };
    //private menu(){return cy.xpath("//*[@id='react-burger-menu-btn']")}
    ProductPageTS.prototype.logAllProducts = function () {
        this.inventoryItemNames().each(function (item) {
            cy.log(item.text());
        });
        return this;
    };
    ProductPageTS.prototype.addToChartAllProducts = function () {
        this.addToChartButtons().each(function (item) {
            item.click();
        });
        return this;
    };
    ProductPageTS.prototype.verifyThatNumberOfSelectedProductsEqualsTo = function (number) {
        this.selectedProductsNumber().then(function (element) {
            expect(element.text()).to.be.equal(number);
        });
    };
    return ProductPageTS;
}());
exports.ProductPageTS = ProductPageTS;
