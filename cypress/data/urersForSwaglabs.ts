class UsersForSwaglabs {

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

    wrongPasswordUser = {
        username: 'standard_user',
        password: "secret_sauce111"
    };

    withoutPasswordUser = {
        username: 'standard_user',
        password: ' '
    };

    withoutUserName = {
        username: 'standard_user',
        password: ' '
    }
}

export default new UsersForSwaglabs();