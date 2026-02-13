"use strict";

// event object
const p = document.querySelector("p");
const page = document.querySelector(".page");
document.addEventListener("mousemove", function (e) {
  p.textContent = `${e.clientX} : ${e.clientY}`;
  page.textContent = `${e.pageX} : ${e.pageY}`;
});
