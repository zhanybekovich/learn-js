"use strict";

// practice
const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.target.previousElementSibling.classList.toggle("hide");
  });
});
