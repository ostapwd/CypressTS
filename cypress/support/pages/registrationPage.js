class RegistrationUser{
    get firstName(){ return cy.get('#first-name')} 
    get lastName(){ return cy.get('#last-name')} 
    get postalCode(){ return cy.get('#postal-code')} 
    get continueEnd(){ return cy.get('#continue')} 
    get finishEnd(){ return cy.get('#finish')} 
    registrationUser(firstname,lastname,postalcode){
        this.firstName.type(firstname)
        this.lastName.type(lastname)
        this.postalCode.type(postalcode)
        return this
   }
}
export default new RegistrationUser