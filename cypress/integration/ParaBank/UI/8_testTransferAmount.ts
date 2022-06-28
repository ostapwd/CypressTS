import usersParabank from "../../../data/ParaBank/usersParabank";
import { AccountServicesPageParabank } from "../../../support/pagesParaBank/accountServicesPageParabank";
import { MainPageParabank } from "../../../support/pagesParaBank/mainPageParabank";
import { TransfersFoundPageParabank } from "../../../support/pagesParaBank/transfersFoundsPageParabank";


const mainPage = new MainPageParabank();
const accountServicesPage = new AccountServicesPageParabank();
const transferPage = new TransfersFoundPageParabank();

describe('Test suite transfer amount', () => {
    before('Opened the Main page', () => {
        mainPage.openApp().loginToTheApp(usersParabank.newUser).clickLoginButton();
    });
        it('Test a user can enter transfer amount', () => {
            accountServicesPage.clickOnLinkTransfersFound()
            transferPage.setTransferAmount('500')
        });

        it('Test a user can set from account number', () => {
            transferPage.selectFromAccount(2)
        });

        it('Test a user can set to account number', () => {
            transferPage.selectToAccount(3)
        });

        it('Test verify the transfer button ', () => {
            transferPage.getTransferButton().should('be.visible').and('have.value','Transfer').and('have.attr', 'type', 'submit')
        });

        it('Test a user can to do transfer funds', () => {
            transferPage.clickTransferButton()
        });

        it('Test verify transfer funds', () => {
            transferPage.pageLabel().contains('Transfer Complete!')
        });
});