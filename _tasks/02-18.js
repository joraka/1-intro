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

const masyvoVidurkis = (masyvas) => {
  let suma = 0;
  for (let i = 0; i < masyvas.length; i++) {
    suma += masyvas[i];
  }
  return suma / masyvas.length;
};

const visuPazymiuMasyvas = [];

const spausdintiObjektoVidurki = (objektas) => {
  const vidurkis = masyvoVidurkis(objektas.marks);
  visuPazymiuMasyvas.push(vidurkis);
  console.log(`${objektas.name} -> vidurkis: ${vidurkis}`);
};

spausdintiObjektoVidurki(maryte);
spausdintiObjektoVidurki(maryte.parents[0]);
spausdintiObjektoVidurki(maryte.parents[1]);

console.log("Visu pažymių vidurkis: " + masyvoVidurkis(visuPazymiuMasyvas));
