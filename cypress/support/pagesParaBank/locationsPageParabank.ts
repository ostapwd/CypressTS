import { BasePageParabank } from "./basePageParabank"

export class LocationsPageParabank extends BasePageParabank{
    
    public clickOpenLocationsPage(){
        super.locationsLink().click()
        return new LocationsPageParabank()
    }
}