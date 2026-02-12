"use strict";

// change event
const input = document.querySelector("input");
const p = document.querySelector("p");

input.addEventListener("change", function () {
  if (this.value.length < 5) {
    this.style.border = "1px solid blue";
  }
});
