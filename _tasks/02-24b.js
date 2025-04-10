// Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
// priima vieną kintamąjį
// jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// priešingu atveju, funkcija tęsia darbą
// į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
// gražina skaitmenų kiekį
console.log("----------------skaitmenuKiekisSkaiciuje");

function skaitmenuKiekisSkaiciuje(skaiciai) {
  if (
    typeof skaiciai !== "number" ||
    isNaN(skaiciai) ||
    skaiciai === Infinity ||
    skaiciai === -Infinity
  )
    return "Klaida: Pateikta netinkamo tipo reikšmė.";

  const skaiciaiStr = String(skaiciai);

  if (skaiciaiStr.includes("."))
    return "Klaida: Pateikta netinkamo tipo reikšmė, turi būti sveiki skaičiai.";

  return skaiciaiStr.length;
}

// TESTAI:
console.log("skaitmenuKiekisSkaiciuje(5)", skaitmenuKiekisSkaiciuje(5));
// rezultatas: 1
console.log("skaitmenuKiekisSkaiciuje(781)", skaitmenuKiekisSkaiciuje(781));
// rezultatas: 3
console.log("skaitmenuKiekisSkaiciuje(37060123456)", skaitmenuKiekisSkaiciuje(37060123456));
// rezultatas: 11
console.log("skaitmenuKiekisSkaiciuje(true)", skaitmenuKiekisSkaiciuje(true));
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log('skaitmenuKiekisSkaiciuje("asd")', skaitmenuKiekisSkaiciuje("asd"));
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log("skaitmenuKiekisSkaiciuje(NaN)", skaitmenuKiekisSkaiciuje(NaN));
// rezultatas: “Pateikta netinkamo tipo reikšmė.”

console.log("skaitmenuKiekisSkaiciuje(5.111)", skaitmenuKiekisSkaiciuje(5.111));

console.log("----------------skaitmenuKiekisSkaiciuje");
// Funkcija pavadinimu “didziausiasSkaiciusSarase”:
// priima vieną kintamąjį
// jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
// priešingu atveju, funkcija tęsia darbą
// pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
// gražina didžiausią surastą skaičių

function didziausiasSkaiciusSarase(skaiciuMasyvas) {
  if (!Array.isArray(skaiciuMasyvas)) return "Klaida: Turi būti skaičių sąrašas";
  if (!skaiciuMasyvas.length) return "Klaida: Pateiktas sąrašas negali būti tuščias.";
  let didziausias = skaiciuMasyvas[0];
  for (let i = 1; i < skaiciuMasyvas.length; i++) {
    const skaicius = skaiciuMasyvas[i];
    if (typeof skaicius !== "number" || isNaN(skaicius))
      return `Klaida: Pateikta netinkamo tipo reikšmė.'`;
    if (skaicius > didziausias) didziausias = skaicius;
  }
  return didziausias;
}

// TESTAI:
console.log("didziausiasSkaiciusSarase([1])", didziausiasSkaiciusSarase([1]));
// rezultatas: 1
console.log("didziausiasSkaiciusSarase([1, 2, 3])", didziausiasSkaiciusSarase([1, 2, 3]));
// rezultatas: 3
console.log(
  "didziausiasSkaiciusSarase([-5, 78, 14, 0, 18])",
  didziausiasSkaiciusSarase([-5, 78, 14, 0, 18])
);
// rezultatas: 78
console.log(
  "didziausiasSkaiciusSarase([69, 69, 69, 69, 66])",
  didziausiasSkaiciusSarase([69, 69, 69, 69, 66])
);
// rezultatas: 69
console.log(
  "didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8])",
  didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8])
);
// rezultatas: -1
console.log('didziausiasSkaiciusSarase("pomidoras")', didziausiasSkaiciusSarase("pomidoras"));
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log("didziausiasSkaiciusSarase([])", didziausiasSkaiciusSarase([]));
// rezultatas: “Pateiktas sąrašas negali būti tuščias.”

console.log("didziausiasSkaiciusSarase()", didziausiasSkaiciusSarase());
console.log("didziausiasSkaiciusSarase([1,'test'])", didziausiasSkaiciusSarase([1, "test"]));
console.log("didziausiasSkaiciusSarase([1,Infinity])", didziausiasSkaiciusSarase([1, Infinity]));

// Funkcija pavadinimu “isrinktiRaides”:
// priima du kintamuosius:
// pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
// antrasis nurodo kas kelintą raidę išrinkti
// patikrinti, ar pirmasis kintamasis yra teksto tipo:
// jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
// priešingu atveju tęsiame darbą
// patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
// jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
// priešingu atveju tęsiame darbą
// patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
// jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
// priešingu atveju tęsiame darbą
// patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
// jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
// priešingu atveju tęsiame darbą
// patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
// jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
// priešingu atveju tęsiame darbą
// išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
// išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
// gražina rezultatą
console.log("----------------isrinktiRaides");

function isrinktiRaides(tekstas, sk) {
  if (typeof tekstas !== "string") return "Klaida: pirmasis parametras turi buti teksto tipo";
  if (tekstas.length > 100)
    return "Klaida: Pirmojo kintamojo reikšmė yra netinkamo dydžio, turi būti iki 100 simbolių.";
  if (typeof sk !== "number" || isNaN(sk) || sk % 1 !== 0)
    return "Klaida: Antrasis parametras turi buti sveiko skaičiaus tipo";
  if (sk < 1) return "Klaida: Antrasis parametras turi buti skaičius didesnis nei 0";
  if (sk > tekstas.length)
    return "Klaida: Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.";

  let grazinamasTekestas = "";
  for (let i = sk - 1; i < tekstas.length; i += sk) {
    const simbolis = tekstas[i];
    if ((simbolis >= "a" && simbolis > "z") || (simbolis >= "A" && simbolis > "Z"))
      grazinamasTekestas += tekstas[i];
  }

  if (!grazinamasTekestas) return "Rezultate nerasta raidžių";

  return grazinamasTekestas;
}

// TESTAI:
console.log('isrinktiRaides("abcdefg", 2)', isrinktiRaides("abcdefg", 2));
// rezultatas: “bdf”
console.log('isrinktiRaides("abcdefghijkl", 3)', isrinktiRaides("abcdefghijkl", 3));
// rezultatas: “cfil”
console.log('isrinktiRaides("abc", 0)', isrinktiRaides("abc", 0));
// rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
console.log('isrinktiRaides("abc", 4)', isrinktiRaides("abc", 4));
// rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
console.log("isrinktiRaides(1561, 2)", isrinktiRaides(1561, 2));
// rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”

console.log('isrinktiRaides("s".repeat(101), 2)', isrinktiRaides("t".repeat(101), 2));
console.log('isrinktiRaides("010101", 2)', isrinktiRaides("010101", 2));
console.log('isrinktiRaides("010101", 3)', isrinktiRaides("010101", 3));
console.log('isrinktiRaides("010101abcdef", 3)', isrinktiRaides("010101abcdef", 3));
console.log('isrinktiRaides("abdEfGhijklo", 3)', isrinktiRaides("abdEfGhijklo", 3));

// Funkcija pavadinimu “dalyba”:
// turi priimti du kintamuosius
// reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
// esant blogoms sąlygoms, išvesti atitinkamą pranešimą
// esant geroms - tęsti darbą
// į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
// daliname pirmąjį skaičių iš antrojo
// grąžinti suskaičiuotą reikšmę
// TESTAI:
// sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu gerą funkcijos veikimą

console.log("----------------dalyba");
function dalyba(sk1, sk2) {
  if (sk1 === undefined || sk2 === undefined) return "Klaida: reikalingi du parametrai";
  if (typeof sk1 !== "number" || isNaN(sk1) || !isFinite(sk1))
    return "Klaida: pirmas parametras turi būti skaičius";
  if (typeof sk2 !== "number" || isNaN(sk2) || !isFinite(sk2))
    return "Klaida: antras parametras turi būti skaičius";
  if (sk2 === 0) return "Klaida: dalybas iš 0 negalima.";

  const suma = sk1 / sk2;

  if (!isFinite(suma)) return console.log("Klaida: Gautas blogas rezultatas");

  return suma;
}

console.log("dalyba(2,2)", dalyba(2, 2));
console.log("dalyba(100,0.1)", dalyba(100, 0.1));
console.log("dalyba(0,1)", dalyba(0, 1));
console.log("dalyba(2,0)", dalyba(2, 0));
console.log('dalyba("2",0)', dalyba("2", 0));
console.log('dalyba("2","0")', dalyba("2", "0"));
console.log('dalyba(2,"0")', dalyba(2, "0"));
console.log("dalyba(2,Infinity)", dalyba(2, Infinity));
console.log("dalyba()", dalyba());
console.log("dalyba(2)", dalyba(2));
console.log("dalyba(2, null)", dalyba(2, null));
console.log("dalyba(null, 3)", dalyba(null, 3));
console.log("dalyba(-1, 0)", dalyba(-1, 0));
console.log("dalyba(-1, -1)", dalyba(-1, -1));
console.log("dalyba(2.5, 2)", dalyba(2.5, 2));
console.log("dalyba(-Infinity,Infinity)", dalyba(-Infinity, Infinity));
console.log(
  "dalyba(-Infinity, " + Number.MAX_SAFE_INTEGER + ")",
  dalyba(5, Number.MAX_SAFE_INTEGER)
);
