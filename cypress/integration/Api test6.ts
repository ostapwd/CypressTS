import apiController from "../api/apiControllerForSixthTest";
import getPhotosSchema from "../jsonSchemas/getPostSchema.json";
import addPhotosSchema from "../jsonSchemas/addPostSchema.json";
import editPhotosSchema from "../jsonSchemas/editPostSchema.json";

import { validate } from "jsonschema";

describe("Comments API tests", () => {
    it("GET comments test", () => {
        apiController.getPhotos().then(response => {
            expect(response.status).to.be.equal(200);

            let result = validate(response.body, getPhotosSchema);
            expect(result.valid, result.errors.toString()).to.be.false;
        });
    });

    describe("POST comment API tests", () => {

        let newPhoto = {
            "albumId": 1,
            "id": 1,
            "title": "accusamus beatae ",
            "url": "https://via.placeholder.com",
            "thumbnailUrl": "https://via.placeholder.com"

        }

        it("POST a new comment", () => {
            let newPhoto = {
                "userId": 1,
                "id": "Test post name",
                "title": "name",
                "body": "Test post body"
            }
            apiController.addPhotos(newPhoto).then(response => {
                expect(response.status).to.be.equal(201);

                let result = validate(response.body, addPhotosSchema);
                expect(result.valid, result.errors.toString()).to.be.true;

                newPhoto["id"] = response.body.id;
                expect(response.body).to.deep.equal(newPhoto);
            });
        });

        it("Verify a new comment exists in the application", () => {
            apiController.getPhotos().then(response => {
                expect(response.status).to.be.equal(200);
            });
        });
    });

    it("PUT comment test", () => {
        let updatedPhoto = {
            "albumId": 1,
            "id": 1,
            "title": "accusamus ",
            "url": "https://via.placeholder.com.123",
            "thumbnailUrl": "https://via.placeholder.com.123"
        }
        apiController.editPhotos(1, updatedPhoto).then(response => {
            expect(response.status).to.be.equal(200);

            let result = validate(response.body, editPhotosSchema);
            expect(result.valid, result.errors.toString()).to.be.false;

            updatedPhoto["id"] = response.body.id;
            expect(response.body).to.deep.equal(updatedPhoto);
        });
    });

    it("DELETE comment test", () => {
        apiController.deletePhotos(1).then(response => {
            expect(response.status).to.be.equal(200);
        });
    });
})