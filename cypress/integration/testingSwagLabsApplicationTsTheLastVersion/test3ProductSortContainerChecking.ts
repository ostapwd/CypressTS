import { ContainerPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/containerProductPageSwaglabs"
import usersForSwaglabs from "../../data/usersForSwaglabs";
import { LoginPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/loginPageSwaglabs";
import { ProductPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/productPageSwaglabs";



const l = new LoginPageSwaglabs();
const p = new ProductPageSwaglabs();
const ct = new ContainerPageSwaglabs();


describe ("Test suite 3", function () {

            beforeEach(function () {
                l.open()
                .loginToTheApp(usersForSwaglabs.standardUser)
                p.productLabelChecking()
            });

it('Test 1 "Select "Price (high to low)" and chack it praces (dropdown)" ', function () {
        
            ct.filterByText("Price (high to low)")
            .waitForSeconds(3)
            .filterByIndexFromHighToLowCheckOnlyPrice()
    });

    it('Test 2 "Select "Price (Name (A to Z))" and chack it praces (dropdown)" ', function () {
       
            ct.filterByText("Name (A to Z)")
            .waitForSeconds(3)
            .filterByIndexFromAtoZCheckOnlyPrice()
    });

    it('Test 3 "Select "Price (Name (Z to A))" and chack it praces (dropdown)" ', function () {
     
            ct.filterByText("Name (Z to A)")
            .waitForSeconds(3)
            .filterByIndexFromZtoACheckOnlyPrice()
           
    });

    it('Test 4 "Select "Price (low to high)" and chack it praces (dropdown)" ', function () {
        
            ct.filterByText("Price (low to high)")
            .waitForSeconds(3)
            .filterByIndexFromLowToHighCheckOnlyPrice()
    });

    it.only('Test 5 "Select items of container one by one (dropdown)" ', function () {
        
            ct.filterByText("Price (high to low)")
            .waitForSeconds(3)
            .filterByText("Name (A to Z)")
            .waitForSeconds(3)
            .filterByText("Name (Z to A)")
            .waitForSeconds(3)
            .filterByText("Price (low to high)")
            .waitForSeconds(3)

    });

    it.skip('Test 6 "Check if the product container works properly (places the filter well)" ', function () {
        ct.productSortContainerCheckingQuantity()
        .filterByText("Name (A to Z)")
        .filterByIndexFromAtoZ()
        .filterByIndexFromAtoZCheckOnlyPrice()
        ct.filterByText("Name (Z to A)")
        .filterByIndexFromZtoACheckOnlyPrice()
        ct.filterByIndexFromZtoA()
        .filterByText("Price (high to low)")
        .filterByIndexFromHighToLowCheckOnlyPrice()
        ct.filterByIndexFromHighToLow()
        .filterByText("Price (low to high)")
        .filterByIndexFromLowToHighCheckOnlyPrice()
        ct.filterByIndexFromLowToHigh()
        //.itemPricesList()
       

});

    afterEach(function () {
            cy.log("after Each");
    });

})
