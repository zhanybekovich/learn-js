"use strict";

// childNodes
const elem = document.querySelector("#elem");

console.log(elem.childNodes);

for (let item of elem.childNodes) {
  console.log(item.nodeName);
}
