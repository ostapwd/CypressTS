import { MainParabankPageLoginRegister } from "../../support/pages/parabankPages/mainParabankPageLoginRegister";
import { MainParabankPageLeftMenu } from "../../support/pages/parabankPages/mainParabankPageHeaderPanelTopLeftMenu";


describe("Fourth test suite for Parabank", function () {
    beforeEach('login to the app', () => {
        new MainParabankPageLoginRegister().open()
    })

    it("Test 1 Checking if is a css property 'Solutions' has a correct link (doesn't correct)", () => {
        new MainParabankPageLeftMenu().leftMenuSolutionsElementCheckingWrongCssProperty().should('have.css', 'background')
            .and('include', 'rgb(255, 255, 255) url("https://parabank.parasoft.com/parabank/images/bullet-hover.gif")')
    })

    it("Test 2 Checking if is a css property 'Solutions' has a correct link (must bee in this way)", () => {
        new MainParabankPageLeftMenu().leftMenuSolutionsElementCheckingCssProperty().should('have.css', 'background')
            .and('include', 'rgb(255, 255, 255) url("https://parabank.parasoft.com/parabank/images/bullet-normal.gif")')
    })

    it("Test 3 Checking if a css property 'About Us' has a correct link ", () => {
        new MainParabankPageLeftMenu().leftMenuAboutUsElementCheckingCssProperty().should('have.css', 'background')
            .and('include', 'rgb(255, 255, 255) url("https://parabank.parasoft.com/parabank/images/bullet-normal.gif")')
    })

    it("Test 4 Checking if is a css property 'Services' has a correct link", () => {
        new MainParabankPageLeftMenu().leftMenuServicesElementCheckingCssProperty().should('have.css', 'background')
            .and('include', 'rgb(255, 255, 255) url("https://parabank.parasoft.com/parabank/images/bullet-normal.gif")')
    })

    it("Test 5 Checking if is a css property 'Products' has a correct link", () => {
        new MainParabankPageLeftMenu().leftMenuProductsElementCheckingCssProperty().should('have.css', 'background')
            .and('include', 'rgb(255, 255, 255) url("https://parabank.parasoft.com/parabank/images/bullet-normal.gif")')
    })

    it("Test 6 Checking if is a css property 'Locations' has a correct link", () => {
        new MainParabankPageLeftMenu().leftMenuLocationsElementCheckingCssProperty().should('have.css', 'background')
            .and('include', 'rgb(255, 255, 255) url("https://parabank.parasoft.com/parabank/images/bullet-normal.gif")')
    })

    it("Test 7 Checking if is a css property 'Services' has a correct link", () => {
        new MainParabankPageLeftMenu().leftMenuAdminsElementCheckingCssProperty().should('have.css', 'background')
            .and('include', 'rgb(255, 255, 255) url("https://parabank.parasoft.com/parabank/images/bullet-normal.gif")')
    })

    afterEach(function () {
        cy.log("after Each");
    });
})