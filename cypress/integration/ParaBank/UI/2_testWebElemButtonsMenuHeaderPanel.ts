import { MainPageParabank } from "../../../support/pagesParaBank/mainPageParabank";

const mainPage = new MainPageParabank();

describe('Test suite to verify the buttons menu of the header panel', () => {
    beforeEach('Opened the Main page', () => {
        mainPage.openApp();
    });
   
    it('Verify the button menu on the main App page', () => {
        const links = ['index.htm', 'about.htm', 'contact.htm']
        mainPage.getRightButtonMenu().should('be.visible').find('a').should('have.length', 3).each((item, index) => {
            expect(Cypress.$(item).attr('href')).to.contain(links[index])
        })
    });
  
    it('Verify the Home button of the buttons menu', () => {
        mainPage.getHomeButton().should('be.visible').and('have.attr', 'href').and('contain', 'index.htm')
    });

    it('Verify the About Us button of the buttons menu', () => {
        mainPage.getAboutUsButton().should('be.visible').and('have.attr', 'href').and('contain', 'about.htm')
    });

    it('Verify the Contact button of the buttons menu', () => {
        mainPage.getContactButton().should('be.visible').and('have.attr', 'href').and('contain', 'contact.htm')
    });
});