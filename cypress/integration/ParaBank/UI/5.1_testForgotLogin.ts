import usersParabank from "../../../data/ParaBank/usersParabank";
import { AccountServicesPageParabank } from "../../../support/pagesParaBank/accountServicesPageParabank";
import { ForgotLoginPageParabank } from "../../../support/pagesParaBank/forgotLoginPageParabank";
import { MainPageParabank } from "../../../support/pagesParaBank/mainPageParabank";


const mainPage = new MainPageParabank();
const accountServicesPage = new AccountServicesPageParabank();
const forgotLoginPage = new ForgotLoginPageParabank();

describe('Test suite a user forgot credentials to the App', () => {
    before('Opened the Main page', () => {
        mainPage.openApp().clickOnForgotLogin();
    });

    it('Test verify the label page', () => {
        mainPage.pageLabel().then((element) => {
            expect(element.text()).to.be.contains('Customer Lookup')
        })
    });

    it('Test verify a user can find his login info', () => {
        forgotLoginPage.customerLookup(usersParabank.newUser).clickOnFindMyLoginbutton()
        forgotLoginPage.getLoginInfo().then((element) => {
                expect(element.text()).to.be.contains(usersParabank.newUser.userName)
                expect(element.text()).to.be.contains(usersParabank.newUser.password)
            })
        accountServicesPage.logOutOfTheApp()
    });
});