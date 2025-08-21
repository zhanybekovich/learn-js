"use strict";

const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[6]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  address: "Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours,

  orderDelivery({ time, address }) {
    return { time, address };
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

// empty set
const mySet = new Set();
console.log(mySet);

// creating set
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(ordersSet);

// size, sets do not have length
console.log(ordersSet.size);

// checking
console.log(ordersSet.has("Pizza"));

// add
ordersSet.add("Garlic Bread");
console.log(ordersSet);

// delete
ordersSet.delete("Pizza");
console.log(ordersSet);

// delete all
// ordersSet.clear();
// console.log(ordersSet);

// looping
for (const order of ordersSet) {
  console.log(order);
}

// example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];

console.log(staffUnique);
