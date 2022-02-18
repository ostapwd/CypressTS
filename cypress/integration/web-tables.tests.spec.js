const TEST_DATA = require("./../fixtures/web-tables.data.js");
const SELECTORS = require("./../page-object/web-tables.selectors.json");
const ACTION = require("../model/web-tables.action.js");

describe("Web tables cheking:", function () {
  beforeEach(() => {
    cy.visit("/webtables");
  });

  it("Check that is posible to add a new user ", () => {
    cy.get(SELECTORS.addButton).click();

    cy.get(SELECTORS.firstName).type(TEST_DATA.FIRST_NAME);
    cy.get(SELECTORS.firstName).should("have.value", TEST_DATA.FIRST_NAME);

    cy.get(SELECTORS.lastName).type(TEST_DATA.LAST_NAME);
    cy.get(SELECTORS.lastName).should("have.value", TEST_DATA.LAST_NAME);

    cy.get(SELECTORS.userEmail).type(TEST_DATA.USER_EMAIL);
    cy.get(SELECTORS.userEmail).should("have.value", TEST_DATA.USER_EMAIL);

    cy.get(SELECTORS.age).type(TEST_DATA.AGE);
    cy.get(SELECTORS.age).should("have.value", TEST_DATA.AGE);

    cy.get(SELECTORS.salary).type(TEST_DATA.SALARY);
    cy.get(SELECTORS.salary).should("have.value", TEST_DATA.SALARY);

    cy.get(SELECTORS.department).type(TEST_DATA.DEPARTMENT);
    cy.get(SELECTORS.department).should("have.value", TEST_DATA.DEPARTMENT);

    cy.get(SELECTORS.submit).click();

    cy.get(SELECTORS.table).contains(TEST_DATA.USER_EMAIL).should("be.visible");

    cy.get(SELECTORS.table)
      .contains(TEST_DATA.USER_EMAIL)
      .parent()
      .then((row) => {
        cy.get(row)
          .should("contain", TEST_DATA.FIRST_NAME)
          .and("contain", TEST_DATA.LAST_NAME)
          .and("contain", TEST_DATA.AGE)
          .and("contain", TEST_DATA.SALARY)
          .and("contain", TEST_DATA.DEPARTMENT);
      });
  });

  it("Check that is posible to adit an user ", () => {
    cy.get(`${SELECTORS.tableFirstRow} [title = "Edit"]`).click();
    cy.get(SELECTORS.firstName).clear().type(TEST_DATA.FIRST_NAME);
    cy.get(SELECTORS.lastName).clear().type(TEST_DATA.LAST_NAME);
    cy.get(SELECTORS.userEmail).clear().type(TEST_DATA.USER_EMAIL);
    cy.get(SELECTORS.age).clear().type(TEST_DATA.AGE);
    cy.get(SELECTORS.salary).clear().type(TEST_DATA.SALARY);
    cy.get(SELECTORS.department).clear().type(TEST_DATA.DEPARTMENT);

    cy.get(SELECTORS.submit).click();

    cy.get(SELECTORS.tableFirstRow)
      .should("contain", TEST_DATA.FIRST_NAME)
      .and("contain", TEST_DATA.LAST_NAME)
      .and("contain", TEST_DATA.AGE)
      .and("contain", TEST_DATA.SALARY)
      .and("contain", TEST_DATA.DEPARTMENT);
  });

  it("Check that is posible to delete an user ", () => {
    const USER_ROW = cy.get(SELECTORS.tableFirstRow);
    cy.get(`${SELECTORS.tableFirstRow} [title="Delete"]`).click();

    USER_ROW.should("not.exist");
  });

  it("Check that appropriate user can be searched by each field", () => {
    cy.get(SELECTORS.addButton).click();

    cy.get(SELECTORS.firstName).type(TEST_DATA.FIRST_NAME);
    cy.get(SELECTORS.lastName).type(TEST_DATA.LAST_NAME);
    cy.get(SELECTORS.userEmail).type(TEST_DATA.USER_EMAIL);
    cy.get(SELECTORS.age).type(TEST_DATA.AGE);
    cy.get(SELECTORS.salary).type(TEST_DATA.SALARY);
    cy.get(SELECTORS.department).type(TEST_DATA.DEPARTMENT);

    cy.get(SELECTORS.submit).click();

    const USER_ROW = cy.get(SELECTORS.tableFirstRow);

    cy.get(SELECTORS.searchBox).type(TEST_DATA.FIRST_NAME);
    USER_ROW.should("exist");
    cy.get(SELECTORS.searchBox).clear().type(TEST_DATA.LAST_NAME);
    USER_ROW.should("exist");
    cy.get(SELECTORS.searchBox).clear().type(TEST_DATA.USER_EMAIL);
    USER_ROW.should("exist");
    cy.get(SELECTORS.searchBox).clear().type(TEST_DATA.AGE);
    USER_ROW.should("exist");
    cy.get(SELECTORS.searchBox).clear().type(TEST_DATA.SALARY);
    USER_ROW.should("exist");
    cy.get(SELECTORS.searchBox).clear().type(TEST_DATA.DEPARTMENT);
    USER_ROW.should("exist");
  });

  it("Check that table was sorted by each column", () => {
    ACTION.checkTableSorting(
      SELECTORS.firstNameColumn,
      SELECTORS.firstNameTableHeader
    );
    ACTION.checkTableSorting(
      SELECTORS.lastNameColumn,
      SELECTORS.lastNameTableHeader
    );
    ACTION.checkTableSorting(
      SELECTORS.ageColumn,
      SELECTORS.ageTableHeader,
      true
    );
    ACTION.checkTableSorting(SELECTORS.emailColumn, SELECTORS.emailTableHeader);
    ACTION.checkTableSorting(
      SELECTORS.salaryColumn,
      SELECTORS.salaryTableHeader,
      true
    );
    ACTION.checkTableSorting(
      SELECTORS.departmentColumn,
      SELECTORS.departmentTableHeader
    );
  });
});