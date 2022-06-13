
Feature: test Application Swaglabs. The feature contains the set of testing scenarios to Swaglabs-Application


    @smoke
    Scenario: Verify that a user can login to the app with a standart user (posittive)
        Given Existing user navigates to the app
        When They provide correct credentials
        Then They must be sure that thay are in the correct Product page

    @smoke
    Scenario: Verify that a user can't login to the app with a wrong password' (negative)
        Given Some user navigates to the app
        When They provide incorrect credentials
        Then They see a message where it is said that a password and a username are wrong

    @smoke
    Scenario: Verify that a registred user can add one products to a cart
        Given Existing user navigates to the app
        When They provide correct credentials
        When They add one products to the cart
        When They click on the cart container
        Then One product should be in the cart

    @smoke
    Scenario: Verify that a registred user can add all products to the cart and delete one item
        Given Existing user navigates to the app
        When They provide correct credentials
        When They add all products to the cart
        When They click on the cart container
        When They click on the cart container the page must contain a text
        When They remove one product from the container
        When They click on the button continue shopping
        Then The page contain a text


    @smoke
    Scenario: Verify that a registred user can select "Price (high to low)" and check value of prices in a dropdown
        Given Existing user navigates to the app
        When They provide correct credentials
        When They click on dropdown to select "Price (high to low)"
        Then They have clicked on dropdown and they have selected correct price, they verify that the prices are sorted well

    @smoke
    Scenario: Verify that a registred user can select "Price (Name (A to Z))" and check value of prices in a dropdown
        Given Existing user navigates to the app
        When They provide correct credentials
        When They click on dropdown to select "Price (Name (A to Z))"
        Then They have clicked on dropdown and they have selected correct price, they verify that the prices are sorted well

    @smoke
    Scenario: Verify that a registred user can add to the cart one product, checout it and then close the purchase
        Given Existing user navigates to the app
        When They provide correct credentials
        When They add one products to the cart
        When They verify that one product is added to the cart
        When They click on the cart container
        When They verify if they are in the needed page and there are a product
        When They click on the button checkout
        When They verify that they are on the needed page and they can buy the product
        When They click on button continue shopping
        Then They are in shopping card page
