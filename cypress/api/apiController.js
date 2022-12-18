"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiController = /** @class */ (function () {
    function ApiController() {
    }
    ApiController.prototype.getComments = function () {
        return cy.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/comments"
        }).then(function (response) {
            cy.log(JSON.stringify(response, null, 2));
        });
    };
    ApiController.prototype.getComment = function (commentId) {
        return cy.request({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/comments/commentId"
        }).then(function (response) {
            cy.log(JSON.stringify(response, null, 2));
        });
    };
    ApiController.prototype.addComment = function (comment) {
        return cy.request({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/comments",
            body: comment
        }).then(function (response) {
            cy.log(JSON.stringify(response, null, 2));
        });
    };
    ApiController.prototype.editComment = function (commentId, comment) {
        return cy
            .request({
            method: "PUT",
            url: "https://jsonplaceholder.typicode.com/comments/commentId",
            body: comment
        })
            .then(function (response) {
            cy.log(JSON.stringify(response, null, 2));
        });
    };
    ApiController.prototype.deleteComment = function (commentId) {
        return cy.request({
            method: "DELETE",
            url: "https://jsonplaceholder.typicode.com/commnets/commentId",
        }).then(function (response) {
            cy.log(JSON.stringify(response, null, 2));
        });
    };
    return ApiController;
}());
exports.default = new ApiController();
