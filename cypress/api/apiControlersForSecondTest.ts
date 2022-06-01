class ApiController {

    getUsers() {
        return cy.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts"
        })
        .then((response) => {
            cy.log(JSON.stringify(response, null, 2));
        });
    }

    createUser(user) {
        return cy.request({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/posts",
            body: user
        })
        .then((response) => {
            cy.log(JSON.stringify(response, null, 2));
        });
    }

    deleteUser(id: string) {
        return cy.request({
            method: "DELETE",
            url: "https://jsonplaceholder.typicode.com/posts" + id
        })
        .then((response) => {
            cy.log(JSON.stringify(response, null, 2));
        });
    }

}

export default new ApiController();
