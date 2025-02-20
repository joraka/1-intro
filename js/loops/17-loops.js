const numbers = [10, 2, 8, 4, 6];
const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];

// FOR
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    console.log(name);
}

// FOR-OF
{
    let i = 0;
    for (const number of numbers) {
        console.log(i++, '-->', number);
    }
}

{
    let i = 0;
    for (const name of names) {
        console.log(i++, '-->', name);
    }
}

console.clear();

// WHILE
{
    let i = 0;
    while (i < 5) {
        console.log(i, 'while...');
        i++;
    }
}

