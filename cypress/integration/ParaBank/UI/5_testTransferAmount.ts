import usersParabank from "../../../data/ParaBank/usersParabank";
import { LoginPageParabank } from "../../../support/pagesParaBank/loginPageParabank";

const loginPageParabank = new LoginPageParabank();

describe('Test suite transfer amount', () => {
    before('Opened the Main page', () => {
        loginPageParabank.open();
    });
        it('Test a user can transfer amount ', () => {
            loginPageParabank
                .loginToTheApp(usersParabank.newUser)
                .openTransfersFoundPage()
                .transferAmount()
                .pageTitleLabel()
        });
});