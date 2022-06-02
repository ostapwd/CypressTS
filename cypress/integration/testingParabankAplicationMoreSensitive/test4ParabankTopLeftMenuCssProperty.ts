
import { MainParabankPageLoginRegister } from "../../support/pages/parabankPagesMoreSensitive/mainParabankPageLoginRegister";
import { MainParabankPageLeftMenu } from "../../support/pages/parabankPagesMoreSensitive/mainParabankPageHeaderPanelTopLeftMenu";

const loginRegister = new MainParabankPageLoginRegister();
const leftMenu = new MainParabankPageLeftMenu();

describe("Fourth test suite for Parabank", function () {
    beforeEach('login to the app', () => {
        loginRegister.open()
    })

    it("Test 1 Checking css property 'Solutions' link (positive)", () => {
        leftMenu.leftMenuSolutionsElementCheckingWrongCssProperty()
    })

    it("Test 2 Checking css property 'Solutions' link (negative)", () => {
        leftMenu.leftMenuSolutionsElementCheckingCssProperty()
    })

    it("Test 3 Checking css property 'About Us' link ", () => {
        leftMenu.leftMenuAboutUsElementCheckingCssProperty()
    })

    it("Test 4 Checking css property 'Services' link ", () => {
        leftMenu.leftMenuServicesElementCheckingCssProperty()
    })

    it("Test 5 Checking css property 'Products' link ", () => {
        leftMenu.leftMenuProductsElementCheckingCssProperty()
    })

    it("Test 6 Checking css property 'Locations' link ", () => {
        leftMenu.leftMenuLocationsElementCheckingCssProperty()
    })

    it("Test 7 Checking css property 'Services' link ", () => {
        leftMenu.leftMenuAdminsElementCheckingCssProperty()
    })

    afterEach(function () {
        cy.log("after Each");
    });
})