import users from "../data/users";
import {LoginPageTS} from "../support/pages/loginPageTS";

describe('Test suite', () => {
    it('Checking the quantity of products in the cart', () => {
        new LoginPageTS().open()
            .loginToTheApp(users.standardUser)
            .addToCartAllproducts()
            .logAllProducts()
            .openShoppingCart()
            .logAllProductsInCart()
            .quantityOfSelectedProductsInCart()
            .verifyUrlCart()
    });
});
