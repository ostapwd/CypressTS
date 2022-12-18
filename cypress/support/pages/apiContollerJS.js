class ApiControllerJS {
    getUsers() {
        return cy.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/users"
        }).then((response) => {
            cy.log(JSON.stringify(response, null, 2))
        })
    }

    createuser(user) {
        return cy.request({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/users",
            body: user
        }).then((response) => {
            cy.log(JSON.stringify(response, null, 2))
        
        })
    }
}

export default new ApiControllerJS();