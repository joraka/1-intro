const numbers = [10, 2, 8, 4, 6];
const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];

{
    const a = 1;
    const b = 2;
    const c = 3;

    const d = 4, e = 5, f = 6;
}

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

console.clear();

{
    let i = 0;

    for (; i < numbers.length;) {
        const number = numbers[i];
        console.log(number);

        i++;
    }
}

console.clear();

{
    for (let i = 0, j = 25; i < 20 && j > 10; i++, j--) {
        console.log(i, j);
    }
}

{
    let i = 0;
    let j = 25;
    for (; i < 20 && j > 10;) {
        console.log('for:', i, j);

        i++;
        j--;
    }
}

{
    let i = 0;
    let j = 25;
    while (i < 20 && j > 10) {
        console.log('while:', i, j);

        i++;
        j--;
    }
}


