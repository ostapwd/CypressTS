import usersParabank from "../../../data/ParaBank/usersParabank";
import { AccountServicesPageParabank } from "../../../support/pagesParaBank/accountServicesPageParabank";
import { MainPageParabank } from "../../../support/pagesParaBank/mainPageParabank";
import { OpenNewAccountPageParabank } from "../../../support/pagesParaBank/openNewAccountPage";

const mainPage = new MainPageParabank();
const accountServicesPage = new AccountServicesPageParabank();
const openNewAccountPage = new OpenNewAccountPageParabank();

describe('Test suite to verify a user can open the new account', () => {
    before('Opened the Main page', () => {
        mainPage.openApp().loginToTheApp(usersParabank.newUser).clickLoginButton();
    });
   
        it('Verify the page label', () => {
            accountServicesPage.clickOnLinkOpenNewAccount()
            accountServicesPage.pageLabel().should('contain', 'Open New Account')
        });

        it('Verify a user can open the new account', () => {
            openNewAccountPage.selectTypeAccount('0').selectNumberAccount(0).clickOnButtonOpenNewAccount().pageLabel().should('contain','Account Opened!')
            openNewAccountPage.confirmCreattedNewAccount().then(item => {cy.log(item.text())});
        });

    after('Log out', () => {
       accountServicesPage.logOutOfTheApp()
    });
});