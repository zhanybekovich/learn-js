"use strict";

// practice
const items = document.querySelectorAll("li");

items.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("active");
  });
});
