"use strict";

/**
 * Getters & Setters
 */

class Person {
  constructor(fullname, birthYear) {
    this.fullname = fullname;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2025 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullname}`);
  }

  // getter
  get age() {
    return 2025 - this.birthYear;
  }

  // set a property that already exists with _
  set fullname(name) {
    if (name.includes(" ")) {
      this._fullname = name;
    } else {
      console.log("The given name is not a fullname");
    }
  }

  // getter
  get fullname() {
    return this._fullname;
  }
}

const person1 = new Person("John Doe", 1995);
console.log(person1.fullname);

const bob = new Person("Bob Marley", 1996);
console.log(bob.fullname);
