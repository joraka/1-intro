// Sukurkite funkciją, kuri pagal pateiktą mėnesio numerį(1 - 12) išveda sezono pavadinimą("Pavasaris", "Vasara", "Ruduo", "Žiema").Kuri struktūra geriausiai tinka šiam uždaviniui?
console.log("---gautiSezona---");
function gautiSezona(menesioSkaicius) {
  switch (menesioSkaicius) {
    case 3:
    case 4:
    case 5:
      return menesioSkaicius + " - Pavasaris";
    case 6:
    case 7:
    case 8:
      return menesioSkaicius + " - Vasara";
    case 9:
    case 10:
    case 11:
      return menesioSkaicius + " - Ruduo";
    case 12:
    case 1:
    case 2:
      return menesioSkaicius + " - Žiema";
    default:
      return menesioSkaicius + " - Įvestas blogas mėnesio skaičius";
  }
}

console.log(gautiSezona(3));
console.log(gautiSezona(6));
console.log(gautiSezona(10));
console.log(gautiSezona(2));
console.log(gautiSezona(13));

// Parašykite programą, kuri nustato, ar du skaičiai yra lygūs, ar ne, ir atitinkamai išveda pranešimą.Kuris operatorius naudoti?
console.log("\n---arLygus---");
function arLygus(sk1, sk2) {
  return sk1 + " ir " + sk2 + " - " + (sk1 === sk2 ? "Skaičiai lygūs" : "Skaičiai nelygūs");
}

console.log(arLygus(1, 1));
console.log(arLygus(1, 2));

// Sukurkite funkciją, kuri patikrina, ar vartotojo įvestas simbolis yra balsė, priebalsė ar nėra raidė.Koks operatorius geriausiai tinka?
console.log("\n---patikrintiBalse---");
function patikrintiBalse(simbolis) {
  const balses = ["a", "ą", "e", "ę", "ė", "i", "į", "y", "o", "u", "ų", "ū"];
  /* prettier-ignore */
  const priebalses = ["b", "c", "č", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "š", "t", "v", "z", "ž"];
  mazasSimbolis = simbolis.toLowerCase();
  if (balses.includes(mazasSimbolis)) {
    return simbolis + " - yra balsė";
  } else if (priebalses.includes(mazasSimbolis)) {
    return simbolis + " - yra priebalsė";
  } else {
    return simbolis + " - nera raidė";
  }
}

console.log(patikrintiBalse("A"));
console.log(patikrintiBalse("Ą"));
console.log(patikrintiBalse("c"));
console.log(patikrintiBalse("č"));
console.log(patikrintiBalse("4"));

// Parašykite programą, kuri pagal nurodytą dieną(pirmadienis, antradienis, ...sekmadienis) išveda, ar tai darbo diena ar savaitgalis.Kurį operatorių naudoti?
console.log("\n---arSavaitgalis---");
function arSavaitgalis(savaitesDiena) {
  if (savaitesDiena <= 0 || savaitesDiena >= 8) {
    return savaitesDiena + " - Įvesta bloga savaitės diena";
  } else if (savaitesDiena > 5) {
    return savaitesDiena + " - Savaitgalis";
  } else {
    return savaitesDiena + " - Darbo diena";
  }
}
console.log(arSavaitgalis(0));
console.log(arSavaitgalis(2));
console.log(arSavaitgalis(5));
console.log(arSavaitgalis(6));

// Sukurkite funkciją, kuri pagal įvestą temperatūrą(Celsius) nustato oro būklę: "Šalta"(< 10°C), "Šilta"(10 - 25°C), "Karšta"(> 25°C).Koks operatorius geriausiai tinka?
console.log("\n---gautiTemperatura---");
function gautiTemperatura(temp) {
  if (temp < 10) {
    return temp + "C - Šalta";
  } else if (temp <= 25) {
    return temp + "C - Vidutinė temperatūra";
  } else {
    return temp + "C - Karšta";
  }
}
console.log(gautiTemperatura(-10));
console.log(gautiTemperatura(0));
console.log(gautiTemperatura(10));
console.log(gautiTemperatura(20));
console.log(gautiTemperatura(30));

// Parašykite programą, kuri patikrina, ar vartotojo įvestas skaičius yra daliklis tiek 3, tiek 5. Kurį operatorių naudoti?
console.log("\n---arDaliklis---");
function arDaliklis(skaicius) {
  return (
    skaicius +
    " - " +
    (skaicius % 3 === 0 && skaicius % 5 === 0
      ? " Skaičius dalinasi iš 3 ir 5"
      : "Skaičius nesidalina iš 3 ir 5")
  );
}
console.log(arDaliklis(1));
console.log(arDaliklis(5));
console.log(arDaliklis(6));
console.log(arDaliklis(10));
console.log(arDaliklis(15));
console.log(arDaliklis(17));
console.log(arDaliklis(30));
console.log(arDaliklis(45));

// Sukurkite funkciją, kuri pagal įvestą dienos tipą("darbo diena", "savaitgalis") išveda atitinkamą veiklą: "Dirbti", "Ilsėtis".Kuri struktūra geriausiai tinka?
console.log("\n---arDirbti---");
function arDirbti(savaitesDiena) {
  if (savaitesDiena <= 0 || savaitesDiena >= 8) {
    return savaitesDiena + " - Įvesta bloga savaitės diena";
  } else if (savaitesDiena > 5) {
    return savaitesDiena + " - Ilsėtis";
  } else {
    return savaitesDiena + " - Dirbti";
  }
}
console.log(arDirbti(0));
console.log(arDirbti(2));
console.log(arDirbti(5));
console.log(arDirbti(6));
console.log(arDirbti(7));
console.log(arDirbti(8));

// Parašykite programą, kuri nustato, ar vartotojo įvestas metai yra keliamieji.Kurį operatorių naudoti?
console.log("\n---arKeliamiejiMetai---");
function arKeliamiejiMetai(metai) {
  return (
    metai +
    " - " +
    ((metai % 4 === 0 && metai % 100 !== 0) || metai % 400 === 0
      ? "yra keliamieji metai"
      : "nėra keliamieji metai")
  );
}
console.log(arKeliamiejiMetai(2000));
console.log(arKeliamiejiMetai(2005));
console.log(arKeliamiejiMetai(2020));
console.log(arKeliamiejiMetai(2021));
console.log(arKeliamiejiMetai(2040));
console.log(arKeliamiejiMetai(2035));

// Sukurkite funkciją, kuri pagal vartotojo įvestą temperatūrą(Celsius) priskiria aprangos rekomendaciją: "Kepurių nereikia", "Kepurės reikalingos", "Geriau neik į lauką".Koks operatorius geriausiai tinka?
console.log("\n---geriausiaApranga---");
function geriausiaApranga(temp) {
  if (temp <= -25 || temp >= 40) {
    return temp + "C - Geriau neik į lauką";
  } else if (temp <= 10) {
    return temp + "C - Kepurės reikalingos";
  } else {
    return temp + "C - Kepurių nereikia";
  }
}

console.log(geriausiaApranga(-30));
console.log(geriausiaApranga(40));
console.log(geriausiaApranga(25));
console.log(geriausiaApranga(15));
console.log(geriausiaApranga(5));
console.log(geriausiaApranga(-10));
