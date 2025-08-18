"use strict";

/**
 * Object methods
 */

const john = {
  firstName: "John",
  lastName: "Doe",
  birthYear: 1999,
  job: "teacher",
  friends: ["Mike", "Bob", "Peter"],
  hasDriversLicense: true,

  // calcAge: function () {
  //   // console.log(this);
  //   return 2025 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "not"} driver's license.`;
  },
};

console.log(john.getSummary());
