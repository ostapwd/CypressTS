function getArrayOfColumnContent(selector) {
  const arrayOfColumnElements = Cypress.$(selector);
  const arrayOfColumnContent = [];
  for (let i = 0; i < arrayOfColumnElements.length; i++) {
    if (arrayOfColumnElements[i].textContent !== " ") {
      arrayOfColumnContent.push(arrayOfColumnElements[i].textContent);
    }
  }
  return arrayOfColumnContent;
}

function checkTableSorting(
  ColumnSelector,
  ColumnHeaderSelector,
  isNumbersSort = false
) {
  const ARRAY_OF_COLUMN_CONTENT = getArrayOfColumnContent(ColumnSelector);
  if (isNumbersSort) {
    ARRAY_OF_COLUMN_CONTENT.sort((a, b) => a - b);
  } else {
    ARRAY_OF_COLUMN_CONTENT.sort();
  }

  cy.get(ColumnHeaderSelector)
    .click()
    .then(() => {
      cy.wrap(getArrayOfColumnContent(ColumnSelector)).should(
        "deep.equal",
        ARRAY_OF_COLUMN_CONTENT
      );
    });
  cy.get(ColumnHeaderSelector)
    .click()
    .then(() => {
      cy.wrap(getArrayOfColumnContent(ColumnSelector)).should(
        "deep.equal",
        ARRAY_OF_COLUMN_CONTENT.reverse()
      );
    });
}

module.exports.checkTableSorting = checkTableSorting;