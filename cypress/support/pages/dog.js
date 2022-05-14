export class Dog {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printMyName() {
        cy.log(this.name + " " + this.age);
    }

    transfer (number){

        return ""+number + "";
    }


}
