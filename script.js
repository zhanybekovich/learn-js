"use strict";

const input = document.querySelector("input");

input.addEventListener("blur", function () {
  console.log(this);
  if (this.value.length < 9) {
    this.classList.add("error");
  } else {
    this.classList.remove("error");
    this.classList.add("success");
  }
});
