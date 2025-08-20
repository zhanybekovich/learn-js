"use strict";

const restaurant = {
  name: "Classico Italiano",
  address: "Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  orderDelivery: function ({ time, address }) {
    console.log(time, address);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

// returns 2nd value if 1st is falsy
console.log(0 || "John");
console.log(1 || "John");
console.log(-1 || "John");
console.log("" || "John");
console.log(undefined || "John");
console.log(null || "John");
console.log([] || "John");
console.log({} || "John");

console.log("====");

// returns 1st if it is falsy or the 2nd
console.log(0 && "John");
console.log(1 && "John");
console.log(-1 && "John");
console.log("" && "John");
console.log(undefined && "John");
console.log(null && "John");
console.log([] && "John");
console.log({} && "John");
