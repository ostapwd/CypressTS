import {BasePage} from "./basePage"

export class StartRegistration extends BasePage{
    private getInsuranceRegistration(){ return cy.xpath('//*[@id="navbar-brand-centered"]/ul/li[3]/a') }
    private getStartRegistration(){ return cy.xpath('/html/body/div[3]/a')}

    public visitApp() {
        super.goto(Cypress.env("API_HOST2"))
        return this
    }

    public goToInsuranceRegistration(){
        this.getInsuranceRegistration().click()
    }
    
    registrationButton(){
      return  this.getStartRegistration().click()
    }
    
}