import usersParabank from "../../../data/ParaBank/usersParabank";
import { LoginPageParabank } from "../../../support/pagesParaBank/loginPageParabank";
import MainAccountServicesPageParabank from "../../../support/pagesParaBank/mainAccountServicesPageParabank";

const loginPageParabank = new LoginPageParabank();
const openNewAccount = new MainAccountServicesPageParabank()

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
            .VerifyResultCreattedAccount()
    });
});