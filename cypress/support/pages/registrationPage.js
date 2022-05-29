class RegistrationUser{
    get firstName(){ return cy.get('#first-name')} 
    get lastName(){ return cy.get('#last-name')} 
    get postalCode(){ return cy.get('#postal-code')} 

    registrationUser(firstname,lastname,postalcode){
        this.firstName.type(firstname)
        this.lastName.type(lastname)
        this.postalCode.type(postalcode)
   }
}
export default new RegistrationUser