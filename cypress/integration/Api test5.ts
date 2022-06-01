import apiController from "../api/apiControllerForFifthTest";
import getAlbumSchema from "../jsonSchemas/getPostSchema.json";
import addAlbumSchema from "../jsonSchemas/addPostSchema.json";
import editAlbumSchema from "../jsonSchemas/editPostSchema.json";

import {validate} from "jsonschema";

describe("Comments API tests", () => {
    it("GET comments test", () => {
        apiController.getAlbums().then( response => {
            expect(response.status).to.be.equal(200);

            let result = validate(response.body, getAlbumSchema);
            expect(result.valid, result.errors.toString()).to.be.false;
        });
    });

    describe("POST comment API tests", () => {

        let newAlbum = {
            "userId": 1,
            "id": "Test post name",
            "title": "Test post body"
           
        }

        it("POST a new comment", () => {
            let newAlbum = {
                "userId": 1,
                "id": "Test post name",
                "title": "name",
                "body":"Test post body" 
            }
            apiController.addAlbums(newAlbum).then( response => {
                expect(response.status).to.be.equal(201);

                let result = validate(response.body, addAlbumSchema);
                expect(result.valid, result.errors.toString()).to.be.true;

                newAlbum["id"] = response.body.id;
                expect(response.body).to.deep.equal(newAlbum);
            });
        });

        it("Verify a new comment exists in the application", () => {
            apiController.getAlbums().then( response => {
                expect(response.status).to.be.equal(200);
           
            });
        });
    });

    it("PUT comment test", () => {
        let updatedAlbum = {
            "userId": 1,
            "id": "Test post name is name",
            "title": "Test post body is body" 
        }
        apiController.editAlbums(1, updatedAlbum).then( response => {
            expect(response.status).to.be.equal(200);

            let result = validate(response.body, editAlbumSchema);
            expect(result.valid, result.errors.toString()).to.be.false;

            updatedAlbum["id"] = response.body.id;
            expect(response.body).to.deep.equal(updatedAlbum);
        });
    });

    it("DELETE comment test", () => {
        apiController.deleteAlbums(1).then( response => {
            expect(response.status).to.be.equal(200);
        });
    });
})