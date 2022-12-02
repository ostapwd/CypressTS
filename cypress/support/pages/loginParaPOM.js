class LoginParabank{
    get usernameInput() { return cy.get("[name='username']")}
    get passwordInput() {return cy.get("[name='password']")}
    get loginButton() {return  cy.get("[value='Log In']")}

    loginToTheApp(creds){
        this.usernameInput.type(creds)
        this.passwordInput.type(creds)

        this.loginButton.click()

    }

}
export default new LoginParabank