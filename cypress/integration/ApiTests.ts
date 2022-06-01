import apiController2 from "../api/apiController2";

describe("Albums API tests", () => {
    it("GET Albums test", () => {
        apiController2.getAlbums().then( response => {
            expect(response.status).to.be.equal(200);
        });
    });

    describe("POST Album API tests", () => {

        let newAlbum = {
            "puserId": 10,
            "title": "new albums"
        }

        it("POST a new Album", () => {
            apiController2.addAlbum(newAlbum).then( response => {
                expect(response.status).to.be.equal(201);

                newAlbum["id"] = response.body.id;
                expect(response.body).to.deep.equal(newAlbum);
            });
        });

        it("Verify a new Album exists in the application", () => {
            apiController2.getAlbums().then( response => {
                expect(response.status).to.be.equal(200);
                expect(response.body).to.deep.include(newAlbum);
            });
        });
    });

    it("PUT Album test", () => {
        let updatedAlbum = {
            "puserId": 10,
            "title": "new albums"
        }
        apiController2.editAlbum(10, updatedAlbum).then( response => {
            expect(response.status).to.be.equal(200);

            updatedAlbum["id"] = response.body.id;
            expect(response.body).to.deep.equal(updatedAlbum);
        });
    });

    it("DELETE Album test", () => {
        apiController2.deleteAlbum(10).then( response => {
            expect(response.status).to.be.equal(200);
        });
    });
})