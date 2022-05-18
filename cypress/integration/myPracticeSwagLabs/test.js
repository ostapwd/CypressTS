import users from "../../data/users.js";
import { LoginPageTSPractice } from "../../support/pagesMyPractice/loginPageTSPractice.js";





describe('', ()=>{
    before('', () =>{
       new LoginPageTSPractice().open().loginToTheApp(users.standardUser)
    }) 

    it('', () => {
     
    });
})
// resolve: {
//     extensions: ['.js', '.ts']
// }