import { ContainerPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/containerPageSwaglabs"
import usersForSwaglabs from "../../data/urersForSwaglabs";
import { LoginPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/loginPageSwaglabs";
import { ProductPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/productPageSwaglabs";


const l = new LoginPageSwaglabs();
const p = new ProductPageSwaglabs();
const ct = new ContainerPageSwaglabs();

describe ("Test suite 3", function () {

    beforeEach(function () {
        l.open()
        .loginToTheApp(usersForSwaglabs.standardUser)
        p.puroductLabelChecking()
    });

it('Test 1 "Select "Price (high to low)" (dropdown)" ', function () {

            ct.filterByText("Price (high to low)")
            .waitForSeconds(3)
            .filterByIndex(1);
    });

    it('Test 2 "Select "Price (Name (A to Z))" (dropdown)" ', function () {

            ct.filterByText("Name (A to Z)")
            .waitForSeconds(3)
            .filterByIndex(1);
    });

    it('Test 3 "Select "Price (Name (Z to A))" (dropdown)" ', function () {

            ct.filterByText("Name (Z to A)")
            .waitForSeconds(3)
            .filterByIndex(1);
    });

    
    it('Test 4 "Select "Price (low to high)" (dropdown)" ', function () {

            ct.filterByText("Price (low to high)")
            .waitForSeconds(3)
            .filterByIndex(1);
    });

    it('Test 5 "Select items of conteiner one by one (dropdown)" ', function () {
            ct.filterByText("Price (high to low)")
            .waitForSeconds(3)
            .filterByIndex(1)
            .filterByText("Name (A to Z)")
            .waitForSeconds(3)
            .filterByIndex(1)
            .filterByText("Name (Z to A)")
            .waitForSeconds(3)
            .filterByIndex(1)
            .filterByText("Price (low to high)")
            .waitForSeconds(3)
            .filterByIndex(1)

    });

    it.only('Test 6 "Product conteiner should contain four items" ', function () {
        ct.productSortContainerCheckingQuantity()

});

    afterEach(function () {
            cy.log("after Each");
    });

})

