import urlsPagesParabank from "../../../data/ParaBank/urlsPagesParabank";
import { MainPageParabank } from "../../../support/pagesParaBank/mainPageParabank";

const mainPage = new MainPageParabank();

describe('Test suite to verify the buttons menu are working', () => {
    beforeEach('Opened the Main page', () => {
        mainPage.openApp();
    });
   
    it('Test a user can go to the Home page after clicking on the Home button', () => {
        mainPage.waitForSeconds(1).clickOnHomeButton().urlVerify(urlsPagesParabank.loginPageUrl)
    });

    it('Test a user can go to the AboutUs page after clicking on the AboutUs button', () => {
        mainPage.waitForSeconds(1).clickOnButtonAboutUs().urlVerify(urlsPagesParabank.aboutUsPageUrl)
                .getPageLabel().should('contain','ParaSoft Demo Website')
    });

    it('Test a user can go to the Contact page after clicking on the Contact button', () => {
        mainPage.waitForSeconds(1).clickOnButtonContact()
        mainPage.urlVerify(urlsPagesParabank.contactPageUrl).getPageLabel().should('contain','Customer Care')
    });
});