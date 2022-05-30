import { ContainerPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/containerPageSwaglabs"
import usersForSwaglabs from "../../data/usersForSwaglabs";
import { LoginPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/loginPageSwaglabs";
import { ProductPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/productPageSwaglabs";



ContainerPageSwaglabs
const containerPage = new ContainerPageSwaglabs();
const loginPage = new LoginPageSwaglabs();
const productPage = new ProductPageSwaglabs();

describe("Test suite 3 for product sort container", function () {

        beforeEach(function () {
                loginPage.open()
                        .loginToTheApp(usersForSwaglabs.standardUser)
                productPage.checkProductsLabelInTheProductPage().should("contain", "Products")
        });

        it('Test 1 "Select "Price (high to low)" and chack it praces" (dropdown)', function () {

                const expectResult = ['$49.99', '$29.99', '$15.99', '$15.99', '$9.99', '$7.99']
                containerPage.filterByText("Price (high to low)")
                        .waitForSeconds(3)
                        .filterByIndexFromHighToLowCheckOnlyPrice().each((item, index) => {
                                expect(Cypress.$(item).text()).to.eq(expectResult[index]
                                )

                        });
        });

        it('Test 2 "Select "Price (Name (A to Z))" and chack it praces" (dropdown)', function () {
                const expectResult = ['$29.99', '$9.99', '$15.99', '$49.99', '$7.99', '$15.99']
                containerPage.filterByText("Name (A to Z)")
                        .waitForSeconds(3)
                        .filterByIndexFromAtoZCheckOnlyPrice().each((item, index) => {
                                expect(Cypress.$(item).text()).to.eq(expectResult[index]
                                )

                        });
        });

        it('Test 3 "Select Price (Name (Z to A)) and chack it praces" (dropdown)', function () {
                const expectResult = ['$15.99', '$7.99', '$49.99', '$15.99', '$9.99', '$29.99']
                containerPage.filterByText("Name (Z to A)")
                        .waitForSeconds(3)
                        .filterByIndexFromZtoACheckOnlyPrice().each((item, index) => {
                                expect(Cypress.$(item).text()).to.eq(expectResult[index]
                                )

                        });
        })

        it('Test 4 "Select Price (low to high) and chack it praces (dropdown)" ', function () {
                const expectResult = ['$7.99', '$9.99', '$15.99', '$15.99', '$29.99', '$49.99']
                containerPage.filterByText("Price (low to high)")
                        .waitForSeconds(3)
                        .filterByIndexFromLowToHighCheckOnlyPrice().each((item, index) => {
                                expect(Cypress.$(item).text()).to.eq(expectResult[index]
                                )
                        });

        });

        it('Test 5 "Select items of container one by one" (dropdown)', function () {

                containerPage.filterByText("Price (high to low)")
                        .waitForSeconds(3)
                        .filterByText("Name (A to Z)")
                        .waitForSeconds(3)
                        .filterByText("Name (Z to A)")
                        .waitForSeconds(3)
                        .filterByText("Price (low to high)")

        });

        afterEach(function () {
                cy.log("after Each");
        });

})
