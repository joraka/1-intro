/*
FUNCTION - funkcija - perpanaudojamas logikos blokas
*/

function kainaSuPVM(bazineKaina) {
    let galutineKaina = 0;

    if (bazineKaina <= 100) {
        galutineKaina = bazineKaina + ' Eur, be PVM';
    } else {
        galutineKaina = bazineKaina * 1.21 + ' Eur, su PVM';
    }

    return galutineKaina;
}

const price1 = kainaSuPVM(100);
const price2 = kainaSuPVM(200);
const price3 = kainaSuPVM(5);
const price4 = kainaSuPVM(500);

console.log(price1);
console.log(price2);
console.log(price3);
console.log(price4);

console.clear();

// lyginis -> kvadratu
// nelyginis -> n*2+1

function algoritmas(n) {
    let result = 0;

    if (n % 2 === 0) {
        result = n * n;
    } else {
        result = n * 2 + 1;
    }

    return result;
}

console.log(algoritmas(2));
console.log(algoritmas(3));
console.log(algoritmas(4));
console.log(algoritmas(5));
console.log(algoritmas(6));
console.log(algoritmas(7));
console.log(algoritmas(8));
console.log(algoritmas(9));
