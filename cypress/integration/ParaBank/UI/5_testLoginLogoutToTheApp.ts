import usersParabank from "../../../data/ParaBank/usersParabank";
import { AccountServicesPageParabank } from "../../../support/pagesParaBank/accountServicesPageParabank";
import { MainPageParabank } from "../../../support/pagesParaBank/mainPageParabank";

const mainPage = new MainPageParabank();
const accountServicesPage = new AccountServicesPageParabank();

describe('Test suite a user can enter credentials to the App', () => {
    before('Opened the Main page', () => {
        mainPage.openApp();
    });
        it('Test login to the App', () => {
            mainPage.loginToTheApp(usersParabank.newUser).clickLoginButton().getPageLabel().should('contain','Accounts Overview')
       });

        it('Test log out of the App', () => {
            accountServicesPage.logOutOfTheApp().getLoginButton().should('be.visible').and('have.value','Log In')
        });
});