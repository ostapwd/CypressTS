
export class LoginPageTs {
  
    private usernameInput() { return cy.xpath('//*[@id="user-name"]'); }
    private passwordInput() { return cy.get("input[name='password']"); }
    private loginButton() { return cy.get("input[data-test='login-button']"); }

  

    public loginToTheApp(user) {
        this.usernameInput().type(user.username);
        this.passwordInput().type(user.password);
        this.loginButton().click();

     
      
    }

    public open() {
        cy.visit("https://www.saucedemo.com/");

        return this;
    }

}

export default new LoginPageTs()