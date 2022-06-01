
import usersForSwaglabs from "../../data/usersForSwaglabs";
import { LoginPageSwaglabs } from "../../support/pages/swaglabsPages/loginPageSwaglabs";
import { ProductPageSwaglabs } from "../../support/pages/swaglabsPages/productPageSwaglabs";
import { YourCardPageSwaglabs } from "../../support/pages/swaglabsPages/yourCardPageSwaglabs";
import { BurgerMenuPageSwaglabs } from "../../support/pages/swaglabsPages/burgerMenuPageSwaglabs"


describe("Test suite 2 for shopping cart", function () {
    beforeEach(function () {
        new LoginPageSwaglabs().open()
            .loginToTheApp(usersForSwaglabs.standardUser)
        new ProductPageSwaglabs().checkProductsLabelInTheProductPage().should("contain", "Products")
    });

    it('Test 1 "Adding/deleting one product to/from the Shopping cart"', function () {

        new ProductPageSwaglabs().addToCardOneProductandClick()
            .clickOnTheShoppingCartContainer()
        new BurgerMenuPageSwaglabs().clickOnTheBurgerButton()
            .clickOnTheAllItemsButton()
        new ProductPageSwaglabs().checkProductsLabelInTheProductPage().should("contain", "Products")
        new YourCardPageSwaglabs().removeItemFromTheCard().each(item => {
            cy.log(item.text()).click()
        })
        new ProductPageSwaglabs().clickOnTheShoppingCartContainer()
            .shoppingCardLableShouldContainText().should("contain", "Your Cart");

    });

    it('Test 2 "Adding all products to the cart and deleting one product from the cart (another way)"', function () {

        new ProductPageSwaglabs().addToCartAllProducts().each(item => {
            item.click()
        })
        new ProductPageSwaglabs().clickOnTheShoppingCartContainer()
            .shoppingCardLableShouldContainText().should("contain", "Your Cart");
        new YourCardPageSwaglabs().clickRemoveOneProductFromTheContainer()
        new YourCardPageSwaglabs().clickOnTheButtonContinueShopping()
        new ProductPageSwaglabs().checkProductsLabelInTheProductPage().should("contain", "Products")
    });


    it('Test 3 "Verify that a user can add/delete all products to/from the Shopping cart"', function () {

        new ProductPageSwaglabs().addToCartAllProducts().each(item => {
            item.click();
        })
        new ProductPageSwaglabs().clickOnTheShoppingCartContainer()
            .shoppingCardLableShouldContainText().should("contain", "Your Cart")
        new YourCardPageSwaglabs().allChoosedProductsShouldContainNumber().should("contain", "1")
        new YourCardPageSwaglabs().qualityOfItemsInTheCartMustBee().then(element => {
            expect(element.text()).to.be.equal('6');
        })
        new YourCardPageSwaglabs().removeFromCardAllProducts().each(item => {
            item.click();
        })
        new YourCardPageSwaglabs().clickOnTheButtonContinueShopping()
        new ProductPageSwaglabs().checkProductsLabelInTheProductPage().should("contain", "Products")

    });


    it('Test 4 "Reduced test adding/deleting all products to/from the Shopping cart "', function () {

        new ProductPageSwaglabs().addToCartAllProducts().each(item => {
            item.click();
        });
        new ProductPageSwaglabs().clickOnTheShoppingCartContainer()
            .logAllProducts()
        new YourCardPageSwaglabs().verifyThatNumbersOfSelectedProductsEquals().then(element => {
            expect(element.text()).to.be.equal('6')
        });
        new YourCardPageSwaglabs().removeFromCardAllProducts().each(item => {
            item.click();
        });
        new YourCardPageSwaglabs().clickOnTheButtonContinueShopping()

    });

    afterEach(function () {
        cy.log("after Each");
    });
});