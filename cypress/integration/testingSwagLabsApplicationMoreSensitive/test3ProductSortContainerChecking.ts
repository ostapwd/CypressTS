import { ContainerPageSwaglabs } from "../../support/pages/swaglabsPagesMoreSensitive/containerProductPageSwaglabs"
import usersForSwaglabs from "../../data/usersForSwaglabs";
import { LoginPageSwaglabs } from "../../support/pages/swaglabsPagesMoreSensitive/loginPageSwaglabs";
import { ProductPageSwaglabs } from "../../support/pages/swaglabsPagesMoreSensitive/productPageSwaglabs";



const login = new LoginPageSwaglabs();
const product = new ProductPageSwaglabs();
const container = new ContainerPageSwaglabs();


describe("Test suite 3", function () {

        beforeEach(function () {
                login.open()
                        .loginToTheApp(usersForSwaglabs.standardUser)
                product.productLabelChecking()
        });

        it('Test 1 "Select "Price (high to low)" and chack it praces (dropdown)" ', function () {

                container.filterByText("Price (high to low)")
                        .waitForSeconds(3)
                        .filterByIndexFromHighToLowCheckOnlyPrice()
        });

        it('Test 2 "Select "Price (Name (A to Z))" and chack it praces (dropdown)" ', function () {

                container.filterByText("Name (A to Z)")
                        .waitForSeconds(3)
                        .filterByIndexFromAtoZCheckOnlyPrice()
        });

        it('Test 3 "Select "Price (Name (Z to A))" and chack it praces (dropdown)" ', function () {

                container.filterByText("Name (Z to A)")
                        .waitForSeconds(3)
                        .filterByIndexFromZtoACheckOnlyPrice()

        });

        it('Test 4 "Select "Price (low to high)" and chack it praces (dropdown)" ', function () {

                container.filterByText("Price (low to high)")
                        .waitForSeconds(3)
                        .filterByIndexFromLowToHighCheckOnlyPrice()
        });

        it('Test 5 "Select items of container one by one (dropdown)" ', function () {

                container.filterByText("Price (high to low)")
                        .waitForSeconds(3)
                        .filterByText("Name (A to Z)")
                        .waitForSeconds(3)
                        .filterByText("Name (Z to A)")
                        .waitForSeconds(3)
                        .filterByText("Price (low to high)")
                        .waitForSeconds(3)

        });

        it('Test 6 "Check if the product container works properly (places the filter well)" ', function () {
                container.productSortContainerCheckingQuantity()
                        .filterByText("Name (A to Z)")
                let aToZ = ['$29.99', '$9.99', '$15.99', '$49.99', '$7.99', '$15.99']
                container.filterByIndexFromAtoZ(aToZ)
                        .filterByIndexFromAtoZCheckOnlyPrice()
                container.filterByText("Name (Z to A)")
                let zToA = ['$15.99', '$7.99', '$49.99', '$15.99', '$9.99', '$29.99']
                container.filterByIndexFromZtoA(zToA)
                container.filterByIndexFromZtoACheckOnlyPrice()
                container.filterByText("Price (high to low)")
                let highToLow = ['$49.99', '$29.99', '$15.99', '$15.99', '$9.99', '$7.99']
                container.filterByIndexFromHighToLowCheckOnlyPrice()
                container.filterByIndexFromHighToLow(highToLow)
                        .filterByText("Price (low to high)")
                let lowToHigh = ['$7.99', '$9.99', '$15.99', '$15.99', '$29.99', '$49.99']
                container.filterByIndexFromLowToHighCheckOnlyPrice()
                container.filterByIndexFromLowToHigh(lowToHigh)



        });

        afterEach(function () {
                cy.log("after Each");
        });

})
