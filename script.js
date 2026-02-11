"use strict";

// querySelectorAll
const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((p) =>
  p.addEventListener("click", function () {
    p.textContent = +p.textContent * +p.textContent;
  }),
);
