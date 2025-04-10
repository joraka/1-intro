// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).
// Consult the solution set-up for the exact data structure implementation depending on your language.
// Example:
// ["abracadabra", [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]],
// ["Code Wars",  [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]],
// ["233312", [['2', 2], ['3', 3], ['1', 1 ]]],

const orderedCount = function (text) {
  const allLetters = text.split("");
  const lettersSet = [...new Set(allLetters)];
  return lettersSet.reduce(
    (acc, val) => [...acc, [val, allLetters.filter((v) => v === val).length]],
    []
  );
};

console.log("orderedCount", orderedCount("abracadabra"));

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// [[], 0],
// [[undefined], 0],
// [[null], 0],
// [[false], 0],
// [[true], 1],
// [[undefined,null,false,true], 1],
// [[undefined,null,false,true,true,false,null,undefined], 2],
// [[true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true], 17]

function countSheeps(sheep) {
  return sheep.reduce((acc, val) => acc + (!!val ? 1 : 0), 0);
}

//https://www.codewars.com/kata/5704aea738428f4d30000914/
// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.

function tripleTrouble(one, two, three) {
  let string = "";
  for (let i = 0; i < one.length; i++) {
    string += one[i] + two[i] + three[i];
  }
  return string;
}

console.log(tripleTrouble("aa", "bb", "cc"));

// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
// Example(Input --> Output)
// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]

// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
// Note: String will have at least one element; words will always be separated by a space.
function addLength(str) {
  const strArray = str.split(" ");
  for (let i = 0; i < strArray.length; i++) {
    strArray[i] += " " + strArray[i].length;
  }
  return strArray;
}

console.log(addLength("apple ban"));

// https://www.codewars.com/kata/57ab2d6072292dbf7c000039/train/javascript

function correctPolishLetters(string) {
  const from = "ąćęłńóśźżĄĆĘŁŃÓŚŹŻ";
  const to = "acelnoszzACELNOSZZ";
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    const foundIndex = from.indexOf(string[i]);
    newString += foundIndex === -1 ? string[i] : to[foundIndex];
  }
  return newString;
}

console.log(correctPolishLetters("Jędrzej Błądziński"));
// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z

//https://www.codewars.com/kata/56a1c074f87bc2201200002e/train/javascript
// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

// For example:

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]

function smaller(nums) {
  return nums.map((n1, i) => nums.slice(i).filter((n2) => n2 < n1).length);
}

// console.log(smaller([5, 4, 3, 2, 1]));
// console.log(smaller([ +0, 1, 2 ]));
// console.log(smaller([5, 4, 7, 9, 2, 4, 1, 4, 5, 6]));

//---------------
//https://www.codewars.com/kata/56a1c63f3bc6827e13000006/
// This is a hard version of How many are smaller than me?. If you have troubles solving this one, have a look at the easier kata first.

// Write

// function smaller(arr)

// that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.

// For example:

// smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
// smaller([1, 2, 0]) === [1, 1, 0]

// Note

// Your solution will be tested against inputs with up to 100_000 elements

// function smaller2(nums) {
//   return nums.map((n1, i) => nums.filter((n2, i2) => i < i2 && n2 < n1).length);
// }

// function smaller3(nums) {
//   return nums.map((n1, i) => {
//     let count = 0;
//     for (let j = i; j < nums.length; j++) {
//       if (n1 > nums[j]) count++;
//     }
//     return count;
//   });
// }

// function smaller4(nums) {
//   const numObj = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (!numObj.hasOwnProperty(nums[i])) numObj[nums[i]] = 0;

//     for (const key in numObj) {
//       if (nums[i] >= Number(key)) continue;
//       numObj[key]++;
//     }
//   }

//   return nums.map((n1, i) => {
//     let count = 0;
//     for (let j = i, c = 0; j < nums.length && c <= numObj[n1]; j++) {
//       if (n1 > nums[j]) {
//         count++;
//         c++;
//       }
//     }
//     return count;
//   });
// }

// function smaller5(nums) {
//   const arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     let count = 0;
//     for (let j = i; j < nums.length; j++) {
//       if (nums[i] > nums[j]) count++;
//     }
//     arr.push(count);
//   }
//   return arr;
// }

// function smaller6(nums) {
//   const arr = [];
//   const sortedNumbers = nums
//     .slice()
//     .map((v, i) => [v, i])
//     .sort((a, b) => b[0] - a[0]);
//   const numMap = new Map();

//   for (let i = 0; i < sortedNumbers.length; i++) {
//     const [num, numIndex] = sortedNumbers[i];
//     if (numMap.has(num)) {
//       if (numMap.get(num) > i) numMap.set(num, i);
//     } else {
//       numMap.set(num, i);
//     }
//   }

//   for (let i = 0; i < nums.length; i++) {
//     let count = 0;
//     const lastIndex = numMap.get(nums[i]);
//     for (let j = lastIndex; j < sortedNumbers.length; j++) {
//       if (i < sortedNumbers[j][1] && nums[i] > sortedNumbers[j][0]) {
//         count++;
//       }
//     }
//     arr.push(count);
//   }
//   return arr;
// }

// function smaller7(nums) {
//   const arr = [];
//   const trailingSum = {};
//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (!trailingSum.hasOwnProperty(nums[i])){
//         trailingSum[nums[i]] = 1;
//     }else{
//         trailingSum[nums[i]]++;
//     }

//     let sum = 0;
//     for (const key in trailingSum) {
//       if (Number(key) < nums[i]) {
//         sum += trailingSum[key];
//       }
//     }
//     arr.push(sum);
//   }

//   return arr.reverse();
// }

// function smaller8(nums) {
//   const arr = [];
//   const trailingSum = new Map();
//   for (let i = nums.length - 1; i >= 0; i--) {
//     trailingSum.set(nums[i], (trailingSum.get(nums[i]) || 0) + 1);

//     let sum = 0;
//     trailingSum.forEach((num, key) => {
//       if (key < nums[i]) {
//         sum += num;
//       }
//     });

//     arr.push(sum);
//   }
//   return arr.reverse();
// }

function smaller9(nums) {
  const arr = [];
  const countArr = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    let sum = 0;
    const found = countArr.find((v) => v[0] === nums[i]);
    if (!found) {
      countArr.push([nums[i], 1]);
    } else {
      found[1]++;
    }

    for (let j = 0; j < countArr; j++) {
      if (countArr[j][0] < nums[i]) {
        sum += countArr[j][1];
      }
    }
    console.log(countArr);
    arr.push(sum);
  }

  return arr.reverse();
}

const getRandomInt = (max) => Math.floor(Math.random() * max);
const getRandomArr = (count, max) => new Array(count).fill(0).map(() => getRandomInt(max));

let timeStart = Date.now();
// console.log(
//   "smaller9([ 2, 2, +0, +0, +0 ])",
//   smaller9([2, 2, +0, +0, +0]),
//   "turi buti",
//   [3, 3, +0, +0, +0]
// );
console.log("smaller9([5, 4, 3, 2, 1]))", smaller9([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);
console.log("smaller9([1, 2, 0]))", smaller9([1, 2, 0]), [1, 1, 0]);
if (
  JSON.stringify(smaller9([5, 4, 3, 2, 1])) === "[4,3,2,1,0]" &&
  JSON.stringify(smaller9([+0, 1, 2])) === "[0,0,0]" &&
  JSON.stringify(smaller9([1, 2, 0])) === "[1,1,0]" &&
  JSON.stringify(smaller9([2, 2, +0, +0, +0])) === "[3,3,0,0,0]"
) {
  //   smaller9(getRandomArr(10000, 100));
} else {
  console.error("invalid function");
}
console.log("time -> " + (Date.now() - timeStart));
