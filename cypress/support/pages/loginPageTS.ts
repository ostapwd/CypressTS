import BasePage from "./BasePage"
import {ProductPageTS} from "./productPageTS"

export class LoginPageTS extends BasePage{

    private usernameInput() { return cy.get("#user-name")}
    private passwordInput() {return cy.get("#password")}
    private loginButton() {return  cy.get("#login-button")}

    public loginToTheApp(username:string,password:string){
        this.usernameInput().type(username)
        this.passwordInput().type(password)

        this.waitForSec(3);

        this.loginButton().click()
        return new ProductPageTS();

    }

    public open(){
        this.goto("https://www.saucedemo.com/")
        return this;
      
    }
}