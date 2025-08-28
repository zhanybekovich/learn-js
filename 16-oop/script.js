"use strict";

/**
 * Inheritance in classes
 */

class Person {
  constructor(fullname, birthYear) {
    this.fullname = fullname;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }

  greet() {
    console.log(`Hello, I am ${this.fullname}`);
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  set fullname(name) {
    if (name.includes(" ")) this._fullname = name;
    else console.log("Name is not full name");
  }

  get fullname() {
    return this._fullname;
  }
}

class Student extends Person {
  constructor(fullname, birthYear, course) {
    super(fullname, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullname} and I study ${this.course}`);
  }

  // overriding parent method
  calcAge() {
    console.log(`I'm ${this.age}`);
  }
}

const mike = new Student("Mike Smith", 2012, "Biology");
mike.greet();
console.log(mike.age);

mike.introduce();
mike.calcAge();

console.log("============");

///////////
const PersonProto = {
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const jay = Object.create(StudentProto);
jay.init("Jay", 2010, "Biology");

jay.calcAge();
jay.introduce();

console.log("=============");

//////////////////////////////

/**
 * Encapsulation: Private Class Fields and Methods
 *
 * 1. Public fields
 * 2. Private fields
 * 3. Public methods
 * 4. Private methods
 *
 * Static version of the 1, 2, 3, 4
 */

class Account {
  // public fields
  locale = navigator.language;
  bank = "SuperBank";

  // private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface (API)
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  // private method
  #approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log("Loan is approved!");
    }

    return this;
  }

  getMovements() {
    return this.#movements;
  }
}

const acc1 = new Account("John", "EUR", 1111);
acc1
  .deposit(300)
  .withdraw(100)
  .withdraw(50)
  .requestLoan(25000)
  .withdraw(4000)
  .getMovements();

console.log(acc1);
