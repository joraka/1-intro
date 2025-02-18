const numbers = [1, 10, 2, 8, 105, 201, 4, 6, 319, 500, 5];
const words = ['a', 'b', 'de', 'ak', 'eeee', 'ab', 'bo', 'bh'];
const list = [[2, 2], [2, 11], [], [3, 3, 3], [1], [4, 4], [2], [2, 1]];

// mazesnis -1
// lygus    0
// didesnis +1
numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers);

// (7, 5) => 7-5 = 2        -> 5, 7
// (5, 7) => 5-7 = -2

// (7, 5) => 5-7 = -2
// (5, 7) => 7-5 = 2        -> 7, 5


words.sort();
console.log(words);

words.sort().reverse();
console.log(words);

list.sort((a, b) => a.length - b.length);
console.log(list);

list.sort((a, b) => b.length - a.length);
console.log(list);

console.clear();

const students = [
    { name: 'Jonas', age: 99, isMarried: true },
    { name: 'Maryte', age: 88, isMarried: false },
    { name: 'Ona', age: 66, isMarried: true },
    { name: 'Petras', age: 77, isMarried: false },
];
console.log(students);

students.sort((a, b) => a.age - b.age);
console.log(students);

students.sort((a, b) => b.age - a.age);
console.log(students);

students.sort((a, b) => b.name.length - a.name.length);
console.log(students);

students.sort((a, b) => a.name.length - b.name.length);
console.log(students);


// reference
