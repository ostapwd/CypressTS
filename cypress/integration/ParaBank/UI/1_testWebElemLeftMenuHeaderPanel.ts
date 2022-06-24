import urlsPagesParabank from "../../../data/ParaBank/urlsPagesParabank";
import { MainPageParabank } from "../../../support/pagesParaBank/mainPageParabank";

const mainPage = new MainPageParabank();

describe('Test suite to verify the left menu of the header panel', () => {
    beforeEach('Opened the Main page', () => {
        mainPage.openApi();
    });
    it('Verify the names of the menu items in the left menu on the main App page ', () => {
        const nameItems = ['Solutions', 'About Us', 'Services', 'Products', 'Locations', 'Admin Page']
        mainPage.getLeftMenu()
            .find('li')
            .should('be.visible')
            .and('have.length', 6)
            .each((item, index) => {
                expect(Cypress.$(item).text()).to.eq(nameItems[index]
                )})
    });

    it('Test a user can open the AboutUs page', () => {
        mainPage
            .getAboutUsLink()
                .should('contain', 'About Us')
                .and('have.attr', 'href')
                .and('contain', 'about.htm')
        mainPage
            .clickOpenAboutUsPage()
        mainPage
            .urlVerify(urlsPagesParabank.aboutUsPageUrl)
            .getPageLabel()
                .should('contain','ParaSoft Demo Website')
    });

    it('Test a user can open the Services page ', () => {
        mainPage
            .getServicesLink()
                .should('contain', 'Services')
                .and('have.attr', 'href')
                .and('contain', 'services.htm')
        mainPage
            .clickOpenServicesPage()
        mainPage
            .urlVerify(urlsPagesParabank.servicesPageUrl)
            .getServicesPageLabel()
                .should('contain','Available Bookstore SOAP services:')
    });

    it('Test a user open the Products page', () => {
        mainPage
            .getProductsLink()
                .should('contain', 'Products')
                .and('have.attr', 'href')
                .and('contain', 'products.jsp')
        mainPage
            .clickOpenProductsPage()
        mainPage
            .urlVerify(urlsPagesParabank.productsPageUrl)
    });

    it('Test a user open the Locations page', () => {
        mainPage
            .getLocationsLink()
                .should('contain', 'Locations')
                .and('have.attr', 'href')
                .and('contain', 'contacts.jsp')
        mainPage
            .clickOpenLocationsPage()
        mainPage
            .urlVerify(urlsPagesParabank.locationsPageUrl)
    });

    it('Test a user open the Admin page', () => {
        mainPage
            .getAdminPageLink()
                .should('contain', 'Admin Page')
                .and('have.attr', 'href')
                .and('contain', 'admin.htm')
        mainPage
            .clickOpenAdminPage()
        mainPage
            .urlVerify(urlsPagesParabank.adminPageUrl)
            .getPageLabel()
                .should('contain','Administration')
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
});