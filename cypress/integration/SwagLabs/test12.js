import users from "../../data/users.js";
import { CartPageTSPractice } from "../../support/pagesMyPractice/cartPageTSPractice.js";
import { LoginPageTSPractice } from "../../support/pagesMyPractice/loginPageTSPractice.js";
import { ProductPageTSPractice } from "../../support/pagesMyPractice/productPageTSPractice.js";

describe('', () => {
    it('', () => {
        new LoginPageTSPractice().open().loginToTheApp(users.standardUser)
        new ProductPageTSPractice().addToCartAllproducts()
        new CartPageTSPractice().quantityOfSelectedProductsInCart()
    });
});