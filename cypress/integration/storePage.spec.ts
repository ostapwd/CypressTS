import {StorePage} from "../pom/storePage";
import {HomePage} from "../pom/homePage";

const storepage = new StorePage();
const homepage = new HomePage();

describe('Test Store Page', ()=> {
    it('Login to the app', function () {
        homepage
            .visit()
            .loginInput()
            .passwordInput()
            .loginButtonClick();
    });

    it('Check app header', function () {
        storepage
            .checkHeaderLabel()
    });

    it('Check all items price', function () {
        storepage
            .checkItemPrice();
    });

    it('Add all items and open the basket', function () {
        storepage
            .selectAllItems()
            .openItemBasket();
    });

});

