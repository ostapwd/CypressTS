import {Car} from "./Car";

export class CarBuilder{

    private car: Car = new Car;

    public CarBuilder(){
    }

    public withModel(value) {
        this.car.model = value;
        return this;
    }
    public withColor(value) {
        this.car.color = value;
        return this;
    }
    public withEnginePower(value) {
        this.car.enginePower = value;
        return this;
    }
    public withBoxGear(value) {
        this.car.boxGear = value;
        return this;
    }

    public build(): Car {
        return this.car;
    }
}