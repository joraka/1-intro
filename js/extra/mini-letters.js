function isrinktiRaides(text, step) {
    if (arguments.length !== 2) {
        return 'Netinkamas parametrų kiekis.';
    }

    if (typeof text !== 'string') {
        return 'Pirmasis kintamasis yra netinkamo tipo.';
    }

    if (typeof step !== 'number') {
        return 'Antrasis kintamasis yra netinkamo tipo.';
    }

    if (text === '') {
        return 'Primasis kintamasis turi būti ne tuščias tekstas.';
    }

    if (step === 0) {
        return 'Antrasis kintamasis negali būti lygus nuliui.';
    }

    if (!Number.isInteger(step)) {
        return 'Antrasis kintamasis turi būti sveikasis skaičius.';
    }

    if (text.length < Math.abs(step)) {
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.';
    }

    let result = '';

    if (step > 0) {
        for (let i = step - 1; i < text.length; i += step) {
            result += text[i];
        }
    } else {
        for (let i = text.length + step; i >= 0; i += step) {
            result += text[i];
        }
    }

    return result;
}

// Nelogiskos reiksmes
{
    console.assert(isrinktiRaides() === 'Netinkamas parametrų kiekis.', 'Nera nei vieno parametro');
    console.assert(isrinktiRaides('abc') === 'Netinkamas parametrų kiekis.', 'Yra tik vienas parametras (truksta 1)');
    console.assert(isrinktiRaides(1, 2, 3) === 'Netinkamas parametrų kiekis.', 'Per daug parametru (3)');
    console.assert(isrinktiRaides(1, 2, 3, 4) === 'Netinkamas parametrų kiekis.', 'Per daug parametru (4)');
}

// Netinkami duomenu tipas - pirmasis parametras
{
    console.assert(
        isrinktiRaides(1561, 2) === 'Pirmasis kintamasis yra netinkamo tipo.',
        'Netinkamo tipo reiksme (number) pirmame parametre'
    );
    console.assert(
        isrinktiRaides(Infinity, 2) === 'Pirmasis kintamasis yra netinkamo tipo.',
        'Netinkamo tipo reiksme (number: Infinity) pirmame parametre'
    );
    console.assert(
        isrinktiRaides(-Infinity, 2) === 'Pirmasis kintamasis yra netinkamo tipo.',
        'Netinkamo tipo reiksme (number: -Infinity) pirmame parametre'
    );
    console.assert(
        isrinktiRaides(NaN, 2) === 'Pirmasis kintamasis yra netinkamo tipo.',
        'Netinkamo tipo reiksme (number: NaN) pirmame parametre'
    );
    console.assert(
        isrinktiRaides(true, 2) === 'Pirmasis kintamasis yra netinkamo tipo.',
        'Netinkamo tipo reiksme (boolean) pirmame parametre'
    );
    console.assert(
        isrinktiRaides({}, 2) === 'Pirmasis kintamasis yra netinkamo tipo.',
        'Netinkamo tipo reiksme (object) pirmame parametre'
    );
    console.assert(
        isrinktiRaides([], 2) === 'Pirmasis kintamasis yra netinkamo tipo.',
        'Netinkamo tipo reiksme (array) pirmame parametre'
    );
    console.assert(
        isrinktiRaides(null, 2) === 'Pirmasis kintamasis yra netinkamo tipo.',
        'Netinkamo tipo reiksme (null) pirmame parametre'
    );
    console.assert(
        isrinktiRaides(isrinktiRaides, 2) === 'Pirmasis kintamasis yra netinkamo tipo.',
        'Netinkamo tipo reiksme (function) pirmame parametre'
    );
    console.assert(
        isrinktiRaides(undefined, 2) === 'Pirmasis kintamasis yra netinkamo tipo.',
        'Netinkamo tipo reiksme (undefined) pirmame parametre'
    );
}

// Netinkami duomenu tipas - antrasis parametras
{
    console.assert(
        isrinktiRaides('text', 'string') === 'Antrasis kintamasis yra netinkamo tipo.',
        'Netinkamo tipo reiksme (string) antrajame parametre'
    );
    console.assert(
        isrinktiRaides('text', false) === 'Antrasis kintamasis yra netinkamo tipo.',
        'Netinkamo tipo reiksme (boolean) antrajame parametre'
    );
    console.assert(
        isrinktiRaides('text', {}) === 'Antrasis kintamasis yra netinkamo tipo.',
        'Netinkamo tipo reiksme (object) antrajame parametre'
    );
    console.assert(
        isrinktiRaides('text', []) === 'Antrasis kintamasis yra netinkamo tipo.',
        'Netinkamo tipo reiksme (array) antrajame parametre'
    );
    console.assert(
        isrinktiRaides('text', isrinktiRaides) === 'Antrasis kintamasis yra netinkamo tipo.',
        'Netinkamo tipo reiksme (function) antrajame parametre'
    );
    console.assert(
        isrinktiRaides('text', null) === 'Antrasis kintamasis yra netinkamo tipo.',
        'Netinkamo tipo reiksme (null) antrajame parametre'
    );
    console.assert(
        isrinktiRaides('text', undefined) === 'Antrasis kintamasis yra netinkamo tipo.',
        'Netinkamo tipo reiksme (undefined) antrajame parametre'
    );
}

// Nelogiskos reiksmes
{
    console.assert(
        isrinktiRaides('', 2) === 'Primasis kintamasis turi būti ne tuščias tekstas.',
        'Tuščias tekstas'
    );
    console.assert(
        isrinktiRaides('abc', 0) === 'Antrasis kintamasis negali būti lygus nuliui.',
        'Step: 0'
    );
    console.assert(
        isrinktiRaides('abc', 4) === 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.',
        'Per trumpas tekstas (step: 4)'
    );
    console.assert(
        isrinktiRaides('abc', -4) === 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.',
        'Per trumpas tekstas (step: -4)'
    );
    console.assert(
        isrinktiRaides('abc', Infinity) === 'Antrasis kintamasis turi būti sveikasis skaičius.',
        'Begalinis zingsnis (+)'
    );
    console.assert(
        isrinktiRaides('abc', -Infinity) === 'Antrasis kintamasis turi būti sveikasis skaičius.',
        'Begalinis zingsnis (-)'
    );
    console.assert(
        isrinktiRaides('abc', NaN) === 'Antrasis kintamasis turi būti sveikasis skaičius.',
        'NaN zingsnis'
    );
    console.assert(
        isrinktiRaides('abc', 3.14) === 'Antrasis kintamasis turi būti sveikasis skaičius.',
        'NaN zingsnis'
    );
    console.assert(
        isrinktiRaides('abc', -3.14) === 'Antrasis kintamasis turi būti sveikasis skaičius.',
        'NaN zingsnis'
    );
}

// Normalus testai - pozityvus zingsniai
{
    console.assert(isrinktiRaides('abcdefg', 2) === 'bdf', 'Step: 2');
    console.assert(isrinktiRaides('abcdefghijkl', 3) === 'cfil', 'Step: 3');
}

// Normalus testai - negatyvus zingsniai
{
    console.assert(isrinktiRaides('abcdefg', -2) === 'fdb', 'Step: -2');
    console.assert(isrinktiRaides('abcdefghijkl', -3) === 'jgda', 'Step: -3');
}
