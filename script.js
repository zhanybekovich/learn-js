"use strict";

// data attributes
const div = document.querySelector("#elem");

div.addEventListener("click", function () {
  div.textContent += div.dataset.text;
});
