"use strict";

// DOM
const input = document.querySelector("#input");
const showValueBtn = document.querySelector("#showValue");
const p = document.querySelector("p");

showValueBtn.addEventListener("click", function () {
  p.textContent = input.value;
});
