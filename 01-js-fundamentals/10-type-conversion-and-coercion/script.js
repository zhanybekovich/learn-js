// type conversion: when we manually convert types
const inputYear = "1991";
console.log(Number(inputYear) + 18);

console.log(Number("john"));
console.log(String(35));
console.log(Boolean("hello"));

// type coercion
console.log("I'm " + 23 + " years old.");
console.log("23" - 3);
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);
