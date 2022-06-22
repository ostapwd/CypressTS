import { BasePageParabank } from "./basePageParabank"

export class ServicesPageParabank extends BasePageParabank {
    public servicesPageLabel() { return cy.xpath('//*[@id="rightPanel"]/span[1]') }

    public clickOpenServicesPage(){
        super.servicesLink().click()
        this.waitForSeconds(2)
        return new ServicesPageParabank()
    }

    public getServicesPageLabel(){
        return this.servicesPageLabel()
    }
}