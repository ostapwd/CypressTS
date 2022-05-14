import loginPage from "../support/pages/loginPage-practice";
import productPagePractice from "../support/pages/productPage-practice";
import users from "../data/users";
import checkoutPagePractice from "../support/pages/checkoutPage-practice";


describe ("Test suite 3", function () {
    it('Test 1 "Adding to the cart all products and buying the products"', function () {
 
        loginPage.open().
        loginToTheApp(users.standardUser);
        productPagePractice.productsLabel.should("contain", "Products");
        productPagePractice.addToCartAllProducts()
        productPagePractice.shoppingCartContainer.click()
        productPagePractice.logAllProducts()
        .verifyThatNumbersOfSelectedProductsEquals('6')
        checkoutPagePractice.checkoutButton.click();
        checkoutPagePractice.checkoutLabel.should("contain", "Checkout: Your Information");
        checkoutPagePractice.inputInformationAboutBuyer("Mariia", "Yaskiv", "Lviv");
        checkoutPagePractice.buttonContinue.click();
        checkoutPagePractice.checkoutOverview.should("contain", "Checkout: Overview");
        checkoutPagePractice.buttonFinish.click();
        checkoutPagePractice.checkoutComplete.should("contain", "Checkout: Complete!");
        checkoutPagePractice.buttonBackHome.click();
        productPagePractice.productsLabel.should("contain", "Products");
    
    })
    it('Test 2 "Adding to the cart one prodact, checout it and then cancel"', function () {
 
        loginPage.open().
        loginToTheApp(users.standardUser);
        productPagePractice.productsLabel.should("contain", "Products");
        productPagePractice.addToCard.click();
        productPagePractice.shoppingCartContainer.click()
        productPagePractice.logAllProducts()
        .verifyThatNumbersOfSelectedProductsEquals('1')
        checkoutPagePractice.checkoutButton.click();
        checkoutPagePractice.checkoutLabel.should("contain", "Checkout: Your Information");
        checkoutPagePractice.buttonCancel.click();
        productPagePractice.shoppingCardLable.should("contain", "Your Cart");

    
    })
 
 })