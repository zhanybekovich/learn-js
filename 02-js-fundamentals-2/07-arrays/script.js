"use strict";

/**
 * Arrays
 */

const friends = ["John", "Bob", "Steve"];
console.log(friends);

const years = new Array(1991, 1994, 2007, 2002);
console.log(years);

// index
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

// length
console.log(friends.length);

// last element
console.log(friends[friends.length - 1]);

// changing
friends[2] = "Marcus";
console.log(friends);

// array with different types
const john = ["John", 2025 - 1991, friends];
console.log(john);
