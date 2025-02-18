//vidurkiai
const maryte = {
  name: "Maryte",
  age: 88,
  isMarried: false,
  marks: [10, 2, 8, 4, 6],
  parents: [
    {
      name: "Juozapas",
      age: 112,
      isMarried: true,
      phone: 861475214,
      marks: [10, 9, 8, 7, 6, 5, 4],
    },
    {
      name: "Marija",
      age: 110,
      isMarried: true,
      phone: 861475214,
      marks: [10, 9, 8, 3, 4, 5],
    },
  ],
};

const masyvoVidurkis = (masyvas) =>
  apalinimas(masyvas.reduce((aku, sk) => aku + sk, 0) / masyvas.length, 2);
const apalinimas = (skaicius, kiekis) => Number(Number(skaicius).toFixed(kiekis));

let visiPazymiuMasyvas = [];

const spausdintiObjektoVidurki = (objektas) => {
  const vidurkis = masyvoVidurkis(objektas.marks);
  visiPazymiuMasyvas.push(...objektas.marks);
  console.log(`${objektas.name} -> vidurkis: ${vidurkis}`);
};

spausdintiObjektoVidurki(maryte);
spausdintiObjektoVidurki(maryte.parents[0]);
spausdintiObjektoVidurki(maryte.parents[1]);

console.log("Visu pažymių vidurkis: " + masyvoVidurkis(visiPazymiuMasyvas));
