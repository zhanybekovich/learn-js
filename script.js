"use strict";

// disabled input
const checkbox = document.querySelector("input");
const checkBtn = document.querySelector("#check");
const uncheckBtn = document.querySelector("#uncheck");

checkBtn.addEventListener("click", () => {
  checkbox.checked = true;
});

uncheckBtn.addEventListener("click", () => {
  checkbox.checked = false;
});
