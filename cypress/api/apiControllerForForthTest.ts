import apiUtility from "../utilities/apiUtility";

class ApiController {

    getPosts() {
        return cy.request({
                method: "GET",
                url: "https://jsonplaceholder.typicode.com/posts",
                failOnStatusCode: false
            })
            .then((response) => {
                apiUtility.logResponse(response);
            });
    }

    getPost(commentId: number) {
        return cy
            .request({
                method: "GET",
                url: Cypress.env("API_HOST") + "/posts/" + commentId,
                failOnStatusCode: false
            })
            .then((response) => {
                apiUtility.logResponse(response);
            });
    }

    addPosts(post: object) {
        return cy
            .request({
                method: "POST",
                url: Cypress.env("API_HOST") + "/posts",
                failOnStatusCode: false,
                body: post
            })
            .then((response) => {
                apiUtility.logResponse(response);
            });
    }

    editPosts(postId: number, post: object) {
        return cy
            .request({
                method: "PUT",
                url: Cypress.env("API_HOST") + "/posts/" + postId,
                failOnStatusCode: false,
                body: post
            })
            .then((response) => {
                apiUtility.logResponse(response);
            });
    }

    deletePosts(postId: number) {
        return cy
            .request({
                method: "DELETE",
                url: Cypress.env("API_HOST") + "/posts/" + postId,
                failOnStatusCode: false
            })
            .then((response) => {
                apiUtility.logResponse(response);
            });
    }
}
export default new ApiController();
