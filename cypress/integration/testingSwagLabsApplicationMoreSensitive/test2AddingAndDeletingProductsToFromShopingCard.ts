
import usersForSwaglabs from "../../data/usersForSwaglabs";
import { LoginPageSwaglabs } from "../../support/pages/swaglabsPagesMoreSensitive/loginPageSwaglabs";
import { ProductPageSwaglabs } from "../../support/pages/swaglabsPagesMoreSensitive/productPageSwaglabs";
import { YourCardPageSwaglabs } from "../../support/pages/swaglabsPagesMoreSensitive/yourCardPageSwaglabs";
import { BurgerMenuPageSwaglabs } from "../../support/pages/swaglabsPagesMoreSensitive/burgerMenuPageSwaglabs"

const login = new LoginPageSwaglabs();
const product = new ProductPageSwaglabs();
const yourCard = new YourCardPageSwaglabs();
const burgerMenu = new BurgerMenuPageSwaglabs();

describe("Test suite 2", function () {
    beforeEach(function () {
        login.open()
            .loginToTheApp(usersForSwaglabs.standardUser)
        product.productLabelChecking()
    });

    it('Test 1 "Adding/deleting one product to/from the Shopping cart"', function () {

        product.addToCardOneProduct()
            .clickOnTheShoppingCartContainer()
        burgerMenu.clickOnTheBurgerButton()
            .clickOnTheAllItemsButton()
        product.productLabelChecking()
        yourCard.removeItemFromTheCard()
        product.clickOnTheShoppingCartContainer()
            .shoppingCardLableShouldContainText()

    });

    it('Test 2 "Adding/deleting the item to/from the Shopping cart - Another way"', function () {

        product.addToCartAllProducts()
            .clickOnTheShoppingCartContainer()
            .shoppingCardLableShouldContainText()
        yourCard.removeOneProductFromTheContainer()
            .clickOnTheButtonContinueShopping()
        product.productLabelChecking()

    });


    it('Test 3 "Verify that a user can add/delete all products to/from the Shopping cart"', function () {

        product.addToCartAllProducts()
            .clickOnTheShoppingCartContainer()
            .shoppingCardLableShouldContainText()
        yourCard.allChoosedProductsShouldContainNumber()
            .qualityOfItemsInTheCartMustBee()
            .removeFromCardAllProducts()
            .clickOnTheButtonContinueShopping()
        product.productLabelChecking()

    });


    it('Test 4 "Reduced test adding/deleting all products to/from the Shopping cart "', function () {

        product.addToCartAllProducts()
            .clickOnTheShoppingCartContainer()
            .logAllProducts()
        yourCard.verifyThatNumbersOfSelectedProductsEquals('6')
            .removeFromCardAllProducts()
            .clickOnTheButtonContinueShopping()

    });

    afterEach(function () {
        cy.log("after Each");
    });
});