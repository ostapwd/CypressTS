import * as SELECTORS from "../page-object/text-box.selectors.json";

export class TestBoxPage {
  typeUserName(fullName) {
    return cy.get(SELECTORS.userName).type(fullName);
  }

  typeUserEmail(userEmail) {
    return cy.get(SELECTORS.userEmail).type(userEmail);
  }

  typeCurrentAddress(currentAddress) {
    return cy.get(SELECTORS.currentAddress).type(currentAddress);
  }

  typePermanentAddress(permanentAddress) {
    return cy.get(SELECTORS.permanentAddress).type(permanentAddress);
  }

  submitForm() {
    cy.get(SELECTORS.submit).click();
  }
}
