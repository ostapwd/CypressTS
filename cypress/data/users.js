class Users {

    standardUser = {
        username: "standard_user",
        password: "secret_sauce"
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

    wrongUsernameUser = {
        username: "performance_glitch_user!",
        password: "secret_sauce"
    };

    wrongPasswordUser = {
        username: "performance_glitch_user",
        password: "secret_sauce!"
    };

    userForCheckout= {
        firstName: "user",
        lastName : "user",
        zipCode: "2"
    }
}

export default new Users();