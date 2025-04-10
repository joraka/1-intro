const text = "labai ilgas tekstas";
const text2 = "123456789";

// If no character is found, [ ] returns undefined, while charAt() returns an empty string.

function charAt(string, index) {
  if (index < 0) index = string.length + index;
  if (index >= 0 && index < string.length) return string[index];
  return "";
}


console.log([
  charAt(text, 200),
  charAt(text, 0),
  charAt(text, 1),
  charAt(text, 2),
  charAt(text, -2),
  charAt(text, -5),
  charAt(text, -500),
]);

// time = Date.now();
// const cycleCount = 200000000
// for (let i = 0; i < cycleCount; i++) {

// }
// console.log(Date.now() - time);
