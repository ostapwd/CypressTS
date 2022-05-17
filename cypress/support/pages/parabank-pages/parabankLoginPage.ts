



export class ParabankLoginPage  {
  
    private usernameInput() { return cy.xpath('//input[@name="username"]'); }
    private passwordInput() { return cy.get("input[name='password']"); }
    private loginButton() { return cy.get("input[class='button']"); }
    private wrongPassword() { return cy.get("h3[data-test='error']"); }
    private clickRegister() { return cy.contains('Register'); }
    private checkingChusedclickRegister() { return cy.get('div[id="rightPanel"] h1'); }
    private fillInputsToRegisterUser() { return cy.get('tbody').find('td'); }
    private checkingIfTheInputsOfRegisterHaveEnoughtInputs() { return  cy.get('tbody > tr'); }
    private clickButtonRegister() { return  cy.get('input[class="button"]').contains('Register'); }
    private clickCustomerLogin() { return cy.get('div[id="leftPanel"]').contains('Customer Login'); }
    private loginButtonForgot(){ return cy.contains('Log In'); }
    private forgotLoginInfo() { return cy.contains('Forgot login info?'); }
    private checkIfItIsCustomerLookup() { return cy.get('h1[class="title"]').should("contain", "Customer Lookup"); } 
    private inputForgotPassword() { return cy.get('tbody').find('td'); }
    private inputForgotPasswordFillAllInputs() { return cy.get('tbody').find('td'); }
    private responseWhenTheAllInputsAreNotFilled() { return cy.get('tbody') }
    private usernameInputForgot() { return cy.get("input[name='username']"); }
    private passwordInputForgot() { return cy.get("input[name='password']"); }


         public registerToTheApp(user) {
            this.clickRegister().click();
            this.checkingChusedclickRegister().should("contain", "Signing up is easy!");
            this.fillInputsToRegisterUser().then(tableRow => {
                cy.wrap(tableRow).find('input[id="customer.firstName"]').type(user.firstName)
                cy.wrap(tableRow).find('input[id="customer.lastName"]').type(user.lastName)
                cy.wrap(tableRow).find('input[id="customer.address.street"]').type(user.addressStreet)
                cy.wrap(tableRow).find('input[id="customer.address.city"]').type(user.addressCity)
                cy.wrap(tableRow).find('input[id="customer.address.state"]').type(user.addressState)
                cy.wrap(tableRow).find('input[id="customer.address.zipCode"]').type(user.addressZipCode)
                cy.wrap(tableRow).find('input[id="customer.phoneNumber"]').type(user.phoneNumber)
                cy.wrap(tableRow).find('input[id="customer.ssn"]').type(user.ssn)
                cy.wrap(tableRow).find('input[id="customer.username"]').type(user.username)
                cy.wrap(tableRow).find('input[id="customer.password"]').type(user.password)
                cy.wrap(tableRow).find('input[id="repeatedPassword"]').type(user.repeatedPassword)
              })
                return this;    
        }

        public checkingIfThereAreEnoughtInputs() {
            this.checkingIfTheInputsOfRegisterHaveEnoughtInputs().then(($lis) => {
                expect($lis, '3 items').to.have.length(13)
          })
                return this;
        }
       
        public buttonRegister() {
            this.clickButtonRegister().click();
            return this;
        }

        public loginToTheApp(user) {     
            this.usernameInput().type(user.username);
            this.passwordInput().type(user.password);
            this.loginButton().click();
        } 

        public forgotInfo() {
            this.forgotLoginInfo().click()
        }

        public forgotLoginInformation(user) {
            this.inputForgotPassword().then(tableRow => {
                cy.wrap(tableRow).find('input[name="firstName"]').type(user.firstName)
                cy.wrap(tableRow).find('input[name="lastName"]').type(' ')
                cy.wrap(tableRow).find('input[name="address.street"]').type(' ')
                cy.wrap(tableRow).find('input[name="address.city"]').type(' ')
                cy.wrap(tableRow).find('input[name="address.state"]').type(' ')
                cy.wrap(tableRow).find('input[name="address.zipCode"]').type(' ')
                cy.wrap(tableRow).find('input[name="ssn"]').type(user.ssn)
                cy.wrap(tableRow).find('.button').click()   
            })
        }

        public forgotFillAllInputs(user) {
            this.inputForgotPasswordFillAllInputs().then(tableRow => {
                cy.wrap(tableRow).find('input[name="firstName"]').type(user.firstName)
                cy.wrap(tableRow).find('input[name="ssn"]').type(user.ssn)
                cy.wrap(tableRow).find('.button').click()
            }) 
        }
        public responsWhenTheAllInputsAreNotFilled() {
            this.responseWhenTheAllInputsAreNotFilled().then(tableRowAll => {
                cy.get('tbody').first().find('tr').then(tableColums => {
                    cy.wrap(tableColums).eq(0).should('contain', ' ')
                })
                cy.get('tbody').first().find('tr').then(tableColums => {
                    cy.wrap(tableColums).eq(1).should('contain', 'Last name is required.')
                })
                cy.get('tbody').first().find('tr').then(tableColums => {
                    cy.wrap(tableColums).eq(2).should('contain', 'Address is required.')
                })
                cy.get('tbody').first().find('tr').then(tableColums => {
                    cy.wrap(tableColums).eq(3).should('contain', 'City is required.')
                })
                cy.get('tbody').first().find('tr').then(tableColums => {
                    cy.wrap(tableColums).eq(4).should('contain', 'State is required.')
                 })
                cy.get('tbody').first().find('tr').then(tableColums => {
                     cy.wrap(tableColums).eq(5).should('contain', 'Zip Code is required.')
                })
                cy.get('tbody').first().find('tr').then(tableColums => {
                    cy.wrap(tableColums).eq(6).should('contain', ' ')
                })
            
            })
        }

        public open() {
            cy.visit("https://parabank.parasoft.com/parabank/index.htm");
            return this;
        }

}

export default new ParabankLoginPage()