import { BasePageParabank } from "./basePageParabank";

export class AboutUsPageParabank extends BasePageParabank{
    
    public clickOpenAboutUsPage(){
        super.getAboutUsLink().click()
        return new AboutUsPageParabank()
    }

    public clickButtonAboutUsPage(){
        super.getAboutUsButton().click()
        return new AboutUsPageParabank()
    }
}