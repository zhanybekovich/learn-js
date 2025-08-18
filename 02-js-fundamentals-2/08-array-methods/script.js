"use strict";

/**
 * Array Methods
 */

const friends = ["John", "Bob", "Steve"];

// push -> adds elements to the end
friends.push("Mark", "Sam");
console.log(friends);

const newLength = friends.push("Marcus");
console.log(newLength);

// unshift -> adds elements to the beginning
friends.unshift("Samuel");
console.log(friends);

// pop -> removes last element
friends.pop();
console.log(friends);

let removed = friends.pop();
console.log(friends);
console.log(removed);

// shift -> removes first element
friends.shift();
console.log(friends);

removed = friends.shift();
console.log(friends);
console.log(removed);

// indexOf -> returns index of element
console.log(friends.indexOf("Bob"));

// includes -> returns boolean
console.log(friends.includes("Steve"));
console.log(friends.includes("Samuel"));

if (friends.includes("Samuel")) {
  console.log("Samuel is a friend");
} else {
  console.log("Samuel is not a friend");
}
