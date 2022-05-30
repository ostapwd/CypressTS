import { ProductPageTs } from "./productPageTS-practice";
import BasePage from "./basePage-practice";


export class LoginPageTs extends BasePage {

    public usernameInput() { return cy.xpath('//*[@id="user-name"]'); }
    private passwordInput() { return cy.get("input[name='password']"); }
    public loginButton() { return cy.get("input[data-test='login-button']"); }
    public wrongPassword() { return cy.get("h3[data-test='error']"); }



    public loginToTheApp(user) {
        this.usernameInput().type(user.username);
        this.passwordInput().type(user.password);

        super.waitForSeconds(1);

        this.loginButton().click();

        return new ProductPageTs;

    }

    public open() {
        super.goto("https://www.saucedemo.com/");

        return this;
    }

}

export default new LoginPageTs()