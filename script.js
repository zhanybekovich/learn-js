"use strict";

// DOM
const p1 = document.querySelector("#elem1");
const p2 = document.querySelector("#elem2");
const p3 = document.querySelector("#elem3");
const p4 = document.querySelector("#elem4");
const p5 = document.querySelector("#elem5");

function func() {
  console.log("message");
}

p1.addEventListener("click", func);
p2.addEventListener("click", func);
p3.addEventListener("click", func);
p4.addEventListener("click", func);
p5.addEventListener("click", func);
