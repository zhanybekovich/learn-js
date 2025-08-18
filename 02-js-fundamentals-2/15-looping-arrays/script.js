"use strict";

/**
 * Looping arrays & continue & break
 */

const friends = ["Mark", "John", "Steve"];

for (let i = 0; i < friends.length; i++) {
  console.log(`Hello ${friends[i]}!`);
}

// continue
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

console.log("===========");

// break
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
