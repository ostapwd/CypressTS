
import { MainParabankPageLoginRegister } from "../../support/pages/parabankPages/mainParabankPageLoginRegister";
import { MainParabankPageLeftMenu } from "../../support/pages/parabankPages/mainParabankPageHeaderPanelTopLeftMenu";

const loginRegisterPage = new MainParabankPageLoginRegister();
const mainPage = new MainParabankPageLeftMenu();

describe("Fourth test suite for Parabank", function () {
    beforeEach('login to the app', () => {
        loginRegisterPage.open()
    })

    it("Test 1 Checking css property 'Solutions' link (positive)", () => {
        mainPage.leftMenuSolutionsElementCheckingWrongCssProperty()
    })

    it("Test 2 Checking css property 'Solutions' link (negative)", () => {
        mainPage.leftMenuSolutionsElementCheckingCssProperty()
    })

    it("Test 3 Checking css property 'About Us' link ", () => {
        mainPage.leftMenuAboutUsElementCheckingCssProperty()
    })

    it("Test 4 Checking css property 'Services' link ", () => {
        mainPage.leftMenuServicesElementCheckingCssProperty()
    })

    it("Test 5 Checking css property 'Products' link ", () => {
        mainPage.leftMenuProductsElementCheckingCssProperty()
    })

    it("Test 6 Checking css property 'Locations' link ", () => {
        mainPage.leftMenuLocationsElementCheckingCssProperty()
    })

    it("Test 7 Checking css property 'Services' link ", () => {
        mainPage.leftMenuAdminsElementCheckingCssProperty()
    })

    afterEach(function () {
        cy.log("after Each");
    });
})