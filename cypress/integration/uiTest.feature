Feature: Feature: Add products to the cart

  @ignore
  Scenario: Verify a user can add products to a cart
    Given Existing user navigates to the app
    When They provide correct credentials
    And They add all products to the cart
    Then All products should be in the cart