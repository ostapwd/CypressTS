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
            transferPage.waitForSeconds(1).setTransferAmount('100')
            transferPage.selectFromAccount(2)
            transferPage.selectToAccount(3)
            transferPage.getTransferButton().should('be.visible').and('have.value','Transfer').and('have.attr', 'type', 'submit')
            transferPage.clickTransferButton()
            transferPage.pageLabel().contains('Transfer Complete!')
        });
});