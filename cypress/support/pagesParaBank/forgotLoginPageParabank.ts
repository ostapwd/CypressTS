import BasePageParabank from "./basePageParabank";

export default class ForgotLoginPageParabank extends BasePageParabank{
    public findMyLoginButton() {return cy.get( "input.button[value='Find My Login Info']")};
    public customerLookupLabel() {return cy.get( "#rightPanel h1.title")};
    public customerLookupCredentialsLabel() {return cy.xpath( "//*[@id='rightPanel']/p[2]")};

    public customerLookup(user){
        super.firstNameInput().should('be.visible').clear().type(user.firstName);
        super.lastNameInput().should('be.visible').clear().type(user.lastName);
        super.addressStreetInput().should('be.visible').clear().type(user.addressStreet);
        super.addressCityInput().should('be.visible').clear().type(user.addressCity);
        super.addressStateInput().should('be.visible').clear().type(user.addressState);
        super.addressZipCodeInput().should('be.visible').clear().type(user.addressZipCode);
        super.ssnInput().should('be.visible').clear().type(user.ssn);
        this.findMyLoginButton().should('be.visible').should('have.value', 'Find My Login Info').click()
            return this
    }

    public customerLookupVerify(){
        this.customerLookupLabel().then((element) => {
            expect(element.text()).to.be.contains('Customer Lookup')
        })
        return this
    }

    public customerLookupCredentialsVerify(user){
        this.customerLookupCredentialsLabel().then((element) => {
            expect(element.text()).to.be.contains(user.userName)
            expect(element.text()).to.be.contains(user.password)
        })
        return this
    }
}