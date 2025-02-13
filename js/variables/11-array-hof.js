/*
HOF - highere order functions
*/

const numbers = [1, 2, 3, 4];
const numbers2x = [];

for (let i = 0; i < numbers.length; i++) {
    numbers2x.push(numbers[i] * 2);
}

console.log(numbers2x);

function triple(n) {
    return n * 3;
}

const numbers3x = numbers.map(triple);
console.log(numbers3x);


const numbers5x = numbers.map(n => n * 5);
console.log(numbers5x);

const dic = ['Labas', 'rytas', 'Lietuva'];
const letters = dic.map(s => s[0]);
console.log(letters);

const gg = 'Gera gira geroj girioj gera gerti';
const ggInit = gg
    .split(' ')
    .map(s => s[0])
    .join('.') + '!';
console.log(ggInit);
