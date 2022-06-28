import usersParabank from "../../../data/ParaBank/usersParabank";
import { AccountServicesPageParabank } from "../../../support/pagesParaBank/accountServicesPageParabank";
import { AccountsOverviewPageParabank } from "../../../support/pagesParaBank/accountsOverviewPageParabank";
import { MainPageParabank } from "../../../support/pagesParaBank/mainPageParabank";

const mainPage = new MainPageParabank();
const accountServicesPage = new AccountServicesPageParabank();
const accountOverviewPage = new AccountsOverviewPageParabank();

describe('Test suite to verify account overview page', () => {
    beforeEach('Opened the Main page', () => {
       mainPage.openApp().loginToTheApp(usersParabank.newUser).clickLoginButton();
    });
        it('Test a user can open the Account overview page ', () => {
            accountServicesPage.clickOnLinkAccountsOverview().pageLabel().should('contain','Accounts Overview')
        });

        it('Test to checking the Account overview table', () => {
            accountServicesPage.clickOnLinkAccountsOverview()
            accountOverviewPage.getTableAccountsOverview().find('thead').should(($th) => {
                expect($th).to.contain('Account')
                expect($th).to.contain('Balance*')
                expect($th).to.contain('Available Amount')
            })
        });

        it('Verification of created accounts', () => {
            accountServicesPage.clickOnLinkAccountsOverview()
            accountOverviewPage.getNumbersAccountLog().each((number) => {
                cy.log(number.text())
            })
        });

    afterEach('Log out', () => {
        accountServicesPage.logOutOfTheApp()
    });
});