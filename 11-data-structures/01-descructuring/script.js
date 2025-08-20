"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

const numbers = [2, 3, 4, 5];
const a = numbers[0];
const b = numbers[1];

console.log(a, b);

// destructuring
const [x, y] = numbers;
console.log(x, y);

// const [first, second] = restaurant.categories;
// console.log(first, second);

// skipping
const [first, , third] = restaurant.categories;
console.log(first, third);
