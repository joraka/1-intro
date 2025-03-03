//https://www.codewars.com/kata/52223df9e8f98c7aa7000062/train/javascript

// How can you tell an extrovert from an introvert at NSA?
// Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
// According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

// For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

// Test examples:

// "EBG13 rknzcyr." -> "ROT13 example."

// "This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"

{
  console.log({
    charcodes: {
      a: 'a'.charCodeAt(0),
      z: 'z'.charCodeAt(0),
      A: 'A'.charCodeAt(0),
      Z: 'Z'.charCodeAt(0),
    },
  });

  const str1 = 'This is my first ROT13 excercise!';
  const str2 = 'Guvf vf zl svefg EBG13 rkprepvfr!';
  console.log(
    str1
      .split('')
      .map((v, i) => [
        v,
        v.charCodeAt(0),
        str2[i].charCodeAt(0),
        str2[i].charCodeAt(0) - v.charCodeAt(0),
      ])
  );
}

function rot13(str) { 
  return str
    .split('')
    .map((v, i) => {
      const charCode = v.charCodeAt(0);
      if (charCode >= 97 && charCode <= 122) {
        return String.fromCharCode(charCode + (charCode + 13 <= 122 ? 13 : -13));
      } else if (charCode >= 65 && charCode <= 90) {
        return String.fromCharCode(charCode + (charCode + 13 <= 90 ? 13 : -13));
      }
      return v;
    })
    .join('');
}

console.log(rot13('EBG13 rknzcyr.'), '\nROT13 example.');
console.log(rot13('This is my first ROT13 excercise!'), '\nGuvf vf zl svefg EBG13 rkprepvfr!');
