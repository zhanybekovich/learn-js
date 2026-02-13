"use strict";

// remove

const items = document.querySelectorAll("li");

items.forEach((element) => {
  element.addEventListener("click", function () {
    this.remove();
  });
});
