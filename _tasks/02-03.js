console.log(true && false); //false
console.log(true || false); //true
console.log(false || (true && false)); // false
console.log(5 > 3 && 10 < 20); //true
console.log(5 > 10 || 10 > 5); //true

//--------
console.log('---');
console.log(!true); // false
console.log(!(5 > 3)); // false
console.log(!(false || true)); // false
console.log(!(10 < 5 && 5 > 2)); // true

//--------
console.log('---');
//Sudėtingesnis. Write a function that checks if a number is both greater than 10 and less than 100.
console.log('Sudėtingesnis. Write a function that checks if a number is both greater than 10 and less than 100.');

const num = 11;
if (num > 10 && num < 100) {
  console.log("number is both greater than 10 and less than 100");
}

//--------
console.log('---');
console.log('Sudėtingesnis. Write a function that takes age and hasLicense as arguments');
// Sudėtingesnis. Write a function that takes age and hasLicense as arguments and returns:
// "Can drive" if the person is 18 or older AND has a license
// "Cannot drive" otherwise
const age = 10;
const hasLicense = true;
if (age >= 18 && hasLicense) {
  console.log("can drive");
} else {
  console.log("cannot drive");
}
