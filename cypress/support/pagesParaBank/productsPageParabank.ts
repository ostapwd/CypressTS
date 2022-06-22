import { BasePageParabank } from "./basePageParabank"

export class ProductsPageParabank extends BasePageParabank{
    
    public clickOpenProductsPage(){
        super.productsLink().click()
        return new ProductsPageParabank()
    }
}