// https://www.codewars.com/kata/5629db57620258aa9d000014/train/javascript

// Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.

// s1 = "A aaaa bb c"
// s2 = "& aaa bbb c d"
// s1 has 4 'a', 2 'b', 1 'c'
// s2 has 3 'a', 3 'b', 1 'c', 1 'd'

// So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

// We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

// The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

// In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

/**
 * @param {string} s1
 * @param {string} s2
 */
function mix(s1, s2) {
  const convert = (str) => {
    const obj = new Map();
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char >= "a" && char <= "z") {
        if (obj.has(char)) {
          obj.set(char, obj.get(char) + 1);
        } else {
          obj.set(char, 1);
        }
      }
    }
    return obj;
  };

  const obj1 = convert(s1);
  const obj2 = convert(s2);
  const letterSet = [...new Set([...obj1.keys(), ...obj2.keys()])];
  return letterSet
    .reduce((acc, letter) => {
      const count1 = obj1.get(letter) || 0;
      const count2 = obj2.get(letter) || 0;
      if ((count1 === 1 && count2 === 1) || count1 + count2 === 1) return acc;
      if (count1 === count2) return [...acc, [count1, `=:${letter.repeat(count1)}`, letter, "="]];
      if (count1 > count2) return [...acc, [count1, `1:${letter.repeat(count1)}`, letter, "1"]];
      return [...acc, [count2, `2:${letter.repeat(count2)}`, letter, "2"]];
    }, [])
    .sort((a, b) => {
      if (b[0] === a[0]) {
        if (a[3] === "=" && b[3] === "=") return a[2].localeCompare(b[2]);
        if (a[3] === "=") return 1;
        if (b[3] === "=") return -1;
        return a[3].localeCompare(b[3]) || a[2].localeCompare(b[2]);
      }
      return b[0] - a[0];
    })
    .map(([_, str]) => str)
    .join("/");
}

// const s1 = "A aaaa bb c";
// const s2 = "& aaa bbb c d";
// console.log(mix(s1, s2));

console.log(
  mix("my&friend&Paul has heavy hats! &", "my friend John has many many friends &") +
    "\n2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"
);
console.log(mix("Are they here", "yes, they are here") + "\n2:eeeee/2:yy/=:hh/=:rr");
