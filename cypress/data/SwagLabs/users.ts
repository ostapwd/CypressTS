class Users {

    standardUser = {
        username: "standard_user",
        password: "secret_sauce",
        firstName: "Vitalik",
        lastName: "Vitalik",
        postalCode: "12345"
    };

    lockedOutUser = {
        username: "locked_out_user",
        password: "secret_sauce"
    };

    problemUser = {
        username: "problem_user",
        password: "secret_sauce"
    };

    performanceGlitchUser = {
        username: "performance_glitch_user",
        password: "secret_sauce"
    };

    noRegisterUser = {
        username: "standard",
        password: "secret"
    };

    wrongUsernameUser = {
        username: "standard",
        password: "secret_sauce"
    };

    wrongPasswordUser = {
        username: "standard_user",
        password: "secret_sauce123456"
    };

}

export default new Users();