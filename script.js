"use strict";

// data attributes
const input = document.querySelector("input");

input.addEventListener("blur", function () {
  if (
    this.value.length > this.dataset.max ||
    this.value.length < this.dataset.min
  ) {
    console.log(
      `Enter minimum ${this.dataset.min} and max ${this.dataset.max} symbols`,
    );
  }
});
