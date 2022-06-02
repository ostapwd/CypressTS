class ApiController{

    getToDos(){
        return cy.request({
            method: "GET",
            url: Cypress.env("API_HOST") + "/todos"
        })
        .then((response) => {cy.log(JSON.stringify(response, null, 2))
        })
    }

    getToDo(ToDoid: string) {
        return cy.request({
                method: "GET",
                url: Cypress.env("API_HOST") + "/todos/" + ToDoid,
                failOnStatusCode: false
            })
            .then((response) => {
                cy.log(JSON.stringify(response, null, 2))
            });
    }

    createToDo(todo: object){
        return cy.request({
            method: "POST",
            url: Cypress.env("API_HOST") + "/todos",
            body: todo
        })
        .then((response) => {cy.log(JSON.stringify(response, null, 2))
        })
    }

    editToDo(ToDoid: string, todo: object) {
        return cy.request({
                method: "PUT",
                url: Cypress.env("API_HOST") + "/todos/" + ToDoid,
                failOnStatusCode: false,
                body: todo
            })
            .then((response) => {
                cy.log(JSON.stringify(response, null, 2));
            });
    }

    deleteToDo(ToDoid: string){
        return cy.request({
            method: "DELETE",
            url: Cypress.env("API_HOST") + "/todos/" + ToDoid,
        })
        .then((response) => {cy.log(JSON.stringify(response, null, 2))
        })
    }
}

export default new ApiController()