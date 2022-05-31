describe('Test suite Swaglabs', () => {
    beforeEach('Authorization of the created user on the site',() => {
        cy.visit('https://www.saucedemo.com');
        cy.wait(700);
        cy.get('#user-name').should('be.visible').type('standard_user');
        cy.wait(700);
        cy.get("input[id='password']").type('secret_sauce');
        cy.wait(500);
        cy.get("input[id='login-button']").click();
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
        cy.xpath("//*[@id='inventory_container']").should('be.visible');
    });

    it("The burger menu is displayed on the screen", () => {
        cy.wait(1000);
        cy.xpath("//*[@id='react-burger-menu-btn']").click();
        cy.wait(3000);
        cy.get("#react-burger-cross-btn").click();
    });

    it("Adding products to cart", () => {
        cy.wait(1000);
        cy.get("[id*='add-to-cart']").should('be.visible').each( item => {
            item.click();
        });
        cy.get("#shopping_cart_container .shopping_cart_badge").should('be.visible').then(element => 
            cy.log(element.text()));
        cy.get("#shopping_cart_container .shopping_cart_link").click();
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html');
    });

    it("Remove some products from the shopping cart", () => {
        cy.wait(1000);
        cy.get("[id*='add-to-cart']").should('be.visible').each( item => {
            item.click();
        });
        cy.get("#shopping_cart_container .shopping_cart_badge").should('be.visible').then(element => 
            cy.log(element.text())).click();
        cy.wait(1000);
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html')
        cy.wait(1000);
        cy.xpath("//*[@id='item_2_title_link']").get("#remove-sauce-labs-onesie").click();
        cy.wait(1000);
        cy.xpath("//*[@id='item_4_title_link']").get("#remove-sauce-labs-backpack").click();
        cy.get("#shopping_cart_container .shopping_cart_badge").should('be.visible').then(element => 
            cy.log(element.text())).click();
    });

    it('Sorting products by price on the main page (low to high)', () => {
        cy.wait(500);
        cy.xpath("//*[@class='product_sort_container']").should('be.visible');
        // cy.get("select.product_sort_container").should('be.visible');
        cy.wait(500);
        cy.xpath("(//*[@class='inventory_item_name'])[1]").should('be.visible').then(element => 
            cy.log(element.text()));
            cy.wait(500);
        cy.xpath("(//*[@class='inventory_item_price'])[1]").should('be.visible').then(element => 
            cy.log(element.text()));
            cy.wait(500);
        cy.get("select.product_sort_container").wait(1000).select('Price (low to high)');
        cy.xpath("(//*[@class='inventory_item_name'])[1]").should('be.visible').then(element => 
            cy.log(element.text()));
            cy.wait(500);
        cy.xpath("(//*[@class='inventory_item_price'])[1]").should('be.visible').then(element => 
            cy.log(element.text()));
            cy.wait(500);
    })

    it("Buying products", () => {
        cy.wait(1000);
        cy.get("[id*='add-to-cart']").should('be.visible').each( item => {
            item.click();
        });
        cy.get("#shopping_cart_container .shopping_cart_badge").should('be.visible').then(element => 
            cy.log(element.text()));
        cy.get("#shopping_cart_container .shopping_cart_link").click();
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html');
        cy.wait(500);
        cy.get("#checkout").should('be.visible').click();
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html');
        cy.xpath("//*[@id='checkout_info_container']").should('be.visible');
        cy.get("#first-name").should('be.visible').type('Vitalik');
        cy.wait(500);
        cy.xpath("//input[@id='last-name']").should('be.visible').type('TR');
        cy.wait(500);
        cy.xpath("//*[@id='postal-code']").should('be.visible').type('123456789');
        cy.wait(500);
        cy.get("#continue").should('be.visible').click();
        cy.wait(500);
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-two.html');
        cy.xpath("//*[@id='checkout_summary_container']").should('be.visible');
        cy.wait(800);
        cy.get("#header_container .title").then((element) => {
                expect(element.text()).to.equal('Checkout: Overview')
            });
        cy.get("#finish").should('be.visible').click();
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html');
        cy.xpath("//*[@id='checkout_complete_container']").should('be.visible');
        cy.get("#header_container .title").then((element) => {
            expect(element.text()).to.equal('Checkout: Complete!')
        });
        cy.get("#checkout_complete_container img.pony_express").should('be.visible');
        cy.get("#back-to-products").should('be.visible').click();
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
        cy.xpath("//*[@id='inventory_container']").should('be.visible');
    });
})