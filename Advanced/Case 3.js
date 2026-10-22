
function Vehicle(brand, model) {
  this.brand = brand;
  this.model = model;
}

Vehicle.prototype.getInfo = function () {
  return this.brand + " " + this.model;
};

function Car(brand, model, doors) {
  Vehicle.call(this, brand, model);
  this.doors = doors;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

const car1 = new Car("Toyota", "Corolla", 4);
const car2 = new Car("Honda", "Civic", 4);

console.log(car1.getInfo());
console.log(car2.getInfo());
console.log("Doors:", car1.doors);
console.log(
  "Shared method:",
  car1.getInfo === car2.getInfo
);
