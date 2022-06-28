import { AccountServicesPageParabank } from "./accountServicesPageParabank";

export class TransfersFoundPageParabank extends AccountServicesPageParabank{
    
    public amount() { return cy.get("#amount"); }
    public fromAccount() { return cy.get("#fromAccountId"); }
    public toAccount() { return cy.get("#toAccountId"); }
    private transferButton() { return cy.get("input[value='Transfer']"); }
   
    public setTransferAmount(amount: string){
        this.amount().type(amount)
            return this
    }

    public selectFromAccount(index: number){
       return this.fromAccount().select(index)
    }

    public selectToAccount(index: number){
       return this.toAccount().select(index)
    }

    public getTransferButton(){
       return this.transferButton()
    }

    public clickTransferButton(){
        this.getTransferButton().click()
            return this
    }
}
