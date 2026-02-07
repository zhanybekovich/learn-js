"use strict";

// practice
let str = "hello";

if (str[0] == "a") {
  console.log('starts with "a"');
} else {
  console.log('does not start with "a"');
}

if (str[str.length - 1] == "x") {
  console.log('ends with "x"');
} else {
  console.log('does not end with "x"');
}

if (str[0] == "a" || str[0] == "b") {
  console.log('starts with "a" or "b"');
} else {
  console.log('does not start with "a" or "b"');
}
