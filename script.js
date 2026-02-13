"use strict";

// createElement, appendChild

const parent = document.querySelector("#parent");

const p = document.createElement("p");
p.textContent = "!";

parent.appendChild(p);
