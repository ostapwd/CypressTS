import { USER_DATA } from "./../fixtures/web-tables.data.js";
import * as SELECTORS from "./../page-object/web-tables.selectors.json";
import { WebTablesPage } from "../models/web-tables.page.js";
const webTablesPage = new WebTablesPage();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe("Web tables cheking:", function () {
  beforeEach(() => {
    cy.visit("/webtables");
  });

  it("Check that is posible to add a new user ", () => {
    cy.get(SELECTORS.addButton).click();

    webTablesPage.typeUserData(USER_DATA);
    webTablesPage.submitForm();

    cy.get(SELECTORS.table)
      .contains(USER_DATA.userEmail)
      .parent()
      .then((row) => {
        cy.get(row)
          .should("contain", USER_DATA.firstName)
          .and("contain", USER_DATA.lastName)
          .and("contain", USER_DATA.age)
          .and("contain", USER_DATA.salary)
          .and("contain", USER_DATA.department);
      });
  });

  it("Check that is posible to adit an user ", () => {
    cy.get(`${SELECTORS.tableFirstRow} [title = "Edit"]`).click();

    webTablesPage.typeUserData(USER_DATA);
    webTablesPage.submitForm();

    cy.get(SELECTORS.tableFirstRow)
      .should("contain", USER_DATA.firstName)
      .and("contain", USER_DATA.lastName)
      .and("contain", USER_DATA.age)
      .and("contain", USER_DATA.salary)
      .and("contain", USER_DATA.department);
  });

  it("Check that is posible to delete an user ", () => {
    const USER_ROW = cy.get(SELECTORS.tableFirstRow);
    cy.get(`${SELECTORS.tableFirstRow} [title="Delete"]`).click();

    USER_ROW.should("not.exist");
  });

  it("Check that appropriate user can be searched by each field", () => {
    cy.get(SELECTORS.addButton).click();

    webTablesPage.typeUserData(USER_DATA);
    webTablesPage.submitForm();

    const USER_ROW = cy.get(SELECTORS.tableFirstRow);

    cy.get(SELECTORS.searchBox).type(USER_DATA.firstName);
    USER_ROW.should("exist");
    cy.get(SELECTORS.searchBox).clear().type(USER_DATA.lastName);
    USER_ROW.should("exist");
    cy.get(SELECTORS.searchBox).clear().type(USER_DATA.userEmail);
    USER_ROW.should("exist");
    cy.get(SELECTORS.searchBox).clear().type(USER_DATA.age);
    USER_ROW.should("exist");
    cy.get(SELECTORS.searchBox).clear().type(USER_DATA.salary);
    USER_ROW.should("exist");
    cy.get(SELECTORS.searchBox).clear().type(USER_DATA.department);
    USER_ROW.should("exist");
  });

  it("Check that table was sorted by each column", () => {
    webTablesPage.checkTableSorting(
      SELECTORS.firstNameColumn,
      SELECTORS.firstNameTableHeader
    );
    webTablesPage.checkTableSorting(
      SELECTORS.lastNameColumn,
      SELECTORS.lastNameTableHeader
    );
    webTablesPage.checkTableSorting(
      SELECTORS.ageColumn,
      SELECTORS.ageTableHeader,
      true
    );
    webTablesPage.checkTableSorting(
      SELECTORS.emailColumn,
      SELECTORS.emailTableHeader
    );
    webTablesPage.checkTableSorting(
      SELECTORS.salaryColumn,
      SELECTORS.salaryTableHeader,
      true
    );
    webTablesPage.checkTableSorting(
      SELECTORS.departmentColumn,
      SELECTORS.departmentTableHeader
    );
  });
});
