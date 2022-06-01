import apiUtility from "../utilities/apiUtility";

class ApiController {

    getAlbums() {
        return cy.request({
                method: "GET",
                url: "https://jsonplaceholder.typicode.com/albums",
                failOnStatusCode: false
            })
            .then((response) => {
                apiUtility.logResponse(response);
            });
    }

    getAlbum(albumId: number) {
        return cy
            .request({
                method: "GET",
                url: Cypress.env("API_HOST") + "/albums/" + albumId,
                failOnStatusCode: false
            })
            .then((response) => {
                apiUtility.logResponse(response);
            });
    }

    addAlbums(album: object) {
        return cy
            .request({
                method: "POST",
                url: Cypress.env("API_HOST") + "/albums",
                failOnStatusCode: false,
                body: album
            })
            .then((response) => {
                apiUtility.logResponse(response);
            });
    }

    editAlbums(albumId: number, album: object) {
        return cy
            .request({
                method: "PUT",
                url: Cypress.env("API_HOST") + "/albums/" + albumId,
                failOnStatusCode: false,
                body: album
            })
            .then((response) => {
                apiUtility.logResponse(response);
            });
    }

    deleteAlbums(albumId: number) {
        return cy
            .request({
                method: "DELETE",
                url: Cypress.env("API_HOST") + "/albums/" + albumId,
                failOnStatusCode: false
            })
            .then((response) => {
                apiUtility.logResponse(response);
            });
    }
}
export default new ApiController();
