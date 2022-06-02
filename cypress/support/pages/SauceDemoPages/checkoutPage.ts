import BasePage from "./BasePage"


export class checkoutPage extends BasePage{
    private checkoutBtn(){return cy.get("#checkout")}
    private firstnameField(){return cy.get("#first-name")}
    private lastNameField(){return cy.get("#last-name")}
    private zipCodeField(){return cy.get("#postal-code")}
    private continueBtn(){return cy.get("#continue")}
    private finishBtn(){return cy.get("#finish")}
    private backHomeBtn(){return cy.get("#back-to-products")}

    public clickCheckout(){
        this.checkoutBtn().click()
        return this
    }

    public clickContinue(user){
        this.firstnameField().type(user.firstName)
        this.lastNameField().type(user.lastName)
        this.zipCodeField().type(user.zipCode)
        this.continueBtn().click()
        return this
    }

    public clickFinish(){
        this.finishBtn().click()
        return this
    }

    public clickBackHome(){
        this.backHomeBtn().click()
        return this
    }
}