// Parašyti funkciją, kuri apskaičiuotų kiek sveikųjų teigiamų skaičių sąraše yra tam tikrų
// skaičių ir išvestų resultatą grafiškai. PVZ: turint sąrašą [1, 1, 2, 3, 3, 3, 4] rezultatas
// būtų gaunamas toks:
// 1: **
// 2: *
// 3: ***
// 4: *

function grafinisTegiaimiSveikiSkaiciai(masyvas) {
  const skaiciuObjektas = {};
  masyvas.forEach((skaicius) => {
    if (Number.isInteger(skaicius) && skaicius > 0) {
      skaiciuObjektas[skaicius] = skaiciuObjektas.hasOwnProperty(skaicius)
        ? skaiciuObjektas[skaicius] + 1
        : 1;
    }
  });

  return Object.entries(skaiciuObjektas)
    .map(([skaicius, kiekis]) => `${skaicius}: ${'*'.repeat(kiekis)}`)
    .join('\n\r\t ');
}

console.log(
  'grafinisTegiaimiSveikiSkaiciai([1, 1, 2, 3, 3, 3, 4])\n\r\t',
  grafinisTegiaimiSveikiSkaiciai([1, 1, 2, 3, 3, 3, 4])
);

console.log(
  'grafinisTegiaimiSveikiSkaiciai([1, 1, -2, -3, 99, 99, 88, 77, 77, 77, 77, 3, 3, 4])\n\r\t',
  grafinisTegiaimiSveikiSkaiciai([1, 1, -2, -3, 99, 99, 88, 77, 77, 77, 77, 3, 3, 4])
);
