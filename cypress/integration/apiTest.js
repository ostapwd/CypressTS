import apiController from "../build/api/apiController2";

describe('Test suite API', function () {
    it('Create a new user and then delete it', async function () {

        let newUser = {
            "name": "User16",
            "password": "User16_Password",
            "type": "Admin",
            "age": 77
        }

        apiController.createUser(newUser).then(newUserResponse => {
            expect(newUserResponse.status).to.be.equal(201);

            apiController.getUsers().then(allUsersResponse => {
                expect(allUsersResponse.status).to.be.equal(200);
                expect(allUsersResponse.body).to.deep.include(newUserResponse.body);

                apiController.deleteUser(newUserResponse.body.id).then(deleteResponse => {
                    expect(deleteResponse.status).to.be.equal(204);

                    apiController.getUsers().then(allUsersResponseNew => {
                        expect(allUsersResponseNew.status).to.be.equal(200);

                        expect(allUsersResponseNew.body).to.not.deep.include(newUserResponse.body);
                    });
                });
            });
        });
    });
});