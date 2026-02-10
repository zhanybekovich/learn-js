"use strict";

// DOM
const p1 = document.querySelector("#elem");

function func1() {
  console.log("1");
}

function func2() {
  console.log("2");
}

function func3() {
  console.log("3");
}

p1.addEventListener("click", func1);
p1.addEventListener("click", func2);
p1.addEventListener("click", func3);
