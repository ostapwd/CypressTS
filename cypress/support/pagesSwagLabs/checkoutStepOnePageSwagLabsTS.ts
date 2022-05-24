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

    public checkOneStepPageLabelVerify(){
        this.checkOneStepPageLabel().should('be.visible').then((element) => {
            expect(element.text()).to.be.equal('Checkout: Your Information')
        })
            return this
    }

    public formCheckOneStepPageVerify(){
        this.formCheckOneStepPage().should('be.visible')
            return this
    }

    public continueButtonVerify(){
        this.continueButton().should('be.visible').should('have.attr', 'type').and('eq','submit')
            return this
    }

    public cancelButtonVerify(){
        this.cancelButton().should('be.visible').then((element) => {
            expect(element.text()).to.be.equal('Cancel')
        })
            return this
    }

    public fillFormCheckoutStepOnePage(user){
        this.firstNameInput().clear().type(user.firstName)
        this.lastNameInput().clear().type(user.lastName)
        this.postalCodeInput().clear().type(user.postalCode)
            return this
    }

    public openCheckoutStepTwoPage(user){
        this.firstNameInput().clear().type(user.firstName)
        this.lastNameInput().clear().type(user.lastName)
        this.postalCodeInput().clear().type(user.postalCode)
        this.continueButton().click()
            return new checkoutStepTwoPageSwagLabsTS()
    }
}