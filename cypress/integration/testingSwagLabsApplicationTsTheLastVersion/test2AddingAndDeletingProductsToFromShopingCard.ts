
import usersForSwaglabs from "../../data/usersForSwaglabs";
import { LoginPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/loginPageSwaglabs";
import { ProductPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/productPageSwaglabs";
import { YourCardPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/yourCardPageSwaglabs";
import { BurgerMenuPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/burgerMenuPageSwaglabs"

const loginPage = new LoginPageSwaglabs();
const productPage = new ProductPageSwaglabs();
const yourCardPage = new YourCardPageSwaglabs();
const burgerMenuPage = new BurgerMenuPageSwaglabs();

describe("Test suite 2 for shopping cart", function () {
    beforeEach(function () {
        loginPage.open()
            .loginToTheApp(usersForSwaglabs.standardUser)
        productPage.checkProductsLabelInTheProductPage().should("contain", "Products")
    });

    it('Test 1 "Adding/deleting one product to/from the Shopping cart"', function () {

        productPage.addToCardOneProductandClick()
            .clickOnTheShoppingCartContainer()
        burgerMenuPage.clickOnTheBurgerButton()
            .clickOnTheAllItemsButton()
        productPage.checkProductsLabelInTheProductPage().should("contain", "Products")
        yourCardPage.removeItemFromTheCard().each(item => {
            cy.log(item.text()).click()
        })
        productPage.clickOnTheShoppingCartContainer()
        productPage.shoppingCardLableShouldContainText().should("contain", "Your Cart");

    });

    it('Test 2 "Adding all products to the cart and deleting one product from the cart (another way)"', function () {

        productPage.addToCartAllProducts().each(item => {
            item.click()
        })
        productPage.clickOnTheShoppingCartContainer()
            .shoppingCardLableShouldContainText().should("contain", "Your Cart");
        yourCardPage.clickRemoveOneProductFromTheContainer()
        yourCardPage.clickOnTheButtonContinueShopping()
        productPage.checkProductsLabelInTheProductPage().should("contain", "Products")
    });


    it('Test 3 "Verify that a user can add/delete all products to/from the Shopping cart"', function () {

        productPage.addToCartAllProducts().each(item => {
            item.click();
        })
        productPage.clickOnTheShoppingCartContainer()
            .shoppingCardLableShouldContainText().should("contain", "Your Cart")
        yourCardPage.allChoosedProductsShouldContainNumber().should("contain", "1")
        yourCardPage.qualityOfItemsInTheCartMustBee().then(element => {
            expect(element.text()).to.be.equal('6');
        })
        yourCardPage.removeFromCardAllProducts().each(item => {
            item.click();
        })
        yourCardPage.clickOnTheButtonContinueShopping()
        productPage.checkProductsLabelInTheProductPage().should("contain", "Products")

    });


    it('Test 4 "Reduced test adding/deleting all products to/from the Shopping cart "', function () {

        productPage.addToCartAllProducts().each(item => {
            item.click();
        });
        productPage.clickOnTheShoppingCartContainer()
            .logAllProducts()
        yourCardPage.verifyThatNumbersOfSelectedProductsEquals().then(element => {
            expect(element.text()).to.be.equal('6')
        });
        yourCardPage.removeFromCardAllProducts().each(item => {
            item.click();
        });
        yourCardPage.clickOnTheButtonContinueShopping()

    });

    afterEach(function () {
        cy.log("after Each");
    });
});