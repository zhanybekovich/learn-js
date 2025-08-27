"use strict";

/**
 * ES6 Classes
 * - Classes are not hoisted
 * - Classes are 1st class citizens
 * - Body of the class executed in strict mode
 */

class PersonCl {
  constructor(firstName, birthYear) {
    (this.firstName = firstName), (this.birthYear = birthYear);
  }

  // methods will be added to .prototype property
  calcAge() {
    console.log(2025 - this.birthYear);
  }

  greet() {
    console.log(`Hey, this is ${this.firstName}.`);
  }
}

const person1 = new PersonCl("John", 1995);
console.log(person1);
person1.calcAge();
person1.greet();

const person2 = new PersonCl("Bob", 2000);
person2.calcAge();
person2.greet();
