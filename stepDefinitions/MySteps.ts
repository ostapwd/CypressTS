import { LoginPageSwaglabs } from "../cypress/support/pages/swaglabsPages/loginPageSwaglabs";
import { ProductPageSwaglabs } from "../cypress/support/pages/swaglabsPages/productPageSwaglabs";
import usersForSwaglabs from "../cypress/data/usersForSwaglabs";
import { YourCardPageSwaglabs } from "../cypress/support/pages/swaglabsPages/yourCardPageSwaglabs";
import { ContainerPageSwaglabs } from "../cypress/support/pages/swaglabsPages/containerPageSwaglabs";
import { When } from "cucumber"
import { Then } from "cucumber"
import { Given } from "cucumber"


const loginPage = new LoginPageSwaglabs();
const productPage = new ProductPageSwaglabs();
const yourCard = new YourCardPageSwaglabs();
const containerPage = new ContainerPageSwaglabs();

Given(/^Existing user navigates to the app$/, () => {
    loginPage.open();
});

When(/^They provide login <login>$/, function (login) {
    loginPage.usernameInputForLogin(login)
});

When(/^They provide password <password>$/, function (password) {
    loginPage.passwordInputForLogin(password)
});

When(/^Click on Login button$/, () => {
    loginPage.clickLoginButton()
});

Then(/^They must bee confident that they are in the correct page$/, function (message) {
    productPage.checkProductsLabelInTheProductPage().then(element => {
        expect(element.text()).to.be.equal(message);
    })
});




Given(/^Existing user navigates to the app$/, () => {
    loginPage.open();
});

When(/^They provide login <login>$/, (username) => {
    loginPage.usernameInputForLogin(username)
});

When(/^They provide password <password>$/, (password) => {
    loginPage.passwordInputForLogin(password)
});

When(/^Click on Login button$/, () => {
    loginPage.clickLoginButton()
});

Then(/^They must bee confident that they are in the correct page <errorMessage>$/, (errorMessage) => {
    productPage.checkProductsLabelInTheProductPage().then(element => {
        expect(element.text()).to.be.equal(errorMessage);
    });
})




Given(/^Existing user navigates to the app$/, () => {
    loginPage.open();
});

When(/^They provide correct credentials$/, () => {
    loginPage.loginToTheApp(usersForSwaglabs.standardUser)
});

When(/^They add all products to the cart$/, () => {
    productPage.addToCartAllProducts()
});

When(/^They click on the cart container$/, () => {
    productPage.clickOnTheShoppingCartContainer()
});

Then(/^All products should be in the cart$/, () => {
    productPage.logAllProducts();
    yourCard.verifyThatNumbersOfSelectedProductsEquals().then(element => {
        expect(element.text()).to.be.equal('6')
    });
});




Given(/^Existing user navigates to the app$/, () => {
    loginPage.open();
});

When(/^They provide correct credentials$/, () => {
    loginPage.loginToTheApp(usersForSwaglabs.standardUser)
});

When(/^They add all one products to the cart$/, () => {
    productPage.addToCardAll().each(item => {
        item.click();
    });
});

When(/^They click on the cart container$/, () => {
    productPage.clickOnTheShoppingCartContainer()
});

When(/^They click on the cart container the page must contain a text$/, () => {
    productPage.shoppingCardLable().should("contain", "Your Cart");
});

When(/^They remove one product from the container$/, () => {
    yourCard.clickRemoveOneProductFromTheContainer()
});

When(/^They click on the button continue shopping$/, () => {
    yourCard.clickOnTheButtonContinueShopping()
});

Then(/^The page contain a text$/, () => {
    productPage.checkProductsLabelInTheProductPage().should("contain", "Products");
});





Given(/^Existing user navigates to the app$/, () => {
    loginPage.open();
});

When(/^They provide correct credentials$/, () => {
    loginPage.loginToTheApp(usersForSwaglabs.standardUser)
});

When(/^They select Price (low to high)$/, () => {
    containerPage.filterByText("Price (low to high)")
        .waitForSeconds(3)
});

Then(/^The price of the items is selected right$/, () => {
    const expectResult = ['$7.99', '$9.99', '$15.99', '$15.99', '$29.99', '$49.99']
    containerPage.filterByIndexFromLowToHighCheckOnlyPrice().each((item, index) => {
        expect(Cypress.$(item).text()).to.eq(expectResult[index]
        )
    });
});
