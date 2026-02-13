"use strict";

// insertBefore

const ul = document.querySelector("ul");
const before = ul.querySelector("#elem");

const li = document.createElement("li");
li.textContent = "New";

ul.insertBefore(li, before);
