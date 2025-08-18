"use strict";

/**
 * Backward Loops
 */
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

console.log("========");

// nested loop
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log("************");
}
