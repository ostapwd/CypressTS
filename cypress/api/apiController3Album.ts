class ApiController {

    getAlbums() {
        return cy.request({
                method: "GET",
                url: Cypress.env("API_HOST") + "/albums",
                failOnStatusCode: false
            })
            .then((response) => {
                cy.log(JSON.stringify(response, null, 2));
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
                cy.log(JSON.stringify(response, null, 2));
            });
    }

    addAlbum(album: object) {
        return cy
            .request({
                method: "POST",
                url: Cypress.env("API_HOST") + "/albums",
                failOnStatusCode: false,
                body: album
            })
            .then((response) => {
                cy.log(JSON.stringify(response, null, 2));
            });
    }

    editAlbum(albumId: number, album: object) {
        return cy
            .request({
                method: "PUT",
                url: Cypress.env("API_HOST") + "/comments/" + albumId,
                failOnStatusCode: false,
                body: album
            })
            .then((response) => {
                cy.log(JSON.stringify(response, null, 2));
            });
    }

    deleteAlbum(albumId: number) {
        return cy
            .request({
                method: "DELETE",
                url: Cypress.env("API_HOST") + "/comments/" + albumId,
                failOnStatusCode: false
            })
            .then((response) => {
                cy.log(JSON.stringify(response, null, 2));
            });
    }
}
export default new ApiController();
