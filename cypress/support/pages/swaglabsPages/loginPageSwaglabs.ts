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

    public checkThatItWasWrittenWrongPasswordInTheInput() {
        return this.wrongPassword()
    };

    public loginToTheAppWithoutPassword(user) {
        this.usernameInput().type(user.username);
        super.waitForSeconds(3);
        this.loginButton().click();
        return this
    };

    public errorWhenWeWantToLoginWithoutPassword() {
        return this.wrongPassword()
    };

    public loginToTheAppWithoutUserNameAndClick(user) {
        this.passwordInput().type(user.password);
        super.waitForSeconds(3);
        this.loginButton().click();
        return this
    };

    public errorWhenWeWantToLoginWithoutUserName() {
        return this.wrongPassword()
    };

    public errorWhenWeWantToLoginWithLockedOutUser() {
        return this.wrongPassword()
    };

    public usernameInputForLogin(login) {
        this.usernameInput().clear().type(login);
    };

    public passwordInputForLogin(password) {
        this.passwordInput().clear().type(password);
        return this
    };

    public clickLoginButton() {
        this.loginButton().click();
    };

    public open() {
        super.goto("https://www.saucedemo.com/");
        return this;
    };

}

export default new LoginPageSwaglabs();