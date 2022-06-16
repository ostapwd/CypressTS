export class Car {
    private _model;
    private _color;
    private _enginePower;
    private _boxGear;
    private _type;

    get model() {
        return this._model;
    }
    set model(value) {
        this._model = value;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    get enginePower() {
        return this._enginePower;
    }
    set enginePower(value) {
        this._enginePower = value;
    }
    get boxGear() {
        return this._boxGear;
    }
    set boxGear(value) {
        this._boxGear = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }


}