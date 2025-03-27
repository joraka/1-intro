// 1 užduotis - mokytojo suvestinė +:
// ● Susikurkite bent 6 sąrašo (array) tipo kintamuosius, kurių pirmas narys yra mokinio
// vardas, o toliau yra nevienodo kiekio skaičiaus tipo mokinio pažymiai
// ● Sukurkite funkciją, kuri padaro šiuos veiksmus:
// ○ Išveda mokinio vardą.
// ■ Padarykite, kad funkcija parašytų taisyklingai: arba ‘mokinio’ arba
// ‘mokinės’ vardas yra: …
// ○ Išveda mokinio pažymių vidurkį ir praneša ar mokinys išlaikė ar neišlaikė kurso
// ○ Jei mokinys neišlaiko kurso, parašykite ar mokinys, gavęs vieną gerą įvertį,
// galėtų pasitaisyti savo vidurkį, ir koks tas įvertis turėtų būti.

const mok1 = ['Mikas', 1, 5, 7, 8, 1, 5, 7, 8, 9];
const mok2 = ['Bobas', 1, 2, 3, 4, 5, 6, 7];
const mok3 = ['Anzelmutė', 1, 1, 1, 6, 7];
const mok4 = ['Marius', 1, 5, 7, 8, 1, 5, 7, 8, 9];
const mok5 = ['Marija', 1, 8, 1, 5, 7, 8, 9];
const mok6 = ['Austėja', 1, 5, 7, 8, 1, 1, 1, 1, 1, 8, 9];
const mok7 = ['Kebobas', 1, 1, 2];
const mok8 = ['Raimundėlis', 2, 2, 2, 1];

function gautiPazimius(mokinioMasyvas) {
  const [vardas, ...pazymiai] = mokinioMasyvas;
  const pazymiuSuma = pazymiai.reduce((ak, sk) => ak + sk, 0);
  const pazymiuVidurkis = Math.round(pazymiuSuma / pazymiai.length);
  const arVyras = vardas.at(-1) === 's';
  const kreipinys1 = arVyras ? 'Mokinio' : 'Mokinės';
  const kreipinys2 = arVyras ? 'Mokinys' : 'Mokinė';
  const arIslaikyta = pazymiuVidurkis >= 4;
  console.log(`
    \r${kreipinys1} '${vardas}' duomenys:
    \rPažymiai: ${pazymiai.join(', ')}
    \rVidurkis: ${pazymiuVidurkis}
    \rKursas ${arIslaikyta ? 'išlaikytas' : 'neišlaikytas'}`);
  if (!arIslaikyta) {
    let reikalingasPazimys = 0;
    for (let i = 4; i <= 10; i++) {
      if (Math.round((pazymiuSuma + i) / (pazymiai.length + 1)) >= 4) {
        reikalingasPazimys = i;
        break;
      }
    }

    if (reikalingasPazimys) {
      console.log(`${kreipinys2} pasitaisyti gali jeigu gautu pažimį: ${reikalingasPazimys}`);
    } else {
      console.log(`${kreipinys2} pasitaisyti nebegali`);
    }
  }
}

gautiPazimius(mok1);
gautiPazimius(mok2);
gautiPazimius(mok3);
gautiPazimius(mok4);
gautiPazimius(mok7);
gautiPazimius(mok8);
