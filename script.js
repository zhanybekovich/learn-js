"use strict";

// practice
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const dayNumbers = [1, 2, 3, 4, 5, 6, 7];

const weekDays = {};

for (let i = 0; i <= dayNumbers.length - 1; i++) {
  weekDays[i] = days[i];
}

console.log(weekDays);

let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let newObj = {};

for (let key in obj) {
  if (obj[key] % 2 === 0) {
    newObj[key] = obj[key];
  }
}
console.log(newObj);

let newObj2 = {};

for (let key in obj) {
  newObj2[obj[key]] = key;
}
console.log(newObj2);
