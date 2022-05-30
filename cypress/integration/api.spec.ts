import {ApiTest} from "../pom/apiTest";

const apiTest = new ApiTest();

describe ('Test API server', () => {
    it('Test GET method - get user', function () {
        apiTest
            .getUsers()
    });

    it('Test POST method - create user', function () {
        apiTest
            .createUser()
    });

    it('Test DELETE method - remove user', function () {
        apiTest
            .deleteUser()
    });
})