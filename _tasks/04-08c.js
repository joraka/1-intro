function apvalinimas(skaicius) {
  return Math.floor(skaicius * 100) / 100;
}

// Susikurkite 7 sąrašus, kuriose yra talpinamos skirtingų dienų temperatūros vertės

const pirmadienis = [12.3, 14.1, 15.6, 13.4, 11.8];
const antradienis = [10.5, 13.2, 14.0, 12.6, 25.1, 9.9];
const treciadienis = [11.0, 12.3, 13.8, 12.0, 10.4];
const ketvirtadienis = [9.8, 11.5, 13.0, 12.2, 10.1];
const penktadienis = [10.2, 12.4, 14.1, 13.5, 11.3];
const sestadienis = [1.5, 3.0, 16.3, 14.7, 12.9];
const sekmadienis = [14.0, 15.2, 16.1, 14.3, 13.0];

const visosDienos = {
  pirmadienis,
  antradienis,
  trečiadienis: treciadienis,
  ketvirtadienis,
  penktadienis,
  šeštadienis: sestadienis,
  sekmadienis,
};

// a. Parašykite funkciją, kuri apskaičiuotų norimos dienos vidutinę temperatūrą.

function temperaturosVidurkis(temperaturuMasyvas) {
  return temperaturuMasyvas.reduce((ak, sk) => ak + sk, 0) / temperaturuMasyvas.length;
}

console.log(`pirmadienio vidurkis: ${Math.floor(temperaturosVidurkis(pirmadienis))} laipsnių`);
console.log(`šeštadienis vidurkis: ${Math.floor(temperaturosVidurkis(sestadienis))} laipsnių`);

// b. Parašykite funkciją, kuri apskaičiuotų norimos dienos aukščiausią
// temperatūrą.

function auksciausiaTemperatura(temperaturuMasyvas) {
  let didziausias = temperaturuMasyvas[0];
  for (let i = 1; i < temperaturuMasyvas.length; i++) {
    if (temperaturuMasyvas[i] > didziausias) didziausias = temperaturuMasyvas[i];
  }
  return didziausias;
}

console.log(`šeštadienio didžiausia temperatūra: ${auksciausiaTemperatura(sestadienis)} laipsnių`);

// c. Parašykite funkciją, kuri apskaičiuotų norimos dienos žemiausią temperatūrą.

function maziausiaTemperatura(temperaturuMasyvas) {
  let maziausia = temperaturuMasyvas[0];
  for (let i = 1; i < temperaturuMasyvas.length; i++) {
    if (temperaturuMasyvas[i] < maziausia) maziausia = temperaturuMasyvas[i];
  }
  return maziausia;
}

console.log(`šeštadienio mažiausia temperatūra: ${maziausiaTemperatura(sestadienis)} laipsnių`);

// d. Parašykite funkciją, kuriai davus visas savaitės dienas, ji suranda kurią dieną
// buvo žemiausia temperatūra, ir kurią dieną buvo aukščiausia temperatūra
function auksciausiaIrZemiausiaTemperaturos(temperaturuMasyvas) {
  let maziausia = temperaturuMasyvas[0];
  let didziausias = temperaturuMasyvas[0];
  for (let i = 1; i < temperaturuMasyvas.length; i++) {
    if (temperaturuMasyvas[i] > didziausias) didziausias = temperaturuMasyvas[i];
    if (temperaturuMasyvas[i] < maziausia) maziausia = temperaturuMasyvas[i];
  }
  return [didziausias, maziausia];
}

function salciausiaIrKarsciausiaSavaitesDiena(dienuObjektas) {
  const dienos = Object.entries(dienuObjektas);

  const salciausiaDiena = {
    diena: dienos[0][0],
    temperatura: dienos[0][1][0],
  };
  const karsciausiaDiena = {
    diena: dienos[0][0],
    temperatura: dienos[0][1][0],
  };

  for (const [diena, temperaturuSarasas] of dienos) {
    const [didziausia, maziausia] = auksciausiaIrZemiausiaTemperaturos(temperaturuSarasas);
    if (maziausia < salciausiaDiena.temperatura) {
      salciausiaDiena.diena = diena;
      salciausiaDiena.temperatura = maziausia;
    }

    if (didziausia > karsciausiaDiena.temperatura) {
      karsciausiaDiena.diena = diena;
      karsciausiaDiena.temperatura = didziausia;
    }
  }

  console.log(
    `šalčiausia diena buvo ${salciausiaDiena.diena} - ${salciausiaDiena.temperatura} laipsniai, karščiausia diena buvo ${karsciausiaDiena.diena} - ${karsciausiaDiena.temperatura} laipsniai`
  );
}

salciausiaIrKarsciausiaSavaitesDiena(visosDienos);

// e. Parašykite funkciją, kuri apskaičiuotų visos savaitės vidutinę temperatūrą

function visosSavaitesVidutineTemperatura(dienuObjektas) {
  const visosTemperaturos = Object.values(dienuObjektas).flat();
  console.log(
    `visos savaitės vidutinė temperatūra: ${apvalinimas(
      temperaturosVidurkis(visosTemperaturos)
    )} laipsniai`
  );
}

visosSavaitesVidutineTemperatura(visosDienos);

// f. Parašykite funkciją, kuriai nurodžius vieną savaitės dieną ir tos dienos
// numatomą kritulių kiekį (saulėta (nelis) / debesuota (lis)), funkcija praneštų
// kaip siūloma pasiruošti einant į lauką: Pasitepti saulės kremu (jei saulėta ir
// šilta), Pasiimti skėtį (jei debesuota ir nešalta), Užsidėti striukę (Jei šalta), ir
// pasiimti morką besmegeniui lipdyti (Jei šalta ir debesuota). Jei pasiūlymų
// nėra, praneškite kad šiandienos oras eiti į lauką yra puikus. Kokia
// temperatūra yra šilta/nešalta/šalta įsivardinkite patys skaičiais. Šalta
// turėtų būti bent 0 laipsnių kad kristų sniegas

function oroRekomendacijos(temperatura, oras = 'sauleta') {
  if (temperatura < 0) {
    if (oras === 'debesuota') {
      console.log('pasiimti striuke ir morką');
    } else {
      console.log('pasiimti striuke');
    }
  } else if (temperatura <= 15) {
    if (oras === 'debesuota') {
      console.log('pasiimti striuke ir skieti');
    } else {
      console.log('pasiimti striuke');
    }
  } else if (temperatura >= 25) {
    if (oras === 'sauleta') {
      console.log('pasitepti kremu nuo saulės');
    } else if (oras === 'debesuota') {
      console.log('pasiimkite skieti');
    } else {
      console.log('mėgaukitės oru');
    }
  } else {
    console.log('mėgaukitės oru');
  }
}

console.log(`oroRekomendacijos(10, 'sauleta')`);
oroRekomendacijos(10, 'sauleta');
console.log(`oroRekomendacijos(15, 'debesuota')`);
oroRekomendacijos(15, 'debesuota');
console.log(`oroRekomendacijos(-15, 'debesuota')`);
oroRekomendacijos(-15, 'debesuota');
console.log(`oroRekomendacijos(-15, 'sauleta')`);
oroRekomendacijos(-15, 'sauleta');
console.log(`oroRekomendacijos(30, 'sauleta')`);
oroRekomendacijos(30, 'sauleta');
console.log(`oroRekomendacijos(30, 'debesuota')`);
oroRekomendacijos(30, 'debesuota');
