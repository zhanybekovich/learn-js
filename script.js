"use strict";

// closure
function test() {
  let num = 1;

  return function () {
    console.log(num);
    num++;
  };
}

let func = test();
func();
func();

let anotherFunc = test();
anotherFunc();
anotherFunc();

func();
anotherFunc();
