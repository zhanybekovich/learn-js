"use strict";

// practice
// 1
function getDividers(n) {
  const dividers = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      dividers.push(i);
    }
  }

  return dividers;
}
console.log(getDividers(12));
console.log(getDividers(14));

// 2
function getCommonDividers(a, b) {
  const dividers = [];
  for (let i = 1; i <= a; i++) {
    if (a % i === 0 && b % i === 0) {
      dividers.push(i);
    }
  }

  return dividers;
}
console.log(getCommonDividers(4, 2));

// 3
function calcSumOfDigits(n) {
  let str = String(n);
  let sum = 0;
  for (let d of str) {
    sum += +d;
  }

  return sum;
}
console.log(calcSumOfDigits(12));
console.log(calcSumOfDigits(1));

// 4
function getWeekDay(n) {
  let day = "";
  switch (n) {
    case 1:
      day = "monday";
      break;
    case 2:
      day = "tuesday";
      break;
    case 3:
      day = "wednesday";
      break;
    case 4:
      day = "thursday";
      break;
    case 5:
      day = "friday";
      break;
    case 6:
      day = "saturday";
      break;
    case 7:
      day = "sunday";
      break;
    default:
      day = "unknown day";
      break;
  }

  return day;
}
console.log(getWeekDay(3));

// 5
