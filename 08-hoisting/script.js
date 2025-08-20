"use strict";

/**
 * Hoisting
 */

// var hoisted with temporarily dead zone with value undefined
console.log(me);

// errors
// console.log(job);
// console.log(year);

var me = "john";
let job = "teacher";
const year = 1991;

// hoisting in functions
// function declaration hoisted
addDeclaration();

// func expression not hoisted
// addExpression();

// arrow functions also not hoisted
// myFunc();

function addDeclaration() {
  console.log(2 + 3);
}

const addExpression = function () {
  console.log(5 + 5);
};

const myFunc = () => {
  console.log(10 + 10);
};
