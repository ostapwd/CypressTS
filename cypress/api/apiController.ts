class ApiController {
    getComments() {
        return cy.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/comments"
        }).then((response) => {
            cy.log(JSON.stringify(response, null, 2))
      
        })
    }

    getComment(commentId:number) {
        return cy.request({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/comments/commentId"
            
        }).then((response) => {
            cy.log(JSON.stringify(response, null, 2))
      
        })
    }

    addComment(comment:object) {
        return cy.request({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/comments",
            body: comment
        }).then((response) => {
            cy.log(JSON.stringify(response, null, 2))
      
        })
    }

    editComment(commentId: number, comment: object) {
        return cy
            .request({
                method: "PUT",
                url: "https://jsonplaceholder.typicode.com/comments/commentId",
                body: comment
            })
            .then((response) => {
                cy.log(JSON.stringify(response, null, 2));
            });
    }

    deleteComment(commentId:number) {
        return cy.request({
            method: "DELETE",
            url: "https://jsonplaceholder.typicode.com/commnets/commentId",
           
        }).then((response) => {
            cy.log(JSON.stringify(response, null, 2))
      
        })
    }
}

export default new ApiController();