export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Override default toString() method to return the desired format
  toString() {
    return `[object ${this._code}]`;
  }
}
