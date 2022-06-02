
class ApiController {

    getPosts() {
        return cy.request({
            method: "GET",
            url: Cypress.env("API_HOST") + "/posts",
            failOnStatusCode: false
        })
            .then((response) => {
                cy.log(JSON.stringify(response, null, 2));
            });
    }

    getPost(postId: number) {
        return cy
            .request({
                method: "GET",
                url: Cypress.env("API_HOST") + "/posts/" + postId,
                failOnStatusCode: false
            })
            .then((response) => {
                cy.log(JSON.stringify(response, null, 2));
            });
    }

    addPost(post: object) {
        return cy
            .request({
                method: "POST",
                url: Cypress.env("API_HOST") + "/posts",
                failOnStatusCode: false,
                body: post
            })
            .then((response) => {
                cy.log(JSON.stringify(response, null, 2));
            });
    }

    editPost(postId: number, post: object) {
        return cy
            .request({
                method: "PUT",
                url: Cypress.env("API_HOST") + "/posts/" + postId,
                failOnStatusCode: false,
                body: post
            })
            .then((response) => {
                cy.log(JSON.stringify(response, null, 2));
            });
    }




    deletePost(postId: number) {
        return cy
            .request({
                method: "DELETE",
                url: Cypress.env("API_HOST") + "/posts/" + postId,
                failOnStatusCode: false
            })
            .then((response) => {
                cy.log(JSON.stringify(response, null, 2));
            });
    }
}
export default new ApiController();
