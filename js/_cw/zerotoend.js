//https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// function moveZeros(arr) {
//   return arr.sort((a, b) => (a === 0 ? 1 : b === 0 ? -1 : 1));
// }

const moveZeros = (arr) => arr.sort((a, b) => (a === 0 ? 1 : b === 0 ? -1 : 1));

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]), [1, 2, 1, 1, 3, 1, +0, +0, +0, +0]);
