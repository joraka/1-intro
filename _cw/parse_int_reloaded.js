// https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5/train/javascript

// In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

// Examples:

//     "one" => 1
//     "twenty" => 20
//     "two hundred forty-six" => 246
//     "seven hundred eighty-three thousand nine hundred and nineteen" => 783919

// Additional Notes:

//     The minimum number is "zero" (inclusively)
//     The maximum number, which must be supported is 1 million (inclusively)
//     The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
//     All tested numbers are valid, you don't need to validate them

function parseInt(string) {
  const numMap = new Map(
    [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
      'twenty',
    ].map((w, i) => [w, i])
  );
  [
    ['thirty', 30],
    ['forty', 40],
    ['fifty', 50],
    ['sixty', 60],
    ['seventy', 70],
    ['eighty', 80],
    ['ninety', 90],
  ].forEach(([n, v]) => numMap.set(n, v));

  const numArr = string.split(' ').reduce(
    (acc, val) => {
      if (val.includes('-')) {
        const [one, two] = val.split('-').map((v) => numMap.get(v));
        acc.rest += one + two;
      } else if (val === 'hundred') {
        acc.arr.push(acc.rest * 100);
        acc.rest = 0;
      } else if (val === 'thousand') {
        if (acc.arr.length > 0) {
          acc.arr.push((acc.rest + acc.arr[0]) * 1000);
          acc.arr.splice(0, 1);
        } else {
          acc.arr.push(acc.rest * 1000);
        }
        acc.rest = 0;
      } else if (val === 'million') {
        if (acc.arr.length > 0) {
          acc.arr.push((acc.rest + acc.arr[0]) * 1_000_000);
          acc.arr.splice(0, 1);
        } else {
          acc.arr.push(acc.rest * 1_000_000);
        }
        acc.rest = 0;
      } else {
        const inMap = numMap.get(val);
        if (inMap) acc.rest += inMap;
      }
      return acc;
    },
    { rest: 0, arr: [] }
  );

  const total = [...numArr.arr, numArr.rest].reduce((acc, val) => {
    return (acc += val);
  }, 0);

  return total;
}

console.log(parseInt('one'));
console.log(parseInt('twenty'));
console.log(parseInt('two hundred forty-six'));
console.log(parseInt('seven hundred eighty-three thousand nine hundred and nineteen'));
console.log(parseInt('seven hundred eighty-three'));
console.log(parseInt('seven hundred eighty-three thousand'));
console.log(parseInt('seven hundred eighty-three thousand nine'));
console.log(parseInt('one million one'));
console.log(parseInt('two thousand forty-six')); //2346
console.log(parseInt('one thousand three hundred thirty-three')); //2346

//     "one" => 1
//     "twenty" => 20
//     "two hundred forty-six" => 246
//     "seven hundred eighty-three thousand nine hundred and nineteen" => 783919
