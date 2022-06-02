"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiController = /** @class */ (function () {
    function ApiController() {
    }
    ApiController.prototype.getAlbums = function () {
        return cy.request({
            method: "GET",
            url: Cypress.env("API_HOST") + "/albums",
            failOnStatusCode: false
        })
            .then(function (response) {
            cy.log(JSON.stringify(response, null, 2));
        });
    };
    ApiController.prototype.getAlbum = function (albumstId) {
        return cy.request({
            method: "GET",
            url: Cypress.env("API_HOST") + "/albums/" + albumstId,
            failOnStatusCode: false
        })
            .then(function (response) {
            cy.log(JSON.stringify(response, null, 2));
        });
    };
    ApiController.prototype.addAlbum = function (Album) {
        return cy
            .request({
            method: "POST",
            url: Cypress.env("API_HOST") + "/albums",
            failOnStatusCode: false,
            body: Album
        })
            .then(function (response) {
            cy.log(JSON.stringify(response, null, 2));
        });
    };
    ApiController.prototype.editAlbum = function (albumstId, Album) {
        return cy
            .request({
            method: "PUT",
            url: Cypress.env("API_HOST") + "/albums/" + albumstId,
            failOnStatusCode: false,
            body: Album
        })
            .then(function (response) {
            cy.log(JSON.stringify(response, null, 2));
        });
    };
    ApiController.prototype.deleteAlbum = function (albumstId) {
        return cy
            .request({
            method: "DELETE",
            url: Cypress.env("API_HOST") + "/albums/" + albumstId,
            failOnStatusCode: false
        })
            .then(function (response) {
            cy.log(JSON.stringify(response, null, 2));
        });
    };
    return ApiController;
}());
exports.default = new ApiController();
