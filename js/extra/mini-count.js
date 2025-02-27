function count(start, finish, divider) {
    let result = 0;

    for (let i = start; i <= finish; i++) {
        if (i % divider === 0) {
            result++;
        }
    }

    return result;
}

console.log(count(0, 11, 3), '-->', 4);
console.log(count(0, 11, 5), '-->', 3);
console.log(count(0, 11, 7), '-->', 2);

console.log(count(1, 11, 3), '-->', 3);
console.log(count(1, 11, 5), '-->', 2);
console.log(count(1, 11, 7), '-->', 1);
console.log(count(0, 1_000_000_000_000_000, 7), '-->', 1);
