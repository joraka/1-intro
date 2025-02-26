function skaitmenuKiekisSkaiciuje(n) {
    // parametru validacija
    if (typeof n !== 'number') {
        return 'Pateikta netinkamo tipo reikšmė.';
    }

    if (!isFinite(n)) {
        return 'Pateiktas netinka skaičiaus tipo reikšmė.';
    }
    // alternatyva !isFinite(n)
    // if (isNaN(n) || n === Infinity || n === -Infinity) {
    //     return 'Pateiktas netinka skaičiaus tipo reikšmė.';
    // }

    // logika
    let result = ('' + n).length;

    if (n < 0) {
        result--;
    }

    if (n % 1 !== 0) {
        result--;
    }

    // rezultato grazinimas
    return result;
}

console.log(skaitmenuKiekisSkaiciuje(), '-->', 'Pateikta netinkamo tipo reikšmė.');
console.log(skaitmenuKiekisSkaiciuje(undefined), '-->', 'Pateikta netinkamo tipo reikšmė.');
console.log(skaitmenuKiekisSkaiciuje(true), '-->', 'Pateikta netinkamo tipo reikšmė.');
console.log(skaitmenuKiekisSkaiciuje('asd'), '-->', 'Pateikta netinkamo tipo reikšmė.');
console.log(skaitmenuKiekisSkaiciuje({}), '-->', 'Pateikta netinkamo tipo reikšmė.');
console.log(skaitmenuKiekisSkaiciuje([]), '-->', 'Pateikta netinkamo tipo reikšmė.');
console.log(skaitmenuKiekisSkaiciuje(skaitmenuKiekisSkaiciuje), '-->', 'Pateikta netinkamo tipo reikšmė.');
console.log(skaitmenuKiekisSkaiciuje(null), '-->', 'Pateikta netinkamo tipo reikšmė.');

console.log(skaitmenuKiekisSkaiciuje(NaN), '-->', 'Pateiktas netinka skaičiaus tipo reikšmė.');
console.log(skaitmenuKiekisSkaiciuje(Infinity), '-->', 'Pateiktas netinka skaičiaus tipo reikšmė.');
console.log(skaitmenuKiekisSkaiciuje(-Infinity), '-->', 'Pateiktas netinka skaičiaus tipo reikšmė.');

console.log(skaitmenuKiekisSkaiciuje(5), '-->', 1);
console.log(skaitmenuKiekisSkaiciuje(781), '-->', 3);
console.log(skaitmenuKiekisSkaiciuje(37060123456), '-->', 11);
console.log(skaitmenuKiekisSkaiciuje(-5), '-->', 1);
console.log(skaitmenuKiekisSkaiciuje(-781), '-->', 3);
console.log(skaitmenuKiekisSkaiciuje(-37060123456), '-->', 11);
console.log(skaitmenuKiekisSkaiciuje(3.14), '-->', 3);
console.log(skaitmenuKiekisSkaiciuje(2.727), '-->', 4);
console.log(skaitmenuKiekisSkaiciuje(-3.14), '-->', 3);
console.log(skaitmenuKiekisSkaiciuje(-2.727), '-->', 4);
console.log(skaitmenuKiekisSkaiciuje(-1), '-->', 1);

console.log(skaitmenuKiekisSkaiciuje(1_000_000_000), '-->', 10);
console.log(skaitmenuKiekisSkaiciuje(1_000_000_000_000), '-->', 13);
console.log(skaitmenuKiekisSkaiciuje(1_000_000_000_000_000), '-->', 16);
console.log(skaitmenuKiekisSkaiciuje(1_000_000_000_000_000_000), '-->', 19);
console.log(skaitmenuKiekisSkaiciuje(10_000_000_000_000_000_000), '-->', 20);
console.log(skaitmenuKiekisSkaiciuje(100_000_000_000_000_000_000), '-->', 21);
console.log(skaitmenuKiekisSkaiciuje(1_000_000_000_000_000_000_000), '-->', 22);
console.log(skaitmenuKiekisSkaiciuje(1_000_000_000_000_000_000_000_000), '-->', 25);
console.log(skaitmenuKiekisSkaiciuje(1_000_000_000_000_000_000_000_000_000), '-->', 28);
console.log(skaitmenuKiekisSkaiciuje(1_000_000_000_000_000_000_000_000_000_000), '-->', 31);

