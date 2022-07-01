import apiController3Album from "../../../api/apiController3Album";
import getAlbumsSchema from "../../../jsonSchemas/getAlbumsSchema.json";
import { validate } from "jsonschema";


describe("Albums API tests", () => {
    it("GET albums test", () => {
        apiController3Album.getAlbums().then( response => {
            expect(response.status).to.be.equal(200);

            let result = validate(response.body, getAlbumsSchema);
            expect(result.valid, result.errors.toString()).to.be.true
        });
    });

    describe("POST album API tests", () => {

        let newAlbum = {
            "userId": 1,
            "title": "Do yuo something important"
        }

        it("POST a new album", () => {
            apiController3Album.addAlbum(newAlbum).then( response => {
                expect(response.status).to.be.equal(201);

                newAlbum["id"] = response.body.id;
                expect(response.body).to.deep.equal(newAlbum);
            });
        });

        it("Verify a new album exists in the application", () => {
            apiController3Album.getAlbums().then( response => {
                expect(response.status).to.be.equal(200);
                expect(response.body).to.deep.include(newAlbum);
            });
        });
    });

    it("PUT album test", () => {
        let updatedAlbum = {
            "userId": 1,
            "id": 1,
            "title": "it is important"
        }
        apiController3Album.editAlbum(1, updatedAlbum).then( response => {
            expect(response.status).to.be.equal(200);

            updatedAlbum["id"] = response.body.id;
            expect(response.body).to.deep.equal(updatedAlbum);
        });
    });

    it("DELETE album test", () => {
        apiController3Album.deleteAlbum(1).then( response => {
            expect(response.status).to.be.equal(200);
        });
    });
})