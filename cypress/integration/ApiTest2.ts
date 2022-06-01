import apiControllersForFirstTest from "../api/apiControlersForSecondTest";

describe('Test suite 1 API', function () {
    it('Create a new user and then delete it', async function () {

        let newUser =
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat ",
            "body": "quia et susci"
        }

        apiControllersForFirstTest.createUser(newUser).then(newUserResponse => {
            expect(newUserResponse.status).to.be.equal(201);

            apiControllersForFirstTest.getUsers().then(allUsersResponse => {
                expect(allUsersResponse.status).to.be.equal(200);
                expect(allUsersResponse.body).include(newUserResponse.body);

                apiControllersForFirstTest.deleteUser(newUserResponse.body.id).then(deleteResponse => {
                    expect(deleteResponse.status).to.be.equal(204);

                    apiControllersForFirstTest.getUsers().then(allUsersResponseNew => {
                        expect(allUsersResponseNew.status).to.be.equal(200);

                        expect(allUsersResponseNew.body).to.not.deep.include(newUserResponse.body);
                    });
                });
            });
        });
    });
});

