import { BasePageParabank } from "./basePageParabank";

export class AdminPageParabank extends BasePageParabank{
    
    public clickOpenAdminPage(){
        super.adminPageLink().click()
        return new AdminPageParabank()
    }
}