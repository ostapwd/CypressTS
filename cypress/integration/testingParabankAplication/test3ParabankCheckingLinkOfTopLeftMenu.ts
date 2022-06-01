import { MainParabankPageLoginRegister } from "../../support/pages/parabankPages/mainParabankPageLoginRegister";
import { MainParabankPageLeftMenu } from "../../support/pages/parabankPages/mainParabankPageHeaderPanelTopLeftMenu";


describe("Third test suite for Parabank", function () {
   beforeEach('login to the app', () => {
      new MainParabankPageLoginRegister().open()
   })

   it("Test 1 Checking the link 'Solutions' if it go to to the correct link ", () => {
      new MainParabankPageLeftMenu().leftMenuElementSolutionGoToAnotherPageClick()
   });

   it("Test 2 Checking the link 'About Us' if it go to to the correct link ", () => {
      new MainParabankPageLeftMenu().leftMenuEboutUsGoToAnotherPageClick()
   });

   it("Test 3 Checking the link 'Services' if it go to to the correct link ", () => {
      new MainParabankPageLeftMenu().leftMenuServicesGoToAnotherPageClick()
   });

   it("Test 4 Checking the link 'Admin' if it go to to the correct link ", () => {
      new MainParabankPageLeftMenu().leftMenuAdminGoToAnotherPageClick()
   });

   it("Test 5 Checking the link 'Products' if it go to to the correct link ", () => {
      new MainParabankPageLeftMenu().leftMenuProductsGoToAnotherPageClick()
   });

   it("Test 6 Checking the link 'Location' if it go to to the correct link ", () => {
      new MainParabankPageLeftMenu().leftMenuLocationsGoToAnotherPageClick()
   });

   afterEach(function () {
      cy.log("after Each");
   });
});