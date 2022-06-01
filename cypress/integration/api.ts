import apicontroller from '../apicontroller/apicontroller'

describe("API", function () {
    it("new user", () => {

        let newUser = {
            "name": "User9",
            "password": "User9_Password",
            "type": "Admin",
            "age": "80"
        };


        apicontroller.createUser(newUser).then(newUserResponse => {
            expect(newUserResponse.status).to.be.equal(201);
            apicontroller.getUsers().then(allUserResponse => {
                expect(allUserResponse.status).to.be.equal(200);
                expect(allUserResponse.body).to.deep.include(newUserResponse.body);

                
                    });
                });
            });
        });