"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apiController2_1 = __importDefault(require("../api/apiController2"));
describe("Albums API tests", function () {
    it("GET Albums test", function () {
        apiController2_1.default.getAlbums().then(function (response) {
            expect(response.status).to.be.equal(200);
        });
    });
    describe("POST Album API tests", function () {
        var newAlbum = {
            "puserId": 10,
            "title": "new albums"
        };
        it("POST a new Album", function () {
            apiController2_1.default.addAlbum(newAlbum).then(function (response) {
                expect(response.status).to.be.equal(201);
                newAlbum["id"] = response.body.id;
                expect(response.body).to.deep.equal(newAlbum);
            });
        });
        it("Verify a new Album exists in the application", function () {
            apiController2_1.default.getAlbums().then(function (response) {
                expect(response.status).to.be.equal(200);
                expect(response.body).to.deep.include(newAlbum);
            });
        });
    });
    it("PUT Album test", function () {
        var updatedAlbum = {
            "puserId": 10,
            "title": "new albums"
        };
        apiController2_1.default.editAlbum(10, updatedAlbum).then(function (response) {
            expect(response.status).to.be.equal(200);
            updatedAlbum["id"] = response.body.id;
            expect(response.body).to.deep.equal(updatedAlbum);
        });
    });
    it("DELETE Album test", function () {
        apiController2_1.default.deleteAlbum(10).then(function (response) {
            expect(response.status).to.be.equal(200);
        });
    });
});
