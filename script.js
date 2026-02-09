"use strict";

// nested function
function func(a, b) {
  function square(n) {
    return n * n;
  }

  function cube(n) {
    return n * n * n;
  }

  return square(a) + cube(b);
}

console.log(func(2, 2));
