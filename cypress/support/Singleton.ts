export class Singleton {
    private static instance: Singleton;

    private constructor(name) {
        this.name = name;
    }

    public static getInstance(): Singleton {
        if (Singleton.instance == null) {
            Singleton.instance = new Singleton("One object");
        }

        return Singleton.instance;
    }

    private readonly name;

    public getName(){
        cy.log(this.name);
    };

    public someBusinessLogic() {
        cy.log("do something");
    }
}