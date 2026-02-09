"use strict";

// map
// 1
const numbers = [1, 2, 3, 4, 5];
const sqrts = numbers.map((x) => Math.sqrt(x));
console.log(sqrts);

// 2
const names = ["john", "pete", "bob", "patrick"];
const transformedNames = names.map((name) => name + "!");
console.log(transformedNames);

// 3
const names2 = ["john", "pete", "bob", "patrick"];
const reversedNames = names2.map((name) => name.split("").reverse().join(""));
console.log(reversedNames);

// 4
const arr = ["123", "456", "789"];
const transformedArr = arr.map((item) => item.split("").map((item) => +item));
console.log(transformedArr);

// 5
const numbers2 = [1, 2, 3, 4, 5];
const transformedNumbers = numbers2.map((item, index) => item * index);
console.log(transformedNumbers);
