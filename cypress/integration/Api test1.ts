import apiController from "../api/apiControllerForFirstTest";
import getPostSchema from "../jsonSchemas/getPostSchema.json";
import addPostSchema from "../jsonSchemas/addPostSchema.json";
import editPostSchema from "../jsonSchemas/editPostSchema.json";

import { validate } from "jsonschema";

describe("Posts API tests", () => {
    it("GET Posts test", () => {
        apiController.getPosts().then(response => {
            expect(response.status).to.be.equal(200);

            let result = validate(response.body, getPostSchema);
            expect(result.valid, result.errors.toString()).to.be.true;
        });
    });

    describe("POST Posts API tests", () => {

        let newPost = {
            "userId": 1,
            "title": "name",
            "body": "Test post body"

        }

        it("POST a new Post", () => {
            newPost = {
                "userId": 1,
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

        it("Verify a new Post exists in the application", () => {
            apiController.getPosts().then(response => {
                expect(response.status).to.be.equal(200);

            });
        });
    });

    it("PUT Post test", () => {
      
        let updatedPost = {
            "userId": 1,
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

    it("DELETE Post test", () => {
        apiController.deletePosts(1).then(response => {
            expect(response.status).to.be.equal(200);
        });
    });
})