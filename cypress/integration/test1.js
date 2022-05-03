describe('Test suit', function(){
    it.only('Test 1', function(){
        cy.visit('https://www.saucedemo.com')
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
        cy.get("#header_container .title").then(element =>
            cy.log(element.text()))

        cy.wait(3000)
        cy.contains("Add to cart").click()

        cy.get("#header_container .title").should('contain', 'Products')

        cy.wait(3000)

        cy.get(".inventory_item_name").each(item => {
            cy.log(item.text())
        })

        cy.get("[id*='add-to-cart']").each(item => {
            item.click()
        })


        cy.xpath("//*[@id = 'react-burger-menu-btn']").click()

    })

    it.skip ('Test1', function(){
        cy.visit('https://google.com')
        cy.get("[name='q']").type("what is cypress?").blur()
    })
})