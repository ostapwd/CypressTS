export class BasePage{
    private registerButton(){
        return cy.contains('Register')
    }

    private usernameField() {return cy.get("input[name='username']")}

    private passwordField() {return cy.get("input[name='password']")}

    private loginBtn() {return cy.get("input[value='Log In']")}


    public open() {
        cy.visit('https://parabank.parasoft.com/parabank')
        return this
    }

    public clickRegisterButton(){
        this.registerButton().click()
        return this
    }

    public login(user){
        this.usernameField().type(user.username)
        this.passwordField().type(user.password)
        this.loginBtn().click()
    }

    public waitForSeconds(secondsToWait :number) {
        cy.wait(secondsToWait * 1000);

        return this;
    }
}