// JavaScript mini užduotys

// Kintamųjų inicijavimas

// Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
const skaiciai1 = 1;
console.log(skaiciai1);
const skaiciai2 = 1.1;
console.log(skaiciai2);
const skaiciai3 = 2.3;
console.log(skaiciai3);

// Sukurti 3 kintamuosius su teksto tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
const tekstas1 = "hello";
console.log(tekstas1);
const tekstas2 = "hello world";
console.log(tekstas2);
const tekstas3 = "world";
console.log(tekstas3);

// Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
const skaiciuMasyvas1 = [1, 2, 3, 4, 5];
console.log(skaiciuMasyvas1);
const skaiciuMasyvas2 = [3, 2, 1, 0, -1, 2];
console.log(skaiciuMasyvas1);
const skaiciuMasyvas3 = [1.1111, 2.11, 3, 8, 9];
console.log(skaiciuMasyvas3);

// Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
const tekstoMasyvas1 = ["tekstas", "tekstas", "tekstas"];
console.log(tekstoMasyvas1);
const tekstoMasyvas2 = ["kebabas", "tekstas", "tekstas"];
console.log(tekstoMasyvas2);
const tekstoMasyvas3 = ["tekstas", "super tekstas", "tekstas"];
console.log(tekstoMasyvas3);

// Veiksmai su kintamaisiais

// Susumuoti visus skaičiaus tipo kintamuosius
// Rezultatą išvesti į console
console.log(skaiciai1 + skaiciai2);
// Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
// Rezultatą išvesti į console
console.log([tekstas1, tekstas2, tekstas3].join(" "));
// Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
// 1-2+3-4+5
// Rezultatą išvesti į console
console.log(
  skaiciuMasyvas1.reduce((acc, val, i) => {
    if (i === 0) {
      return val;
    } else if (i % 2 === 0) {
      return acc + val;
    } else {
      return acc - val;
    }
  }, 0)
);
// Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
console.log(tekstoMasyvas2.join(", "));

// Kintamųjų palyginimas
// Priklausomai nuo sąlygos, susikurkite 2 skirtingų reikšmių nurodyto tipo kintamuosius.
// Lyginant, jei rezultatas tenkina palyginimo sąlygą (nurodytą žemiau), tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

// Tarpusavyje palyginti skaičiaus tipo kintamuosius:
// kuris didesnis
// kuris mažesnis
// ar jie lygūs
// ar jie nelygūs
// kuris didesnis arba lygus
// kuris mažesnis arba lygus
// Išvesti teksto tipo kintamųjų ilgius
// Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
// kuris didesnis
// kuris mažesnis
// ar jie lygūs
// ar jie nelygūs
// kuris didesnis arba lygus
// kuris mažesnis arba lygus
// Išvesti sąrašo tipo kintamųjų ilgius
// Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
// kuris didesnis
// kuris mažesnis
// ar jie lygūs
// ar jie nelygūs
// kuris didesnis arba lygus
// kuris mažesnis arba lygus

// Ciklo for panaudojimas
function sumavimas(nuo, iki) {
  if (iki < nuo) return console.log("antras parametras yra mažesnis už pirmą");

  let suma = 0;
  for (let i = nuo; i <= iki; i++) {
    suma += i;
  }
  return suma;
}

function sumavimas2(nuo, iki) {
  return ((iki - nuo + 1) / 2) * (nuo + iki);
}
// Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
// 0 … 0
console.log("sumavimas(0, 0)", sumavimas(0, 0));
// 0 … 4
console.log("sumavimas(0, 4)", sumavimas(0, 4));
// 0 … 100
console.log("sumavimas(0, 100)", sumavimas(0, 100));
// 574 … 815
console.log("sumavimas(574, 815)", sumavimas(574, 815));
console.log("sumavimas2(574, 815)", sumavimas2(574, 815));
// -50 … 50
console.log("sumavimas(-50, 50)", sumavimas(-50, 50));
// -70 … 30
console.log("sumavimas(-70, 30)", sumavimas(-70, 30));
// panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
// pvz.: “abcdef” -> “fedcba”
function atvirkstinisTekstas(tekstas) {
  let naujasTekstas = "";
  for (let i = 0; i < tekstas.length; i++) {
    naujasTekstas = tekstas[i] + naujasTekstas;
  }
  return naujasTekstas;
}
console.log("atvirkstinisTekstas('abcdef')", atvirkstinisTekstas("abcdef"));
// Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
function dalijasi(nuo, iki) {
  if (iki < nuo) return console.log("antras parametras yra mažesnis už pirmą");
  const is3 = [];
  const is5 = [];
  const is7 = [];
  for (let i = nuo; i <= iki; i++) {
    if (i % 3 === 0) is3.push(i);
    if (i % 5 === 0) is5.push(i);
    if (i % 7 === 0) is7.push(i);
  }
  return "\n" + [
    [3, is3],
    [5, is5],
    [7, is7],
  ]
    .map(
      ([dalyba, masyvas]) =>
        `Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${dalyba} yra ${masyvas.length} vienetai.`
    )
    .join("\n");
}
// rezultatą pateikti tokiu formatu:
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
// 0 - 11
console.log("dalijasi(0, 11)", dalijasi(0, 11));
// 8 - 31
console.log("dalijasi(8, 31)", dalijasi(8, 31));
// -18 - 18
console.log("dalijasi(-18, 18)", dalijasi(-18, 18));

// Funkcijos

// Parašyti funkcijas, kurios atitinka pateiktus reikalavimus, jei įvykdo reikiamus testus

// Funkcija pavadinimu “tusciaFunkcija”:
// nepriima jokių kintamųjų
// neatlieka jokios vidinės logikos
// gražina boolean tipo reikšmę “false”
// TESTAS:
// console.log( tusciaFunkcija() );
// rezultatas: false

// Funkcija pavadinimu “daugyba”:
// priima du skaičiaus tipo kintamuosius
// atskirame kintamajame įsimena sandaugos reikšmę
// gražina saudaugos rezultatą
// TESTAI:
// console.log( daugyba( skaicius1, skaicius2 ) );
// console.log( daugyba( skaicius3, skaicius2 ) );
// console.log( daugyba( skaicius1, skaicius3 ) );
// rezultatas: teisingos reikšmės;

// Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
// priima vieną kintamąjį
// jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// priešingu atveju, funkcija tęsia darbą
// į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
// gražina skaitmenų kiekį
// TESTAI:
// console.log( skaitmenuKiekisSkaiciuje( 5 ) );
// rezultatas: 1
// console.log( skaitmenuKiekisSkaiciuje( 781 ) );
// rezultatas: 3
// console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
// rezultatas: 11
// console.log( skaitmenuKiekisSkaiciuje( true ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log( skaitmenuKiekisSkaiciuje( NaN ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”

// Funkcija pavadinimu “didziausiasSkaiciusSarase”:
// priima vieną kintamąjį
// jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
// priešingu atveju, funkcija tęsia darbą
// pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
// gražina didžiausią surastą skaičių
// TESTAI:
// console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
// rezultatas: 1
// console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
// rezultatas: 3
// console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
// rezultatas: 78
// console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
// rezultatas: 69
// console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
// rezultatas: -1
// console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log( didziausiasSkaiciusSarase( [] ) );
// rezultatas: “Pateiktas sąrašas negali būti tuščias.”

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
// TESTAI:
// console.log( isrinktiRaides( “abcdefg”, 2 ) );
// rezultatas: “bdf”
// console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
// rezultatas: “cfil”
// console.log( isrinktiRaides( “abc”, 0 ) );
// rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
// console.log( isrinktiRaides( “abc”, 4 ) );
// rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
// console.log( isrinktiRaides( 1561, 2 ) );
// rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”

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
