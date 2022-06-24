import urlsPagesParabank from "../../../data/ParaBank/urlsPagesParabank";
import { ContactPageParabank } from "../../../support/pagesParaBank/contactPageParabank";
import { MainPageParabank } from "../../../support/pagesParaBank/mainPageParabank";


const mainPage = new MainPageParabank();
const contactPage = new ContactPageParabank();

describe('Test suite to verify the buttons menu of the header panel', () => {
    beforeEach('Opened the Main page', () => {
        mainPage.openApi();
    });
   
    it('Verify the button menu on the main App page', () => {
        const links = ['index.htm', 'about.htm', 'contact.htm']
        mainPage
            .getRightButtonMenu()
                .should('be.visible')
                .find('a')
                .should('have.length', 3)
                .each((item, index) => {
                    expect(Cypress.$(item).attr('href')).to.contain(links[index])
                })
    });

    it('Test a user can go to the Home page after clicking on the Home button', () => {
        mainPage
            .getHomeButton()
                .should('be.visible')
                .and('have.attr', 'href')
                .and('contain', 'index.htm')
        mainPage
            .clickHomeButton()
        mainPage
            .urlVerify(urlsPagesParabank.loginPageUrl)
    });

    it('Test a user can go to the AboutUs page after clicking on the AboutUs button', () => {
        mainPage
            .getAboutUsButton()
                .should('be.visible')
                .and('have.attr', 'href')
                .and('contain', 'about.htm')
        mainPage
            .clickButtonAboutUsPage()
        mainPage
            .urlVerify(urlsPagesParabank.aboutUsPageUrl)
            .getPageLabel()
                .should('contain','ParaSoft Demo Website')
    });

    it('Test a user can go to the Contact page after clicking on the Contact button', () => {
        mainPage
            .getContactButton()
                .should('be.visible')
                .and('have.attr', 'href')
                .and('contain', 'contact.htm')
        mainPage
            .clickButtonContactPage()
            .urlVerify(urlsPagesParabank.contactPageUrl)
        mainPage
            .getPageLabel()
                .should('contain','Customer Care')
    });
});