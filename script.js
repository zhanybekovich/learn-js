"use strict";

// callback
function each(arr, callback) {
  const result = [];
  for (let item of arr) {
    result.push(callback(item));
  }

  return result;
}

console.log(
  each([1, 2, 3, 4, 5], function (n) {
    return (n += 1);
  }),
);

function increment(n) {
  return (n += 1);
}

console.log(each([1, 2, 3, 4, 5], increment));
