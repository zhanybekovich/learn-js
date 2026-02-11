"use strict";

// data attributes
const divs = document.querySelectorAll("div");

divs.forEach((item) =>
  item.addEventListener("click", function () {
    item.textContent += item.dataset.num;
  }),
);
