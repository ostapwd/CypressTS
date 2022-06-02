import {ProductPageTS} from "./productPageTS";
import BasePage from "./BasePage";

export class LoginPageTS extends BasePage{

    private usernameInput() { return cy.get("#user-name"); }
    private passwordInput() { return cy.get("#password"); }
    private loginButton() { return cy.get("#login-button"); }

    public loginToTheApp(users) {
        this.usernameInput().type(users.username);
        this.passwordInput().type(users.password);

        super.waitForSeconds(2);

        this.loginButton().click();

        return new ProductPageTS();
    }

    public open() {
        super.goto("https://www.saucedemo.com/");

        return this;
    }

}
export default new LoginPageTS();