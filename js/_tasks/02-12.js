// 1. Parašykite funkciją, kuri priima skaičių kaip argumentą ir grąžina jo kvadratą.
// (Pvz., kvadratu(4) turi grąžinti 16.)
function grazintiKvadaratu(sk) {
  return sk ** 2;
}

console.log(`grazintiKvadaratu: 4 -> ${grazintiKvadaratu(4)}`);

// 2. Parašykite funkciją, kuri patikrina, ar perduotas skaičius yra lyginis.
// (Pvz., arLyginis(8) → true, arLyginis(7) → false.)
function arLyginis(sk) {
  return sk % 2 === 0;
}

console.log(`arLyginis: 2 -> ${arLyginis(2)}`);
console.log(`arLyginis: 3 -> ${arLyginis(3)}`);

// 3. Sukurkite funkciją, kuri priima du skaičius ir grąžina didesnįjį.
// (Pvz., didesnisSkaicius(5, 8) → 8.)
function didesnisSkaicius(sk1, sk2) {
  return sk1 > sk2 ? sk1 : sk2;
}

console.log(`didesnisSkaicius: 1, 2 -> ${didesnisSkaicius(1, 2)}`);
console.log(`didesnisSkaicius: 3, 1 -> ${didesnisSkaicius(3, 1)}`);
console.log(`didesnisSkaicius: 100, 200 -> ${didesnisSkaicius(100, 200)}`);
console.log(`didesnisSkaicius: 300, 150 -> ${didesnisSkaicius(300, 150)}`);

// 4. Sukurkite funkciją, kuri priima stringą ir grąžina jį atvirkštine tvarka.
// (Pvz., reverseString("JavaScript") → "tpircSavaJ".)
function apsuktiTeksta(tekstas) {
  let naujasTekstas = "";
  for (let i = 0; i < tekstas.length; i++) {
    naujasTekstas = tekstas[i] + naujasTekstas;
  }
  return naujasTekstas;
}

const str1 = "JavaScript";
console.log(`apsuktiTeksta: '${str1}' -> ${apsuktiTeksta(str1)}`);

// 5. Parašykite funkciją, kuri skaičiuoja, kiek kartų nurodyta raidė pasikartoja string'e.
// (Pvz., skaiciuotiRaides("banana", "a") → 3.)
function skaiciuotiRaides(tekstas, ieskomaRaide) {
  tekstas = tekstas.toLowerCase();
  ieskomaRaide = ieskomaRaide.toLowerCase();
  let rastaRaidziu = 0;
  for (let i = 0; i < tekstas.length; i++) {
    if (tekstas[i] === ieskomaRaide) rastaRaidziu++;
  }
  return rastaRaidziu;
}
console.log(`skaiciuotiRaides: 'banana', 'a' -> ${skaiciuotiRaides("banana", "a")}`);
console.log(
  `skaiciuotiRaides: 'taputaputapu aaaaaa', 'a' -> ${skaiciuotiRaides("taputaputapu aaaaaa", "a")}`
);

// 6. Sukurkite funkciją, kuri priima skaičių ir grąžina "teigiamas", "neigiamas" arba "nulis" naudojant ternary.
function arTeigiamasTekstu(sk) {
  return sk > 0 ? "teigiamas" : sk < 0 ? "neigiamas" : "nulis";
}

console.log(`arTeigiamasTekstu: 1 -> ${arTeigiamasTekstu(1)}`);
console.log(`arTeigiamasTekstu: -100 -> ${arTeigiamasTekstu(-100)}`);
console.log(`arTeigiamasTekstu: 0 -> ${arTeigiamasTekstu(0)}`);

// 7. Parašykite funkciją, kuri tikrina, ar žodis prasideda raide "A"(nesvarbu, didžioji ar mažoji).
// (Pvz., pradedaA("Automobilis") → true, pradedaA("namas") → false.)
function arPrasidedaSuRaide(tekstas, ieskomaRaide) {
  return tekstas.toLowerCase().startsWith(ieskomaRaide.toLowerCase());
}

function arPrasidedaSuA(tekstas) {
  return arPrasidedaSuRaide(tekstas, "A");
}

console.log(`arPrasidedaSuRaide: 'objektas', 'o' -> ${arPrasidedaSuRaide("objektas", "o")}`);
console.log(`arPrasidedaSuRaide: 'objektas', 'A' -> ${arPrasidedaSuRaide("objektas", "A")}`);
console.log(`arPrasidedaSuRaide: 'ateiviai', 'A' -> ${arPrasidedaSuRaide("ateiviai", "A")}`);
console.log(`arPrasidedaSuRaide: 'ateiviai', 'A' -> ${arPrasidedaSuRaide("ateiviai", "A")}`);
console.log(`arPrasidedaSuA: 'ateiviai' -> ${arPrasidedaSuA("ateiviai")}`);
console.log(`arPrasidedaSuA: 'namas' -> ${arPrasidedaSuA("namas")}`);
console.log(`arPrasidedaSuA: 'Automobilis' -> ${arPrasidedaSuA("Automobilis")}`);

// 8. Sukurkite funkciją, kuri priima skaičių ir patikrina, ar jis dalus iš 3 ir 5(grąžina true arba false).
function arDalus(sk) {
  return sk % 3 === 0 && sk % 5 === 0;
}

console.log(`arDalus: '5' -> ${arDalus("5")}`);
console.log(`arDalus: '12' -> ${arDalus("12")}`);
console.log(`arDalus: '15' -> ${arDalus("15")}`);
console.log(`arDalus: '30' -> ${arDalus("30")}`);

// 9. Naudodami for ciklą, išveskite visus skaičius nuo 10 iki 1 mažėjančia tvarka.
function gautiAtvirkstineSkaiciuSeka() {
  let skaiciuTekstas = "";
  for (let i = 0; i < 10; i++) {
    skaiciuTekstas += 10 - i;
    if (i < 9) skaiciuTekstas += ", ";
  }
  return skaiciuTekstas;
}

function gautiAtvirkstineSkaiciuSeka2() {
  let skaiciuTekstas = "";
  for (let i = 10; i > 0; i--) {
    skaiciuTekstas += i;
    if (i > 1) skaiciuTekstas += ", ";
  }
  return skaiciuTekstas;
}

function gautiAtvirkstineSkaiciuSeka3(riba) {
  let skaiciuTekstas = "";
  for (let i = riba; i > 0; i--) {
    skaiciuTekstas += i;
    if (i > 1) skaiciuTekstas += ", ";
  }
  return skaiciuTekstas;
}

function gautiAtvirkstineSkaiciuSeka4(riba) {
  return Array(riba)
    .fill(0)
    .map((v, i) => riba - i)
    .join(", ");
}

console.log(`gautiAtvirkstineSkaiciuSeka: ${gautiAtvirkstineSkaiciuSeka()}`);
console.log(`gautiAtvirkstineSkaiciuSeka2: ${gautiAtvirkstineSkaiciuSeka2()}`);
console.log(`gautiAtvirkstineSkaiciuSeka3: ${gautiAtvirkstineSkaiciuSeka3(15)}`);
console.log(`gautiAtvirkstineSkaiciuSeka4: ${gautiAtvirkstineSkaiciuSeka4(15)}`);

// 10. Parašykite for ciklą, kuris išveda tik lyginius skaičius nuo 2 iki 20.
function gautiLyginiuSkaiciuSeka() {
  let skaiciuTekstas = "";
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      skaiciuTekstas += i;
      if (i < 20) skaiciuTekstas += ", ";
    }
  }
  return skaiciuTekstas;
}

function gautiLyginiuSkaiciuSeka2() {
  return Array(20)
    .fill(0)
    .map((v, i) => i + 1)
    .filter((v) => v % 2 === 0)
    .join(", ");
}

console.log(`gautiLyginiuSkaiciuSeka: ${gautiLyginiuSkaiciuSeka()}`);
console.log(`gautiLyginiuSkaiciuSeka2: ${gautiLyginiuSkaiciuSeka2()}`);

// 11. Naudodami for ciklą, suskaičiuokite visų skaičių nuo 1 iki 100 sumą ir grąžinkite rezultatą.
function skaiciuotiSkaiciuSuma(nuo, iki) {
  let suma = 0;
  for (let i = nuo; i <= iki; i++) {
    suma += i;
  }
  return suma;
}
console.log(`skaiciuotiSkaiciuSuma: nuo 1 iki 100 -> ${skaiciuotiSkaiciuSuma(1, 100)}`);

// 12. Sukurkite funkciją, kuri priima masyvą skaičių ir grąžina jų vidurkį.
// (Pvz., vidurkis([5, 10, 15]) → 10.)
function gautiVidurki(skaiciuMasyvas) {
  let suma = 0;
  for (let i = 0; i < skaiciuMasyvas.length; i++) {
    suma += skaiciuMasyvas[i];
  }
  return suma / skaiciuMasyvas.length;
}

console.log(`gautiVidurki: [1, 5, 7] -> ${gautiVidurki([1, 5, 7])}`);
console.log(`gautiVidurki: [5, 5, 5] -> ${gautiVidurki([5, 5, 5])}`);
console.log(`gautiVidurki: [5, 10, 15] -> ${gautiVidurki([5, 10, 15])}`);

// 13. Naudodami for ciklą, raskite didžiausią skaičių iš pateikto masyvo.
// (Pvz., rastiDidziausia([3, 9, 2, 11, 7]) → 11.)
function rastiDidziausia(skaiciuMasyvas) {
  let didziausiasSk = skaiciuMasyvas[0];
  for (let i = 1; i < skaiciuMasyvas.length; i++) {
    if (skaiciuMasyvas[i] > didziausiasSk) didziausiasSk = skaiciuMasyvas[i];
  }
  return didziausiasSk;
}
console.log(`rastiDidziausia: [3, 9, 2, 11, 7] -> ${rastiDidziausia([3, 9, 2, 11, 7])}`);
console.log(`rastiDidziausia: [100, 9, 111, 11, 7] -> ${rastiDidziausia([100, 9, 111, 11, 7])}`);

// 14. Sukurkite funkciją, kuri priima stringą ir grąžina jį be tarpų.
// (Pvz., beTarpų("Labas pasauli") → "Labaspasauli".)
function beTarpu(tekstas) {
  return tekstas.split(" ").join("");
}

function beTarpu2(tekstas) {
  let naujasTekstas = "";
  for (let i = 0; i < tekstas.length; i++) {
    if (tekstas[i] !== " ") naujasTekstas += tekstas[i];
  }
  return naujasTekstas;
}

console.log(`beTarpu: 'Labas pasauli' -> ${beTarpu("Labas pasauli")}`);
console.log(`beTarpu2: 'Labas pasauli' -> ${beTarpu2("Labas pasauli")}`);

// 15. Parašykite funkciją, kuri patikrina, ar string'e yra daugiau nei 10 simbolių.
// (Pvz., arIlgas("JavaScript") → true <-(???daugiau arba lygu???), arIlgas("Labas") → false.)
function arIlgasTekstas(tekstas, skaiciuKiekis) {
  return tekstas.length >= skaiciuKiekis;
}

console.log(`arIlgasTekstas: 'JavaScript', 10 -> ${arIlgasTekstas("JavaScript", 10)}`);
console.log(`arIlgasTekstas: 'Labas', 10 -> ${arIlgasTekstas("Labas", 10)}`);
console.log(`arIlgasTekstas: 'superkebabas', 10 -> ${arIlgasTekstas("kebabas", 10)}`);
console.log(`arIlgasTekstas: 'grybas', 5 -> ${arIlgasTekstas("grybas", 5)}`);

// 16. Sukurkite for ciklą, kuris išveda daugybos lentelę 5(nuo 1 iki 10).

function daugybosLentele(iki) {
  let lentele = "";
  for (let i = 1; i <= iki; i++) {
    for (let j = 2; j < 10; j++) {
      lentele += `${i}*${j}=${i * j} `;
    }
    if (i < iki) lentele += "\n";
  }
  return lentele;
}

console.log(`daugybosLentele(5) \n${daugybosLentele(5)}`);

// 17. Parašykite funkciją, kuri priima stringą ir pakeičia visas "a" raides į "@".
// (Pvz., keistiRaide("banana") → "b@n@n@".)
function pakeistiRaides(tekstas, senaRaide, naujaRaide) {
  return tekstas.replaceAll(senaRaide, naujaRaide);
}

function pakeistiRaides2(tekstas, senaRaide, naujaRaide) {
  let naujasTekstas = "";
  for (let i = 0; i < tekstas.length; i++) {
    naujasTekstas += tekstas[i] === senaRaide ? naujaRaide : tekstas[i];
  }
  return naujasTekstas;
}

console.log(`pakeistiRaides("banana", "a", "@") -> ${pakeistiRaides("banana", "a", "@")}`);
console.log(`pakeistiRaides2("banana", "a", "@") -> ${pakeistiRaides2("banana", "a", "@")}`);

// 18. Sukurkite funkciją, kuri sugeneruoja stringą "**********"(10 žvaigždučių), naudojant for ciklą.
function kartotiTeksta(tekstas, kartai) {
  let naujasTekstas = "";
  for (let i = 0; i < kartai; i++) {
    naujasTekstas += tekstas;
  }
  return naujasTekstas;
}

console.log(`kartotiTeksta("*", 10) -> ${kartotiTeksta("*", 10)}`);

// 19. Parašykite funkciją, kuri priima skaičių ir grąžina visus jo daliklius(išskyrus 1 ir patį save).
// (Pvz., dalikliai(12) →[2, 3, 4, 6].)
function gautiDaliklius(sk) {
  let dalikliuTekstas = "";
  for (let i = 10; i > 0; i--) {
    const daliklis = sk / i;
    if (daliklis === parseInt(daliklis) && daliklis !== sk) {
      dalikliuTekstas += daliklis + " ";
    }
  }
  return dalikliuTekstas;
}

console.log(`gautiDaliklius(12) -> ${gautiDaliklius(12)}`);

// 20. Sukurkite funkciją, kuri tikrina, ar pateiktas skaičius yra pirminis.
// (Pvz., arPirminis(7) → true, arPirminis(8) → false.)
function arPirminisSkaicius(sk) {
  if (sk <= 1) return false;
  for (let i = 2; i < sk; i++) {
    if (sk % i == 0) return false;
  }
  return true;
}

console.log(`arPirminisSkaicius(7) -> ${arPirminisSkaicius(7)}`);
console.log(`arPirminisSkaicius(8) -> ${arPirminisSkaicius(8)}`);
