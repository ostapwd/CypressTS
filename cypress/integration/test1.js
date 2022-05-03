describe('Test suit', function(){
    it.only('Test 1', function(){

        // open site
        cy.visit('https://www.saucedemo.com')

        // login to site
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()

        // check page title
        cy.get("#header_container .title").then(element =>
            cy.log(element.text()))

        cy.wait(3000)

        // add one element to cart list
        cy.contains("Add to cart").click()

        cy.get("#header_container .title").should('contain', 'Products')

        cy.wait(3000)

        // check all items titles
        cy.get(".inventory_item_name").each(item => {
            cy.log(item.text())
        })

        //click on all Add to card
        cy.get("[id*='add-to-cart']").each(item => {
            item.click()
        })

        cy.wait(6000)

        // Check Your cart page
        cy.get(".shopping_cart_badge").click()

        cy.wait(6000)

        // Delete one item from cart page
        cy.get("#remove-sauce-labs-backpack").click()

        cy.wait(6000)

        // click on Continue Shopping
        cy.get("#continue-shopping").click()

        cy.wait(6000)
        // click on Side bar button
        cy.xpath("//*[@id = 'react-burger-menu-btn']").click()

        // click on About
        cy.get("#about_sidebar_link").click()
    })

    it.skip ('Test1', function(){
        cy.visit('https://google.com')
        cy.get("[name='q']").type("what is cypress?").blur()
    })
})