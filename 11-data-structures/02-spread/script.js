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

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// spread
const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// creating shallow copy
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// join arrays
const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(fullMenu);

// spread works with iterables (arrays, strings, maps, sets)
const str = "john";
const letters = [...str];
console.log(letters);

// usage example
const ingredients = [
  prompt("Lets make pasta! Ingredient1?"),
  prompt("Lets make pasta! Ingredient2?"),
  prompt("Lets make pasta! Ingredient3?"),
];

restaurant.orderPasta(...ingredients);

// spread on objects
const newRestaurant = { ...restaurant };
console.log(newRestaurant);
