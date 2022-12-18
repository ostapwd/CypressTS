"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BasePage = /** @class */ (function () {
    function BasePage() {
    }
    BasePage.prototype.waitForSec = function (sec) {
        cy.wait(sec * 1000);
        return this;
    };
    BasePage.prototype.goto = function (url) {
        cy.visit(url, { failOnStatusCode: false });
        return this;
    };
    return BasePage;
}());
exports.default = BasePage;
