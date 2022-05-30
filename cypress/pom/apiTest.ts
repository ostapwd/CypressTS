
export class ApiTest {
    public getUsers() {
        cy.request({
            method: 'GET',
            url: Cypress.env('api_server')
        })
            .then( (response: any) => {
                expect(response.status).equal(200)
                expect(response.body.data.first_name).equal('Janet')
                expect(response.body.data.last_name).equal('Weaver')
                expect(response.body.data.email).equal('janet.weaver@reqres.in')
                }
            )
    }

    public createUser() {
        const user = {
            "name": "Oleh",
            "job": "engineer"
        }
        cy.request({
            method: 'POST',
            url: Cypress.env('api_server_post'),
            body: user
        })
            .then((response: any) =>  {
                expect(response.status).equal(201)
            })
            .its('body')
                .should('include', {name: 'Oleh'})
                .should('include', {job: 'engineer'})
    }

    public deleteUser() {
        cy.request({
            method: 'DELETE',
            url: Cypress.env('api_server'),
        })
            .then((resp: any) => {
                expect(resp.status).equal(204)
                expect(resp.body).to.have.length(0)
            })
    }
}