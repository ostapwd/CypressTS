class ApiController {

    getUsers() {
        return cy.request({
            method: "GET",
            url: "http://localhost:8080/api/v1/users"
        })
        .then((response) => {
            cy.log(JSON.stringify(response, null, 2));
        });
    }

    createUser(user) {
        return cy.request({
            method: "POST",
            url: "http://localhost:8080/api/v1/users",
            body: user
        })
        .then((response) => {
            cy.log(JSON.stringify(response, null, 2));
        });
    }

    deleteUser(id: string) {
        return cy.request({
            method: "DELETE",
            url: "http://localhost:8080/api/v1/users/" + id
        })
        .then((response) => {
            cy.log(JSON.stringify(response, null, 2));
        });
    }

}

export default new ApiController();
