"use strict";

// focus, blur
const input1 = document.querySelector("#elem1");
const input2 = document.querySelector("#elem2");

input1.addEventListener("input", function () {
  if (this.value.length === 2) {
    input2.focus();
  }
});

input2.addEventListener("input", function () {
  if (this.value.length === 2) {
    this.blur();
  }
});
