"use strict";

// insertAdjacentElement

const target = document.querySelector("div");

const p = document.createElement("p");
p.textContent = "!!!!";

target.insertAdjacentElement("beforebegin", p);
target.insertAdjacentElement("afterend", p);
