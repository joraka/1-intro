//iš teksto gauti vėją (W), kampą (A), greitį (S) ir konvertuoti į objektą.
//skaičiai turi būti 'number' tipo
//"W152A52.1S85.31" -> { W: 152, A: 52.1, S: 85.31 }
const gautiDuomenys = `W152A52.1S85.31`;

const duomenuMasyvas = [];
let paskutinisSimbolioTipas = 0;
for (let i = 0, k = 0; i < gautiDuomenys.length; i++) {
  const gautasSimbolis = gautiDuomenys[i];
  let newType = 0;

  if (gautasSimbolis >= "A" && gautasSimbolis <= "Z") {
    newType = 1;
  } else if ((gautasSimbolis >= "0" && gautasSimbolis <= "9") || gautasSimbolis === ".") {
    newType = 2;
  }

  if (paskutinisSimbolioTipas === newType && duomenuMasyvas.length > 0) {
    duomenuMasyvas[duomenuMasyvas.length - 1] += gautasSimbolis;
  } else {
    duomenuMasyvas.push(gautasSimbolis);
  }

  paskutinisSimbolioTipas = newType;
}

console.log("duomenuMasyvas", duomenuMasyvas);

const nukirptasDuomenyMasyvas =
  duomenuMasyvas.length % 2 === 0 ? duomenuMasyvas : duomenuMasyvas.slice(0, -1);

const duomenuObjektas = {};
for (let i = 0; i < duomenuMasyvas.length; i += 2) {
  duomenuObjektas[duomenuMasyvas[i]] = isNaN(duomenuMasyvas[i + 1])
    ? duomenuMasyvas[i + 1]
    : Number(duomenuMasyvas[i + 1]);
}
console.log("duomenyObjektas", duomenuObjektas);

//objekto raktų pagražinimas
const duomenuObjektas2 = {};
const naujuPavadinimuSarasas = { W: "vejas", A: "kampas", S: "greitis" };
for (const raktas in duomenuObjektas) {
  duomenuObjektas2[
    naujuPavadinimuSarasas.hasOwnProperty(raktas) ? naujuPavadinimuSarasas[raktas] : raktas
  ] = duomenuObjektas[raktas];
}
console.log("naujuPavadinimuSarasas", duomenuObjektas2);
