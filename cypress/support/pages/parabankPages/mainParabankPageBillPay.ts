export { MainParabankPageContact } from "./mainParabankPageHeaderPanelContact";
import usersParabank from "../../../data/registrationUsersParabank";



export class MainParabankPageBillPay {

    private theLinkBillPay() { return cy.get('a[href="/parabank/billpay.htm"]'); }
    private newPageOfBillPay() { return cy.xpath('//h1[@class="title"]'); }
    public welcomeForMessage() { return cy.xpath('//div[@id="rightPanel"] [p]'); }
    public checkingHowManyInputsInTheBillyPay() { return cy.get('tbody tr td'); }
    private fillInputsToEnterPayeeInformation() { return cy.get('tbody').find('td'); }
    public inputSendPayment() { return cy.get('input[value="Send Payment"]'); }
    private billPaymentComplete() { return cy.get('h1[class="title"]'); }
    public inputForgotPassword() { return cy.get('tbody').find('td'); }
    private responseWhenTheAllInputsAreNotFilled() { return cy.get('tbody') }


    public clickOnTheLinkBillPay() {
        this.theLinkBillPay().click()
        return this;
    }

    public newPageOfBillPayShouldContain() {
        return this.newPageOfBillPay()

    }

    public buttonRegisterOnlyUser() {
        this.welcomeForMessage()
            .should('contain', `Welcome ${usersParabank.someUser.firstName}`);
        return this;
    }

    public checkingHowManyInputsThereAreInTheBillyPay() {
        return this.checkingHowManyInputsInTheBillyPay()
    }

    public fillAllInputsToEnterPayeeInformation(user) {
        this.fillInputsToEnterPayeeInformation().then(tableRow => {
            cy.wrap(tableRow).find('input[ng-model="payee.name"]').type(user.payeeName)
            cy.wrap(tableRow).find('input[name="payee.address.street"]').type(user.address)
            cy.wrap(tableRow).find('input[ng-model="payee.address.city"]').type(user.city)
            cy.wrap(tableRow).find('input[ng-model="payee.address.state"]').type(user.state)
            cy.wrap(tableRow).find('input[ng-model="payee.address.zipCode"]').type(user.zipCode)
            cy.wrap(tableRow).find('input[name="payee.phoneNumber"]').type(user.phone)
            cy.wrap(tableRow).find('input[ng-model="payee.accountNumber"]').type(user.account)
            cy.wrap(tableRow).find('input[ng-model="verifyAccount"]').type(user.verifyAccount)
            cy.wrap(tableRow).find('input[ng-model="amount"]').type(user.amount)

        })
        this.inputSendPayment().click()
        return this;
    };

    public responsWhenTheAllInputsAreNotFilled() {
        this.responseWhenTheAllInputsAreNotFilled().then(tableRowAll => {
            cy.get('tbody').first().find('tr').then(tableColums => {
                cy.wrap(tableColums).eq(0).should('contain', '	Payee name is required.')
            })
            cy.get('tbody').first().find('tr').then(tableColums => {
                cy.wrap(tableColums).eq(1).should('contain', 'Address is required.')
            })
            cy.get('tbody').first().find('tr').then(tableColums => {
                cy.wrap(tableColums).eq(2).should('contain', 'City is required.')
            })
            cy.get('tbody').first().find('tr').then(tableColums => {
                cy.wrap(tableColums).eq(3).should('contain', 'State is required.')
            })
            cy.get('tbody').first().find('tr').then(tableColums => {
                cy.wrap(tableColums).eq(4).should('contain', 'Zip Code is required.')
            })
            cy.get('tbody').first().find('tr').then(tableColums => {
                cy.wrap(tableColums).eq(5).should('contain', 'Phone number is required.')
            })
            cy.get('tbody').first().find('tr').then(tableColums => {
                cy.wrap(tableColums).eq(6).should('contain', 'Account number is required.')
            })
            cy.get('tbody').first().find('tr').then(tableColums => {
                cy.wrap(tableColums).eq(7).should('contain', 'Account number is required.')
            })
            cy.get('tbody').first().find('tr').then(tableColums => {
                cy.wrap(tableColums).eq(8).should('contain', 'The amount cannot be empty.')
            })
        });
        return this;
    };

    public checkingBillPaymentComplete() {
        this.billPaymentComplete()
            .should('contain', 'Bill Payment Complete')
    }

}

export default new MainParabankPageBillPay()

