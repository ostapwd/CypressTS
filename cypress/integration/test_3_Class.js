import users from "../data/users";
import LoginPageTS from "../support/pages/loginPage";
import ProductPageTS from "../support/pages/productPage";

describe('Test suite', () => {
   
    beforeEach(() => {
       LoginPageTS.open().loginToTheApp(users.standardUser);
    });

    it('Verify a user can login to the aplication', () => {
        ProductPageTS.productsLabel.then((element) => {
            expect(element.text()).to.equal('Products')
        })
    });

    it('Verify a user can add all products to the cart', () => {
        ProductPageTS.addToCartAllproducts().selectedProductsNumber.then((element) => {
            expect(element.text()).to.equal('6')
        })
    });

    it('Verify a user can logout form the app', () => {
        ProductPageTS.openMenu().waitTime().logoutApp();
        LoginPageTS.loginPageLogoLabel.should("be.visible");
    });
});

// describe('Test suite', function () {
//     it('Verify a user can add all products to the cart', () => {
//         loginPage.open()
//             .loginToTheApp(users.standardUser)
//             .addToCartAllproducts()
//             .verifyThatNumberSelectedProductsEquals("6");
//     });
// });