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

  // destructuring in method params
  orderDelivery: function ({ time, address }) {
    console.log(time, address);
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Hello 14",
});

// destructuring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// destructuring with renaming variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
