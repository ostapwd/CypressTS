import BasePage from "./BasePage";
import { ProductsPageTS } from "./ProductPageTS";

export class LoginPageTS extends BasePage{

    private usernameInput() { return cy.get("#user-name"); }
    private passwordInput() { return cy.get("#password"); }
    private loginButton() { return cy.get("#login-button"); }
    private errorMessage() {return cy.get("h3[data-test='error']")}

    public open() {
        this.goto("https://www.saucedemo.com/");
        return this;
    }

    public login(user) {
        this.usernameInput().type(user.username);
        this.passwordInput().type(user.password);
        super.waitForSeconds(3)
        this.loginButton().click();
    }

    public loginToTheApp(user) {
        this.login(user)
        return new ProductsPageTS()
    }

    public loginWithWrongCreads(user) {
        this.login(user)
        return this
    }

    public checkErrorMessage(errorMsg){
        this.errorMessage().should('contain', errorMsg)
        return this
    }
}
