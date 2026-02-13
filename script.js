"use strict";

// createElement, appendChild

const parent = document.querySelector("#parent");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Item";
  parent.appendChild(li);
});
