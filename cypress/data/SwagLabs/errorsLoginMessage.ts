class ErrorsLoginMessage {

    nagativeCredentialsUser = {
        message: "Epic sadface: Username and password do not match any user in this service"
    };

    lockedOutUser = {
        message: 'Epic sadface: Sorry, this user has been locked out.'
    };

    emptyPasswordFieldUser = {
        message: 'Epic sadface: Password is required'
    };

    emptyUsernameFieldUser = {
        message: 'Epic sadface: Username is required'
    };

    emptyFieldsUser = {
        message: 'Epic sadface: Username is required'
    };
}

export default new ErrorsLoginMessage();