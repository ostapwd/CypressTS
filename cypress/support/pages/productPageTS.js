"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPageTS = void 0;
const BasePage_1 = __importDefault(require("./BasePage"));
class ProductPageTS extends BasePage_1.default {
    // private productLabel() { return cy.get("#header_container .title")}
    addToCardButtons() { return cy.get("[id*='add-to-cart']"); }
    inventoryItemNames() { return cy.get(".inventory_item_name"); }
    // private menu(){return cy.xpath("//*[@id='react-burger-menu-btn']")}
    selectedItemsQuantity() { return cy.get(".shopping_cart_badge"); }
    logAllProducts() {
        this.inventoryItemNames().each(el => {
            cy.log(el.text());
        });
        super.waitForSec(1);
        return this;
    }
    addToCardAllProducts() {
        this.addToCardButtons().each(el => {
            el.click();
            this.waitForSec(1);
        });
        return this;
    }
    verifyQuantityOfproducts(number) {
        this.selectedItemsQuantity().then(el => {
            expect(el.text()).to.be.eq(number);
        });
    }
}
exports.ProductPageTS = ProductPageTS;
