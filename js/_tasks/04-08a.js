// Susikurkite sąrašą 10 miestų, kuriame būtų įvardinami miesto pavadinimai ir jų
// atstumai iki Vilniaus ([‘Kaunas’, 89.6, ‘Klaipėda’, 307.3, … ).

// a. Parašykite funkciją, kuri pasakytų, kur toliausiai nuvažiuotume važiuodami x
// km/h greičiu per y valandų

// b. Parašykite funkciją, kuri pasakytų, ar spėtume pasiekti norimą miestą per x
// valandų ir kokiu greičiu turėtume važiuoti? (padarykite limitą 120 km/h)

// c. Parašykite funkciją, kuri nurodytų į kokį tolimiausią miestą mes galėtume
// nuvažiuoti su k kiekiu pinigų, jei už vieną litrą degalų turime mokėti j eurų.
// Kelionę pradedame su 30 litrų benzino bakelyje, už kuriuos mokėti nereikia.
// Nuvažiuodami vieną kilometrą sudeginame x kiekį degalų

// d. Susikurkite sąrašą kelio sąlygoms iki kiekvieno miesto apibūdinti (pavyzdžiui:
// geras, prastas, taisomas). Geromis kelio sąlygomis iki miesto važiuojame
// paprastai, prastomis kelio sąlygomis iki miesto važiuojame 1.5 karto ilgiau, o
// taisomo kelio sąlygomis važiuojame 2 kartus ilgiau. Parašykite funkciją, kuri
// pagal kelio sąlygas, nurodytą greitį ir duotus atstumus, parašytų kiek laiko
// tektų važiuoti iki kiekvieno miesto.

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

function toliausiaiNuvaziuojama(greitis, laikasValandomis) {
  const atstumas = greitis * laikasValandomis;
  let arciausias = null;

  for (let i = 0; i < duomenys.length; i++) {
    if (duomenys[i][1] < atstumas && (arciausias ? arciausias[1] < duomenys[i][1] : true)) {
      arciausias = duomenys[i];
    }
  }

  if (arciausias) {
    return `Toliausiai nuvažiuojamas miestas jei greitis ${greitis} km/h ir trukmė ${laikasValandomis} val. yra ${arciausias[0]} (${arciausias[1]} km atstumas)`;
  } else {
    return 'Nerasta pasiekiamo miesto';
  }
}

console.log('toliausiaiNuvaziuojama(100, 2)\n', toliausiaiNuvaziuojama(100, 2));
console.log('toliausiaiNuvaziuojama(250, 1)\n', toliausiaiNuvaziuojama(250, 1));
console.log('toliausiaiNuvaziuojama(212, 1)\n', toliausiaiNuvaziuojama(212, 1));
console.log('toliausiaiNuvaziuojama(213, 1)\n', toliausiaiNuvaziuojama(213, 1));
console.log('toliausiaiNuvaziuojama(10, 1)\n', toliausiaiNuvaziuojama(10, 1));
