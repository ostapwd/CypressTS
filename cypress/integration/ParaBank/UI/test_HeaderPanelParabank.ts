import urlsPagesParabank from "../../../data/urlsPagesParabank";
import { LoginPageParabank } from "../../../support/pagesParaBank/loginPageParabank";

const loginPageParabank = new LoginPageParabank();

describe('Test suite to verify the header panel', () => {
    beforeEach('Opened the Main page', () => {
        loginPageParabank.open();
    });
    it('Test the left menu ', () => {
        loginPageParabank
            .urlPageVerify(urlsPagesParabank.loginPageUrl)
            .leftMenuVerify()
    });

    it('Test a user can open the About Us menu ', () => {
        loginPageParabank
            .urlPageVerify(urlsPagesParabank.loginPageUrl)
            .openAboutUsLinkMenu()
    });

    it('Test a user can open the Services menu ', () => {
        loginPageParabank
            .urlPageVerify(urlsPagesParabank.loginPageUrl)
            .openServicesLinkMenu()
    });

    it('Test a user open the Products menu ', () => {
        loginPageParabank
            .urlPageVerify(urlsPagesParabank.loginPageUrl)
            .openServicesLinkMenu()
    });

    it('Test a user open the Locations menu ', () => {
        loginPageParabank
            .urlPageVerify(urlsPagesParabank.loginPageUrl)
            .openLocationsLinkMenu()
    });

    it('Test a user open the Admin page menu ', () => {
        loginPageParabank
            .urlPageVerify(urlsPagesParabank.loginPageUrl)
            .openAdminPageLinkMenu()
    });

});