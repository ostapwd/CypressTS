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

  loginToTheApp(username, password) {
    this.usernameInput.type(username);
    this.passwordInput.type(password);

    this.loginButton.click();
  }

  open() {
    cy.visit('https://www.saucedemo.com/');
    return this;
  }
}

export default new loginPage();
