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
exports.PurchasePageTS = void 0;
var BasePage_1 = __importDefault(require("./BasePage"));
var PurchasePageTS = /** @class */ (function (_super) {
    __extends(PurchasePageTS, _super);
    function PurchasePageTS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PurchasePageTS.prototype.removeToChartButtons = function () { return cy.get("[id*='remove']"); };
    PurchasePageTS.prototype.continueShoping = function () { return cy.get('#continue-shopping'); };
    PurchasePageTS.prototype.continuePurchae = function () { return cy.get('#checkout'); };
    PurchasePageTS.prototype.continueButton = function () { return cy.get('#continue'); };
    PurchasePageTS.prototype.firstName = function () { return cy.get('#first-name'); };
    PurchasePageTS.prototype.lastName = function () { return cy.get('#last-name'); };
    PurchasePageTS.prototype.postalCode = function () { return cy.get('#postal-code'); };
    PurchasePageTS.prototype.cancel = function () { return cy.get('#cancel'); };
    PurchasePageTS.prototype.getprise = function () { return cy.get('.inventory_item_price'); };
    PurchasePageTS.prototype.allPrise = function () { return cy.get('.summary_subtotal_label'); };
    PurchasePageTS.prototype.finishButton = function () { return cy.get('#finish'); };
    PurchasePageTS.prototype.deselectedSomeOF = function () {
        this.removeToChartButtons().eq(0).click();
        this.removeToChartButtons().eq(1).click();
        this.removeToChartButtons().eq(2).click();
        return this;
    };
    PurchasePageTS.prototype.goShoping = function () {
        this.continueShoping().click();
        return this;
    };
    PurchasePageTS.prototype.continueBuy = function (names) {
        var _this = this;
        this.continuePurchae().click();
        this.continueButton().then(function (element) {
            _this.firstName().type(names.firstNameInList);
            _this.lastName().type(names.lastNameInList);
            _this.postalCode().type(names.postalCodeInList);
            if (cy.get('error-message-container').should('not.exist')) {
                element.click();
            }
            else {
                element.click();
            }
        });
        this.continueButton().click();
        return this;
    };
    PurchasePageTS.prototype.getAllPrise = function () {
        var num = 0;
        this.getprise().then(function (item) {
            for (var i = 0; i < item.length; i++) {
                num += Number(item[i].innerText.slice(1));
            }
        });
        this.allPrise().then(function (element) {
            expect(element.text()).to.be.equal("Item total: $".concat(num));
        });
        return this;
    };
    PurchasePageTS.prototype.exit = function () {
        this.cancel().click();
        return this;
    };
    PurchasePageTS.prototype.finish = function () {
        this.finishButton().click();
        cy.get('#back-to-products').click();
    };
    return PurchasePageTS;
}(BasePage_1.default));
exports.PurchasePageTS = PurchasePageTS;
exports.default = new PurchasePageTS();
