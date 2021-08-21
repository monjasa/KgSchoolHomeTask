function Vector(...scalarComponents) {

  this.scalarComponents = scalarComponents;

  this.add = function(vector) {
    this.validateDimensionsEquality(vector);
    const scalarComponents = this.scalarComponents
      .map((value, index) => value + vector.scalarComponents[index]);
    return new Vector(...scalarComponents);
  }

  this.subtract = function(vector) {
    this.validateDimensionsEquality(vector);
    const scalarComponents = this.scalarComponents
      .map((value, index) => value - vector.scalarComponents[index]);
    return new Vector(...scalarComponents);
  }

  this.dot = function(vector) {
    this.validateDimensionsEquality(vector);
    return this.scalarComponents
      .map((value, index) => value * vector.scalarComponents[index])
      .reduce((sum, value) => sum + value);
  }

  this.validateDimensionsEquality = function (vector) {
    if (this.scalarComponents.length !== vector.scalarComponents.length) {
      throw 'Operation is not defined for vectors of different dimensions';
    }
  }

  this.toString = function() {
    return `(${this.scalarComponents})`;
  }

  this.equals = function(vector) {
    return this.scalarComponents.every((value, index) => value === vector.scalarComponents[index]);
  }
}

const a = new Vector(1, 2, 3);
const b = new Vector(3, 4, 5);
const c = new Vector(5, 6, 7, 8);

console.log(a.add(a));
console.log(a.subtract(b));
console.log(a.dot(b));
