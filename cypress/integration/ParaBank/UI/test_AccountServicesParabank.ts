import usersParabank from "../../../data/ParaBank/usersParabank";
import AccountServicesPageParabank from "../../../support/pagesParaBank/accountServicesPageParabank";
import { LoginPageParabank } from "../../../support/pagesParaBank/loginPageParabank";

const loginPageParabank = new LoginPageParabank();
const openNewAccount = new AccountServicesPageParabank()

describe('Test suite to verify account services', () => {
    before('Opened the Main page', () => {
        loginPageParabank.open();
    });
    it('Test a user can open new account ', () => {
        loginPageParabank
            .loginToTheApp(usersParabank.newUser)
            .openNewAccount()
        openNewAccount
            .openNewAccountButtonClick()
            .newAccountVerify()
    });
});