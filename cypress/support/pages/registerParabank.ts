export class RegisterParabank{
    private firstName() {return cy.get("[name='customer.firstName']")};
    private lastName() {return cy.get('[name="customer.lastName"]')};
    private castomerStreet() {return cy.get('[name="customer.address.street"]')}
    private castomerCity() {return  cy.get('[name="customer.address.city"]')}
    private castomerState() {return cy.get('[name="customer.address.state"]')}
    private castomerZip() {return cy.get('[name="customer.address.zipCode"]')}
    private castomerPhone() {return cy.get('[name="customer.phoneNumber"]')}
    private castomerSSN() {return cy.get('[name="customer.ssn"]')}
    private userName() {return cy.get('[name="customer.username"]')}
    private userPassword() {return cy.get('[name="customer.password"]')}
    private repeatedPassword() {return cy.get('[name="repeatedPassword"]')}
    private registerButton(){return cy.get('[value="Register"]')}

    public registerToApp(userCreds:string){
          this.firstName().type(userCreds)
          this.lastName().type(userCreds)
          this.castomerStreet().type(userCreds)
          this.castomerCity().type(userCreds)
          this.castomerState().type(userCreds)
          this.castomerZip().type(userCreds)
          this.castomerPhone().type(userCreds)
          this.castomerSSN().type(userCreds)
          this.userName().type(userCreds)
          this.userPassword().type(userCreds)
          this.repeatedPassword().type(userCreds)
          this.registerButton().click()

    }
}