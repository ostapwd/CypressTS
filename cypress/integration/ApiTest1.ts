describe('Test suite 2 API', function () {

    it('Get todos response', () => {
        cy.request('http://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                expect(response.status).to.equal(200);
            })
    })

    it('GET', () => {
        cy.request('http://jsonplaceholder.typicode.com/todos')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json');
    })

    beforeEach('Users API', () => cy.request('http://jsonplaceholder.typicode.com/todos').as('todos'))
    it('GET todos, status code and quality', () => {
        cy.get('@todos').its('status').should('be.equal', 200);
        cy.get('@todos').its('body').should('have.length', 200);
        fetch('http://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => console.log(json))
    })


})
describe('Test suite 2 API', function () {
    beforeEach('Users API', () => cy.request('http://jsonplaceholder.typicode.com/users').as('users'))
    it('GET', () => {
        cy.get('@users').its('status').should('be.equal', 200);
        cy.get('@users').its('body').should('have.length', 10);
        fetch('http://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => console.log(json))
    })



    it('Get all user posts', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                expect(response.status).to.equal(200);
            })
    })

    it('Get all user posts', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                let first_response_object = Object.keys(response.body[0]);
                let keys = [`userId`, `id`, `title`, `body`];
                for (let key of keys) {
                    expect(first_response_object).to.includes(key)
                }
            })
    })
})


describe('Test suite 3 API', function () {
    let newId;
    it('Add a new post', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts',
            {
                first_name: 'New',
                last_name: 'New',
                email: "new@expect.com"
            })
            .its('body').then((body) => {
                newId = body.id;
            })
    })

    it('Verify the new post exists', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/' + newId).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('first_name', 'New')
            expect(response.body).to.have.property('last_name', 'New')
            expect(response.body).to.have.property('email', 'new@expect.com')
        })
    })

    

    it('Delete the newly added post', () => {
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/' + newId).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Verify the post was deleted', () => {
        cy.request({ url: 'https://jsonplaceholder.typicode.com/posts/' + newId, failOnStatusCode: false }).then((response) => {
            expect(response.status).to.eq(404)
        })
    })
})
describe('Test suite 4 API', function () {
    it('Verify how many users are registreted', () => {
        cy.request('https://jsonplaceholder.typicode.com/comments').as('comments')

        cy.get('@comments').should((response) => {
            expect(response.body).to.have.length(500)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        })
    })
})

describe('Test suite 5 API', function () {
    beforeEach('Users API', () => cy.request('http://jsonplaceholder.typicode.com/users').as('users'))
    it('GET', () => {
        cy.get('@users').its('status').should('be.equal', 200);
        cy.get('@users').its('body').should('have.length', 10);
        fetch('http://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => console.log(json))
    })



    it('Verify if some users exist', () => {
        cy.request('https://jsonplaceholder.typicode.com/users').then((response) => {
            cy.writeFile('cypress/fixtures/users.json', response.body)
        })
        cy.fixture('users').then((users) => {
            expect(users[0].name).to.exist
            expect(users[1].name).to.exist
            expect(users[2].name).to.exist
            expect(users[3].name).to.exist
        })
    })

    it('Write JSON to a file', () => {
        cy.request('https://jsonplaceholder.typicode.com/users').then((response) => {
            cy.writeFile('path/to/data.json', { name: 'Mariia', email: 'm@example.com' })
            cy.readFile('path/to/data.json').then((user) => {
                expect(user.name).to.equal('Mariia')
            })
        })
        cy.request('https://jsonplaceholder.typicode.com/users').then((response) => {
            cy.writeFile('cypress/fixtures/users.json', response.body)
        })

    })

})



