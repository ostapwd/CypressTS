import users from "../data/users";
import loginPage from "../support/pages/loginPage";

describe('Test suite', function () {
    it('Verify a user can add all products to the cart', function () {
        loginPage.open()
            .loginToTheApp(users.standardUser)
            .addToCartAllproducts()
            .verifyThatNumberSelectedProductsEquals("6");
    });
});