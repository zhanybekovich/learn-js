"use strict";

// practice
// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }

// for (let i = 100; i >= 1; i--) {
//   console.log(i);
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// const arr = [];
// for (let i = 1; i <= 10; i++) {
//   arr.push("x");
// }
// console.log(arr);

// const arr = [];
// for (let i = 1; i <= 10; i++) {
//   arr.push(i);
// }
// console.log(arr);

// const arr = [12, 45, 11, 0, 2, 93, 23, 9];
// for (let el of arr) {
//   if (el > 0 && el < 10) {
//     console.log(el);
//   }
// }

// const arr = [12, 45, 11, 0, 2, 93, 23, 9];
// let hasFive = false;
// for (let el of arr) {
//   if (el === 5) {
//     hasFive = true;
//     break;
//   }
// }
// hasFive ? console.log(1) : console.log(-1);

// const arr = [12, 45, 11, 0, 2, 93, 23, 9];
// let sum = 0;
// for (let el of arr) {
//   sum += el * el;
// }
// console.log(sum);

// const arr = [12, 45, 11, 0, 2, 93, 23, 9];
// let sum = 0;
// for (let el of arr) {
//   sum += el;
// }
// console.log(sum / arr.length);

// let a = 3;
// let factorial = 1;
// if (a < 0) {
//   console.log("No factorial for negative number");
// } else {
//   for (let i = 1; i <= a; i++) {
//     factorial *= i;
//   }
//   console.log(factorial);
// }

// const numbers = [];
// for (let i = 10; i >= 1; i--) {
//   numbers.push(i);
// }
// console.log(numbers);

// const mixedNumbers = [20, -1, 12, -4, 45, -5];
// let sum = 0;
// for (let n of mixedNumbers) {
//   if (n > 0) {
//     sum += n;
//   }
// }
// console.log(sum);

// const arr = [10, 20, 30, 50, 235, 3000];
// for (let el of arr) {
//   el = String(el);
//   if (el[0] === "1" || el[0] === "2" || el[0] === "5") {
//     console.log(+el);
//   }
// }

// const arr = [10, 20, 30, 50, 235, 3000];
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

// const arr = [0, 1, 10, 20, 30, 50, 235, 3000];
// for (let i = 0; i <= arr.length - 1; i++) {
//   if (arr[i] === i) {
//     console.log(arr[i]);
//   }
// }

// const arr = [0, 1, 10, 20, 30, 50, 235, 3000];
// for (let el of arr) {
//   document.write(`${el} <br>`);
// }

// const weekDays = [
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
//   "sunday",
// ];
// for (let day of weekDays) {
//   if (day === "saturday" || day === "sunday") {
//     document.write(`<b>${day}</b><br>`);
//   } else {
//     document.write(`${day}<br>`);
//   }
// }

// const weekDays = [
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
//   "sunday",
// ];

// const day = "sunday";

// for (let weekDay of weekDays) {
//   if (weekDay === day) {
//     document.write(`<i>${weekDay}</i></br>`);
//   } else {
//     document.write(`${weekDay}<br>`);
//   }
// }

// let obj = {
//   employee1: 100,
//   employee2: 200,
//   employee3: 300,
//   employee4: 400,
//   employee5: 500,
//   employee6: 600,
//   employee7: 700,
// };

// for (let key in obj) {
//   obj[key] += obj[key] * 0.1;
// }

// console.log(obj);

// let obj = {
//   employee1: 100,
//   employee2: 200,
//   employee3: 300,
//   employee4: 400,
//   employee5: 500,
//   employee6: 600,
//   employee7: 700,
// };

// for (let key in obj) {
//   if (obj[key] <= 400) {
//     obj[key] += obj[key] * 0.1;
//   }
// }
// console.log(obj);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let obj = {};

// for (let i = 0; i <= arr1.length - 1; i++) {
//   obj[arr1[i]] = arr2[i];
// }
// console.log(obj);

// let obj = { 1: 6, 2: 7, 3: 8, 4: 9, 5: 10 };
// let keySum = 0;
// let valSum = 0;
// for (let key of Object.keys(obj)) {
//   keySum += +key;
//   valSum += +obj[key];
// }
// console.log(keySum / valSum);

// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// const objKeys = Object.keys(obj);
// const objValues = Object.values(obj);
// console.log(objKeys);
// console.log(objValues);

// let obj = {
//   1: 125,
//   2: 225,
//   3: 128,
//   4: 356,
//   5: 145,
//   6: 281,
//   7: 452,
// };
// const keys = [];
// for (let key in obj) {
//   let current = String(obj[key]);
//   if (current[0] === "1" || current[0] === "2") {
//     keys.push(+current);
//   }
// }
// console.log(keys);

// let arr = ["a", "b", "c", "d", "e"];
// const obj = {};
// for (let i = 0; i <= arr.length - 1; i++) {
//   obj[i + 1] = arr[i];
// }
// console.log(obj);

let arr = ["a", "b", "c", "d", "e"];
const obj = {};
for (let i = 0; i <= arr.length - 1; i++) {
  obj[arr[i]] = i + 1;
}
console.log(obj);
