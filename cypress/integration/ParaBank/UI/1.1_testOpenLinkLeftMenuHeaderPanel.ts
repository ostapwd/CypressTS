import urlsPagesParabank from "../../../data/ParaBank/urlsPagesParabank";
import { MainPageParabank } from "../../../support/pagesParaBank/mainPageParabank";

const mainPage = new MainPageParabank();

describe('Test suite to verify the left menu of the header panel', () => {
    beforeEach('Opened the Main page', () => {
        mainPage.openApp();
    });

    it('Verify a user can open the AboutUs page', () => {
        mainPage.clickOnAboutUsLink().urlVerify(urlsPagesParabank.aboutUsPageUrl)
                .getPageLabel().should('contain','ParaSoft Demo Website')
    });

    it('Verify a user can open the Services page ', () => {
        mainPage.clickOnServicesLink().urlVerify(urlsPagesParabank.servicesPageUrl)
                .getServicesPageLabel().should('contain','Available Bookstore SOAP services:')
    });

    it('Verifya user open the Products page', () => {
        mainPage.clickOnProductsLink().urlVerify(urlsPagesParabank.productsPageUrl)
    });

    it('Verify a user open the Locations page', () => {
        mainPage.clickOnLocationsLink().urlVerify(urlsPagesParabank.locationsPageUrl)
    });

    it('Verify a user open the Admin page', () => {
        mainPage.clickOnAdminPageLink().urlVerify(urlsPagesParabank.adminPageUrl)
                .getPageLabel().should('contain','Administration')
    });
});