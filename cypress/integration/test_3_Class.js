import loginPage from "../support/pages/loginPage";
import productPage from "../support/pages/productPage";

describe('Test suite', function () {
    it('Verify a user can add all products to the cart', function () {
        loginPage.open()
            .loginToTheApp("standard_user", "secret_sauce")
            .addToCartAllproducts()
            .verifyThatNumberSelectedProductsEquals("6");
    });
});