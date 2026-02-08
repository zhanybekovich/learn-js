"use strict";

// function with default param
function func(n = 5) {
  console.log(n * n);
}
func();
func(2);
func(3);
