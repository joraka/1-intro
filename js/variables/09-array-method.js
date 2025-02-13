/*
ARRAY - Arėjus, sąrašas, listas, masyvas, matrica
*/

const numbers = [10, 2, 8, 4, 6];
console.log(numbers);
console.log(numbers.length);

const mix = [145, 'adsfd', true];
console.log(mix);
console.log(mix.length);

const students = ['Jonas', 'Maryte', 'Petras', 'Ona', 'Kazys', 'Aldona'];
console.log(students);
console.log(students.length);

for (let i = 0; i < students.length; i++) {
    console.log(`Studentas: ${students[i]} pradejo mokytis.`);
}

console.clear();

const x = ['asd'];

if (Array.isArray(x)) {
    console.log('Taip');
} else {
    console.log('Ne');
}

console.log(Array.isArray(14562));
console.log(Array.isArray(true));
console.log(Array.isArray('afsd'));
console.log(Array.isArray({}));
console.log(Array.isArray([]));
console.log(Array.isArray([154]));
console.log(Array.isArray(['154']));
console.log(Array.isArray([true]));

console.clear();


const studentsAt = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(studentsAt[0]);
console.log(studentsAt[1]);
console.log(studentsAt[2]);
console.log(studentsAt[3]);
console.log(studentsAt[studentsAt.length - 1]);
console.log(studentsAt[studentsAt.length - 2]);
console.log(studentsAt[studentsAt.length - 3]);
console.log(studentsAt[studentsAt.length - 4]);

console.log('------------');

console.log(studentsAt.at(0));
console.log(studentsAt.at(1));
console.log(studentsAt.at(-1));
console.log(studentsAt.at(-2));

console.clear();

const studentsCon1 = ['Jonas', 'Maryte'];
const studentsCon2 = ['Petras', 'Ona'];

const studentsCon111 = studentsCon1.concat(studentsCon2);
console.log(studentsCon111);

const studentsCon222 = studentsCon2.concat(studentsCon1);
console.log(studentsCon222);

console.log([1].concat([2]));
console.log([1].concat([2]).concat([3]));
console.log([1].concat([2]).concat([3]).concat([4]));

console.log([1].concat([2], [3], [4]));

console.clear();

const notFlat = [1, 2, 3, [4], [[[[[[[[5]]]]]]], 6]];
console.log(notFlat);
console.log(notFlat[0]);
console.log(notFlat[1]);
console.log(notFlat[2]);
console.log(notFlat[3]);
console.log(notFlat[3][0]);

console.log(notFlat[4]);
console.log(notFlat[4][0]);
console.log(notFlat[4][1]);

console.log(notFlat.flat().flat());
console.log(notFlat.flat(Infinity));
console.log(notFlat);

console.clear();

const studentsInc = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(studentsInc.includes('Chuck'));
console.log(studentsInc.includes('a'));
console.log(studentsInc.includes('Jonas'));
console.log(studentsInc.includes('ona'));
console.log(studentsInc.includes('Ona'));

console.clear();

const studentsIndex = ['Jonas', 'Ona', 'Maryte', 'Petras', 'Ona'];
console.log(studentsIndex.indexOf('Chuck'));
console.log(studentsIndex.indexOf('a'));
console.log(studentsIndex.indexOf('Jonas'));
console.log(studentsIndex.indexOf('ona'));
console.log(studentsIndex.indexOf('Ona'));
console.log(studentsIndex.indexOf('Ona', 2));
console.log(studentsIndex.indexOf('Ona', 5));

console.clear();

const seachStudent = 'Maryte';
let studentCount = 0;

for (let i = 0; i < studentsIndex.length; i++) {
    if (studentsIndex[i] === seachStudent) {
        studentCount++;
    }
}

if (studentCount === 0) {
    console.log('Norimo studento nerasta');
} else {
    console.log(`Sarase yra "${seachStudent}": ${studentCount}`);
}

console.clear();

const medziai = [];
console.log(medziai);

medziai.push('ąžuolas');
console.log(medziai);

medziai.push('eglė');
console.log(medziai);

medziai.push('beržas');
console.log(medziai);

medziai.pop();
console.log(medziai);

medziai.unshift('pušis');
console.log(medziai);

medziai.unshift('kedras');
console.log(medziai);

medziai.shift();
console.log(medziai);

console.log([1, 2, 3].concat([4, 5]));

console.log([9, 99, 999, 9999].slice(1, -1));

const sp1 = [1, 2, 3, 4, 5, 6, 7];
console.log(sp1);

const sp2 = sp1.splice(2, 3);
console.log(sp2);

console.log(sp1);

console.clear();

const text = 'Labas rytas Lietuva';
const words = text.split(' ');
console.log(words);

const textWithDashes = words.join();
console.log(textWithDashes);

const textToStr = '' + words;
console.log(textToStr);

const textJoin1 = words.join(' ');
console.log(textJoin1);

const textJoin2 = words.join('-');
console.log(textJoin2);

const textJoin3 = words.join('_-=-_');
console.log(textJoin3);

const textJoin4 = words.join('(o.o)');
console.log(textJoin4);

const textJoin5 = words.join('( ͡° ͜ʖ ͡°)');
console.log(textJoin5);

console.log(' ͡° ͜ʖ ͡°'.length);
console.log(' ͡° ͜ʖ ͡°'.charCodeAt(0));
console.log(' ͡° ͜ʖ ͡°'.charCodeAt(1));
console.log(' ͡° ͜ʖ ͡°'.charCodeAt(2));
console.log(' ͡° ͜ʖ ͡°'.charCodeAt(3));
console.log(' ͡° ͜ʖ ͡°'.charCodeAt(4));
console.log(' ͡° ͜ʖ ͡°'.charCodeAt(5));
console.log(' ͡° ͜ʖ ͡°'.charCodeAt(6));
console.log(' ͡° ͜ʖ ͡°'.charCodeAt(7));
console.log(' ͡° ͜ʖ ͡°'.charCodeAt(8));

console.clear();

const rev = [1, 2, 3];
console.log(rev);

rev.reverse();
console.log(rev);

rev.reverse();
console.log(rev);

// Labas rytas Lietuva -> Lietuva rytas Labas

const lrl = 'Labas rytas Lietuva'
    .split(' ')
    .reverse()
    .join(' ');

console.log(lrl);

// alus -> sula

const alus = 'alus'
    .split('')
    .reverse()
    .join('');

console.log(alus);
