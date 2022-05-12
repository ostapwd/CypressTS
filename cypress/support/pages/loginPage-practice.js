import productPagePractice from "./productPage-practice";



class LoginPage {

    get usernameInput() { return cy.xpath('//*[@id="user-name"]'); }
    get passwordInput() { return cy.get("input[name='password']"); }
    get loginButton() { return cy.get("input[data-test='login-button']"); }

    loginToTheApp(user) {
        this.usernameInput.type(user.username);
        this.passwordInput.type(user.password);
        this.loginButton.click();

        return productPagePractice;
      
    }

    open() {
        cy.visit("https://www.saucedemo.com/");

        return this;
    }

}

export default new LoginPage()