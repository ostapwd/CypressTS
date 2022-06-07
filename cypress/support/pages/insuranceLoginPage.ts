
export class LoginPageInsurance{
    private email(){ return cy.xpath('//*[@id="email"]') }
    private password(){ return cy.xpath('//*[@id="password"]') }
    private submit(){ return cy.xpath('//*[@id="login-form"]/div[3]/input') }
    
    public loginIntoThePage(users){
        this.email().type(users.email)
        this.password().type(users.password)
        this.submit().click()
    }
   
}