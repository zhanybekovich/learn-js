"use strict";

// createElement, appendChild

const parent = document.querySelector("#parent");
const btn = document.querySelector("button");

for (let i = 1; i <= 10; i++) {
  const li = document.createElement("li");
  li.textContent = `Item - ${i}`;

  parent.appendChild(li);
}
