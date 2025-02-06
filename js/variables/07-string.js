/*
STRING - tekstas - simboliu grandinele

iniciavimas galimas:
- ' (viengubomis kabutemis)
- " (dvigubomis kabutemis)
- ` (backtick'as)

*/

const firstname = 'Chuck';
console.log(firstname);

const lastname = "Norris";
console.log(lastname);

const fullname = firstname + ' ' + lastname;
console.log(fullname);

const age = 84;

// Hi, my name is Chuck and I am 84 years old.
// Hi, my name is Maryte and I am 88 years old.
// Hi, my name is {NAME} and I am {AGE} years old.
const chuckIntro = 'Hi, my name is ' + firstname + ' and I am ' + age + ' years old.';
console.log(chuckIntro);

// Kabute: ' (vienguba).
const k1 = "Kabute: ' (vienguba).";
console.log(k1);

// Kabute: " (dviguba).
const k2 = 'Kabute: " (dviguba).';
console.log(k2);

// Kabutes: ' (vienguba) ir " (dviguba).
const k12 = "Kabutes: ' (vienguba)" + ' ir " (dviguba).';
console.log(k12);

/*
<div>
    <h1>Labas rytas, Lietuva!</h1>
    <p>Pirmadienis.</p>
    <p>Pomidoras.</p>
</div>
*/

const html1 = '<div>';
const html2 = '    <h1>Labas rytas, Lietuva!</h1>';
const html3 = '    <p>Pirmadienis.</p>';
const html4 = '    <p>Pomidoras.</p>';
const html5 = '</div>';
console.log(html1);
console.log(html2);
console.log(html3);
console.log(html4);
console.log(html5);

/*
<div>
    <h1>Labas rytas, Lietuva!</h1>
    <p>Pirmadienis.</p>
    <p>Pomidoras.</p>
</div>
*/
console.log('-------------------');

// \n - new line
// \r - return
// \t - tab = 4space/8space
// \r\n - "ultimate" new line (enter mygtukas)

const html = '<div>\r\n\
\t<h1>Labas rytas, Lietuva!</h1>\r\n\
\t\t<p>Pirmadienis.</p>\r\n\
\t<p>Pomidoras.</p>\r\n\
</div>';
console.log(html);



// Kabutes: ' (vienguba) ir " (dviguba).
const k3 = 'Kabutes: \' (vienguba) ir " (dviguba).';
console.log(k3);
const k4 = "Kabutes: ' (vienguba) ir \" (dviguba).";
console.log(k4);
const k5 = "Kabutes: \' (vienguba) ir \" (dviguba).";
console.log(k5);
const k6 = 'Kabutes: \' (vienguba) ir \" (dviguba).';
console.log(k6);

console.clear();

const b = `labas`;
console.log(b);

const bHtml = `<div>
    <h1>Labas rytas, Lietuva!</h1>
    <p>Pirmadienis.</p>
    <p>Pomidoras.</p>
</div>`;
console.log(bHtml);

// Kabute: ` (backtick).
const backtickBedute1 = 'Kabute: `(backtick).';
const backtickBedute2 = "Kabute: `(backtick).";
const backtickBedute3 = `Kabute: \`(backtick).`;
console.log(backtickBedute1);
console.log(backtickBedute2);
console.log(backtickBedute3);

const luckyNumber = 13;

// My lucky number is 13.
const lucky = 'My lucky number is ' + luckyNumber + '.';
console.log(lucky);

const lucky2 = `My lucky number is ${luckyNumber}.`;
console.log(lucky2);

const chuckBack = `Hi, my name is ${firstname} and I am ${age} years old.`;
console.log(chuckBack);

// Price: $45.00
const price = 45;
const priceStr1 = 'Price: $${price}.00';
console.log(priceStr1);
const priceStr2 = "Price: $${price}.00";
console.log(priceStr2);
const priceStr3 = `Price: $${price}.00`;
console.log(priceStr3);

// C:\Documents\troliai\rekia\namie
const troliai1 = 'C:\\Documents\\troliai\\rekia\\namie';
console.log(troliai1);
const troliai2 = "C:\\Documents\\troliai\\rekia\\namie";
console.log(troliai2);
const troliai3 = `C:\\Documents\\troliai\\rekia\\namie`;
console.log(troliai3);

// String.raw`C:\Documents\troliai\rekia\namie`;

const broliai = `String.raw\`C:\\Documents\\troliai\\rekia\\namie\`;`;
console.log(broliai);
