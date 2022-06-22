import { BasePageParabank } from "./basePageParabank";

export class AdminPageParabank extends BasePageParabank{
    
    public clickOpenAdminPage(){
        super.getAdminPageLink().click()
        return new AdminPageParabank()
    }
}