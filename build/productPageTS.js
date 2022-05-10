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
var BasePage_1 = __importDefault(require("./BasePage"));
var ProductPageTS = /** @class */ (function (_super) {
    __extends(ProductPageTS, _super);
    function ProductPageTS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductPageTS.prototype.addToChartButtons = function () { return cy.get("[id*='add-to-cart']"); };
    ProductPageTS.prototype.inventoryItemNames = function () { return cy.get(".inventory_item_name"); };
    ProductPageTS.prototype.selectedProductsNumber = function () { return cy.get(".shopping_cart_badge"); };
    //private menu(){return cy.xpath("//*[@id='react-burger-menu-btn']")}
    ProductPageTS.prototype.logAllProducts = function () {
        this.inventoryItemNames().each(function (item) {
            cy.log(item.text());
        });
        _super.prototype.waitForSeconds.call(this, 1);
        return this;
    };
    ProductPageTS.prototype.addToChartAllProducts = function () {
        var _this = this;
        this.addToChartButtons().each(function (item) {
            item.click();
            _super.prototype.waitForSeconds.call(_this, 1);
        });
        return this;
    };
    ProductPageTS.prototype.verifyThatNumberOfSelectedProductsEqualsTo = function (number) {
        this.selectedProductsNumber().then(function (element) {
            expect(element.text()).to.be.equal(number);
        });
    };
    return ProductPageTS;
}(BasePage_1.default));
exports.ProductPageTS = ProductPageTS;
