"use strict";

// data attributes
const input = document.querySelector("input");

input.addEventListener("blur", function () {
  if (this.value.length < this.dataset.length) {
    console.log(`Enter minimum ${this.dataset.length} symbols`);
  }
});
