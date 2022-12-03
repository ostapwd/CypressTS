export class LoginParabankTS{
    private usernameInput() { return cy.get("[name='username']")}
    private passwordInput() {return cy.get("[name='password']")}
    private loginButton() {return  cy.get("[value='Log In']")}
    
    

    public loginToTheApp(creds:string){
        this.usernameInput().type(creds)
        this.passwordInput().type(creds)

        this.loginButton().click()

    }

    public open(){
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        return this;
    }
}