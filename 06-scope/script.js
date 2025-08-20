"use strict";

/**
 * Scoping: how our programs's variables are organized and accessed.
 *
 * Lexical scoping: scoping is controlled by placement of functions and blocks in the code
 *
 * Scope: space or environment in which a certain variable is declared.
 * There is global scope, function scope, and block scope.
 */

// global
const user = "john";

// function scope
function myFunc() {
  // functions have access to vars in global scope
  console.log(user);

  const myFuncScopedVar = "test";
}

// this is error
// console.log(myFuncScopedVar);

// block scope
if (true) {
  const iamInBlockScope = "me";
}

// this is also error
// console.log(iamInBlockScope);
