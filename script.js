"use strict";

// contains

const names = ["john", "pete", "marry", "bob"];

const ul = document.querySelector("ul");

names.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;

  li.addEventListener("click", function addExclamation() {
    this.textContent += "!";

    this.removeEventListener("click", addExclamation);
  });

  ul.appendChild(li);
});
