class ApiController{

    getToDos(){
        return cy.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/todos"
        })
        .then((response) => {cy.log(JSON.stringify(response, null, 2))
        })
    }

    createToDo(todo){
        return cy.request({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/todos",
            body: todo
        })
        .then((response) => {cy.log(JSON.stringify(response, null, 2))
        })
    }

    deleteToDo(id: string){
        return cy.request({
            method: "DELETE",
            url: "https://jsonplaceholder.typicode.com/todos/" + id,
        })
        .then((response) => {cy.log(JSON.stringify(response, null, 2))
        })
    }
}

export default new ApiController()