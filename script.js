"use strict";

const input = document.querySelector("input");

input.addEventListener("blur", function () {
  if (this.value.length < 9) {
    this.dataset.type = "error";
  } else {
    this.dataset.type = "success";
  }
});
