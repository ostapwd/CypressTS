
class LoginPage {

    get usernameInput() { return cy.xpath('//*[@id="user-name"]'); }
    get passwordInput() { return cy.get("input[name='password']"); }
    get loginButton() { return cy.get("input[data-test='login-button']"); }

    loginToTheApp(username, password) {
        this.usernameInput.type(username);
        this.passwordInput.type(password);
        this.loginButton.click();
    }

    open() {
        cy.visit("https://www.saucedemo.com/");

        return this;
    }

}

export default new LoginPage()