/*
Destruktūrizavimas
*/

const numbers = [10, 2];

const n1 = numbers[0];
const n2 = numbers[1];
const nRest = numbers.slice(2);

console.log(n1);
console.log(n2);
console.log(nRest);

const [m1, m2, m3, m4, m5, m6] = numbers;
console.log(m1, m2, m3, m4, m5, m6);

const [k1, , , , k3] = numbers;
console.log(k1, k3);

const [l1, l2, ...l] = numbers;
console.log(l1, l2, l);

const [...r] = numbers;
console.log(r);

const t = [...numbers];
console.log(t);

const numbersList = [9, 99, 999, 9999, 8, 88, 888];
const [y1, , y2, , ...yRest] = numbersList;
console.log(y1, y2, yRest);

console.clear();

const person = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
    marks: [10, 2, 8, 4, 6],
    phone: 861452215,
    address: {
        city: 'Miestas',
        street: 'Gatve',
        number: 9,
    },
};

const name = person.name;
const age = person.age;
const isMarried = person.isMarried;
const personRest = {
    marks: person.marks,
    phone: person.phone,
    address: person.address,
};

console.log(name);
console.log(age);
console.log(isMarried);
console.log(personRest);
