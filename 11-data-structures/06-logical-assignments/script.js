"use strict";

const rest1 = {
  name: "Capri",
  numGuests: 0,
};

const rest2 = {
  name: "La Pizza",
  owner: "Giovanni Rossi",
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// OR assignment operator : works with falsy values
// OR will assign value to a var if it has falsy values
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 20;

console.log(rest1);
console.log(rest2);

// NULLISH coalescing assignment
rest1.numGuests ??= 20;
rest2.numGuests ??= 20;

console.log(rest1);
console.log(rest2);

// AND assignment
rest1.owner &&= "Tonny";
rest2.owner &&= "Bonny";

console.log(rest1);
console.log(rest2);
