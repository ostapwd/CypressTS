import users from "../data/users";
import cartPage from "../support/pages/cartPage";
import loginPage from "../support/pages/loginPage";

describe('Test suite', () => {
    it('Checking the quantity of products in the cart', () => {
        loginPage.open()
            .loginToTheApp(users.standardUser)
            .addToCartAllproducts()
            .logAllProducts()
            .openShoppingCart()
            .logAllProductsInCart()
            .quantityOfSelectedProductsInCart()
            .verifyUrlCart();
    });
});
