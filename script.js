"use strict";

// DOM
const btn = document.querySelector("#btn");

btn.addEventListener("dblclick", function () {
  console.log("Hello");
});

btn.addEventListener("mouseover", function () {
  console.log("mouse over");
});

btn.addEventListener("mouseout", function () {
  console.log("mouse out");
});
