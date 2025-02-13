const n1 = 7;
const n2 = 5;

// function declaration
function sudetis(a, b) {
    return a + b;
}
console.log(`${n1} + ${n2} = ${sudetis(n1, n2)}`);

// anonimines funkcijos logika, priskirta kintamajam
const skirtumas = function (a, b) {
    return a - b;
}
console.log(`${n1} - ${n2} = ${skirtumas(n1, n2)}`);

// arrow function (rodykline funkcija) (liambda function)
const sandauga = (a, b) => {
    return a * b;
}
console.log(`${n1} * ${n2} = ${sandauga(n1, n2)}`);

// jeigu, logikos bloke yra tik 1 procedura
// galima nerasyti {} ir return
const dalyba = (a, b) => a / b;
console.log(`${n1} / ${n2} = ${dalyba(n1, n2)}`);

// jeigu, parametru bloke yra tik 1 parametras
// galima nerasyti ()
const kvadratu = a => a * a;
console.log(`${n1} * ${n1} = ${kvadratu(n1)}`);
console.log(`${n2} * ${n2} = ${kvadratu(n2)}`);
