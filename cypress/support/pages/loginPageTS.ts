import BasePage from "./BasePage"
import {ProductPageTS} from "./productPageTS"

export class LoginPageTS extends BasePage{

    private usernameInput() { return cy.get("#user-name")}
    private passwordInput() {return cy.get("#password")}
    private loginButton() {return  cy.get("#login-button")}

    public loginToTheApp(username:string,password:string){
        this.usernameInput().type(username)
        this.passwordInput().type(password)

        this.waitForSec(0);

        this.loginButton().click()
        return new ProductPageTS();

    }

    public open(){
        cy.visit("https://www.saucedemo.com/")
        return this;
      
    }
}