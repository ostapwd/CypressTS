import usersParabank from "../../../data/ParaBank/usersParabank";
import { LoginPageParabank } from "../../../support/pagesParaBank/loginPageParabank";

const loginPageParabank = new LoginPageParabank();

describe('Test suite to open new account', () => {
    before('Opened the Main page', () => {
        loginPageParabank.open();
    });
        it('Test a user can open new account ', () => {
            loginPageParabank
                .loginToTheApp(usersParabank.newUser)
                .openNewAccountLinkPage()
                .pageTitleLabel()
                .selectTypeAccount()
                .selectNumberAccount()
                .openNewAccount()
                .confirmCreattedAccount()
        });
});