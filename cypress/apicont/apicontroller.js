class Apicontroller{
    getUsers(){
      return cy.request({
            method: "Get",
            url: "https://jsonplaceholder.typicode.com/users",
            
        })
        .then ((response) =>{
            cy.log(JSON.stringify(response,null,2));
           
        })
    }
    createUser(user){
      return cy.request({
            method: "Post",
            url: "https://jsonplaceholder.typicode.com/users",
            body: user
            })
        .then ((response) =>{
            cy.log(JSON.stringify(response,null,2));
            
        })
    }
        deleteUser(id){
            return cy.request({
                  method: "Delete",
                  url: "https://jsonplaceholder.typicode.com/users"+id,
                  body: user
                  })
              .then ((response) =>{
                  cy.log(JSON.stringify(response,null,2));
              
              })
    
            }
}
export default new Apicontroller();