// Susikurkite sąrašą 10 miestų, kuriame būtų įvardinami miesto pavadinimai ir jų
// atstumai iki Vilniaus ([‘Kaunas’, 89.6, ‘Klaipėda’, 307.3, … ).

const duomenys = [
  ['Kaunas', 89.6],
  ['Klaipėda', 307.3],
  ['Šiauliai', 214.5],
  ['Panevėžys', 132.4],
  ['Alytus', 110.2],
  ['Marijampolė', 140.0],
  ['Utena', 95.3],
  ['Telšiai', 266.8],
  ['Tauragė', 212.9],
  ['Druskininkai', 130.7],
];

// a. Parašykite funkciją, kuri pasakytų, kur toliausiai nuvažiuotume važiuodami x
// km/h greičiu per y valandų

function toliausiaiNuvaziuojama(greitis, laikasValandomis) {
  const atstumas = greitis * laikasValandomis;
  let arciausias = null;

  for (let i = 0; i < duomenys.length; i++) {
    if (duomenys[i][1] < atstumas && (arciausias ? arciausias[1] < duomenys[i][1] : true)) {
      arciausias = duomenys[i];
    }
  }

  if (arciausias) {
    return `\r\tToliausiai nuvažiuojamas miestas jei greitis ${greitis} km/h ir trukmė ${laikasValandomis} val. yra ${arciausias[0]} (${arciausias[1]} km atstumas)`;
  } else {
    return '\r\tNerasta pasiekiamo miesto';
  }
}

console.log('toliausiaiNuvaziuojama(100, 2)\n', toliausiaiNuvaziuojama(100, 2));
console.log('toliausiaiNuvaziuojama(250, 1)\n', toliausiaiNuvaziuojama(250, 1));
console.log('toliausiaiNuvaziuojama(212, 1)\n', toliausiaiNuvaziuojama(212, 1));
console.log('toliausiaiNuvaziuojama(213, 1)\n', toliausiaiNuvaziuojama(213, 1));
console.log('toliausiaiNuvaziuojama(10, 1)\n', toliausiaiNuvaziuojama(10, 1));

// b. Parašykite funkciją, kuri pasakytų, ar spėtume pasiekti norimą miestą per x
// valandų ir kokiu greičiu turėtume važiuoti? (padarykite limitą 120 km/h)

/**
 *
 * @param {[string, number]} miestoObjektas - [miestas, atstumas kilometrais]
 * @param {number} laikasValandomis  - laikas kurį norima važiuoti
 * @returns {string}
 */
function greitisMiestuiPasiekti(miestoObjektas, laikasValandomis) {
  const greicioRiba = 120;
  const [miestas, atstumas] = miestoObjektas;
  const greicioSuma = atstumas / laikasValandomis;
  if (greicioSuma > greicioRiba) {
    return `\r\tNegalima pasiekti miesto ${miestas} per ${laikasValandomis} val. nes reiktu viršyti greitį daugiau nei ${greicioRiba}km/h (${Math.ceil(
      greicioSuma
    )}km/h)`;
  } else {
    return `\r\tMiestą ${miestas} per ${laikasValandomis} val. pasieksite jei važiuosite ${Math.ceil(
      greicioSuma
    )} km/h`;
  }
}

console.log(
  `greitisMiestuiPasiekti([${duomenys[4]}], 1)\n`,
  greitisMiestuiPasiekti(duomenys[4], 1)
);
console.log(
  `greitisMiestuiPasiekti([${duomenys[4]}], 2)\n`,
  greitisMiestuiPasiekti(duomenys[4], 2)
);
console.log(
  `greitisMiestuiPasiekti([${duomenys[4]}], 0.5)\n`,
  greitisMiestuiPasiekti(duomenys[4], 0.5)
);
console.log(
  `greitisMiestuiPasiekti([${duomenys[1]}], 2)\n`,
  greitisMiestuiPasiekti(duomenys[1], 2)
);

// c. Parašykite funkciją, kuri nurodytų į kokį tolimiausią miestą mes galėtume
// nuvažiuoti su k kiekiu pinigų, jei už vieną litrą degalų turime mokėti j eurų.
// Kelionę pradedame su 30 litrų benzino bakelyje, už kuriuos mokėti nereikia.
// Nuvažiuodami vieną kilometrą sudeginame x kiekį degalų

/**
 * @param {number} piniguKiekis - pinigų kiekis kišenėje
 * @param {number} litroKaina  - kiek kainuoja kuro litras
 * @param {number} degaluNaudojimasPerKilometra - kiek kuro sunaudoja nuvažiuoti vieną kiloemtrą
 * @returns {string}
 */
function nuvaziavimasSuDegaluKaina(piniguKiekis, litroKaina, degaluNaudojimasPerKilometra) {
  const pradinisKurasAutomobilyje = 30;
  const kuroKiekis = pradinisKurasAutomobilyje + piniguKiekis / litroKaina;
  const nuvaziuojamasAtstumas = kuroKiekis / degaluNaudojimasPerKilometra;

  let arciausias = null;

  for (let i = 0; i < duomenys.length; i++) {
    if (
      duomenys[i][1] < nuvaziuojamasAtstumas &&
      (arciausias ? arciausias[1] < duomenys[i][1] : true)
    ) {
      arciausias = duomenys[i];
    }
  }
  const str = `\r\tUž ${piniguKiekis} eurus nuvažiuoti galima ${
    Math.floor(nuvaziuojamasAtstumas * 10) / 10
  } km kai kuro kaina yra ${litroKaina} Eur už litrą ir automobilis suvartoja ${
    degaluNaudojimasPerKilometra * 100
  } litrus už 100 km. ir automobilis jau pripildytas ${pradinisKurasAutomobilyje} litrų\n`;
  if (arciausias) {
    return (
      str +
      `\r\tToliausiai nuvažiuojamas miestas yra ${arciausias[0]} (${arciausias[1]} km atstumas)`
    );
  } else {
    return str + '\r\tNerasta pasiekiamo miesto';
  }
}

console.log(`nuvaziavimasSuDegaluKaina(10, 1.5, 0.06)\n`, nuvaziavimasSuDegaluKaina(10, 1.5, 0.08));
console.log(`nuvaziavimasSuDegaluKaina(1, 1.5, 0.15)\n`, nuvaziavimasSuDegaluKaina(1, 1.5, 0.15));
console.log(`nuvaziavimasSuDegaluKaina(5, 1.3, 0.15)\n`, nuvaziavimasSuDegaluKaina(5, 1.3, 0.15));
console.log(`nuvaziavimasSuDegaluKaina(5, 1.3, 0.15)\n`, nuvaziavimasSuDegaluKaina(5, 1.3, 0.5));

// d. Susikurkite sąrašą kelio sąlygoms iki kiekvieno miesto apibūdinti (pavyzdžiui:
// geras, prastas, taisomas). Geromis kelio sąlygomis iki miesto važiuojame
// paprastai, prastomis kelio sąlygomis iki miesto važiuojame 1.5 karto ilgiau, o
// taisomo kelio sąlygomis važiuojame 2 kartus ilgiau. Parašykite funkciją, kuri
// pagal kelio sąlygas, nurodytą greitį ir duotus atstumus, parašytų kiek laiko
// tektų važiuoti iki kiekvieno miesto.

const duomenys2 = [
  ['Kaunas', 89.6, 'geras'],
  ['Klaipėda', 307.3, 'geras'],
  ['Šiauliai', 214.5, 'prastas'],
  ['Panevėžys', 132.4, 'taisomas'],
  ['Alytus', 110.2, 'prastas'],
  ['Marijampolė', 140.0, 'geras'],
  ['Utena', 95.3, 'taisomas'],
  ['Telšiai', 266.8, 'geras'],
  ['Tauragė', 212.9, 'taisomas'],
  ['Druskininkai', 130.7, 'geras'],
];

/**
 *
 * @param {[string, number]} miestoObjektas - [miestas, atstumas kilometrais]
 * @param {number} laikasValandomis  - laikas kurį norima važiuoti
 * @returns {string}
 */
function greitisMiestuiPasiektiSuKelioBukle(iprastasGreitis = 120) {
  let tekstas = `\r\n\tJei įprastas greitis yra ${iprastasGreitis}`;
  for (const [miestas, atstumas, bukle] of duomenys2) {
    const iprastaTrukme = atstumas / iprastasGreitis;
    tekstas += `\r\n\t${miestas} - ${atstumas} km atstumas - būklė `;
    if (bukle === 'prastas') {
      tekstas += `prasta - greitis ${iprastasGreitis / 1.5} km/h - laikas ${laikas(
        iprastaTrukme * 1.5
      )} (vietoj ${laikas(iprastaTrukme)})`;
    } else if (bukle === 'taisomas') {
      tekstas += `taisoma - greitis ${iprastasGreitis / 2} km/h - laikas ${laikas(
        iprastaTrukme * 2
      )} (vietoj ${laikas(iprastaTrukme)})`;
    } else {
      tekstas += `gera - greitis ${iprastasGreitis} km/h - laikas ${laikas(iprastaTrukme)}`;
    }
  }
  return tekstas;
}

console.log('greitisMiestuiPasiektiSuKelioBukle(120)', greitisMiestuiPasiektiSuKelioBukle(120));
console.log('greitisMiestuiPasiektiSuKelioBukle(60)', greitisMiestuiPasiektiSuKelioBukle(60));

function apvalinimas(skaicius) {
  return Math.floor(skaicius * 100) / 100;
}

function laikas(_val) {
  const val = Math.floor(_val);
  const min = Math.round((_val - val) * 60);
  if (val < 1) return `${min} min`;
  return `${val} val ${min} min`;
}
