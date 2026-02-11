"use strict";

// previousElementSibling nextElementSibling

const elem = document.querySelector("#elem");

elem.previousElementSibling.textContent += "!";
elem.nextElementSibling.textContent += "*";
