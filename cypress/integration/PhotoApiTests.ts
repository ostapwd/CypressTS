import PhotoController from "../api/photoController";
import getPhotosSchema from "../jsonSchemas/getPhotosSchema.json";
import addPhotosSchema from "../jsonSchemas/addPhotosSchema.json";
import editPhotosSchema from "../jsonSchemas/editPhotosSchema.json";

import {validate} from "jsonschema";

describe("Photos API tests", () => {
    it("GET photos test", () => {
        PhotoController.getPhotos().then( response => {
            expect(response.status).to.be.equal(200);

            let result = validate(response.body, getPhotosSchema);
            expect(result.valid, result.errors.toString()).to.be.true;
        });
    });

    describe("POST photo API tests", () => {

        it("POST a new photo", () => {
            let newPhoto = {
                "albumId": 1,
                "title": "New photo"
            }
            PhotoController.addPhoto(newPhoto).then( response => {
                expect(response.status).to.be.equal(201);

                let result = validate(response.body, addPhotosSchema);
                expect(result.valid, result.errors.toString()).to.be.true;

                newPhoto["id"] = response.body.id;
                expect(response.body).to.deep.equal(newPhoto);
            });
        });

        it("Verify a new photo exists in the application", () => {
            PhotoController.getPhotos().then( response => {
                expect(response.status).to.be.equal(200);
                //expect(response.body).to.deep.include(newComment);
            });
        });
    });

    it("PUT photo test", () => {
        let updatedPhoto = {
            "albumId": 1,
            "title": "Test update photo"
        }
        PhotoController.editPhoto(1, updatedPhoto).then( response => {
            expect(response.status).to.be.equal(200);

            let result = validate(response.body, editPhotosSchema);
            expect(result.valid, result.errors.toString()).to.be.true;

            updatedPhoto["id"] = response.body.id;
            expect(response.body).to.deep.equal(updatedPhoto);
        });
    });

    it("DELETE photo test", () => {
        PhotoController.deletePhoto(1).then( response => {
            expect(response.status).to.be.equal(200);
        });
    });
})