let a = 7;
let b = a;
console.log('a:', a, 'b:', b);

a = 5;
console.log('a:', a, 'b:', b);

b = 3;
console.log('a:', a, 'b:', b);

const k = [1, 2];
const m = k;
console.log('k:', k, 'm:', m);

k[0] = 111;
console.log('k:', k, 'm:', m);

m[1] = 777;
console.log('k:', k, 'm:', m);

k.push(5);
console.log('k:', k, 'm:', m);

function arrayCopy(list) {
    const newList = [];

    for (let i = 0; i < list.length; i++) {
        newList.push(list[i]);
    }

    return newList;
}

const x = [8, 88, 888];
const y = arrayCopy(x);
console.log('x:', x, 'y:', y);

x[0] = 666;
y[2] = 0;
console.log('x:', x, 'y:', y);