// 2 užduotis - filmų rekomendacija +:
// ● Padarykite funkciją, kuri iš visų esamų filmų sąrašo (kuris gali būti bet kada
// papildomas), pagal jūsų norimą žanrą ir įvertį išveda į console kokie filmai jums patiktų.
// Jei joks filmas netinka, turi tai pranešti.
// ● Jei vietoj įverčio arba žanro yra pateikiamas žodis ‘nesvarbu’, yra pateikiami filmai pagal
// tą kriterijų, kuris yra svarbus.
// ● Jei abu kriterijai yra nesvarbūs, parekomenduokite top 3 įvertintus filmus.

console.log('------------------------');

const filmai = [
  {
    pavadinimas: 'Pabėgimas iš Šoušenko',
    zanras: 'Drama',
    imdb_ivertinimas: 9.3,
  },
  {
    pavadinimas: 'Forrestas Gampas',
    zanras: 'Drama',
    imdb_ivertinimas: 8.8,
  },
  {
    pavadinimas: 'Pradžia',
    zanras: 'Mokslinė fantastika',
    imdb_ivertinimas: 8.8,
  },
  {
    pavadinimas: 'Tamsos riteris',
    zanras: 'Veiksmo',
    imdb_ivertinimas: 9.0,
  },
  {
    pavadinimas: 'Parazitas',
    zanras: 'Trileris',
    imdb_ivertinimas: 8.6,
  },
  {
    pavadinimas: 'Didysis Budapešto viešbutis',
    zanras: 'Komedija',
    imdb_ivertinimas: 8.1,
  },
  {
    pavadinimas: 'Išvarymas',
    zanras: 'Siaubo',
    imdb_ivertinimas: 7.5,
  },
  {
    pavadinimas: 'Stebuklingi Šihiros nuotykiai Dvasių pasaulyje',
    zanras: 'Animacija',
    imdb_ivertinimas: 8.6,
  },
  {
    pavadinimas: '12 įtūžusių vyrų',
    zanras: 'Kriminalinis',
    imdb_ivertinimas: 9.0,
  },
  {
    pavadinimas: 'Tarp žvaigždžių',
    zanras: 'Nuotykių',
    imdb_ivertinimas: 8.7,
  },
  {
    pavadinimas: 'Titanikas',
    zanras: 'Romantinis',
    imdb_ivertinimas: 7.9,
  },
  {
    pavadinimas: 'Gelbstint eilinį Rajaną',
    zanras: 'Drama',
    imdb_ivertinimas: 8.6,
  },
  {
    pavadinimas: 'Dangaus karalystė',
    zanras: 'Drama',
    imdb_ivertinimas: 7.2,
  },
  {
    pavadinimas: 'Džokeris',
    zanras: 'Drama',
    imdb_ivertinimas: 8.4,
  },
];

function gautiTop3Filmus() {
  filmai.sort((a, b) => b.imdb_ivertinimas - a.imdb_ivertinimas);
  return filmai.slice(0, 3);
}

function rastiFilmus(zanras = 'nesvarbu', imdb = 'nesvarbu') {
  console.log(`\nFilmų paieška - žanras '${zanras}', imdb: '${imdb}'`);
  zanras = zanras.toLowerCase();
  if (zanras === 'nesvarbu' && imdb === 'nesvarbu') return spausdintiFilmuSarasa(gautiTop3Filmus());

  let rastiFilmai = [];

  //jeigu įvestas imdb reitingas
  if (String(imdb).toLowerCase() !== 'nesvarbu') {
    imdb = Number(imdb);
    if (isFinite(imdb) && imdb >= 0 && imdb <= 10) {
      imdb = Math.trunc(imdb);
      //ieškoma tik pagal reitingą
      if (zanras === 'nesvarbu') {
        rastiFilmai = filmai.filter((filmas) => Math.trunc(filmas.imdb_ivertinimas) === imdb);
        // ieškoma ir pagal reitingą ir pagal žanrą
      } else {
        rastiFilmai = filmai.filter(
          (filmas) =>
            filmas.zanras.toLowerCase() === zanras && Math.trunc(filmas.imdb_ivertinimas) === imdb
        );
      }
    } else {
      return console.log('Įvestas netinkamas imdb, reitingas turi būti nuo 0 iki 10');
    }
    //imdb reitingas neįvestas, ieškoma tik pagal žanrą
  } else {
    rastiFilmai = filmai.filter((filmas) => filmas.zanras.toLowerCase() === zanras);
  }

  if (rastiFilmai.length === 0) {
    console.log('Dėja filmų pagal šį žanrą rasti nepavyko');
  } else {
    spausdintiFilmuSarasa(rastiFilmai);
  }
}

function spausdintiFilmuSarasa(sarasas) {
  sarasas.sort((a, b) => b.imdb_ivertinimas - a.imdb_ivertinimas);
  sarasas = sarasas
    .map((f) => `* ${f.pavadinimas} | ${f.zanras} | ${f.imdb_ivertinimas}`)
    .join('\n');
  console.log(`Rasti filmai: \n${sarasas}`);
}

rastiFilmus('drama');
rastiFilmus('Dramax');
rastiFilmus('komedija');
rastiFilmus('Drama', 9);
rastiFilmus('nesvarbu', 9);
rastiFilmus('Nesvarbu', 8);
rastiFilmus('Drama', -1);
rastiFilmus('nesvarbu');
rastiFilmus();
