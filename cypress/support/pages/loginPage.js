import productPage from "./productPage"

class LoginPage{

    get usernameInput() { return cy.get("#user-name")}
    get passwordInput() {return cy.get("#password")}
    get loginButton() {return  cy.get("#login-button")}

    loginToTheApp(username,password){
        this.usernameInput.type(username)
        this.passwordInput.type(password)

        this.loginButton.click()

        return productPage;
    }

    open(){
        cy.visit("https://www.saucedemo.com/")
        return this;
      
    }
}

export default new LoginPage()