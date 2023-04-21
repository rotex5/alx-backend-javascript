class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  /*
  toString() {
    return `[object ${this._code}]`;
  }
  */

  get [Symbol.toStringTag]() {
    return this._code;
  }
}

export default Airport;
