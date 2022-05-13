import BasePage from "./basePageTS-Practice";
import { ProductPageTS } from "./productPageTS-Practice";

export class LoginPageTS extends BasePage {

    private usernameInput() { return cy.get("#user-name"); }
    private passwordInput() { return cy.get("#password"); }
    private loginButton() { return cy.get("#login-button"); }

    public loginToTheApp(user) {
        this.usernameInput().type(user.username);
        this.passwordInput().type(user.password);
        this.loginButton().click();

        return new ProductPageTS()
       
    }

    public open() {
        cy.visit("https://www.saucedemo.com/");

        return this;
    }
}