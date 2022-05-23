import BasePageParabank from "./basePageParabank";

export default class AccountServicesPageParabank extends BasePageParabank{
    public accountServicesLabel() { return cy.get("#leftPanel h2"); }
    public openNewAccountLink() { return cy.get("a[href='/parabank/openaccount.htm']"); }
    public openNewAccountButton() {return cy.get( "input.button[value='Open New Account']")};
    public selectNumberAccount() {return cy.get( "#fromAccountId")};
    public accountsOverwiewLink() { return cy.get("a[href='/parabank/overview.htm']"); }
    public accountOpenedLabel() { return cy.get("div[ng-if='showResult'] h1.title"); }
    public numberNewAccount() { return cy.get("#newAccountId"); }
   
    
    public AccountServicesLabelVerify(){
        this.accountServicesLabel().should('contain','Account Services')
            return this
    }

    public openNewAccount(){
        this.openNewAccountLink().should('contain','Open New Account').click();
        this.selectNumberAccount().select(1)
        return this
    }

    public openNewAccountButtonClick(){
        this.openNewAccountButton().should('be.visible').click();
        this.accountOpenedLabel().should('contain','Account Opened!')
        this.numberNewAccount().then(item => {
            cy.log(item.text())
        });
        return this
    }

    public newAccountVerify(){
        this.accountsOverwiewLink().then((element) => {
            expect(element.text()).to.be.contains('Accounts Overview')
        }).click();

        return this
    }
}