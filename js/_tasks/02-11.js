//https://github.com/bradtraversy/traversy-js-challenges/tree/main/01-basic-challenges-1

/**
 * Returns the sum of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The sum of the two numbers.
 */
function getSum(a, b) {
  return a + b;
}

console.log(`2 + 5 = ${getSum(2, 5)}`);

//------------------------------------------------------------------

/**
 * Returns the result of a calculation.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @param {string} operator - The operator to use in the calculation.
 * @returns {number} - The result of the calculation.
 */
function calculator(num1, num2, operator) {
  switch (operator) {
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    case "+":
      return num1 + num2;
    case "/":
      if (num2 === 0) return "Negalima padalinti iš 0";
      return num1 / num2;
    case "**":
      return num1 ** num2;
    default:
      return "Įvestas netinkamas operatorius, galimi variantai: *, -, +, **";
  }
}

console.log(`2/2 -> ${calculator(2, 2, "agsdgs")}`);
console.log(`2+2 -> ${calculator(2, 2, "+")}`);
console.log(`2*2 -> ${calculator(2, 2, "*")}`);
console.log(`2-2 -> ${calculator(2, 2, "-")}`);
console.log(`2/2 -> ${calculator(2, 2, "/")}`);
console.log(`2**2 -> ${calculator(2, 2, "**")}`);
console.log(`2/0 -> ${calculator(2, 0, "/")}`);

//------------------------------------------------------------------

/**
 * Returns the number of occurrences of a character in a string.
 * @param {string} str - The string to search.
 * @param {string} char - The character to search for.
 * @returns {number} - The number of occurrences of the character in the string.
 */
function countOccurrences(str, char) {
  let occurances = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) occurances++;
  }
  return occurances;
}

const str = `kebab potato paratatarataa`;
console.log(`'${str}', raidė 't' rasta: ${countOccurrences(str, "t")} kartų`);
console.log(`'${str}', raidė 'b' rasta: ${countOccurrences(str, "b")} kartų`);
console.log(`'${str}', raidė 'b' rasta: ${countOccurrences(str, "x")} kartų`);

//------------------------------------------------------------------

/**
 * Returns the largest number in an array.
 * @param {number[]} arr - The array of numbers.
 * @returns {number} - The largest number in the array.
 */
function findMaxNumber(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
  }
  return max;
}

//----

const numArr = [5, 3, 7, 1, 6, 9, 100, 4, 66, 777, 1, 3, 4, 5, 6, 94, 5];
console.log(`Iš [${numArr}] didžiausias skaičius: ${findMaxNumber(numArr)}`);

function findLowNumber(arr) {
  let min = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

console.log(`Iš [${numArr}] mažiausias skaičius: ${findLowNumber(numArr)}`);

//------------------------------------------------------------------

/**
 * Returns a string with the first letter of each word capitalized.
 * @param {string} str - The string to capitalize.
 * @returns {string} - The string with the first letter of each word capitalized.
 */
function titleCase(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += i === 0 || str[i - 1] === " " ? str[i].toUpperCase() : str[i];
  }
  return newStr;
}

const str2 = "string with the first letter of each word";
console.log(`'${str2}' -> ${titleCase(str2)}`);

//----

function titleCase2(str) {
  const strArr = str.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
  }
  return strArr.join(" ");
}

console.log(`'${str2}' -> ${titleCase2(str2)}`);

//----

function titleCase3(str) {
  return str
    .split(" ")
    .map((_str) => _str.charAt(0).toUpperCase() + _str.slice(1))
    .join(" ");
}
console.log(`'${str2}' -> ${titleCase3(str2)}`);

//------------------------------------------------------------------

/**
 * Returns the reverse of a string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reverse of the string.
 */
function reverseString(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr = str[i] + newStr;
  }
  return newStr;
}

console.log(`${str2} -> ${reverseString(str2)}`);

//----

function reverseString2(str) {
  return str.split("").reverse().join("");
}

console.log(`${str2} -> ${reverseString2(str2)}`);

//----

function reverseString3(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(`${str2} -> ${reverseString3(str2)}`);

//------------------------------------------------------------------

/**
 * Returns true if the string is a palindrome.
 * @param {string} str - The string to check.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  _str = str.replace(/[^a-z]/gi, "").toLowerCase();
  const cutLength = _str.length % 2 === 0 ? _str.length / 2 : Math.floor(_str.length / 2);
  const firstHalf = _str.slice(0, cutLength);
  const secondHalf = _str.slice(-cutLength).split("").reverse().join("");
  return firstHalf === secondHalf;
}

console.log(`'madam' -> ${isPalindrome("madam")}`);
console.log(`'madama' -> ${isPalindrome("madama")}`);
console.log(`'hello' -> ${isPalindrome("hello")}`);
console.log(`'racecar' -> ${isPalindrome("racecar")}`);
console.log(
  `'A man, a plan, a canal, Panama' -> ${isPalindrome("A man, a plan, a canal, Panama")}`
);

//------------------------------------------------------------------

/**
 * Returns the number of vowels in a string.
 * @param {string} str - The string to search.
 * @returns {number} - The number of vowels in the string.
 */
function countVowels(str) {
  str = str.toLowerCase();
  const vowelsList = "aeiou";
  let vowelCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowelsList.includes(str[i])) vowelCount++;
  }
  return vowelCount;
}

console.log(`'hello' - ${countVowels("hello")} vowels`);
console.log(`'why' - ${countVowels("why")} vowels`);
console.log(`'mississippi' - ${countVowels("mississippi")} vowels`);
console.log(`'Hello, World!' - ${countVowels("Hello, World!")} vowels`);
console.log(`'JavaScript' - ${countVowels("JavaScript")} vowels`);
console.log(`'Coding Challenge' - ${countVowels("Coding Challenge")} vowels`);

//------------------------------------------------------------------
console.log('arr');

/**
 * Returns a new array with duplicates removed.
 * @param {any[]} arr - The array to remove duplicates from.
 * @returns {any[]} - The new array with duplicates removed.
 */
function removeDuplicates(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) newArr.push(arr[i]);
  }
  return newArr;
}

console.log(
  `${[1, 1, 2, 1, 1, 1, 1, 1, 1, 1]} -> ${removeDuplicates([1, 1, 2, 1, 1, 1, 1, 1, 1, 1])}`
);
console.log(
  `${[1, 1, 2, 1, 1, 2, 3, 4, 1, 1]} -> ${removeDuplicates([1, 1, 2, 1, 1, 2, 3, 4, 1, 1])}`
);

//----
console.log('set');

function removeDuplicates2(arr) {
  return Array.from(new Set(arr));
}

console.log(
  `${[1, 1, 2, 1, 1, 1, 1, 1, 1, 1]} -> ${removeDuplicates2([1, 1, 2, 1, 1, 1, 1, 1, 1, 1])}`
);
console.log(
  `${[1, 1, 2, 1, 1, 2, 3, 4, 1, 1]} -> ${removeDuplicates2([1, 1, 2, 1, 1, 2, 3, 4, 1, 1])}`
);

//----
console.log('obj');

function removeDuplicates3(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj.hasOwnProperty(arr[i])) obj[arr[i]] = true;
  }
  return Object.keys(obj);
}

console.log(
  `${[1, 1, 2, 1, 1, 1, 1, 1, 1, 1]} -> ${removeDuplicates3([1, 1, 2, 1, 1, 1, 1, 1, 1, 1])}`
);
console.log(
  `${[1, 1, 2, 1, 1, 2, 3, 4, 1, 1]} -> ${removeDuplicates3([1, 1, 2, 1, 1, 2, 3, 4, 1, 1])}`
);

//----
console.log('map');

function removeDuplicates4(arr) {
  const obj = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!obj.has(arr[i])) obj.set(arr[i], true);
  }
  return Object.keys(obj);
}

console.log(
  `${[1, 1, 2, 1, 1, 1, 1, 1, 1, 1]} -> ${removeDuplicates3([1, 1, 2, 1, 1, 1, 1, 1, 1, 1])}`
);
console.log(
  `${[1, 1, 2, 1, 1, 2, 3, 4, 1, 1]} -> ${removeDuplicates3([1, 1, 2, 1, 1, 2, 3, 4, 1, 1])}`
);
