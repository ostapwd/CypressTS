import apiControlersForThirtyFile from "../api/apiControlersForThirtTest";

describe("Comments API tests", () => {
    it("GET comments test", () => {
        apiControlersForThirtyFile.getPosts().then(response => {
            expect(response.status).to.be.equal(200);
        });
    });

    describe("POST comment API tests", () => {

        let newPost = {
            "userId": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit"
        }

        it("POST a new comment", () => {
            apiControlersForThirtyFile.addPost(newPost).then(response => {
                expect(response.status).to.be.equal(201);

                newPost["id"] = response.body.id;
                expect(response.body).to.deep.equal(newPost);
            });
        });

        it("Verify a new comment exists in the application", () => {
            apiControlersForThirtyFile.getPosts().then(response => {
                expect(response.status).to.be.equal(200);
                expect(response.body).to.deep.include(newPost);
            });
        });
    });
    describe("POST comment API tests", () => {
        it("PUT comment test", () => {
            let updatedPost = {
                "userId": 1,
                "title": "sunt aut facere repellat provident ",
                "body": "quia et "
            }
            apiControlersForThirtyFile.editPost(1, updatedPost).then(response => {
                expect(response.status).to.be.equal(200);

                updatedPost["id"] = response.body.id;
                expect(response.body).to.deep.equal(updatedPost);
            });
        });

        it("DELETE comment test", () => {
            apiControlersForThirtyFile.deletePost(1).then(response => {
                expect(response.status).to.be.equal(200);
            });
        });
    })
})




























/*describe('Test suite 1 API', function () {
    /*it('Create a new user and then delete it', function () {

        cy.request({
            method: "GET",
            url: 'https://jsonplaceholder.typicode.com/posts/1/comments',
            failOnStatusCode: false
        })
            .then((response) => {
                cy.log(JSON.stringify(response, null, 2));
            })
            .then(response => {
                expect(response.status).to.be.equal(200);
            });
    })

    it('Create a new user and then delete it', function () {

        let newComment = {
            "postId": 1,
            "name": "Test comment name",
            "email": "testemail@gmail.com",
            "body": "Test comment body"
        }

        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts/1/comments" + commentId,
            failOnStatusCode: false,
            body: newComment
        })
            .then((response) => {
                cy.log(JSON.stringify(response, null, 2));
            });

            cy.addComment(newComment).then( response => {
                expect(response.status).to.be.equal(201);

                newComment["id"] = response.body.id;
                expect(response.body).to.deep.equal(newComment);
            });
        });
    })




    let newComment = {
        "postId": 1,
        "name": "Test comment name",
        "email": "testemail@gmail.com",
        "body": "Test comment body"
    }

    it("POST a new comment", () => {
        let commentId = {}
        let createnewComment = { cy.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts/1/comments" + commentId
        })
    }
            .then(response => {
                expect(response.status).to.be.equal(200);

                newComment["id"] = response.body.id;
                expect(response.body).to.deep.equal(newComment);
            });
    });
})

/*



cy.request({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts/1/comments",
    failOnStatusCode: false
})
    .then((response) => {
        cy.log(JSON.stringify(response, null, 2))
    })
 
    let newComent =  {
        "postId": 1,
        "name": "comment 1 ",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam accusantium"
    }
    let createnewComment = {await cy.request({
method: "POST",
url: "https://jsonplaceholder.typicode.com/posts/1/comments",
body: newComent
})
}
.then((response) => {
    cy.log(JSON.stringify(response, null, 2))
    return response.body;

})
 
let allComments = {}; 
cy.request({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts/1/comments",
})
.then((response) => {
        cy.log(JSON.stringify(response, null, 2))
        allComments = response.body;
    })
  
    expect(allComments).to.deep.include(newComent)
})
})*/