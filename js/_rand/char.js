function getLetters(str) {
  const charLowerA = "a".charCodeAt(0);
  const charLowerZ = "z".charCodeAt(0);
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    const letterChar = str[i].toLowerCase().charCodeAt(0);
    if (letterChar >= charLowerA && letterChar <= charLowerZ) {
      newString += str[i];
    }
  }
  return newString;
}

function getLettersNoUpper(str) {
  const charLowerA = "a".charCodeAt(0);
  const charLowerZ = "z".charCodeAt(0);
  const charUpperA = "A".charCodeAt(0);
  const charUpperZ = "Z".charCodeAt(0);
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    const letterChar = str[i].charCodeAt(0);
    if (
      (letterChar >= charLowerA && letterChar <= charLowerZ) ||
      (letterChar >= charUpperA && letterChar <= charUpperZ)
    ) {
      newString += str[i];
    }
  }
  return newString;
}

function getLettersHardcoded(str) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    const letterChar = str[i].charCodeAt(0);
    if ((letterChar >= 97 && letterChar <= 122) || (letterChar >= 65 && letterChar <= 90)) {
      newString += str[i];
    }
  }
  return newString;
}

function getNumbers(str) {
  const from = "0".charCodeAt(0);
  const to = "9".charCodeAt(0);
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    const letterChar = str[i].charCodeAt(0);
    if (letterChar >= from && letterChar <= to) {
      newString += str[i];
    }
  }
  return newString;
}

function getNumbersHardcoded(str) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    const letterChar = str[i].charCodeAt(0);
    if (letterChar >= 48 && letterChar <= 57) {
      newString += str[i];
    }
  }
  return newString;
}

console.log(getLetters("kebabas123"));
let randString = "kAebabas12asdFWSf3089098faZz9we4f88awdfsFd849a0f990";
console.log(getLetters(randString));
console.log(getLettersNoUpper(randString));
console.log(getNumbers(randString));
console.log(getNumbersHardcoded(randString));
console.log(getLettersHardcoded(randString));

console.log();