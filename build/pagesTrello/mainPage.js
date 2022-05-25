"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainPage = void 0;
var mainPage = /** @class */ (function () {
    function mainPage() {
    }
    mainPage.prototype.open = function () {
        cy.visit('https://trello.com/');
    };
    return mainPage;
}());
exports.mainPage = mainPage;
