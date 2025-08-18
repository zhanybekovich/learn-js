"use strict";

/**
 * Objects: dot & bracket notation
 */

const john = {
  firstName: "John",
  lastName: "Doe",
  age: 2025 - 1999,
  jog: "teacher",
  friends: ["Mike", "Bob", "Peter"],
  isMarried: false,
};

// dot notation
console.log(john.firstName);
console.log(john.lastName);

// bracket notation
console.log(john["age"]);
console.log(john["isMarried"]);

const nameKey = "firstName";
console.log(john[nameKey]);
