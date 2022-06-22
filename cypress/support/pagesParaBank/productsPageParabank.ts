import { BasePageParabank } from "./basePageParabank"

export class ProductsPageParabank extends BasePageParabank{
    
    public clickOpenProductsPage(){
        super.getProductsLink().click()
        return new ProductsPageParabank()
    }
}