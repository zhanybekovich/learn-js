"use strict";

// createElement, appendChild

const parent = document.querySelector("#parent");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Item";

  li.addEventListener("click", function () {
    this.textContent += "!";
  });

  parent.appendChild(li);
});
