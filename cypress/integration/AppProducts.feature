Feature: Add products to the cart

  @ignore
  Scenario: Verify a user can add products to a cart
    Given Existing user navigates to the app
    When They provide correct credentials
    And They add all products to the cart
    Then All products should be in the cart

  @smoke
  Scenario Outline: Verify a user can login to the app
    Given Existing user navigates to the app
    When They provide login <login>
    And They provide password <password>
    And Click on Login button
    Then An error message should appear <errorMessage>
  Examples:
      | login  | password   | errorMessage                                                              |
      | login1 | Password1  | Epic sadface: Username and password do not match any user in this service |
      | login2 | Password2  | Epic sadface: Username and password do not match any user in this service |