"use strict";

// sequential function calls
function sqrt(num) {
  return Math.sqrt(num);
}

function round(num) {
  return num.toFixed(3);
}

console.log(round(sqrt(2)));
