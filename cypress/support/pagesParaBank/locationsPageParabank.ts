import { BasePageParabank } from "./basePageParabank"

export class LocationsPageParabank extends BasePageParabank{
    
    public clickOpenLocationsPage(){
        super.getLocationsLink().click()
        return new LocationsPageParabank()
    }
}