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
]);
console.log([
  charAt(text2, 99),
  charAt(text2, -99),
  charAt(text2, 0),
  charAt(text2, 1),
  charAt(text2, -1),
  charAt(text2, -2),
  charAt(text2, 8),
]);
