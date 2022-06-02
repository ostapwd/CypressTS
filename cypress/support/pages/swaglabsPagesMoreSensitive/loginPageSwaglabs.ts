import { ProductPageSwaglabs } from "./productPageSwaglabs";
import BasePage from "./BasePageSwaglabs";


export class LoginPageSwaglabs extends BasePage {

    private usernameInput() { return cy.xpath('//*[@id="user-name"]'); }
    private passwordInput() { return cy.get("input[name='password']"); }
    private loginButton() { return cy.get("input[data-test='login-button']"); }
    private wrongPassword() { return cy.get("h3[data-test='error']"); }


    public loginToTheApp(user) {
        this.usernameInput().type(user.username);
        this.passwordInput().type(user.password);
        super.waitForSeconds(3);
        this.loginButton().click();
        return new ProductPageSwaglabs();
    };

    public wrongPasswordChecking() {
        this.wrongPassword()
            .should("contain", "Epic sadface: Username and password do not match any user in this service");
    };

    public loginToTheAppWithoutPassword(user) {
        this.usernameInput().type(user.username);
        super.waitForSeconds(3);
        this.loginButton().click();
        return this;
    };

    public errorWhenWeWantToLoginWithoutPassword() {
        this.wrongPassword().should("contain", "Epic sadface: Password is required");
        return this;
    };

    public loginToTheAppWithoutUserName(user) {
        this.passwordInput().type(user.password);
        super.waitForSeconds(3);
        this.loginButton().click();
        return this;
    };

    public errorWhenWeWantToLoginWithoutUserName() {
        this.wrongPassword().should("contain", "Epic sadface: Username is required");
        return this;
    };

    public errorWhenWeWantToLoginWithLockedOutUser() {
        this.wrongPassword().should("contain", "Epic sadface: Sorry, this user has been locked out.");
        return this;
    };



    public open() {
        super.goto("https://www.saucedemo.com/");

        return this;
    }

}

export default new LoginPageSwaglabs();