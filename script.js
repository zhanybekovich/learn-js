"use strict";

// practice
for (let i = 10; i <= 1000; i++) {
  let str = String(i);

  console.log(str[0]);
}

console.log("+++++++++++++");

for (let i = 10; i <= 1000; i++) {
  let str = String(i);

  console.log(+str[0] + +str[1]);
}

console.log("+++++++++++++");

for (let i = 10; i <= 1000; i++) {
  let str = String(i);

  if (str[0] == "1") {
    console.log(str);
  }
}

console.log("+++++++++++++");

for (let i = 10; i <= 1000; i++) {
  let str = String(i);

  if (+str[0] + +str[1] === 5) {
    console.log(str);
  }
}
