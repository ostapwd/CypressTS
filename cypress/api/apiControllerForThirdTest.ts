import apiUtility from "../utilities/apiUtility";

class ApiController {

    getPhotos() {
        return cy.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/albums",
            failOnStatusCode: false
        })
            .then((response) => {
                apiUtility.logResponse(response);
            });
    }

    getPhoto(photoId: number) {
        return cy
            .request({
                method: "GET",
                url: Cypress.env("API_HOST") + "/albums/" + photoId,
                failOnStatusCode: false
            })
            .then((response) => {
                apiUtility.logResponse(response);
            });
    }

    addPhotos(photo: object) {
        return cy
            .request({
                method: "POST",
                url: Cypress.env("API_HOST") + "/photos",
                failOnStatusCode: false,
                body: photo
            })
            .then((response) => {
                apiUtility.logResponse(response);
            });
    }

    editPhotos(photoId: number, photo: object) {
        return cy
            .request({
                method: "PUT",
                url: Cypress.env("API_HOST") + "/albums/" + photoId,
                failOnStatusCode: false,
                body: photo
            })
            .then((response) => {
                apiUtility.logResponse(response);
            });
    }

    deletePhotos(photoId: number) {
        return cy
            .request({
                method: "DELETE",
                url: Cypress.env("API_HOST") + "/albums/" + photoId,
                failOnStatusCode: false
            })
            .then((response) => {
                apiUtility.logResponse(response);
            });
    }
}
export default new ApiController();
