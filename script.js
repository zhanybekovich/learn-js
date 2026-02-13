"use strict";

// keypress
const input = document.querySelector("input");
const p = document.querySelector("p");

p.addEventListener("click", function (e) {
  if (e.altKey) {
    this.style.border = "2px solid green";
  }
});
