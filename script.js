"use strict";

// event bubbling
const div = document.querySelector("div");

div.addEventListener("click", function (e) {
  console.log(e.target.tagName);

  if (e.target.tagName === "LI") {
    e.target.textContent += "!";
  }
});
