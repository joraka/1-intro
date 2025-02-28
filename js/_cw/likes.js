// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

function likes(names) {
  if (names.length > 3)
    return `${names.splice(0, 2).join(", ")} and ${names.length} others like this`;
  else if (names.length > 2) return `${names.splice(0, 2).join(", ")} and ${names[0]} like this`;
  else if (names.length > 1) return `${names[0]} and ${names[1]} like this`;
  else if (names.length > 0) return `${names[0]} likes this`;
  else return "no one likes this";
}

// function likes(names) {
//   if (names.length === 0) return "no one likes this";
//   if (names.length === 1) return `${names[0]} likes this`;
//   if (names.length === 2) return `${names.join(" and ")} like this`;
//   if (names.length === 3) return `${names.splice(0, 2).join(", ")} and ${names[0]} like this`;
//   return `${names.splice(0, 2).join(", ")} and ${names.length} others like this`;
// }

// function likes(names) {
//     switch(names.length){
//         case 0: return "no one likes this";
//         case 1: return `${names[0]} likes this`;
//         case 2: return `${names.join(" and ")} like this`;
//         case 3: return `${names.splice(0, 2).join(", ")} and ${names[0]} like this`;
//         default: return `${names.splice(0, 2).join(", ")} and ${names.length} others like this`;
//     }
// }

// assert.strictEqual(likes([]), "no one likes this");
// assert.strictEqual(likes(["Peter"]), "Peter likes this");
// assert.strictEqual(likes(["Jacob", "Alex"]), "Jacob and Alex like this");
// assert.strictEqual(likes(["Max", "John", "Mark"]), "Max, John and Mark like this");
// assert.strictEqual(likes(["Alex", "Jacob", "Mark", "Max"]), "Alex, Jacob and 2 others like this");

console.log(0, likes([]));
console.log(1, likes(["Bob"]));
console.log(2, likes(["Alex", "Jacob"]));
console.log(3, likes(["Alex", "Jacob", "Bob"]));
console.log(4, likes(["Alex", "Jacob", "Mark", "Max"]));

//solutions from cw
// function likes(names) {
//     return {
//       0: 'no one likes this',
//       1: `${names[0]} likes this`,
//       2: `${names[0]} and ${names[1]} like this`,
//       3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
//       4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
//     }[Math.min(4, names.length)]
//   }
