// logical operators

const hasDriversLicense = true;
const hasGoodVision = true;

// AND
console.log(hasDriversLicense && hasGoodVision);

// OR
console.log(hasDriversLicense || hasGoodVision);

// NOT !
console.log(!hasDriversLicense);
console.log(!hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log("Sara is able to drive");
} else {
  console.log("Someone else should drive");
}
