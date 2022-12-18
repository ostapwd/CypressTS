/* import apiContollerJS from "../../api/apiContollerJS"*/
import apiController from "../../api/apiController"

describe('Test suite API comments', () => {
    it('GET comments', () => {
        apiController.getComments().then(response => {
           expect(response.status).to.be.equal(200);
        })

        describe("POST comment API tests",()=>{
            let newComment = {
                "postId": 1,
                "name": "Test comment name",
                "email": "testemail@gmail.com",
                "body": "Test comment body"
            }

            it("POST a new comment",()=>{
                apiController.addComment(newComment).then(response=>{
                    expect(response.status).to.be.equal(201);
                    newComment["id"]= response.body.id; 
                    expect(response.body).to.deep.equal(newComment);             
                  })
            })

            it("Verify a new comment exists", () => {
                apiController.getComments().then( response => {
                    expect(response.status).to.be.equal(200);
                    expect(response.body).to.deep.include(newComment);
                });
            });

            it("PUT comment", () => {
                let updatedComment = {
                    "postId": 1,
                    "name": "Test updated comment name",
                    "email": "testemail@gmail.com",
                    "body": "Test updated comment body"
                }
                apiController.editComment(1, updatedComment).then( response => {
                    expect(response.status).to.be.equal(200);
        
                    updatedComment["id"] = response.body.id;
                    expect(response.body).to.deep.equal(updatedComment);
                });
            });

            it("DELETE comment", () => {
                apiController.deleteComment(1).then( response => {
                    expect(response.status).to.be.equal(200);
                });
            });

        })

        /*  let newUser = {
             "name": "Vasia",
                 "username": "Vasia",
                 "email": "vasian@ukr.net",
                 "age": 100
         } */

        /*  apiContollerJS.createUser(newUser).then(newUserResponse =>{
             apiContollerJS.getUsers().then(allUsersResponse =>{
                 expect(allUsersResponse.body).to.deep.include(newUserResponse.body)
             })
         }) */

        /* apiContoller.createUser(newUser).then(newUserResponse =>{
             apiContoller.getUsers().then(allUsersResponse =>{
                 expect(allUsersResponse.status).to.be.equal(200);
                 expect(allUsersResponse.body).to.deep.include(newUserResponse.body)
        apiContoller.createUser(newUser).then(newUserResponse =>{
                 apiContoller.deleteUser().then((newUserResponse.body.id)).then(deleteResponse=>{
                     expect(deleteResponse.status).to.be.equal(204)
                     apiContoller.getUsers().then(allUsersResponseNew =>{
                         expect(allUsersResponseNew.status).to.be.equal(200);
                         expect(allUsersResponseNew.body).to.not.deep.include(allUsersResponseNew.body)
                 })
             })
         })
     })
 }) */

        /* cy.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/users"
        }).then((response) => {
            cy.log(JSON.stringify(response, null, 2))
            expect(response.status).to.be.equal(200)
        })
       
        let createdUser={};
        cy.request({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/users",
            body: newUser
        }).then((response) => {
            cy.log(JSON.stringify(response, null, 2))
            createdUser = response.body;
            expect(response.status).to.be.equal(201)
        })

       let allUsers={};
        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/users"
        }).then((response) => {
            allUsers = response.body
            cy.log(JSON.stringify(allUsers, null, 2));
            expect(response.status).to.be.equal(200)
        }) */
    })
})
