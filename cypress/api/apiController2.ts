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

    getAlbum(albumstId: number) {
        return cy.request({
                method: "GET",
                url: Cypress.env("API_HOST") + "/albums/" + albumstId,
                failOnStatusCode: false
            })
            .then((response) => {
                cy.log(JSON.stringify(response, null, 2));
            });
    }

    addAlbum(Album: object) {
        return cy
            .request({
                method: "POST",
                url: Cypress.env("API_HOST") + "/albums",
                failOnStatusCode: false,
                body: Album
            })
            .then((response) => {
                cy.log(JSON.stringify(response, null, 2));
            });
    }

    editAlbum(albumstId: number, Album: object) {
        return cy
            .request({
                method: "PUT",
                url: Cypress.env("API_HOST") + "/albums/" + albumstId,
                failOnStatusCode: false,
                body: Album
            })
            .then((response) => {
                cy.log(JSON.stringify(response, null, 2));
            });
    }

    deleteAlbum(albumstId: number) {
        return cy
            .request({
                method: "DELETE",
                url: Cypress.env("API_HOST") + "/albums/" + albumstId,
                failOnStatusCode: false
            })
            .then((response) => {
                cy.log(JSON.stringify(response, null, 2));
            });
    }
}
export default new ApiController();
