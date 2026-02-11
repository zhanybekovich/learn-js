"use strict";

// querySelectorAll vs etElementsByTagName

// returns NodeList
const items = document.querySelectorAll("li");
console.log(items);
items.forEach((item) => (item.style.color = "green"));

// returns HTMLCollection
const items2 = document.getElementsByTagName("li");
console.log(items2);

// forEach won't work with HTMLCollection: transform to array before
[...items2].forEach((item) => (item.style.color = "blue"));
