"use strict";

/**
 * Prototypes
 */

// constructor
const Person = function (firstName, birthYear) {
  (this.firstName = firstName), (this.birthYear = birthYear);
};

// instances
const person1 = new Person("John", 1991);
console.log(person1);

const person2 = new Person("Bob", 1985);
console.log(person2);

// checking
console.log(person2 instanceof Person);

// prototype
Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};
console.log(Person.prototype);

// calling method
person1.calcAge();
person2.calcAge();

// prototype chaining in builtin objects
console.log(person1.__proto__.__proto__.__proto__);

const arr = [1, 2, 3, 1, 2, 5, 6, 7, 7, 9, 1];
console.log(arr.__proto__.__proto__);

// extending builtin objects is not a good idea
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

//
const h1 = document.querySelector("h1");
console.dir(h1);

// challenge
const Car = function (make, speed) {
  (this.make = make), (this.speed = speed);
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
};

const bmw = new Car("BMW", 120);
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

const mercedes = new Car("Mercedes", 95);
mercedes.accelerate();
mercedes.brake();
mercedes.brake();
mercedes.brake();
mercedes.brake();
mercedes.brake();
mercedes.brake();
