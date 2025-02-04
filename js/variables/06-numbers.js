/*
NUMBERS

- sveikieji, desimtainiai
- teigiami, neigiami
- Infinity, NaN (skaiciau tipo klaida)

*/

const n1 = 1;
console.log(n1);

const n2 = -5;
console.log(n2);

const n3 = 3.14;
console.log(n3);

const n4 = -2.727;
console.log(n4);

const n5 = Infinity;
console.log(n5);

const n6 = -Infinity;
console.log(n6);

const n7 = -999999999999;
console.log(n7);

const n8 = NaN;
console.log(n8);

console.log('labas rytas' / 2);
console.log('labas rytas' * 2);
console.log('labas rytas' - 2);
console.log('labas rytas' % 2);
console.log('labas rytas' + 2);

console.log(7 / 5);
console.log(7 - 5);
console.log(7 % 5);
console.log(7 + 5);
console.log(7 * 5);
console.log(7 ** 5);

console.log(2 ** 0);
console.log(2 ** 1);
console.log(2 ** 2);
console.log(2 ** 3);
console.log(2 ** 4);
console.log(2 ** 5);

console.clear();

// Math - matematiniu funkciju "biblioteka"

console.log('Matematines konstantos');
console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);

console.log();
console.log('Math.abs()');
console.log(Math.abs(5));
console.log(Math.abs(-5));

console.log();
console.log('Trigonometrija - naudoja radianus');
console.log(Math.sin(0));
console.log(Math.cos(0));
console.log(Math.tan(0));

console.log();
console.log('Kubine saknis');
console.log(Math.cbrt(8));
console.log(Math.cbrt(27));
console.log(Math.cbrt(64));

console.log();
console.log('Apvalinimas: ceil');
console.log(Math.ceil(10));
console.log(Math.ceil(9.5));
console.log(Math.ceil(9.9));
console.log(Math.ceil(9.1));
console.log(Math.ceil(9.0000001));

console.log();
console.log('Apvalinimas: floor');
console.log(Math.floor(10));
console.log(Math.floor(9.5));
console.log(Math.floor(9.999999));
console.log(Math.floor(9.000001));
console.log(Math.floor(9));

console.log();
console.log('Apvalinimas: round');
console.log(Math.round(10));
console.log(Math.round(9.5));
console.log(Math.round(9.99999));
console.log(Math.round(9.1));
console.log(Math.round(9.4));
console.log(Math.round(9.4999999999));

console.log();
console.log('"Apvalinimas": trunc');
console.log(Math.trunc(10));
console.log(Math.trunc(9.5));
console.log(Math.trunc(9.99999));
console.log(Math.trunc(9.000001));
console.log(Math.trunc(-10));
console.log(Math.trunc(-9.5));
console.log(Math.trunc(-9.99999));
console.log(Math.trunc(-9.00001));