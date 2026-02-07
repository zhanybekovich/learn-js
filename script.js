"use strict";

// practice
let str = "";

for (let i = 1; i <= 5; i++) {
  str += "-";
}
console.log(str);

let numStr = "";
for (let i = 1; i <= 9; i++) {
  numStr += i;
}
console.log(numStr);

numStr = "";
for (let i = 9; i >= 1; i--) {
  numStr += i;
}
console.log(numStr);

str = "";
for (let i = 1; i <= 9; i++) {
  if (i === 1) {
    str += `-${i}-`;
  } else {
    str += `${i}-`;
  }
}
console.log(str);
