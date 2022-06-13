import { LoginPageSwaglabs } from "../support/pages/swaglabsPages/loginPageSwaglabs";
import { ProductPageSwaglabs } from "../support/pages/swaglabsPages/productPageSwaglabs";
import usersForSwaglabs from "../data/usersForSwaglabs";
import { YourCardPageSwaglabs } from "../support/pages/swaglabsPages/yourCardPageSwaglabs";
import { ContainerPageSwaglabs } from "../support/pages/swaglabsPages/containerPageSwaglabs";
import { When } from "cypress-cucumber-preprocessor/steps"
import { Then } from "cypress-cucumber-preprocessor/steps"
import { Given } from "cypress-cucumber-preprocessor/steps"
import { CheckoutPageSwaglabs } from "../support/pages/swaglabsPages/checkoutPageSwaglabs";
import shoppersForSwaglabs from "../data/shoppersForSwaglabs";

const loginPage = new LoginPageSwaglabs();
const productPage = new ProductPageSwaglabs();
const yourCard = new YourCardPageSwaglabs();
const containerPage = new ContainerPageSwaglabs();
const checkout = new CheckoutPageSwaglabs();





Given(/^Existing user navigates to the app$/, () => {
    loginPage.open();
});

When(/^They provide correct credentials$/, () => {
    loginPage.loginToTheApp(usersForSwaglabs.standardUser)
});

Then(/^They must be sure that thay are in the correct Product page$/, () => {
    productPage.checkProductsLabelInTheProductPage()
        .should("contain", "Products")
});

Given(/^Some user navigates to the app$/, () => {
    loginPage.open();
});

When(/^They provide incorrect credentials$/, () => {
    loginPage.loginToTheApp(usersForSwaglabs.wrongPasswordUser)
});

Then(/^They see a message where it is said that a password and a username are wrong$/, () => {
    loginPage.checkThatItWasWrittenWrongPasswordInTheInput()
        .should("contain", "Epic sadface: Username and password do not match any user in this service");
});




Given(/^Existing user navigates to the app$/, () => {
    loginPage.open();
});

When(/^They provide correct credentials$/, () => {
    loginPage.loginToTheApp(usersForSwaglabs.standardUser)
});

When(/^They add one products to the cart$/, () => {
    productPage.addToCardOneProductandClick()
});

When(/^They click on the cart container$/, () => {
    productPage.clickOnTheShoppingCartContainer()
});

Then(/^One product should be in the cart$/, () => {
    productPage.logAllProducts();
    yourCard.verifyThatNumbersOfSelectedProductsEquals().then(element => {
        expect(element.text()).to.be.equal('1')
    });
});



Given(/^Existing user navigates to the app$/, () => {
    loginPage.open();
});

When(/^They provide correct credentials$/, () => {
    loginPage.loginToTheApp(usersForSwaglabs.standardUser)
});

When(/^They add all products to the cart$/, () => {
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

When(/^They click on dropdown to select "([^"]*)"$/, (args1) => {
    containerPage.filterByText("Price (high to low)");

});

When(/^They have clicked on dropdown and they have selected correct price, they verify that the prices are sorted well$/, () => {
    const expectResult = ['$49.99', '$29.99', '$15.99', '$15.99', '$9.99', '$7.99']
    containerPage.filterByIndexFromAtoZCheckOnlyPrice().each((item, index) => {
        expect(Cypress.$(item).text()).to.eq(expectResult[index]
        )

    });
});

Given(/^Existing user navigates to the app$/, () => {
    loginPage.open();
});

When(/^They provide correct credentials$/, () => {
    loginPage.loginToTheApp(usersForSwaglabs.standardUser)
});

When(/^They click on dropdown to select "([^"]*)"$/, (args1) => {
    containerPage.filterByText("Price (Name (A to Z))");
});

When(/^They have clicked on dropdown and they have selected correct price, they verify that the prices are sorted well$/, () => {
    const expectResult = ['$29.99', '$9.99', '$15.99', '$49.99', '$7.99', '$15.99']
    containerPage.filterByIndexFromAtoZCheckOnlyPrice().each((item, index) => {
        expect(Cypress.$(item).text()).to.eq(expectResult[index]
        )

    });
});

Given(/^Existing user navigates to the app$/, () => {
    loginPage.open();
});

When(/^They provide correct credentials$/, () => {
    loginPage.loginToTheApp(usersForSwaglabs.standardUser)
});

When(/^They add one products to the cart$/, () => {
    productPage.logAllProducts().each(item => {
        cy.log(item.text())
    })
});

When(/^They verify that one product is added to the cart$/, () => {
    yourCard.verifyThatNumbersOfSelectedProductsEquals().then(element => {
        expect(element.text()).to.be.equal('1')
    });
});

When(/^They click on the cart container$/, () => {
    checkout.buttonClickOnCheckoutButton()
});

When(/^They verify if they are in the needed page and there are a product$/, () => {
    productPage.shoppingCardLableShouldContainText().should("contain", "Your Cart")
});

When(/^They click on the button checkout$/, () => {
    checkout.buttonCheckoutAndClickOnIt()
});

Then(/^They verify that they are on the needed page and they can buy the product$/, () => {
    checkout.checkoutLabelShouldContainInThePageCheckout().should("contain", "Checkout: Your Information")
});

When(/^They click on button continue shopping$/, () => {
    checkout.clickOnTheButtonCancel()
});


Then(/^They are in shopping card page$/, () => {
    productPage.shoppingCardLableShouldContainText().should("contain", "Your Cart");
});
