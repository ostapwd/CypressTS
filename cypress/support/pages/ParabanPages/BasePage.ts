export class BasePage{
    private registerButton(){
        return cy.contains('Register')
    }

    public open() {
        cy.visit('https://parabank.parasoft.com/parabank')
        return this
    }

    public clickRegisterButton(){
        this.registerButton().click()
        return this
    }
}