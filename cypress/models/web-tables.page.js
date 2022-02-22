import * as SELECTORS from "./../page-object/web-tables.selectors.json";

export class WebTablesPage {
  typeUserData(UserData) {
    cy.get(SELECTORS.firstName).clear().type(UserData.firstName);
    cy.get(SELECTORS.lastName).clear().type(UserData.lastName);
    cy.get(SELECTORS.userEmail).clear().type(UserData.userEmail);
    cy.get(SELECTORS.age).clear().type(UserData.age);
    cy.get(SELECTORS.salary).clear().type(UserData.salary);
    cy.get(SELECTORS.department).clear().type(UserData.department);
  }

  submitForm() {
    return cy.get(SELECTORS.submit).click();
  }
  getArrayOfColumnContent(selector) {
    const arrayOfColumnElements = Cypress.$(selector);
    const arrayOfColumnContent = [];
    for (let i = 0; i < arrayOfColumnElements.length; i++) {
      if (arrayOfColumnElements[i].textContent !== " ") {
        arrayOfColumnContent.push(arrayOfColumnElements[i].textContent);
      }
    }
    return arrayOfColumnContent;
  }

  checkTableSorting(
    ColumnSelector,
    ColumnHeaderSelector,
    isNumbersSort = false
  ) {
    const ARRAY_OF_COLUMN_CONTENT =
      this.getArrayOfColumnContent(ColumnSelector);
    if (isNumbersSort) {
      ARRAY_OF_COLUMN_CONTENT.sort((a, b) => a - b);
    } else {
      ARRAY_OF_COLUMN_CONTENT.sort();
    }

    cy.get(ColumnHeaderSelector)
      .click()
      .then(() => {
        cy.wrap(this.getArrayOfColumnContent(ColumnSelector)).should(
          "deep.equal",
          ARRAY_OF_COLUMN_CONTENT
        );
      });
    cy.get(ColumnHeaderSelector)
      .click()
      .then(() => {
        cy.wrap(this.getArrayOfColumnContent(ColumnSelector)).should(
          "deep.equal",
          ARRAY_OF_COLUMN_CONTENT.reverse()
        );
      });
  }
}
