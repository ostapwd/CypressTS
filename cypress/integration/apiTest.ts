import apiController from "../api/apiController";
import getAlbumsSchema from "../jsonSchemas/getAlbumsSchema.json";
import addAlbumSchema from "../jsonSchemas/addAlbumSchema.json";
import editAlbumSchema from "../jsonSchemas/editAlbumSchema.json";

import {validate} from "jsonschema";

describe("Albums API test", () => {

    it("GET album test", () => {
        apiController.getAlbums().then( response => {
            expect(response.status).to.be.equal(200);

            let result = validate(response.body, getAlbumsSchema);
            expect(result.valid, result.errors.toString()).to.be.true;
        });
    });

    describe("POST album API test", () => {

        let newAlbum = {
            "userId": 11,
            "id": 101,
            "title": "Test api 1"
          }

        it("POST a new album", () => {
            apiController.addAlbum(newAlbum).then( response => {
                expect(response.status).to.be.equal(201);

                let result = validate(response.body, addAlbumSchema);
                expect(result.valid, result.errors.toString()).to.be.true;

                newAlbum["id"] = response.body.id;
                expect(response.body).to.deep.equal(newAlbum);
            });
        });

        it("Verify a new album exists in the application", () => {
            apiController.getAlbums().then( response => {
                expect(response.status).to.be.equal(200);
            });
        });
    });

    it("PUT album test", () => {
        let updatedAlbum = {
            "userId": 11,
            "id": 101,
            "title": "Test api 2"
        }
        apiController.editAlbum(1, updatedAlbum).then( response => {
            expect(response.status).to.be.equal(200);

            let result = validate(response.body, editAlbumSchema);
            expect(result.valid, result.errors.toString()).to.be.true;

            updatedAlbum["id"] = response.body.id;
            expect(response.body).to.deep.equal(updatedAlbum);
        });
    });

    it("DELETE album test", () => {
        apiController.deleteAlbum(1).then( response => {
            expect(response.status).to.be.equal(200);
        });
    });
})