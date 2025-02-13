// =============================================
// Užduotis 1: Suskaičiuoti visų masyvo skaičių sumą
// =============================================
const numbers1 = [1, 2, 3, 4, 5];

// Sprendimas su for ciklu:
let suma = 0;
for (let i = 0; i < numbers1.length; i++) {
  suma += numbers1[i];
}
console.log("uzt1 for", suma);

// Sprendimas su array metodu (reduce):
console.log(
  "uzt1 reduce",
  numbers1.reduce((acc, sk) => {
    return acc + sk;
  }, 0)
);

// =============================================
// Užduotis 2: Suskaičiuoti, kiek masyvo elementų yra lyginiai
// =============================================
const numbers2 = [1, 2, 3, 4, 5, 6];

// Sprendimas su for ciklu:
let lyginiai = 0;
for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] % 2 === 0) lyginiai++;
}
console.log("uzt2 for", lyginiai);

// Sprendimas su filter metodu:
console.log("uzt2 filter", numbers2.filter((sk) => sk % 2 === 0).length);

// =============================================
// Užduotis 3: Rasti didžiausią skaičių masyve
// =============================================
const numbers3 = [10, 5, 20, 8, 15];

// Sprendimas su for ciklu:
let didziausias = numbers3[0];
for (let i = 1; i < numbers3.length; i++) {
  if (numbers3[i] > didziausias) didziausias = numbers3[i];
}
console.log("uzt3 for", didziausias);

// Sprendimas su Math.max ir spread operator:
console.log("uzt3 Math.max", Math.max(...numbers3));

// =============================================
// Užduotis 4: Suskaičiuoti, kiek kartų masyve pasikartoja nurodytas skaičius
// =============================================
const numbers4 = [1, 2, 3, 2, 4, 2, 5];
const target = 2;

// Sprendimas su for ciklu:
let rastaKartu = 0;
for (let i = 0; i < numbers4.length; i++) {
  if (numbers4[i] === target) rastaKartu++;
}
console.log("uzt4 for", rastaKartu);

// Sprendimas su filter metodu:
console.log("uzt4 filer", numbers4.filter((sk) => sk === target).length);

// =============================================
// Užduotis 5: Išfiltruoti ir sukurti naują masyvą, kuriame būtų tik teigiami skaičiai
// =============================================
const numbers5 = [-3, 0, 5, -1, 8, -2];

// Sprendimas su for ciklu:
const naujasMasyvas = [];
for (let i = 0; i < numbers5.length; i++) {
  if (numbers5[i] >= 0) naujasMasyvas.push(numbers5[i]);
}
console.log("uzt5 for", naujasMasyvas);

// Sprendimas su filter metodu:
const naujasMasyvas2 = numbers5.filter((sk) => sk >= 0);
console.log("uzt5 filter", naujasMasyvas2);

// =============================================
// Užduotis 6: Rasti visų masyvo elementų sandaugą
// =============================================
const numbers6 = [1, 2, 3, 4];

// Sprendimas su for ciklu:
let suma2 = numbers6[0];
for (let i = 1; i < numbers6.length; i++) {
  if (suma2 === 0) suma2 = 1;
  suma2 *= numbers6[i];
}
console.log("uzt6 for", suma2);

// Sprendimas su reduce metodu:
console.log(
  "uzt6 reduce",
  numbers6.reduce((acc, sk) => {
    return acc * sk;
  }, 1)
);

// =============================================
// Užduotis 7: Apversti masyvą (sukurti naują apverstą masyvą)
// =============================================
const array7 = [1, 2, 3, 4, 5];

// Sprendimas su for ciklu:
const naujasMasyvas3 = [];
for (let i = 0; i < array7.length; i++) {
  naujasMasyvas3.unshift(array7[i]);
}
console.log("uzt7 for", naujasMasyvas3);

// Sprendimas su built-in reverse metodu (kopijuojame, kad nepakeistume originalo):
console.log("uzt7 reverse()", array7.reverse());

// =============================================
// Užduotis 8: Rasti pirmą indeksą, kuriame pasitaiko nurodytas elementas. Jei neranda, grąžinti -1
// =============================================
const array8 = ["a", "b", "c", "d"];
const searchElement = "c";

// Sprendimas su for ciklu:
let lastIndex = 0;
for (let i = 0; i < array8.length; i++) {
  if (array8[i] === searchElement) {
    lastIndex = i;
  }
}
console.log("uzt8 for", lastIndex);

// Sprendimas su indexOf metodu:
console.log("uzt8 indexOf", array8.indexOf(searchElement));

// =============================================
// Užduotis 9: Patikrinti, ar masyvas yra surikiuotas didėjimo tvarka
// =============================================
const array9 = [1, 3, 5, 7, 9];

// Sprendimas su for ciklu:
let arDidejimoTvarka = false;
for (let i = 1; i < array9.length; i++) {
  if (array9[i] >= array9[i - 1]) {
    arDidejimoTvarka = true;
  } else {
    arDidejimoTvarka = false;
    break;
  }
}
console.log("uzt9 arDidejimoTvarka for", arDidejimoTvarka);

// Sprendimas su every metodu:
// let paskutinisSkaicius = Number.MIN_VALUE;
// console.log(
//   "arDidejimoTvarka every()",
//   array9.every((sk, i) => {
//     const arPadidejo = sk > paskutinisSkaicius;
//     paskutinisSkaicius = sk;
//     return arPadidejo;
//   })
// );

console.log(
  "uzt9 arDidejimoTvarka every()",
  array9.every((sk, i) => i === 0 || sk >= array9[i - 1])
);

// =============================================
// Užduotis 10: Sukurti naują masyvą, kurio kiekvienas elementas yra pradinio masyvo elemento kvadratas
// =============================================
const numbers10 = [1, 2, 3, 4, 5];

// Sprendimas su for ciklu:
const naujasMasyvas4 = [];
for (let i = 0; i < numbers10.length; i++) {
  naujasMasyvas4.push(numbers10[i] ** 2);
}
console.log("uzt10 for", naujasMasyvas4);

// Sprendimas su map metodu:
console.log(
  "uzt10 map",
  numbers10.map((sk) => sk ** 2)
);

// =============================================
// Užduotis 11: Susumuoti tik nelyginius masyvo elementus
// =============================================
const numbers11 = [1, 2, 3, 4, 5, 6];

// Sprendimas su for ciklu:
let nelyginiai = 0;
for (let i = 0; i < numbers11.length; i++) {
  if (numbers11[i] % 2 !== 0) nelyginiai++;
}
console.log("uzt11 for", nelyginiai);

// Sprendimas su filter ir reduce:
console.log("uzt11 filter", numbers2.filter((sk) => sk % 2 !== 0).length);
console.log(
  "uzt11 reduce",
  numbers2.reduce((acc, sk) => (sk % 2 !== 0 ? acc + 1 : acc), 0)
);

// =============================================
// Užduotis 12: Apskaičiuoti masyvo elementų vidurkį
// =============================================
const numbers12 = [10, 20, 30, 40, 50];

// Sprendimas su for ciklu:
let suma3 = 0;
for (let i = 0; i < numbers12.length; i++) {
  suma3 += numbers12[i];
}
console.log("uzt12 for", suma3 / numbers12.length);

// Sprendimas su reduce:
console.log("uzt12 reduce", numbers12.reduce((acc, sk) => acc + sk) / numbers12.length);

// =============================================
// Užduotis 13: Pašalinti pasikartojančius elementus iš masyvo
// =============================================
const numbers13 = [1, 2, 3, 2, 4, 3, 5];

// Sprendimas su for ciklu:
const naujasMasyvas5 = [];
for (let i = 0; i < numbers13.length; i++) {
  if (!naujasMasyvas5.includes(numbers13[i])) naujasMasyvas5.push(numbers13[i]);
}
console.log("uzt13 for", naujasMasyvas5);

// Sprendimas su Set:
console.log("uzt13 Set", Array.from(new Set(numbers13)));

// =============================================
// Užduotis 14: Rasti antrą didžiausią elementą masyve
// =============================================
const numbers14 = [5, 3, 9, 1, 7];

// Sprendimas su for ciklu:
let pirmasDidziausias = Number.MIN_VALUE;
let antrasDidziausias = Number.MIN_VALUE;

// for (let i = 0; i < numbers14.length; i++) {
//   if (numbers14[i] > pirmasDidziausias) pirmasDidziausias = numbers14[i];
// }
// for (let i = 0; i < numbers14.length; i++) {
//   if (numbers14[i] > antrasDidziausias && numbers14[i] < pirmasDidziausias)
//     antrasDidziausias = numbers14[i];
// }

for (let i = 0; i < numbers14.length; i++) {
  if (numbers14[i] > pirmasDidziausias) {
    antrasDidziausias = pirmasDidziausias;
    pirmasDidziausias = numbers14[i];
  } else if (numbers14[i] > antrasDidziausias && numbers14[i] !== antrasDidziausias) {
    antrasDidziausias = numbers14[i];
  }
}

console.log("uzt14 for", antrasDidziausias);

// Sprendimas su sort metodu (kopijuojame, kad nepakeistume originalo):
console.log("uzt14 for", numbers14.slice(0).sort((a, b) => b - a)[1]);

// =============================================
// Užduotis 15: Suskaičiuoti, kiek masyvo elementų yra didesni už duotą slenkstį
// =============================================
const numbers15 = [10, 15, 20, 25, 30];
const threshold = 20;

// Sprendimas su for ciklu:
let rastuElementuKiekis = 0;
for (let i = 0; i < numbers15.length; i++) {
  if (numbers15[i] === threshold) rastuElementuKiekis++;
}
console.log("uzt15 for", rastuElementuKiekis);

// Sprendimas su filter:
console.log("uzt15 filter", numbers15.filter((sk) => sk === threshold).length);

// =============================================
// Užduotis 16: Sujungti du masyvus į vieną
// =============================================
const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];

const naujasMasyvas6 = [];
// Sprendimas su for ciklu:
for (let i = 0; i < arrayA.length; i++) {
  naujasMasyvas6.push(arrayA[i]);
}
for (let i = 0; i < arrayB.length; i++) {
  naujasMasyvas6.push(arrayB[i]);
}
console.log("uzt16 for", naujasMasyvas6);

// Sprendimas su concat metodu:
console.log("uzt16 concat", arrayA.concat(arrayB));

// =============================================
// Užduotis 17: Išlyginti (flatten) masyvą, kurio elementai yra masyvai (vieno lygmens)
// Pvz.: [[1,2], [3,4]] -> [1,2,3,4]
// =============================================
const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// Sprendimas su for ciklu:
const naujasMasyvas7 = [];
for (let i = 0; i < nestedArray.length; i++) {
  for (let j = 0; j < nestedArray[i].length; j++) {
    naujasMasyvas7.push(nestedArray[i][j]);
  }
}
console.log("uzt17 for", naujasMasyvas7);

// Sprendimas su flat metodu:
console.log("uzt17 for", nestedArray.flat());

// =============================================
// Užduotis 18: Rasti bendrus elementus tarp dviejų masyvų
// =============================================
const arrA = [1, 2, 3, 4];
const arrB = [3, 4, 5, 6];

// Sprendimas su for ciklu:
const naujasMasyvas8 = [];
for (let i = 0; i < arrA.length; i++) {
  if (arrB.includes(arrA[i])) naujasMasyvas8.push(arrA[i]);
}
console.log("uzt18 for", naujasMasyvas8);

// Sprendimas su filter:
console.log(
  "uzt18 filter",
  arrA.filter((sk) => arrB.includes(sk))
);

// =============================================
// Užduotis 19: Sukurti objektą, kuriame masyvo elementai suskirstyti į "lyginiai" ir "nelyginiai"
// =============================================
const numbers19 = [1, 2, 3, 4, 5, 6];

// Sprendimas su for ciklu:
const elementai = {
  lyginiai: [],
  nelyginiai: [],
};

for (let i = 0; i < numbers19.length; i++) {
  elementai[numbers19[i] % 2 === 0 ? "lyginiai" : "nelyginiai"].push(numbers19[i]);
}

console.log("uzt19 for", elementai);

// Sprendimas su reduce:
console.log(
  "uzt19 reduce()",
  numbers19.reduce(
    (acc, sk) => {
      acc[sk % 2 === 0 ? "lyginiai" : "nelyginiai"].push(sk);
      return acc;
    },
    {
      lyginiai: [],
      nelyginiai: [],
    }
  )
);

// =============================================
// Užduotis 20: Sukurti naują masyvą, kuriame kiekvienas elementas yra pradinio masyvo elementų sumuota suma (cumulative sum)
// Pvz.: [1, 2, 3, 4] -> [1, 3, 6, 10]
// =============================================
const numbers20 = [1, 2, 3, 4];

// Sprendimas su for ciklu:
let sumosArr = [];
for (let i = 0, _suma = 0; i < numbers20.length; i++) {
  _suma += numbers20[i];
  sumosArr.push(_suma);
}
console.log("uzt20 for", sumosArr);

// Sprendimas su reduce:
console.log(
  "uzt20 reduce",
  numbers20.reduce(
    (acc, sk) => {
      acc.suma += sk;
      acc.masyvas.push(acc.suma);
      return acc;
    },
    { suma: 0, masyvas: [] }
  ).masyvas
);
