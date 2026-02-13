"use strict";

// preventDefault
document.querySelector("a").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Hello");
});
