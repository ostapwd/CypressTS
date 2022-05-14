import {ProductPageTS} from "./productPageTS";
import BasePage from "./BasePage";

export class LoginPageTS extends BasePage{

    private usernameInput() { return cy.get("#user-name"); }
    private passwordInput() { return cy.get("#password"); }
    private loginButton() { return cy.get("#login-button"); }

    public DoSomething(p1 :number, p2 :number) :string {
        let rez = p1 + p2;

        return rez.toString();
    }


    public loginToTheApp(user) {
        this.usernameInput().type(user.username);
        this.passwordInput().type(user.password);

        super.waitForSeconds(3);

        this.loginButton().click();

        return new ProductPageTS();
    }

    public open() {
        super.goto("https://www.saucedemo.com/");

        return this;
    }

}