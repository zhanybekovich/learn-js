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
