import apiController from "../api/apiControllerForForthTest";
import getPostSchema from "../jsonSchemas/getPostSchema.json";
import addPostSchema from "../jsonSchemas/addPostSchema.json";
import editPostSchema from "../jsonSchemas/editPostSchema.json";

import { validate } from "jsonschema";

describe("Comments API tests", () => {
    it("GET comments test", () => {
        apiController.getPosts().then(response => {
            expect(response.status).to.be.equal(200);

            let result = validate(response.body, getPostSchema);
            expect(result.valid, result.errors.toString()).to.be.true;
        });
    });

    describe("POST comment API tests", () => {

        let newPost = {
            "userId": 1,
            "id": "Test post name",
            "title": "name",
            "body": "Test post body"

        }

        it("POST a new comment", () => {
            let newPost = {
                "userId": 1,
                "id": "Test post name",
                "title": "name",
                "body": "Test post body"
            }
            apiController.addPosts(newPost).then(response => {
                expect(response.status).to.be.equal(201);

                let result = validate(response.body, addPostSchema);
                expect(result.valid, result.errors.toString()).to.be.true;

                newPost["id"] = response.body.id;
                expect(response.body).to.deep.equal(newPost);
            });
        });

        it("Verify a new comment exists in the application", () => {
            apiController.getPosts().then(response => {
                expect(response.status).to.be.equal(200);

            });
        });
    });

    it("PUT comment test", () => {
        let updatedPost = {
            "userId": 1,
            "id": "Test post the last name",
            "title": " Test name",
            "body": "Test the last post body"
        }
        apiController.editPosts(1, updatedPost).then(response => {
            expect(response.status).to.be.equal(200);

            let result = validate(response.body, editPostSchema);
            expect(result.valid, result.errors.toString()).to.be.true;

            updatedPost["id"] = response.body.id;
            expect(response.body).to.deep.equal(updatedPost);
        });
    });

    it("DELETE comment test", () => {
        apiController.deletePosts(1).then(response => {
            expect(response.status).to.be.equal(200);
        });
    });
})