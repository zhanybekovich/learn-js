"use strict";

// working with select
const select = document.querySelector("select");
const input = document.querySelector("input");

input.addEventListener("blur", function () {
  select.value = this.value;
});
