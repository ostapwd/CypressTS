import productPage from './productPage';

class loginPage {
  get usernameInput() {
    return cy.get('#user-name');
  }
  get passwordInput() {
    return cy.get('#password');
  }
  get loginButton() {
    return cy.get('#login-button');
  }

  loginToTheApp(user) {
    this.usernameInput.type(user.username);
    this.passwordInput.type(user.password);

    this.loginButton.click();
    return productPage;
  }

  open() {
    cy.visit('https://www.saucedemo.com/');
    return this;
  }
}

export default new loginPage();
