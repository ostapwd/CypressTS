import { MainParabankPageLeftMenu } from "../../support/pages/parabankPages/mainParabankPageHeaderPanelTopLeftMenu";
import { MainParabankPageLoginRegister } from "../../support/pages/parabankPages/mainParabankPageLoginRegister";


describe("Simple test suite for Parabank (cursor pointer)", function () {

    it("Test 1 If the all needed items have cursor pointer", () => {
        new MainParabankPageLoginRegister().open()
        new MainParabankPageLeftMenu().viewAllItemsWithTheCursorPointer()

    })

})