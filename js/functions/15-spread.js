const a = [1, 2, 3, 4];
const b = [...a];
console.log('a:', a, 'b:', b);

a[0] = 99;
console.log('a:', a, 'b:', b);

b[3] = 88;
console.log('a:', a, 'b:', b);

const c = [1, 11];
const d = [2, 22];
const e = [3, 33];

const f1 = [44, ...c, ...c, 444];
console.log(f1);

const f2 = [...c, ...d, ...e, 5];
console.log(f2);

const f3 = [...c, 5, ...e, ...d];
console.log(f3);

const c2 = [...c, ...c];
console.log(c2);

const c4 = [...c2, ...c2];
console.log(c4);

console.log(1, 11);
console.log(...c);
console.log(c);

console.clear();

const g = [[1, 11], [2, 22], [3, 33]];
console.log(g);

const h = [...g];
console.log(h);

g[0][0] = 9;
console.log(g);
console.log(h);

const j = [[...g[0]], [...g[1]], [...g[2]]];
console.log(j);

g[0][1] = 777;
console.log(g);
console.log(h);
console.log(j);


console.clear();

const objA = { name: 'Jonas' };
const objA2 = { name: 'Maryte' };
const objA3 = { name: 'Petras' };
const objB = { age: 99 };
const objC = { isMarried: true };

const student = { ...objA, ...objB, ...objC };
console.log(student);

const objAA = { ...objA, ...objA3 };
console.log(objAA);

const objD1 = { title: 'Labas', desc: 'rytas' };
const objD2 = { country: 'Lietuva' };
const objD3 = { desc: 'vakaras' };

const objD = {
    ...objD3,
    ...objD2,
    ...objD1,
};
console.log(objD);
