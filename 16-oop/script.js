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

  // static method. it is not accessible for instances
  static hey() {
    console.log("Hey there!");
  }
}

const person1 = new Person("John Doe", 1995);
console.log(person1.fullname);

const bob = new Person("Bob Marley", 1996);
console.log(bob.fullname);

// calling static method
Person.hey();

/**
 * Object.create()
 */

const PersonProto = {
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  },
};

const steve = Object.create(PersonProto);
console.log(steve);

steve.name = "Steve";
steve.birthYear = 1985;
steve.calcAge();

console.log("======");

////////////

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.speedUS = 50;
console.log(ford.speedUS);

ford.speedUS = 120;
console.log(ford.speedUS);
