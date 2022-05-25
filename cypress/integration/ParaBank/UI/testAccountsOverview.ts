import usersParabank from "../../../data/ParaBank/usersParabank";
import { LoginPageParabank } from "../../../support/pagesParaBank/loginPageParabank";

const loginPageParabank = new LoginPageParabank();

describe('Test suite to open account overview', () => {
    before('Opened the Main page', () => {
        loginPageParabank.open();
    });
        it('Test a user can open the Account overview page ', () => {
            loginPageParabank
                .loginToTheApp(usersParabank.newUser)
                .openaAccountsOverviewPage()
                .tableAccountsOverview()
                .numbersAccountLog()
                .totalAmountAccountsOverview()
        });
});