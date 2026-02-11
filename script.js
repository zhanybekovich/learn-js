"use strict";

// firstElementChild, lastElementChild, children
const firstLi = document.querySelector("ul").firstElementChild;
const lastLi = document.querySelector("ul").lastElementChild;
const items = document.querySelector("ul").children;

firstLi.style.color = "red";
lastLi.textContent += "!";

[...items].forEach((element) => {
  element.textContent += "*";
});
