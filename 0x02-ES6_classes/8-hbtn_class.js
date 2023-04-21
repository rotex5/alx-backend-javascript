class HolbertonClass {
  constructor(size, location) {
    this._size = typeof size === 'number' ? size : 0;
    this._location = typeof location === 'string' ? location : '';
  }

  /*
  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
  */
  // Using Symblos

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    return null;
  }
}

export default HolbertonClass;
