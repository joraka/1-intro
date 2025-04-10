// 1. Parašykite funkciją, kuri pagal vartotojo įvestą balą(nuo 1 iki 10) išspausdina atitinkamą vertinimą: "Labai gerai", "Gerai", "Patenkinamai" arba "Nepatenkinamai".Kuris operatorius čia tinkamiausias?
console.log("\n---skaiciuotiIvertinima---");
function skaiciuotiIvertinima(balas) {
  if (balas > 10 || balas < 1) {
    return balas + " - Įvestas netinkamas balas, turi būti tarp 1 ir 10";
  } else if (balas >= 8) {
    return balas + " - Balas labai geras";
  } else if (balas >= 6) {
    return balas + " - Geras balas";
  } else if (balas >= 4) {
    return balas + " - Balas patenkinamas";
  } else {
    return balas + " - Balas nepatenkinamas";
  }
}
console.log(skaiciuotiIvertinima(0));
console.log(skaiciuotiIvertinima(11));
console.log(skaiciuotiIvertinima(3));
console.log(skaiciuotiIvertinima(4));
console.log(skaiciuotiIvertinima(5));
console.log(skaiciuotiIvertinima(6));
console.log(skaiciuotiIvertinima(7));
console.log(skaiciuotiIvertinima(8));
console.log(skaiciuotiIvertinima(9));
console.log(skaiciuotiIvertinima(10));

// 2. Parašykite programą, kuri patikrina, ar asmuo gali balsuoti pagal amžių(18 ir daugiau).Jei taip, atspausdinkite "Gali balsuoti", jei ne – "Negali balsuoti".Kuris metodas čia tinkamiausias?
console.log("\n---arGaliBalsuoti---");
function arGaliBalsuoti(amzius) {
  if (amzius >= 18) {
    return amzius + " metų - balsuoti gali";
  } else {
    return amzius + " metų - balsuoti negali";
  }
}

console.log(arGaliBalsuoti(10));
console.log(arGaliBalsuoti(17));
console.log(arGaliBalsuoti(18));
console.log(arGaliBalsuoti(19));

// 3. Sukurkite programą, kuri pagal savaitės dienos numerį(nuo 1 iki 7) atspausdina dienos pavadinimą.Kurį metodą čia patartumėte naudoti?
console.log("\n---savaitesDiena---");
function savaitesDiena(diena) {
  if (diena === 1) return diena + " - pirmadienis";
  if (diena === 2) return diena + " - antradienis";
  if (diena === 3) return diena + " - trečiadienis";
  if (diena === 4) return diena + " - ketvirtadienis";
  if (diena === 5) return diena + " - penktadienis";
  if (diena === 6) return diena + " - šeštadienis";
  if (diena === 7) return diena + " - sekmadienis";
  return diena + " - klaida";
}
console.log(savaitesDiena(1));
console.log(savaitesDiena(4));
console.log(savaitesDiena(6));
console.log(savaitesDiena(7));
console.log(savaitesDiena(8));

// 4. Parašykite funkciją, kuri patikrina, ar skaičius yra teigiamas, neigiamas ar lygus nuliui, ir atitinkamai išveda pranešimą.Kurį operatorių naudoti?
console.log("\n---arTeigiamas---");
function arTeigiamas(skaicius) {
  if (skaicius > 0) {
    return skaicius + " - skaičius yra teigiamas";
  } else if (skaicius < 0) {
    return skaicius + " - skaičius yra neigiamas";
  } else {
    return skaicius + " - skaičius yra lygus nuliui";
  }
}

console.log(arTeigiamas(1));
console.log(arTeigiamas(0));
console.log(arTeigiamas(-1));

// 5. Sukurkite programą, kuri nustato vartotojo amžių ir priskiria jį į vieną iš trijų grupių: "Jaunuolis"(13 - 19), "Suaugęs"(20 - 64), "Pensininkas"(65 +).Koks operatorius geriausiai tinka šiam atvejui?
console.log("\n---amaziausKategorija---");
function amaziausKategorija(amzius) {
  if (amzius >= 65) {
    return amzius + "m. - pensininkas";
  } else if (amzius >= 20) {
    return amzius + "m. - suaugęs";
  } else if (amzius >= 13) {
    return amzius + "m. - jaunuolis";
  } else if (amzius >= 0) {
    return amzius + "m. - naujuolis";
  } else {
    return amzius + "m. - negyvėlis";
  }
}
console.log(amaziausKategorija(-1));
console.log(amaziausKategorija(10));
console.log(amaziausKategorija(15));
console.log(amaziausKategorija(19));
console.log(amaziausKategorija(20));
console.log(amaziausKategorija(64));
console.log(amaziausKategorija(65));
console.log(amaziausKategorija(99));

// 6. Parašykite programą, kuri patikrina, ar skaičius yra lyginis ar nelyginis, ir atspausdina atitinkamą pranešimą.Kuris operatorius čia tinkamiausias?
console.log("\n---amaziausKategorija---");
function arLyginis(skaicius) {
  if (skaicius % 2 === 0) {
    return skaicius + " - skaičius lyginis";
  } else {
    return skaicius + " - skaičius nelyginis";
  }
}

console.log(arLyginis(1));
console.log(arLyginis(2));
console.log(arLyginis(3));
console.log(arLyginis(4));
