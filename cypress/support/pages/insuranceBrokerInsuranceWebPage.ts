export class BrokerInsuranceWebPage {
    private getHeaderBrokerInsuranceWebPage(){ return cy.xpath('//*[@id="tabs-1"]') }
    private getRequestQuotationButton(){ return cy.get('#newquote') }
    private getRequestQuotationHeader(){ return cy.get('#tabs-2') }
    private getQuotationBreakdownCover(){ return cy.get('#quotation_breakdowncover') }
    private getQuotationWindScreenRepair(){ return cy.get('#quotation_windscreenrepair_t') }
    private getQuotatioIncidents(){ return cy.get('#quotation_incidents') }
    private getVehicleAttributesRegistration(){ return cy.get('#quotation_vehicle_attributes_registration') }
    private getVehicleAttributesMileage(){ return cy.get('#quotation_vehicle_attributes_mileage') }
    private getQuotationVehicleAttributesValue(){ return cy.get('#quotation_vehicle_attributes_value') }
    private getParkingLocation(){ return cy.get('#quotation_vehicle_attributes_parkinglocation') }
    private getYearOfPolicy(){ return cy.get('#quotation_vehicle_attributes_policystart_1i') }
    private getMonthOfPolicy(){ return cy.get('#quotation_vehicle_attributes_policystart_2i') }
    private getDayOfPolicy(){ return cy.get('#quotation_vehicle_attributes_policystart_3i') }
    private getSaveQuotationButton(){ return cy.xpath('//*[@id="new_quotation"]/div[8]/input[3]') }
    private getSuccessfullMessage(){ return cy.xpath('/html/body/b[1]') }

    public checkHeaderBrokerInsuranceWebPage(){
        return this.getHeaderBrokerInsuranceWebPage()
    }

    public requestQuotationButton(){
        return this.getRequestQuotationButton().click()
    }

    public requestQuotationHeader(){
        return this.getRequestQuotationHeader()
    }

    public quotationBreakdownCover(){
        return this.getQuotationBreakdownCover()
    }

    public quotationWindScreenRepair(){
        this.getQuotationWindScreenRepair().click()
        return this
    }

    public parkingLocation(){
        return this.getParkingLocation()
    }

    public yearOfPolicy(){
        return this.getYearOfPolicy()
    }

    public monthOfPolicy(){
        return this.getMonthOfPolicy()
    }

    public dayOfPolicy(){
        return this.getDayOfPolicy()
    }

    public saveQuotationButtonSubmit(){
        return this.getSaveQuotationButton().click()
    }

    public successfullMessage(){
       return this.getSuccessfullMessage()
    }

    public inputInsuranceData(user){
        this.getQuotatioIncidents().type(user.incidents)
        this.getVehicleAttributesRegistration().type(user.registration)
        this.getVehicleAttributesMileage().type(user.annualMileage)
        this.getQuotationVehicleAttributesValue().type(user.estimatedValue)
    }

    
}