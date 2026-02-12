"use strict";

// radio
const radios = document.querySelectorAll("input");
const btn = document.querySelector("button");
const p = document.querySelector("p");

btn.addEventListener("click", function () {
  for (let radio of radios) {
    if (radio.checked) {
      p.textContent = radio.value;
    }
  }
});
