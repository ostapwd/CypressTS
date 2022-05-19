class ApiController {

    getComments() {
        return cy.request({
                method: "GET",
                url: Cypress.env("API_HOST") + "/comments",
                failOnStatusCode: false
            })
            .then((response) => {
                cy.log(JSON.stringify(response, null, 2));
            });
    }

    getComment(commentId: number) {
        return cy
            .request({
                method: "GET",
                url: Cypress.env("API_HOST") + "/comments/" + commentId,
                failOnStatusCode: false
            })
            .then((response) => {
                cy.log(JSON.stringify(response, null, 2));
            });
    }

    addComment(comment: object) {
        return cy
            .request({
                method: "POST",
                url: Cypress.env("API_HOST") + "/comments",
                failOnStatusCode: false,
                body: comment
            })
            .then((response) => {
                cy.log(JSON.stringify(response, null, 2));
            });
    }

    editComment(commentId: number, comment: object) {
        return cy
            .request({
                method: "PUT",
                url: Cypress.env("API_HOST") + "/comments/" + commentId,
                failOnStatusCode: false,
                body: comment
            })
            .then((response) => {
                cy.log(JSON.stringify(response, null, 2));
            });
    }

    deleteComment(commentId: number) {
        return cy
            .request({
                method: "DELETE",
                url: Cypress.env("API_HOST") + "/comments/" + commentId,
                failOnStatusCode: false
            })
            .then((response) => {
                cy.log(JSON.stringify(response, null, 2));
            });
    }
}
export default new ApiController();
