import { MainPageParabank } from "./mainPageParabank";

export class ForgotLoginPageParabank extends MainPageParabank{
    public findMyLoginButton() {return cy.get( "input.button[value='Find My Login Info']")};
    public loginInfo() {return cy.xpath( "//*[@id='rightPanel']/p[2]")};

    public customerLookup(user){
        super.firstNameInput().clear().type(user.firstName);
        super.lastNameInput().clear().type(user.lastName);
        super.addressStreetInput().clear().type(user.addressStreet);
        super.addressCityInput().clear().type(user.addressCity);
        super.addressStateInput().clear().type(user.addressState);
        super.addressZipCodeInput().clear().type(user.addressZipCode);
        super.ssnInput().clear().type(user.ssn);
            return this
    }

    public clickOnFindMyLoginbutton(){
        return this.findMyLoginButton().click()
    }

    public getLoginInfo(){
       return this.loginInfo()
    }
}