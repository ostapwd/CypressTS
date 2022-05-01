describe('Test suite', ()=>{
    it('Test1: Login into the page',() => {
        cy.visit('https://www.saucedemo.com/')
        cy.xpath('//*[@id="user-name"]').type('standard_user')
        cy.xpath('//*[@id="password"]').type('secret_sauce')
        cy.xpath('//*[@id="login-button"]').click()
    })
    it('Test2: Add products into the shopping cart',() => {
        cy.wait(1000)
        cy.xpath('//*[@class="btn btn_primary btn_small btn_inventory"]')
        .each((element)=>{
            element.click()
        })
    })

    it('Test3: Delete products from the shopping cart',() => {
        cy.wait(1000)
        cy.xpath('//*[@class="btn btn_secondary btn_small btn_inventory"]')
        .each((element)=>{
            element.click()
        })
    })
    it('Tes4: Visit shopping cart', () => {
        cy.wait(1000)
        cy.xpath('//*[@class="shopping_cart_link"]').click()
        if(cy.xpath('//*[@class="error-message-container error"]')){
            cy.wait(1000)
            cy.xpath('//*[@id="user-name"]').type('standard_user')
        cy.xpath('//*[@id="password"]').type('secret_sauce')
        cy.xpath('//*[@id="login-button"]').click()
        }
    })
    it('Test5: Visit menu',()=>{
        cy.wait(1000)
        cy.xpath('//*[@id="react-burger-menu-btn"]').click()
        cy.wait(1000)
        cy.xpath('//*[@id="react-burger-cross-btn"]').click()
    })
})