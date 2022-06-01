Feature: Customer registration form

  @smoke
  Scenario: A customer can register himself on the site
    Given A customer navigates to the registration page
    When They provide correct registration details
    Then New customer is successfully registered
