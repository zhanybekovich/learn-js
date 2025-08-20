"use strict";

const jessica = {
  firstName: "Jessica",
  lastName: "Smith",
  age: 26,
};

function marryPerson(person, newLastName) {
  person.lastName = newLastName;

  return person;
}

const marriedJessica = marryPerson(jessica, "Davis");

console.log(jessica);
console.log(marriedJessica);

console.log("============");

// copy object
const jessica2 = {
  firstName: "Jessica",
  lastName: "Smith",
  age: 26,
  family: ["alice", "bob"],
};

const jessica2Copy = { ...jessica2 };

console.log(jessica2, jessica2);

console.log("========");

// deep clone
const jessicaClone = structuredClone(jessica2);
console.log(jessica2, jessica2);
