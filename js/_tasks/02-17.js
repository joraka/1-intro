/**
 * Parašykite funkciją, kuri apskaičiuoja skaičiaus faktorialą.
 * Pvz. faktorialas(5) -> 120
 */

const faktorialas = (sk) => {
  let suma = 1;
  for (let i = sk; i > 0; i--) {
    suma *= i;
  }
  return suma;
};

console.log("faktorialas", faktorialas(5));

/**
 * Parašykite funkciją, kuri patikrina ar string'as yra palindromas.
 * Pvz. arPalindromas("level") -> true, arPalindromas("hello") -> false
 */

const arPalindromas = (zodis) => {
  const kapojamuRaidziuKiekis = Math.floor(zodis.length / 2);
  const pirmaDalis = zodis.slice(0, kapojamuRaidziuKiekis);
  const antrojisDalis = zodis.slice(-kapojamuRaidziuKiekis).split("").reverse().join("");
  return pirmaDalis === antrojisDalis;
};

console.log("arPalindromas", arPalindromas("level"));
console.log("arPalindromas", arPalindromas("hello"));

/**
 * Sukurkite funkciją, kuri priima masyvą skaičių ir grąžiną antrą didžiausią skaičių.
 * Pvz. antrasDidziausias([10, 5, 8, 20]) -> 10
 */

const antrasDidziausias = (skaiciuMasyvas) => {
  let pirmasDidziausias = Number.MIN_VALUE;
  let antrasDidziausias = Number.MIN_VALUE;

  for (let i = 0; i < skaiciuMasyvas.length; i++) {
    if (skaiciuMasyvas[i] > pirmasDidziausias) pirmasDidziausias = skaiciuMasyvas[i];
  }

  for (let i = 0; i < skaiciuMasyvas.length; i++) {
    if (skaiciuMasyvas[i] > antrasDidziausias && skaiciuMasyvas[i] < pirmasDidziausias)
      antrasDidziausias = skaiciuMasyvas[i];
  }

  return antrasDidziausias;
};

console.log("antrasDidziausias", antrasDidziausias([10, 5, 8, 20]));

/**
 * Parašykite funkciją, kuri sugeneruoja atsitiktinį slaptažodį iš didžiųjų, mažųjų raidžių ir skaičių.
 * Pvz. generuotiSlaptazodi(8) -> "aB3dE5kL"
 */

const generuotiSlaptazodi = (skaiciuKiekis) => {
  const galimiSimboliai = "abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ0123456789";
  let naujasSlaptazodis = "";
  for (let i = 0; i < skaiciuKiekis; i++) {
    naujasSlaptazodis += galimiSimboliai.at(Math.floor(Math.random() * galimiSimboliai.length));
  }
  return naujasSlaptazodis;
};

console.log("generuotiSlaptazodi", generuotiSlaptazodi(8));

/**
 * Parašykite funkciją, kuri tikrina ar skaičius yra Fibonačio skaičius.
 * Pvz. arFibonacio(8) → true, arFibonacio(10) → false
 */

const arFibonacio = (n) => {
  if (n < 0) return false;
  return Math.sqrt(5 * n * n + 4) % 1 === 0 || Math.sqrt(5 * n * n - 4) % 1 === 0;
};

console.log("arFibonacio(8)", arFibonacio(8));
console.log("arFibonacio(10)", arFibonacio(10));

/**
 * Parašykite funkciją, kuri iš teksto pašalina visus skaičius.
 * Pvz. beSkaiciu("Labas rytas, Lietuva 2025!") → "Labas rytas, Lietuva!"
 */
const beSkaiciu = (tekstas) => tekstas.replace(/[0-9]/g, "");

const beSkaiciu2 = (tekstas) =>
  tekstas.split("").reduce((akumuliatorius, raide, indeksas) => {
    if ("1234567890".includes(raide)) {
      if (indeksas > 0 && tekstas.at(indeksas - 1) === " ") return akumuliatorius.slice(0, -1);
      return akumuliatorius;
    } else {
      return akumuliatorius + raide;
    }
  }, "");

const beSkaiciu3 = (tekstas) => {
  let naujasTekstas = "";
  for (let i = 0; i < tekstas.length; i++) {
    if ("1234567890".includes(tekstas[i])) {
      if (i > 0 && tekstas[i - 1] === " ") naujasTekstas = naujasTekstas.slice(0, -1);
    } else {
      naujasTekstas += tekstas[i];
    }
  }
  return naujasTekstas;
};

const beSkaiciu4 = (tekstas) => {
  let naujasTekstas = [];
  for (let i = 0; i < tekstas.length; i++) {
    if (tekstas[i] >= "0" && tekstas[i] <= "9") {
      if (naujasTekstas.at(-1) === " ") naujasTekstas.pop();
    } else {
      naujasTekstas.push(tekstas[i]);
    }
  }
  return naujasTekstas.join("");
};

console.log("beSkaiciu", beSkaiciu("Labas rytas, Lietuva 2025!"));
console.log("beSkaiciu2", beSkaiciu2("Labas rytas, Lietuva 2025!"));
console.log("beSkaiciu3", beSkaiciu3("Labas rytas, Lietuva 2025!"));
console.log("beSkaiciu4", beSkaiciu3("Labas rytas, Lietuva 2025!"));
console.log("beSkaiciu4", beSkaiciu4("Labas rytas, Lietuva 2025 2025!"));

/**
 * Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina visus unikalius skaičius (pašalina pasikartojančius).
 * Pvz., unikalusSkaiciai([1, 2, 2, 3, 4, 4, 5]) → [1, 2, 3, 4, 5]
 */

const unikalusSkaiciai = (skaiciuMasyvas) => [...new Set(skaiciuMasyvas)];

const unikalusSkaiciai2 = (skaiciuMasyvas) =>
  skaiciuMasyvas.reduce((akumuliatorius, skaicius) => {
    if (!akumuliatorius.includes(skaicius)) akumuliatorius.push(skaicius);
    return akumuliatorius;
  }, []);

const unikalusSkaiciai3 = (skaiciuMasyvas) =>
  skaiciuMasyvas.reduce((akumuliatorius, skaicius) => {
    if (!akumuliatorius.includes(skaicius)) return [...akumuliatorius, skaicius];
    return akumuliatorius;
  }, []);

const unikalusSkaiciai4 = (skaiciuMasyvas) =>
  Object.keys(
    skaiciuMasyvas.reduce((akumuliatorius, skaicius) => {
      return { ...akumuliatorius, [skaicius]: null };
    }, {})
  ).map(Number);

console.log("unikalusSkaiciai([1, 2, 2, 3, 4, 4, 5])", unikalusSkaiciai([1, 2, 2, 3, 4, 4, 5]));
console.log("unikalusSkaiciai2([1, 2, 2, 3, 4, 4, 5])", unikalusSkaiciai2([1, 2, 2, 3, 4, 4, 5]));
console.log("unikalusSkaiciai3([1, 2, 2, 3, 4, 4, 5])", unikalusSkaiciai3([1, 2, 2, 3, 4, 4, 5]));
console.log("unikalusSkaiciai4([1, 2, 2, 3, 4, 4, 5])", unikalusSkaiciai4([1, 2, 2, 3, 4, 4, 5]));

/**
 * Parašykite funkciją, kuri skaičiuoja, kiek kartų kiekviena raidė pasikartoja string‘e ir grąžina objektą.
 * Pvz., skaiciuotiRaidesObj("banana") → { b: 1, a: 3, n: 2 }
 */
const skaiciuotiRaidesObj = (zodis) => {
  const raidziuObjektas = {};
  for (let i = 0; i < zodis.length; i++) {
    if (!raidziuObjektas.hasOwnProperty(zodis[i])) {
      raidziuObjektas[zodis[i]] = 1;
    } else {
      raidziuObjektas[zodis[i]]++;
    }
  }
  return raidziuObjektas;
};

const skaiciuotiRaidesObj2 = (zodis) =>
  zodis.split("").reduce((acc, raide, i) => ({ ...acc, [raide]: acc[raide] + 1 || 1 }), {});

console.log('skaiciuotiRaidesObj("banana")', skaiciuotiRaidesObj("banana"));
console.log('skaiciuotiRaidesObj2("banana")', skaiciuotiRaidesObj2("banana"));

/**
 * Sukurkite funkciją, kuri patikrina, ar du string‘ai yra anagramos (turi tas pačias raides, tik kita tvarka).
 * Pvz., arAnagrama("listen", "silent") → true, arAnagrama("hello", "world") → false
 */

const arAnagrama = (zodis1, zodis2) =>
  zodis1.split("").sort().join("") === zodis2.split("").sort().join("");

const arAnagrama2 = (zodis1, zodis2) => {
  let asciiSuma1 = 0;
  for (let i = 0; i < zodis1.length; i++) {
    asciiSuma1 += zodis1.charCodeAt(i);
  }
  let asciiSuma2 = 0;
  for (let i = 0; i < zodis2.length; i++) {
    asciiSuma2 += zodis2.charCodeAt(i);
  }
  return asciiSuma1 === asciiSuma2;
};

console.log('arAnagrama("listen", "silent")', arAnagrama("listen", "silent"));
console.log('arAnagrama("hello", "world")', arAnagrama("hello", "world"));
console.log('arAnagrama2("listen", "silent")', arAnagrama2("listen", "silent"));
console.log('arAnagrama2("hello", "world")', arAnagrama2("hello", "world"));

/**
 * Raskite klaidą ir ištaisykite funkciją, kad ji pakeistų tiek didžiąsias, tiek mažąsias "a" į "@".
 * Funkcija: const keistiRaide = (string) => string.replaceAll('a' || 'A', '@');
 */

const keistiRaide = (zodis) => zodis.replace(/[a]/gi, "@");

console.log('keistiRaide("Banana")', keistiRaide("Banana"));
console.log('keistiRaide("Ananasas")', keistiRaide("Ananasas"));
