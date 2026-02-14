"use strict";

const elems = document.querySelectorAll("p");

elems.forEach((p, i) => {
  if (i % 2 === 0) {
    p.style.backgroundColor = "red";
  } else {
    p.style.backgroundColor = "green";
  }
});
