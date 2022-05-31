import apiController2 from "../../api/apiController2";

describe("Comments API tests", () => {
    it("GET comments test", () => {
        apiController2.getComments().then( response => {
            expect(response.status).to.be.equal(200);
        });
    });

    describe("POST comment API tests", () => {

        let newComment = {
            "postId": 1,
            "name": "Test comment name",
            "email": "testemail@gmail.com",
            "body": "Test comment body"
        }

        it("POST a new comment", () => {
            apiController2.addComment(newComment).then( response => {
                expect(response.status).to.be.equal(201);

                newComment["id"] = response.body.id;
                expect(response.body).to.deep.equal(newComment);
            });
        });

        it("Verify a new comment exists in the application", () => {
            apiController2.getComments().then( response => {
                expect(response.status).to.be.equal(200);
                expect(response.body).to.deep.include(newComment);
            });
        });
    });

    it("PUT comment test", () => {
        let updatedComment = {
            "postId": 1,
            "name": "Test updated comment name",
            "email": "testemail@gmail.com",
            "body": "Test updated comment body"
        }
        apiController2.editComment(1, updatedComment).then( response => {
            expect(response.status).to.be.equal(200);

            updatedComment["id"] = response.body.id;
            expect(response.body).to.deep.equal(updatedComment);
        });
    });

    it("DELETE comment test", () => {
        apiController2.deleteComment(1).then( response => {
            expect(response.status).to.be.equal(200);
        });
    });
})