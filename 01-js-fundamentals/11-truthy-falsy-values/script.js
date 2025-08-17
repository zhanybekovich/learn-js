// falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// anything that is not falsy is truthy
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean("a"));

// examples
const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("Yay height is defined");
} else {
  console.log("Provide height value!");
}
