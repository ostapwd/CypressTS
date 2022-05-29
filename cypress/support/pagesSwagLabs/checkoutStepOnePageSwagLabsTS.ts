import basePageSwagLabsTS from './basePageSwagLabsTS';
import { checkoutStepTwoPageSwagLabsTS } from './checkoutStepTwoPageSwagLabsTS';

export class checkoutStepOnePageSwagLabsTS extends basePageSwagLabsTS{

    private formCheckOneStepPage() { return cy.get(".checkout_info"); }
    private urlCheckOneStepPage() { return cy.url(); }
    private firstNameInput() { return cy.get("#first-name"); }
    private lastNameInput() { return cy.get("#last-name"); }
    private postalCodeInput() { return cy.get("#postal-code"); }
    public checkOneStepPageLabel() { return cy.get("#header_container .title"); }
    public continueButton() { return cy.get("#continue"); }
    public cancelButton() { return cy.get("#cancel"); }

    public urlPageVerify(link) {
        this.urlCheckOneStepPage().should('eq', link.url)
            return this
    }

    public getFormCheckOneStepPage(){
        return this.formCheckOneStepPage()
    }

    public getContinueButton(){
        return this.continueButton()
    }

    public getCancelButton(){
         return this.cancelButton()
    }

    public inputCheckoutInfo(user){
        this.firstNameInput().clear().type(user.firstName)
        this.lastNameInput().clear().type(user.lastName)
        this.postalCodeInput().clear().type(user.postalCode)
            return this
    }

    public clickOpenCheckoutStepTwoPage(){
        this.continueButton().click()
            return new checkoutStepTwoPageSwagLabsTS()
    }
}