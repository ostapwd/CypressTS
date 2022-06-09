import basePageSwagLabsTS from "./basePageSwagLabsTS";
import { ProductPageSwagLabsTS } from "./productPageSwagLabsTS";

export class LoginPageSwagLabsTS extends basePageSwagLabsTS {
    private usernameInput() { return cy.get("#user-name"); }
    private passwordInput() { return cy.get("#password"); }
    private loginButton() { return cy.get("input[data-test='login-button']"); }
    public  logoApp() {return cy.get(".login_logo");}
    public  errorMessage() {return cy.get(".error-message-container.error");}
    
    public loginToTheApp(user) {
        this.usernameInput().clear().type(user.username);
        this.waitForSeconds(1);
        this.passwordInput().clear().type(user.password);
        this.waitForSeconds(1);
        return this
    }

    public clickOnButtonLogin(){
        this.loginButton().click()  
        return new ProductPageSwagLabsTS()
    }

    public open() {
        super.goto(Cypress.env("UI_HOST"));
        this.waitForSeconds(1)
            return this;
    }

    public getLogoApp(){
        return this.logoApp();
    }

    public getUsernameInput(){
        return this.usernameInput();
    }

    public getPasswordInput(){
       return this.passwordInput();
    }

    public getButtonLogin(){
       return this.loginButton();
    }

    public emptyPasswordToTheApp(user) {
        this.usernameInput().clear().type(user.username);
        this.waitForSeconds(1);
        this.passwordInput().clear()
        this.waitForSeconds(1);
            return this
    }

    public emptyUsernameToTheApp(user) {
        this.usernameInput().clear();
        this.waitForSeconds(1);
        this.passwordInput().clear().type(user.password);
        this.waitForSeconds(1);
            return this
    }

    public getErrorMessageLoginToTheApp(){
       return  this.errorMessage()
    }
}