/*
IF - sąlygos sakiniai

Pagrindiniai kodo sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} ....  else if () {}
if () {} else if () {} ....  else if () {} else {}

Palyginimo operatoriai:
- viso: >, <, <=, >=, !=, !==, ==, ===
- naudotini: >, <, <=, >=, !==, ===
- nenaudotini: !=, ==

Loginiai operatoriai:
&& (ir)
|| (arba)
*/


if (4 === 4) {
    console.log('Taip');
} else {
    console.log('Ne');
}

const a = 6;

if (a === 1) {
    console.log('vienas');
} else if (a === 2) {
    console.log('du');
} else if (a === 3) {
    console.log('trys');
} else if (a === 4) {
    console.log('keturi');
} else if (a === 5) {
    console.log('penki');
} else if (a === 6) {
    console.log('sesi');
} else if (a === 7) {
    console.log('septyni');
} else {
    console.log('neatpazintas skaicius');
}

const n = 8;

if (n % 2 === 0) {
    console.log('lyginis');
} else {
    console.log('nelyginis');
}

switch (n % 2) {
    case 0:
        console.log('lyginis');
        break;

    case 1:
        console.log('nelyginis');
        break;
}
console.clear();

const d = 3;

if (d === 1) {
    console.log('pirmadienis');
} else if (d === 2) {
    console.log('antradienis');
} else if (d === 3) {
    console.log('treciadienis');
} else if (d === 4) {
    console.log('ketvirtadienis');
} else if (d === 5) {
    console.log('penktadienis');
} else if (d === 6) {
    console.log('sestadienis');
} else if (d === 7) {
    console.log('sekmadienis');
} else {
    console.log('tokia diena savaiteje neegzistuoja');
}

const d2 = 2;

if (d2 === 1) {
    console.log('pirmadienis');
} else {
    if (d2 === 2) {
        console.log('antradienis');
    } else {
        if (d2 === 3) {
            console.log('treciadienis');
        } else {
            if (d2 === 4) {
                console.log('ketvirtadienis');
            } else {
                if (d2 === 5) {
                    console.log('penktadienis');
                } else {
                    if (d2 === 6) {
                        console.log('sestadienis');
                    } else {
                        if (d2 === 7) {
                            console.log('sekmadienis');
                        } else {
                            console.log('tokia diena savaiteje neegzistuoja');
                        }
                    }
                }
            }
        }
    }
}

const d3 = 2;

switch (d3) {
    case 1:
        console.log('pirmaidnies');
        break;
    case 2:
        console.log('antradienis');
        break;
    case 3:
        console.log('treciadienis');
        break;
    case 4:
        console.log('ketvirtadienis');
        break;
    case 5:
        console.log('penktadienis');
        break;
    case 6:
        console.log('sestadienis');
        break;
    case 7:
        console.log('sekmadienis');
        break;
    default:
        console.log('tokia diena savaiteje neegzistuoja');
        break;
}

// 1-5 - darbo diena
// 6-7 - savaitgalis

const d4 = 3.5;

if (d4 === 1 || d4 === 2 || d4 === 3 || d4 === 4 || d4 === 5) {
    console.log('-- darbo diena');
} else if (d4 === 6 || d4 === 7) {
    console.log('-- savaitgalis');
} else {
    console.log('-- tokia diena savaiteje neegzistuoja');
}

if (d4 >= 1 && d4 <= 5 && d4 % 1 === 0) {
    console.log('## darbo diena');
} else if (d4 === 6 || d4 === 7) {
    console.log('## savaitgalis');
} else {
    console.log('## tokia diena savaiteje neegzistuoja');
}


const d5 = 6;

switch (d5) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('darbo diena');
        break;

    case 6:
    case 7:
        console.log('savaitgalis');
        break;

    default:
        console.log('tokia diena savaiteje neegzistuoja');
        break;
}

/* 
1. pasiimame puodeli
2. arbatinukan ipalame vandens
3. uzkaiciam
4. i puodeli isidedam arbatos
5. uzpilame karstu vandeniu
*/
console.clear();

const teaStep = 'aciu';

switch (teaStep) {
    case 1:
        console.log('pasiimame puodeli');
    case 2:
        console.log('arbatinukan ipalame vandens');
    case 3:
        console.log('uzkaiciam');
    case 4:
        console.log('i puodeli isidedam arbatos');
    case 5:
        console.log('uzpilame karstu vandeniu');
    default:
        console.log('labas');
}

const stop = 'Rudens 2';

switch (stop) {
    case 'Geniu 1':
        console.log('🚌 Geniu');
    case 'Tremtiniu 1':
        console.log('🚌 Tremtiniu');
    case 'Rudens 1':
        console.log('🚌 Rudens');
    case 'Mindaugo':
        console.log('🚌 Mindaugo');
    case 'Zaliasis tiltas':
        console.log('🚌 Zaliasis tiltas');
        break;

    case 'Lvovo':
        console.log('🚌 Lvovo');
    case 'Vasara':
        console.log('🚌 Vasara');
    case 'Rudens 2':
        console.log('🚌 Rudens');
    case 'Tremtiniu 2':
        console.log('🚌 Tremtiniu');
    case 'Geniu 2':
        console.log('🚌 Geniu');
        break;
}

console.clear();

const temp = 5;
const isDay = false;

if (temp > 18) {
    switch (isDay) {
        case true:
            console.log('Silta diena 🌞');
            break;

        case false:
            console.log('Silta naktis 🌛');
            break;
    }
} else {
    switch (isDay) {
        case true:
            console.log('Salta diena 🥶');
            break;

        case false:
            console.log('Salta naktis 🌑');
            break;
    }
}


switch (isDay) {
    case true:
        if (temp > 18) {
            console.log('Silta diena 🌞');
        } else {
            console.log('Silta naktis 🌛');
        }
        break;

    case false:
        if (temp > 18) {
            console.log('Salta diena 🥶');
        } else {
            console.log('Salta naktis 🌑');
        }
        break;
}

// UNARY (1)
// BINARY (2)
// TERNARY (3)

const x = 5;

const y = 2 + 2;

let text = '';

if (4 > 2) {
    text = 'Taip';
} else {
    text = 'Ne';
}

console.log(text);

const text2 = 4 > 2 ? 'Taip' : 'Ne';
console.log(text2);

const amziausRiba = 18;
const jonoAmzius = 99;
const jonas = jonoAmzius >= amziausRiba ? 'pilnametis' : 'nepilnametis';

console.log(jonas);
console.log(jonoAmzius >= amziausRiba ? 'pilnametis' : 'nepilnametis');



console.clear();

console.log(1 < 2 ? 3 : 4);
console.log(2 > 3 ? 4 : 5 ? 6 : 7);
console.log(2 < 3 ? 4 : 5 ? 6 : 7);
console.log(1 < 2 ? 3 ? 4 : 5 : 6 ? 7 : 8);

// visi skaiciai yra pozityvus (truthy)
// 0 yra negatyvus (falsy)
if (0) {
    console.log('ok');
} else {
    console.log('not so ok');
}

console.log(1 ? 2 : 3);
console.log(0 ? 2 : 3);
console.log(5 < 6 ? 2 : 3);
console.log(5 > 6 ? 2 : 3);

// visi string yra pozityvus
// isskyrus tuscia
if ('') {
    console.log('ok');
} else {
    console.log('not so ok');
}

const username = '';

if (username) {
    console.log('Labas', username, '!');
} else {
    console.log('Nenurodytas slapyvardis 🤖');
}

if (!username) {
    console.log('Nenurodytas slapyvardis 🤖');
} else {
    console.log('Labas', username, '!');
}


console.clear();

console.log(1 ? 2 ? 3 : 4 : 5 ? 6 : 7);
console.log(0 ? 1 ? 2 : 3 : 4 ? 5 : 6);
