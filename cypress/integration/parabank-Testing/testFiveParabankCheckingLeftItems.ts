import contactUsers from "../../data/contactUsers.ts";
import {MainParabankPageLoginRegister} from "../../support/pages/parabank-pages/parabankLoginPage";
import { MainParabankPageLeftMenu } from "../../support/pages/parabank-pages/mainParabankPageLeftMenu";
import {MainParabankPageContact} from "../../support/pages/parabank-pages/mainParabankPageContact"


const l = new MainParabankPageLoginRegister();
const m = new MainParabankPageLeftMenu();
const c = new MainParabankPageContact();


describe ("Third test suite for Parabank", function () {
    beforeEach('login to the app', () => {
        l.open()
    })

    it("Test 1 If the all needed items have cursor pointer", () => {
    c.customerCare(contactUsers.standardUser)
    })


})