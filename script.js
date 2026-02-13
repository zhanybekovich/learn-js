"use strict";

// keypress
const input = document.querySelector("input");
const p = document.querySelector("p");

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    p.textContent = this.value;
  }
});
