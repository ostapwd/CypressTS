import { BasePageParabank } from "./basePageParabank";

export class AboutUsPageParabank extends BasePageParabank{
    
    public clickOpenAboutUsPage(){
        super.aboutUsLink().click()
        return new AboutUsPageParabank()
    }
}