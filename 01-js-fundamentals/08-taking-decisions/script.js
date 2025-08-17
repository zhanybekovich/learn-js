const age = 15;
const isOldEnough = age > 18;

// control structure
if (isOldEnough) {
  console.log("Sara can start driving license 🚗");
} else {
  console.log(`Wait another ${18 - age} years!😢`);
}

// conditionally re-assigning variable
const birthYear = 1991;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
