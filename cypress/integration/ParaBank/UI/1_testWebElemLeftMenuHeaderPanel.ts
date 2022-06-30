import { MainPageParabank } from "../../../support/pagesParaBank/mainPageParabank";
import apiUtility from "../../../utilities/apiUtility";

const mainPage = new MainPageParabank();

describe('Test suite to verify the left menu of the header panel', () => {
    beforeEach('Opened the Main page', () => {
        mainPage.openApp();
    });
    it('Verify the names of the menu items in the left menu on the main App page', () => {
        const nameItems = ['Solutions', 'About Us', 'Services', 'Products', 'Locations', 'Admin Page']
        mainPage.getLeftMenu().find('li').should('be.visible').and('have.length', 6).each((item, index) => {
            expect(Cypress.$(item).text()).to.eq(nameItems[index])
        })
    });

    it('Verify the AboutUs link', () => {
        mainPage.getAboutUsLink().should('contain', 'About Us').and('have.attr', 'href').and('contain', 'about.htm')
    });

    it('Verify the Services link ', () => {
        mainPage.getServicesLink().should('contain', 'Services').and('have.attr', 'href').and('contain', 'services.htm')
    });

    it('Verify the Products link', () => {
        mainPage.getProductsLink().should('contain', 'Products').and('have.attr', 'href').and('contain', 'products.jsp')
    });

    it('Verify the Locations link', () => {
        mainPage.getLocationsLink().should('contain', 'Locations').and('have.attr', 'href').and('contain', 'contacts.jsp')
    });

    it('Verify the Admin page link', () => {
        mainPage.getAdminPageLink().should('contain', 'Admin Page').and('have.attr', 'href').and('contain', 'admin.htm')
    });

    afterEach('Message', () => {
       apiUtility.logMessage('Test successful');
    });
});