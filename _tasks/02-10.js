// 7. Pašalinkite pirmą simbolį string'e " JavaScript", jei jis yra tarpas.
const str = " Javascript";
console.log(`'${str}' -> '${str.trimStart()}'`);

// 8. Palyginkite string'us "JavaScript" ir "javascript" ignoruodami jų raidžių dydį.
const str1 = "JavaScript";
const str2 = "javascript";
console.log(`${str1} = ${str2} ? ${str1.toLowerCase() === str2.toLowerCase()}`);

// 9. Pašalinkite visus skaičius iš teksto "a1b2c3".
const str3 = "a1b2c3";
console.log(`${str3} -> ${str3.replace(/[0-9]/g, "")}`);

// 10. Suskaičiuokite, kiek tekste "a1b2c3" yra skaičių.
console.log(`${str3} -> ${str3.replace(/[A-Z]/gi, "").length} skaiciai`);

// 11. Iš teksto "HTML CSS JS" paimkite pirmąją kiekvieno žodžio raidę ir sudėkite jas į vieną string'ą.
const str4 = `HTML CSS JS`;
console.log(
  `${str4} -> ${str4
    .split(" ")
    .map((zodis) => zodis.charAt(0))
    .join("")}`
);

// 12. Raskite pirmą žodį string'e "Hello World!".
const helloWorld = "Hello World!";
console.log(`${helloWorld} -> ${helloWorld.split(" ")[0]}`);

// 13. Pašalinkite paskutinius 3 simbolius string'e "JavaScript" ir atspausdinkite rezultatą.
console.log(`${str1} -> ${str1.slice(0, -3) + "eam"}`);

// 14. Prie string'o "Likusios dienos: " pridėkite skaičių 5 iš daysLeft kintamojo.
const daysLeft = 5;
console.log(`Likusios dienos: ${daysLeft}`);

// 15. Tekste "mokytojas" pakeiskite pabaigą į "ėja", kad gautumėte "mokytoja".
const str5 = "mokytojas dainuoja. Mokytojas šoka";
console.log(`${str5} -> ${str5.replaceAll('mokytojas','mokytoja').replaceAll('Mokytojas', 'Mokytoja')}`);

//-----------------

/**
 * Užduotis Nr. 1
 * Sukurti funkciją, kuri priima sakinį kaip argumentą ir grąžina jo simbolių skaičių (įskaitant tarpus).
 */
function rastiSimbolius(sakinys) {
  return sakinys.length;
}

const str6 = "petarda 123 kebabas";
console.log(`${str6} -> ${rastiSimbolius(str6)} simboliai`);

/**
 * Užduotis Nr. 2
 * Sukurti funkciją, kuri grąžina pateikto žodžio paskutinę raidę
 */
function paskutineRaide(zodis) {
  return zodis.charAt(zodis.length - 1);
}
console.log(`${str6} -> paskutinė raidė: ${paskutineRaide(str6)}`);

/**
 * Užduotis Nr. 3
 * Sukurti funkciją, kuri priima žodį ir raidę kaip argumentus, tada grąžina, kiek kartu ši raidė pasikartoja žodyje (neatsižvelgiant į raidžių dydį)
 */
function raidziuSkaiciavimas(zodis, raide) {
  let rastuRaidziuKiekis = 0;
  let _raide = raide.toLowerCase();
  let _zodis = zodis.toLowerCase();
  for (let i = 0; i < zodis.length; i++) {
    if (_zodis.charAt(i) === _raide) {
      rastuRaidziuKiekis++;
    }
  }
  return rastuRaidziuKiekis;
}
const raide = "a";
console.log(`žodyje '${str6}' raidė: '${raide}' rasta ${raidziuSkaiciavimas(str6, raide)} kartus`);

/**
 * Užduotis Nr. 4
 * Sukurti funkciją, kuri paverčia kiekvieno žodžio pirmą raidę didžiąja, o likusias mažosiomis
 */

function normalizuotiRaides(zodis) {
  return zodis.charAt(0).toUpperCase() + zodis.substring(1).toLowerCase();
}
const str7 = "keBaBas";
console.log(`${str7} -> ${normalizuotiRaides(str7)}`);

/**
 * Užduotis Nr. 5
 * Sukurti funkciją, kuri panaikina nereikalus tarpus iš sakinio
 */
function panaikintiNereikalingusTarpus(sakinys) {
  return sakinys.replace(/\s+/gi, " ");
}
const str8 = "kebabas      ir       marsas";
console.log(`'${str8}' -> ${panaikintiNereikalingusTarpus(str8)}`);
