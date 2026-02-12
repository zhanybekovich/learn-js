"use strict";

// querySelectorAll vs getElementsByClassName

// returns NodeList
const items = document.querySelectorAll(".www");
console.log(items);
items.forEach((item) => (item.style.color = "green"));

// returns HTMLCollection
const items2 = document.getElementsByClassName("www");
console.log(items2);
[...items2].forEach((item) => (item.style.color = "blue"));
