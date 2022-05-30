import apiController from "../api/apiController"

describe ('API tests for ToDos from jsonplaceholder.typicode', function(){

    let newToDo = 
        {
            "userId": 10,
            "title": "New To Do",
            "completed": true
        }

    it ('API tests for creating new ToDo and deleting new TD',async function(){
        
        apiController.createToDo(newToDo).then(newToDoRespose => {
            expect(newToDoRespose.status).to.be.equal(201)
            apiController.getToDos().then(allToDosResponse => {
                expect(allToDosResponse.status).to.be.equal(200)
                expect(allToDosResponse.body).to.deep.include(newToDoRespose.body)

                apiController.deleteToDo(newToDoRespose.body.id).then(deleteToDoRespose => {
                    expect(deleteToDoRespose.status).to.be.equal(200)
        
                    apiController.getToDos().then(allToDosResponseNew => {
                        expect(allToDosResponseNew.status).to.be.equal(200)
                        expect(allToDosResponseNew.body).to.not.deep.include(deleteToDoRespose.body)
                    })
                })
            })
        })
    })
})

