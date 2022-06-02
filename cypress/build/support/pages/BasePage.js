"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BasePage = /** @class */ (function () {
    function BasePage() {
    }
    BasePage.prototype.waitForSeconds = function (secondsToWait) {
        cy.wait(secondsToWait * 100);
        return this;
    };
    BasePage.prototype.goto = function (url) {
        cy.visit(url, { failOnStatusCode: false });
        return this;
    };
    return BasePage;
}());
exports.default = BasePage;
