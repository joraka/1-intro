/**
 * Užduotis Nr. 1
 * Parašykite funkciją, kuri priima skaičių ir grąžina "true", jei jis teigiamas, ir "false", jei neigiamas arba nulis.
 */
console.log("\n--arTeigimas--");
function arTeigimas(sk) {
  return sk + " - " + (sk > 0);
}
console.log(arTeigimas(1));
console.log(arTeigimas(-1));
console.log(arTeigimas(0));
console.log(arTeigimas(100));

/**
 * Užduotis Nr. 2
 * Parašykite funkciją, kuri priima skaičių nuo 1 iki 12 ir grąžina mėnesio pavadinimą.
 */
console.log("\n--arTeigimas--");
function menesis(sk) {
  switch (sk) {
    case 1:
      return sk + " - Sausis";
    case 2:
      return sk + " - Vasaris";
    case 3:
      return sk + " - Kovas";
    case 4:
      return sk + " - Balandis";
    case 5:
      return sk + " - Gegužė";
    case 6:
      return sk + " - Birželis";
    case 7:
      return sk + " - Liepa";
    case 8:
      return sk + " - Rugpjūtis";
    case 9:
      return sk + " - Rugsėjis";
    case 10:
      return sk + " - Spalis";
    case 11:
      return sk + " - Lapkritis";
    case 12:
      return sk + " - Gruodis";
    default:
      return sk + " - Įvestas netinkamas mėnesio skaičius";
  }
}

console.log(menesis(-1));
console.log(menesis(1));
console.log(menesis(5));
console.log(menesis(8));
console.log(menesis(12));
console.log(menesis(13));

/**
 * Užduotis Nr. 3
 * Parašykite funkciją, kuri priima du skaičius ir grąžina "Pirmas didesnis", "Antras didesnis" arba "Lygūs".
 */
console.log("\n--arDydesnis--");
function arDydesnis(sk1, sk2) {
  if (sk1 > sk2) {
    return sk1 + " ir " + sk2 + " - Pirmas didesnis už antrą";
  } else if (sk1 < sk2) {
    return sk1 + " ir " + sk2 + " - Antras didesnis už pirmą";
  } else {
    return sk1 + " ir " + sk2 + " - Lygūs";
  }
}

console.log(arDydesnis(1, 2));
console.log(arDydesnis(2, 1));
console.log(arDydesnis(2, 2));

/**
 * Užduotis Nr. 4
 * Parašykite funkciją, kuri priima temperatūrą Celsijaus laipsniais ir grąžina ją Farenheito laipsniais.
 * P.S.: Dirbame tik su skaičiais, be "°C" ir "°F".
 */
console.log("\n--konvertuotiTemperatura--");
function konvertuotiTemperatura(tempCelcius) {
  return tempCelcius + "c - " + ((tempCelcius * 9) / 5 + 32) + "f";
}

console.log(konvertuotiTemperatura(20));
console.log(konvertuotiTemperatura(10));
console.log(konvertuotiTemperatura(0));
console.log(konvertuotiTemperatura(-10));
console.log(konvertuotiTemperatura(-20));

/**
 * Užduotis Nr. 5
 * Parašykite funkciją, kuri priima teigiamą skaičių ir grąžina visų jo skaitmenų sumą.
 * P.S.: Jei pateikiamas vienženklis skaičius - grąžiname tą patį skaičių.
 */

// console.log("\n--gautiSkaitmenuSuma--");
// function gautiSkaitmenuSuma(sk) {
//   if (sk <= 0) return "Įvestas netinkamas skaičius";
//   let suma = 0;
//   for (let i = 1; i <= sk; i++) {
//     suma += i;
//   }
//   return "Skaičiaus " + sk + " suma yra " + suma;
// }

// console.log("\n--gautiSkaitmenuSuma--");
// function gautiSkaitmenuSuma(sk) {
//   if (sk <= 0) return "Įvestas netinkamas skaičius";
//   const skTekstas = sk.toString();
//   let suma = 0;
//   for (let i = 0; i < skTekstas.length; i++) {
//     suma += Number(skTekstas[i])
//   }
//   return suma;
// }

console.log("\n--gautiSkaitmenuSuma--");
function gautiSkaitmenuSuma(sk) {
  if (sk <= 0) return "Įvestas netinkamas skaičius";
  let _sk = sk;
  let suma = 0;
  while (_sk > 0) {
    suma = suma + (_sk % 10);
    _sk = Math.floor(_sk / 10);
  }
  return sk + " skaitmenų suma yra " + suma;
}

console.log(gautiSkaitmenuSuma(0));
console.log(gautiSkaitmenuSuma(123));
console.log(gautiSkaitmenuSuma(100));
console.log(gautiSkaitmenuSuma(155));
console.log(gautiSkaitmenuSuma(1));
console.log(gautiSkaitmenuSuma(10));
console.log(gautiSkaitmenuSuma(111));

/**
 * Užduotis Nr. 6
 * Parašykite funkciją, kuri grąžina atsitiktinį procentą nuo 0 iki 100 (sveikasis skaičius).
 */
console.log("\n--randomProcentas--");
function randomProcentas(){
    return Math.floor(Math.random() * 101) + '%';
}

console.log(randomProcentas());
console.log(randomProcentas());
console.log(randomProcentas());

/**
 * [BONUS] Užduotis Nr. 1
 * Parašykite funkciją, kuri priima skaičių ir grąžina masyvą su jo daugybos lentelės rezultatais iki 10.
 */
console.log("\n--daugybosLentele--");
function daugybosLentele(sk){
    const masyvas = [];
    for (let i = 1; i <= 10; i++) {
        masyvas.push(sk + ' * ' + i + ' = ' + (sk * i))
    }
    return masyvas
}

console.log(daugybosLentele(1));
console.log(daugybosLentele(2));
console.log(daugybosLentele(3));
console.log(daugybosLentele(9));
