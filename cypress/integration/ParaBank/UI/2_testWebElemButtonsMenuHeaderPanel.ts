import { BasePageParabank } from "../../../support/pagesParaBank/basePageParabank";
import { AboutUsPageParabank } from "../../../support/pagesParaBank/aboutUsPageParabank";
import urlsPagesParabank from "../../../data/ParaBank/urlsPagesParabank";
import { ContactPageParabank } from "../../../support/pagesParaBank/contactPageParabank";

const basePage = new BasePageParabank();
const aboutUsPage = new AboutUsPageParabank();
const contactPage = new ContactPageParabank();

describe('Test suite to verify the buttons menu of the header panel', () => {
    beforeEach('Opened the Main page', () => {
        basePage.openApi();
    });
   
    it('Verify the button menu on the main API page', () => {
        const links = ['index.htm', 'about.htm', 'contact.htm']
        basePage
            .getRightButtonMenu()
                .should('be.visible')
                .find('a')
                .should('have.length', 3)
                .each((item, index) => {
                    expect(Cypress.$(item).attr('href')).to.contain(links[index])
                })
    });

    it('Test a user can go to the AboutUs page after clicking on the AboutUs button', () => {
        basePage
            .getAboutUsButton()
                .should('be.visible')
                .and('have.attr', 'href')
                .and('contain', 'about.htm')
        aboutUsPage
            .clickButtonAboutUsPage()
            .urlVerify(urlsPagesParabank.aboutUsPageUrl)
            .getPageLabel()
                .should('contain','ParaSoft Demo Website')
    });

    it('Test a user can go to the Contact page after clicking on the Contact button', () => {
        basePage
            .getContactButton()
                .should('be.visible')
                .and('have.attr', 'href')
                .and('contain', 'contact.htm')
        contactPage
            .clickButtonContactPage()
            .urlVerify(urlsPagesParabank.contactPageUrl)
            .getPageLabel()
                .should('contain','Customer Care')
    });

    it('Test a user can go to the Home page after clicking on the Home button', () => {
        basePage
            .getHomeButton()
                .should('be.visible')
                .and('have.attr', 'href')
                .and('contain', 'index.htm')
        basePage
            .clickHomeButton()
        basePage
            .urlVerify(urlsPagesParabank.loginPageUrl)
    });
});