import urlsPagesParabank from "../../../data/ParaBank/urlsPagesParabank";
import HeaderMenuPageParabank from "../../../support/pagesParaBank/headerMenuPageParadank";
import { LoginPageParabank } from "../../../support/pagesParaBank/loginPageParabank";

const loginPageParabank = new LoginPageParabank();
const headerMenuPage = new HeaderMenuPageParabank();

describe('Test suite to verify the header panel', () => {
    before('Opened the Main page', () => {
        loginPageParabank.open();
    });
    it('Test the left menu ', () => {
        loginPageParabank
            .urlPageVerify(urlsPagesParabank.loginPageUrl)
        headerMenuPage
            .leftMenuVerify()
    });

    it('Test the right button menu ', () => {
        headerMenuPage
            .rightButtonMenuVerify()
    });

    it('Test a user can open the About Us menu ', () => {
        headerMenuPage
            .openAboutUsLinkMenu()
    });

    it('Test a user can open the Services menu ', () => {
        headerMenuPage
            .openServicesLinkMenu()
    });

    it('Test a user open the Products menu ', () => {
        headerMenuPage
            .openServicesLinkMenu()
    });

    it('Test a user open the Locations menu ', () => {
        headerMenuPage
            .openLocationsLinkMenu()
    });

    it('Test a user open the Admin page menu ', () => {
        headerMenuPage
            .openAdminPageLinkMenu()
    });

    it.only('Test a user click the home button', () => {
        headerMenuPage
            .returnAccountsServicesPage()
        loginPageParabank
            .urlPageVerify(urlsPagesParabank.loginPageUrl)
    });
});