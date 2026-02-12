"use strict";

// childNodes
const elem = document.querySelector("#elem");

console.log(elem.childNodes);

for (let item of elem.childNodes) {
  console.log(item.textContent);
  // 1 - element
  // 3 - text
  // 8 - comments
}
