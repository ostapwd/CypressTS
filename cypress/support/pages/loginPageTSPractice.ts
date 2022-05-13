import basePageTS from "./basePageTSPractice";
import { ProductPageTS } from "./productPageTSPractice";

export class LoginPageTS extends basePageTS {

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