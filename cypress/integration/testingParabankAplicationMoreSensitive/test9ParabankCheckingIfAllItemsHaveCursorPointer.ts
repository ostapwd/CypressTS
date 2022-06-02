import { MainParabankPageLeftMenu } from "../../support/pages/parabankPagesMoreSensitive/mainParabankPageHeaderPanelTopLeftMenu";
import { MainParabankPageLoginRegister } from "../../support/pages/parabankPagesMoreSensitive/mainParabankPageLoginRegister";

const loginRegister = new MainParabankPageLoginRegister();
const leftMenu = new MainParabankPageLeftMenu();

describe("Simple test suite for Parabank (cursor pointer)", function () {

    it("Test 1 If the all needed items have cursor pointer", () => {
        loginRegister.open()
        leftMenu.checkAllItemsWithTheCursorPointer()

    })

})