import loginPage from "../support/pages/loginPage-practice";
import productPagePractice from "../support/pages/productPage-practice";
import users from "../data/users";
import checkoutPagePractice from "../support/pages/checkoutPage-practice";
//import shopper from "../data/shopers";

describe ("Test suite 3", function () {
    it('Test 5 "Adding to the cart and buying the products"', function () {
 
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
 
 })