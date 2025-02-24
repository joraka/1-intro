function demo(...params) {
    // parametru validavimas
    // logika
    // apskaiciuoto rezultato validavimas
    // rezultato grazinimas
}

function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());

function daugyba(n1, n2) {
    // validavimas
    if (typeof n1 !== 'number') {
        return 'Error: pirmasis parametras turi buti skaiciaus tipo';
    }
    if (typeof n2 !== 'number') {
        return 'Error: antrasis parametras turi buti skaiciaus tipo';
    }
    if (n1 === Infinity || n1 === -Infinity || '' + n1 === 'NaN') {
        return 'Error: pirmasis parametras turi buti normalus skaicius';
    }
    if (n2 === Infinity || n2 === -Infinity || isNaN(n2)) {
        return 'Error: antrasis parametras turi buti normalus skaicius';
    }

    // logika
    const result = n1 * n2;

    // rezultato validavimas
    if (result >= Number.MAX_VALUE) {
        return 'Error: rezultatas galimai virsijo maksimalia galima prisiminti skaiciaus reiksme';
    }

    // rezultato grazinimas
    return result;
}

console.log(daugyba());
console.log(daugyba(undefined));
console.log(daugyba(undefined, undefined));
console.log(daugyba('labas', 5));
console.log(daugyba('labas', 'rytas'));
console.log(daugyba(7, Infinity));
console.log(daugyba(Infinity, 5));
console.log(daugyba(Infinity, Infinity));
console.log(daugyba(7, -Infinity));
console.log(daugyba(-Infinity, 5));
console.log(daugyba(-Infinity, -Infinity));
console.log(daugyba(7, NaN));
console.log(daugyba(NaN, 5));
console.log(daugyba(NaN, NaN));

console.log(daugyba(7, 5));
console.log(daugyba(-7, 5));
console.log(daugyba(-7, -5));
console.log(daugyba(7, -5));

console.clear();

