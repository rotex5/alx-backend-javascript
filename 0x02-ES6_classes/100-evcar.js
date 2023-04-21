import Car from './10-car';

// const CLONE = Symbol('clone');

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }
  /*
  [CLONE]() {
    const newCar = new Car(this._brand, this._motor, this._color);
    Object.setPrototypeOf(newCar, Object.getPrototypeOf(this));
    return newCar;
  }

  cloneCar() {
    return this[CLONE]();
  }
  */

  // Using Symbol.species
  static get [Symbol.species]() {
    return Car;
  }
}

export default EVCar;
