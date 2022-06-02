import apiController from "../api/apiController"

describe ('API tests for ToDos from jsonplaceholder.typicode', function(){

    let newToDo = 
        {
            "userId": 10,
            "title": "New To Do",
            "completed": true
        }

    it ("API test : get all ToDos", () => {
        apiController.getToDos().then(response => {
            expect(response.status).to.be.equal(200);
        });
    });

    it ("API test : create a new ToDo and verify it", () => {
        apiController.createToDo(newToDo).then(newToDoRespose => {
            expect(newToDoRespose.status).to.be.equal(201);
            newToDo.id = newToDoRespose.body.id;
            expect(newToDoRespose.body).to.deep.equal(newToDo);
            apiController.getToDos().then(allToDosResponse => {
                expect(allToDosResponse.status).to.be.equal(200)
                //expect(allToDosResponse.body).to.deep.include(newToDoRespose.body)
            })
        })
    });

    it ("API test : edit ToDo", () => {
        let updatedToDo = {
            "userId": 10,
            "title": "Updated To Do",
            "completed": true
        }
        apiController.editToDo(200, updatedToDo).then( response => {
            expect(response.status).to.be.equal(200);

            updatedToDo["id"] = response.body.id;
            expect(response.body).to.deep.equal(updatedToDo);
        });
    });

    it ("API test : delete ToDo", () => {
        apiController.deleteToDo(15).then(newResponse => {
            expect(newResponse.status).to.be.equal(200)
        })
})
})