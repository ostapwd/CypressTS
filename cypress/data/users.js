class Users {

    standardUser = {
        username: "standard_user",
        password: "secret_sauce"
    };

    lockedOutUser = {
        username: "locked_out_user",
        password: "secret_sauce"
    };

    wrongPassUser = {
        username: "standard_user",
        password: "ayay"
    };

    problemUser = {
        username: "problem_user",
        password: "secret_sauce"
    };

    performanceGlitchUser = {
        username: "performance_glitch_user",
        password: "secret_sauce"
    };

}

export default new Users();