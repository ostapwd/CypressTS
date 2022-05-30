import usersParabank from "../../data/registrationUsersParabank";
import { MainParabankPageLoginRegister } from "../../support/pages/parabankPages/mainParabankPageLoginRegister";
import { MainParabankPageLeftMenu } from "../../support/pages/parabankPages/mainParabankPageHeaderPanelTopLeftMenu";

const loginRegisterPage = new MainParabankPageLoginRegister();
const mainPage = new MainParabankPageLeftMenu();

describe("Third test suite for Parabank", function () {
   beforeEach('login to the app', () => {
      loginRegisterPage.open()
   })

   it("Test 1 Checking the link 'Solutions' if it go to to the correct link ", () => {
      mainPage.leftMenuElementSolutionGoToAnotherPageClick()
   });

   it("Test 2 Checking the link 'About Us' if it go to to the correct link ", () => {
      mainPage.leftMenuEboutUsGoToAnotherPageClick()
   });

   it("Test 3 Checking the link 'Services' if it go to to the correct link ", () => {
      mainPage.leftMenuServicesGoToAnotherPageClick()
   });

   it("Test 4 Checking the link 'Admin' if it go to to the correct link ", () => {
      mainPage.leftMenuAdminGoToAnotherPageClick()
   });

   it("Test 5 Checking the link 'Products' if it go to to the correct link ", () => {
      mainPage.leftMenuProductsGoToAnotherPageClick()
   });

   it("Test 6 Checking the link 'Location' if it go to to the correct link ", () => {
      mainPage.leftMenuLocationsGoToAnotherPageClick()
   });

   afterEach(function () {
      cy.log("after Each");
   });
});