import { BasePageParabank } from "./basePageParabank"

export class ContactPageParabank extends BasePageParabank{
    
    public clickButtonContactPage(){
        super.getContactButton().click()
        return new ContactPageParabank()
    }
}