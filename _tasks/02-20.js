/**
 * Užduotis: "Miesto eismo analizė"
 *
 * Jūsų tikslas - parašyti kelias funkcijas, kurios analizuos miesto transporto srautą.
 * Įsivaizduokite, kad turime duomenų apie įvairius miesto rajonus, jų populiacija ir eismo intensyvumą.
 * Turėsite apdoroti šiuos duomenis ir pateikti išvadas apie transporto srautą.
 */

/**
 * Turite masyvą, kuris reprezentuoja miesto rajonus ir jų populiaciją, transporto duomenis:
 *
 * name - rajono pavadinimas
 * population - rajono gyventojų skaičius
 * traffic - masyvas, kuris parodo eismo intensyvumą (automobilių skaičius per valandą) kiekvieną savaitės dieną (pirmadienis - sekmadienis)
 */
const cityTraffic = [
  { name: "Senamiestis", population: 15000, traffic: [120, 85, 90, 70, 150, 200, 130] },
  { name: "Šnipiškės", population: 10000, traffic: [80, 60, 75, 95, 100, 120, 110] },
  { name: "Antakalnis", population: 20000, traffic: [100, 120, 140, 160, 180, 200, 220] },
  { name: "Žirmūnai", population: 25000, traffic: [200, 220, 250, 270, 300, 330, 350] },
  { name: "Lazdynai", population: 12000, traffic: [50, 70, 80, 90, 100, 120, 130] },
];

/**
 * [1] Vidutinis eismo srautas rajone
 *
 * Sukurkite funkciją averageTraffic(region), kuri priima rajono objektą ir grąžina vidutinį eismo intensyvumą per savaitę.
 *
 * Pvz.: averageTraffic(cityTraffic[0]) turėtų grąžinti 120.71 (suapvalinta iki dviejų skaičių po kablelio).
 */
const toFixedNum = (num, fCount) => Number(Number(num).toFixed(fCount));

const averageTraffic = (cityObject) =>
  toFixedNum(cityObject.traffic.reduce((acc, num) => acc + num, 0) / cityObject.traffic.length, 2);

const printCitiesAverages = (citiesArr) => {
  console.log("printCitiesAverages");
  citiesArr.forEach((cityObject) => {
    console.log({ city: cityObject.name, average: averageTraffic(cityObject) });
  });
};

printCitiesAverages(cityTraffic);

/**
 * [2] Rajonas su didžiausiu vidutiniu eismu
 *
 * Parašykite funkciją busiestRegion(data), kuri priima miesto duomenų masyvą ir grąžina rajono pavadinimą, kuriame vidutinis eismo intensyvumas yra didžiausias.
 *
 * Pvz.: busiestRegion(cityTraffic) turėtų grąžinti "Žirmūnai".
 */

const getMaxCityAverage = (citiesArr) => {
  let maxAverage = 0;
  let maxCity = "";

  citiesArr.forEach((cityObject) => {
    const avg = averageTraffic(cityObject);
    if (avg > maxAverage) {
      maxAverage = avg;
      maxCity = cityObject.name;
    }
  });

  return { city: maxCity, average: maxAverage };
};

console.log("getMaxCityAverage", getMaxCityAverage(cityTraffic));

/**
 * [3] Eismo intensyvumas vienam gyventojui
 *
 * Parašykite funkciją trafficPerPerson(region), kuri priima rajono objektą ir grąžina eismo srautą, tenkantį vienam gyventojui per savaitę.
 *
 * Pvz.: trafficPerPerson(cityTraffic[0]) turi grąžinti 0.056 (suapvalinta iki trijų skaičių po kablelio).
 */

/**
 * [4] Sugeneruoti savaitės eismo ataskaitą
 *
 * Sukurkite funkciją generateTrafficReport(data), kuri priima miesto duomenų masyvą ir grąžina masyvą su tokiais objektais kiekvienam miesto rajonui:
 * {
 *      name: "Senamiestis",       // Rajono pavadinimas
 *      avgTraffic: 120.71,        // Vidutinis eismo srautas rajone
 *      bussiestDay: 200,          // Didžiausias fiksuotas eismo srautas kažkurią dieną
 *      trafficPerPerson: 0.056    // Eismo intensyvumas vienam gyventojui
 * }
 */

/**
 * [EXTRA] Papildoma užduotis
 *
 * Jei norite iššūkio, pridėkite funkciją findLeastBusyDay(data), kuri priima miesto duomenų masyvą ir nustato mažiausio eismo dieną visame mieste. Ji turėtų grąžinti savaitės dienos pavadinimą (pvz., "Pirmadienis").
 */
