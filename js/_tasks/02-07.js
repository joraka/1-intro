// Praktinių Užduočių sting metodai
// Sukurkite stringą ir išveskite jo ilgį.
let str = "kababas";
console.log(`Žodžio "${str}" ilgis yra ${str.length}`);

// Konvertuokite stringą į didžiąsias raides.
console.log(`${str} -> ${str.toUpperCase()}`);

// Konvertuokite stringą į mažąsias raides.
str = "KEBABAS";
console.log(`${str} -> ${str.toLowerCase()}`);

// Pašalinkite tarpus iš string'o pradžios ir pabaigos.
str = "     " + str + " ";
console.log(`'${str}' -> '${str.trim()}'`);

// Patikrinkite, ar stringas prasideda žodžiu "Hello".
str = "Hello world";
console.log(`"${str}" -> ${str.startsWith("Hello") ? "prasideda" : "neprasideda"} su 'Hello'`);

// Patikrinkite, ar stringas baigiasi žodžiu "World".
console.log(`"${str}" -> ${str.endsWith("World") ? "pasibaigia" : "nepasibaigia"} su 'World'`);

// Raskite pirmąją žodžio "Java" poziciją string'e.
str = "Kebab Potato Java 123 Java";
console.log(`"${str}" -> pirmo 'Java' indeksas yra ${str.indexOf("Java")}`);

// Raskite paskutinę žodžio "Java" poziciją string'e.
console.log(`"${str}" -> antro 'Java' indeksas yra ${str.lastIndexOf("Java")}`);

// Pakeiskite pirmąjį "Java" į "JS".
console.log(`${str} -> ${str.replace("Java", "JS")}`);

// Pakeiskite visus "Java" į "JS".
console.log(`${str} -> ${str.replaceAll("Java", "JS")}`);

// Padalinkite stringą į masyvą pagal skyriklį.
console.log(`${str} -> `, str.split(" "));

let str2 = "Mamamia Mamamia";
// Sujunkite du string'us į vieną.
console.log(`${str} -> ${str.concat(str2)}`);

// Išskirkite string'o dalį nuo 3 iki 8 simbolio.
console.log(`${str} -> ${str.substring(2, 7)}`);

// Naudodami slice, paimkite paskutinius 5 string'o simbolius.
console.log(`${str} -> ${str.slice(-1)}`);

// Naudodami substring, paimkite pirmus 5 string'o simbolius.
console.log(`${str} -> ${str.substring(0, 5)}`);

// Sukurkite stringą, kuris pakartojamas 4 kartus.
console.log(`${str} -> ${str.repeat(4)}`);

// Patikrinkite, ar string'e yra žodis "fun".
console.log(`${str} -> ${str.includes("fun") ? "yra 'fun'" : "nėra 'fun'"}`);

// Išveskite stringą su kabutėmis "teksto" viduje.
console.log(`\`${str}\``);
console.log("'" + str + "'");
console.log('"' + str + '"');

// Sukurkite šablono literatūrą su kintamuoju ir išveskite rezultatą.
console.log(`--${str}--`);

str2 = "   bob   ";
// Pašalinkite tarpus tik iš string'o pradžios.
console.log(`"${str2}" -> "${str2.trimStart()}"`);

//Papildomos užduotys (sprendimams naudokite string metodus ir for ciklą (ne visuose uždaviniuose)):
// 1. Iš string "mokymo centras" suformatuokite taip, kad pirmos raidės būtų didžiosios, o likusios mažosios.
str = "mokymo centras labai geras";
str2 = str;
for (let i = 0; i < str2.length; i++) {
  if (i === 0 || str2[i - 1] === " ") {
    str2 = str2.substring(0, i) + str2[i].toUpperCase() + str2.substring(i + 1);
  }
}
console.log(`${str} -> ${str2}`);

// 2. Sutrumpinkite tekstą "JavaScript programavimas" iki 10 simbolių ir pridėkite '...'.
str = "JavaScript programavimas";
console.log(`${str} -> ${str.substring(0, 10) + "..."}`);

// 3. Atspausdinkite tekstą "JavaScript" atvirkščiai.
str = "JavaScript";
str2 = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     str2 += str[i];
// }
for (let i = 0; i < str.length; i++) {
  str2 = str[i] + str2;
}
console.log(`${str} -> ${str2}`);

// 4. Tekste "obuolys, bananas, kivis" pakeiskite visus kablelius į kabliataškius.
str = "obuolys, bananas, kivis";
console.log(`${str} -> ${str.replaceAll(",", ";")}`);

// 5. Suskaičiuokite, kiek yra žodžių string'e "Šiandien gera diena.".
str = "Šiandien gera diena. Šiandien gera diena.";

// console.log(`'${str}' yra ${str.split(' ').length} žodžiai`);

function skaiciuotiZodzius(sakinys) {
  if (sakinys.length === 0) return 0;
  let zodziuKiekis = 1;
  for (let i = 0; i < sakinys.length; i++) {
    if (sakinys[i] === " ") zodziuKiekis += 1;
  }
  return zodziuKiekis;
}
console.log(`'${str}' yra ${skaiciuotiZodzius(str)} žodžiai`);
str = "";
console.log(`'${str}' yra ${skaiciuotiZodzius(str)} žodžiai`);
str = "bob";
console.log(`'${str}' yra ${skaiciuotiZodzius(str)} žodžiai`);

// 6. Patikrinkite, ar tekstas "test@gmail.com" turi @ ir baigiasi .com.
let email = "test@gmail.com";
function arTinkamasEmail(email) {
  return email.includes("@") && email.endsWith(".com");
}
console.log(`${email} yra ${arTinkamasEmail(email) ? "tinkamas" : "netinkamas"}`);
email = "potato@gmail.lt";
console.log(`${email} yra ${arTinkamasEmail(email) ? "tinkamas" : "netinkamas"}`);
