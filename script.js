"use strict";

// working with select
const select = document.querySelector("#select");
const btn = document.querySelector("button");
const p = document.querySelector("p");

btn.addEventListener("click", function () {
  let selectedDay = +select.value;
  switch (selectedDay) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      p.textContent = "Working day!";
      break;
    case 6:
    case 7:
      p.textContent = "Weekend!";
      break;
    default:
      p.textContent = "Unknown day";
      break;
  }
});
