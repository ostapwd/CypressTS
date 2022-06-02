import BasePage from "./basePage";
import {InventoryPage} from "./inventoryPage";

export class LoginPage extends BasePage {
  public constructor() {
    super();
  }

  private usernameInput() { return cy.get("#user-name"); }
  private passwordInput() { return cy.get("#password"); }
  private loginButton() { return cy.get("#login-button"); }
  public loginErrorMessage() { return cy.get(".error-message-container > h3"); }
  public loginPageLogoLabel() { return cy.get(".login_logo"); }

  public static DoSm(){
  }

  public waitForPageToBeLoaded() {
    super.waitForPageToBeLoaded();
    this.loginPageLogoLabel().should("be.visible");

    return this;
  }

  public setUsername(login){
    this.usernameInput().clear().type(login);
    cy.wait(1000);
  }
  public setPassword(password){
    this.passwordInput().clear().type(password);
    cy.wait(1000);
  }
  public clickLoginButton(){
    this.loginButton().click();
    cy.wait(1000);
  }

  public loginToTheApp(user) {
    return this.loginToTheAppWithCreds(user.username, user.password);
  }

  public loginToTheAppWithCreds(login, password) {
    this.setUsername(login);
    cy.wait(1000);
    this.setPassword(password);
    cy.wait(3000);

    this.clickLoginButton();

    return new InventoryPage();
  }



  public open() {
    this.goto(Cypress.env("UI_HOST"));

    return this;
  }

}

//export default new LoginPage();
