"use strict";

// practice
let obj = {
  key1: {
    key1: 1,
    key2: 2,
    key3: 3,
  },
  key2: {
    key1: 4,
    key2: 5,
    key3: 6,
  },
  key3: {
    key1: 7,
    key2: 8,
    key3: 9,
  },
};
let sum = 0;

for (let key in obj) {
  for (let sub in obj[key]) {
    sum += obj[key][sub];
  }
}
console.log(sum);

obj = {
  1: {
    1: "a1",
    2: "a2",
    3: "a3",
  },
  2: {
    1: "b1",
    2: "b2",
    3: "b3",
  },
  3: {
    1: "c1",
    2: "c2",
    3: "c3",
  },
};
console.log(obj["2"]["2"]);
console.log(obj["3"][1]);
