const CLONE = Symbol('clone');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /*
   * Basic implementation
  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
  */
  // Implemention with Symbol
  [CLONE]() {
    const newCar = new Car(this._brand, this._motor, this._color);
    Object.setPrototypeOf(newCar, Object.getPrototypeOf(this));
    return newCar;
  }

  cloneCar() {
    return this[CLONE]();
  }
}

export default Car;
