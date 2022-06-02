export class FillRegisterForm {
    private getRegistrationForm(){ return cy.get('form#new_user.new_user') }
    private getFillFormHeader(){ return cy.xpath('/html/body/div[3]/h1') }
    private getUserTitle(){ return cy.get('#user_title') }
    private getFirstName(){ return cy.get('#user_firstname') }
    private getSurName(){ return cy.get('#user_surname') }
    private getPhone(){ return cy.get('#user_phone') }
    private getStreet(){ return cy.get('#user_address_attributes_street') }
    private getCity(){ return cy.get('#user_address_attributes_city') }
    private getCountry(){ return cy.get('#user_address_attributes_county') }
    private getPostCode(){ return cy.get('#user_address_attributes_postcode') }
    private getEmail(){ return cy.get('#user_user_detail_attributes_email') }
    private getPassword(){ return cy.get('#user_user_detail_attributes_password') }
    private getPasswordConfirmation(){ return cy.get('#user_user_detail_attributes_password_confirmation') }
    private getUserYearOfBirth(){ return cy.get('#user_dateofbirth_1i') }
    private getUserMonthOfBirth(){ return cy.get('#user_dateofbirth_2i') }
    private getUserDayOfBirth(){ return cy.get('#user_dateofbirth_3i') }
    private getLicenceType(){ return cy.get('#licencetype_t') }
    private getLicencePeriod(){ return cy.get('#user_licenceperiod') }
    private getOccupation(){ return cy.get('#user_occupation_id') }
    private getCreateFormButton(){ return cy.xpath('//*[@id="new_user"]/div[5]/input[2]') }


    public registrationFormContainer(){
      return this.getRegistrationForm()
      
    }

    public checkFillFormHeader(){
      return this.getFillFormHeader()
        }

    public selectUserTitle(){
      return this.getUserTitle()
        }

    public userYearOfBirth(){
      return this.getUserYearOfBirth()
        }

    public userMonthOfBirth(){
      return this.getUserMonthOfBirth()
        }

    public userDayOfBirth(){
      return this.getUserDayOfBirth()
        }

    public licenceType(){
      return this.getLicenceType()
        }

    public licencePeriod(){
      return this.getLicencePeriod()
        }

    public occupation(){
      return this.getOccupation()
        }
    
    public createFormButton(){
        return this.getCreateFormButton().click()
    }    

    public inputUserData(users){
     this.getFirstName().type(users.firstName)
     this.getSurName().type(users.surName)
     this.getPhone().type(users.phone)
     this.getStreet().type(users.street) 
     this.getCity().type(users.city)
     this.getCountry().type(users.country)
     this.getPostCode().type(users.postCode)
     this.getEmail().type(users.email)
     this.getPassword().type(users.password)
     this.getPasswordConfirmation().type(users.confirmPassword)
      return this
        }
    
}