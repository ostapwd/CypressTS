import {BasePage} from "./basePage"

export class CheckoutForm extends BasePage{
    private getFirstName(){ return cy.xpath('//*[@id="first-name"]') }
    private getLastName(){ return cy.xpath('//*[@id="last-name"]')}
    private getPostCode(){ return cy.xpath('//input[@name="postalCode"]')}
    private getButtonContinue(){ return cy.get('#continue')}
    private getSummuryInfo(){ return cy.get('.summary_info')}
    private getFinishButton(){ return cy.get('#finish')}
    public getCheckoutTitle(){ return cy.get('.header_secondary_container')}

    public fillCheckoutForm(users){
        this.getFirstName().type(users.first_name)
        this.getLastName().type(users.last_name)
        this.getPostCode().type(users.postal_code)
        super.waiter(1)
        this.getButtonContinue().click()
        return this
    }

    checkSummuryInfo(){
        return this.getSummuryInfo().then((elements)=>{
            return elements
        })
    }

    clickFinishButton(){
        this.getFinishButton().click()
    }

}