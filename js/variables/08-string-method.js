/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

//                       11
//             012345678901

const chuck = 'chuck';
const nameSize = chuck.length;

console.log(chuck, chuck.length);
console.log(chuck, nameSize);

// Chuck name is 5 letters long.
const chuckName = `${chuck} name is ${chuck.length} letters long.`;
console.log(chuckName);

for (let i = 0; i < chuck.length; i++) {
    console.log('-->', i, chuck[i]);
}

console.log('----------------');

for (let i = chuck.length - 1; i >= 0; i--) {
    console.log('#', i, chuck[i]);
}

// console.log(`Zodyje "vasara" yra 3 "a" raides.`);

// vasara -> a?
// vasara -> v?
// vasara -> r?
// vasara -> x?

// terminator x -> a?
// terminator x -> t?
// terminator x -> m?
console.clear();

const word1 = 'vasara';
const word2 = 'terminator x';

console.log(letterCount(word1, 'a'));
console.log(letterCount(word1, 'v'));
console.log(letterCount(word1, 'r'));
console.log(letterCount(word1, 'x'));

console.log(letterCount(word2, 'x'));
console.log(letterCount(word2, 't'));
console.log(letterCount(word2, 'a'));
console.log(letterCount(word2, 'r'));


function letterCount(text, searchSymbol) {
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === '' + searchSymbol) {
            count++;
        }
    }

    return `Zodyje "${text}" yra ${count} "${searchSymbol}" raides.`;
}


console.log(letterCount('Mano tel nr yra 8612345678', '8'));

function doesTextIncludeSymbol(text, symbol) {
    const end = text.length;

    for (let i = 0; i < end; i++) {
        if (text[i] === symbol) {
            return true;
        }
    }

    return false;
}

console.log(doesTextIncludeSymbol('vasara', 'a'));
console.log(doesTextIncludeSymbol('vasara', 'g'));
console.log(doesTextIncludeSymbol('terminator x', 'g'));
console.log(doesTextIncludeSymbol('terminator x', 'x'));
console.log(doesTextIncludeSymbol('terminator x', 'e'));
console.log(doesTextIncludeSymbol('terminator x', 'h'));
console.log(doesTextIncludeSymbol('65845254', '9'));
console.log(doesTextIncludeSymbol('65845254', '4'));

console.log('----------');

console.log('vasara'.includes('a'));
console.log('vasara'.includes('g'));
console.log('vasara'.includes('v'));
console.log('vasara'.includes('r'));
console.log('vasara'.includes('x'));
console.log('terminator x'.includes('x'));
console.log('terminator x'.includes('g'));

console.clear();

function symbolAtPosition(text, pos) {
    const index = pos >= 0 ? pos : (text.length + pos);
    return text[index];
}

const p = 'pomidoras';
console.log(p.at(0), p[0], symbolAtPosition(p, 0));
console.log(p.at(1), p[1], symbolAtPosition(p, 1));
console.log(p.at(2), p[2], symbolAtPosition(p, 2));
console.log(p.at(22), p[22], symbolAtPosition(p, 22));
console.log(p.at(-1), p[p.length - 1], symbolAtPosition(p, -1));
console.log(p.at(-2), p[p.length - 2], symbolAtPosition(p, -2));
console.log(p.at(-3), p[p.length - 3], symbolAtPosition(p, -3));
console.log(p.at(-33), p[p.length - 33], symbolAtPosition(p, -33));

console.clear();
console.log('pomidoras'.charAt(0));
console.log('pomidoras'.charAt(1));
console.log('pomidoras'.charAt(2));
console.log('pomidoras'.charAt(3));
console.log('pomidoras'.charAt(-1));
console.log('pomidoras'.charAt(-2));
console.log('pomidoras'.charAt(-3), 'pomidoras'[-3]);

console.clear();
console.log('ABCDEF'.charCodeAt(0));
console.log('ABCDEF'.charCodeAt(1));
console.log('ABCDEF'.charCodeAt(2));
console.log('Z'.charCodeAt(0));
console.log('abcdef'.charCodeAt(0));
console.log('abcdef'.charCodeAt(1));
console.log('abcdef'.charCodeAt(2));

console.log(String.fromCharCode(91, 92, 93, 94, 95, 96));
console.log(String.fromCharCode(333));
console.log(String.fromCharCode(222));
console.log(String.fromCharCode(2222));
console.log(String.fromCharCode(22222));
console.log(String.fromCharCode(222222));

console.clear();
console.log('pomidoras'.concat('aaa'));
console.log('pomidoras'.concat('aaa', 'bbb'));
console.log('pomidoras' + 'aaa' + 'bbb');

console.clear();
console.log('pomidoras'.endsWith('aaa'));
console.log('pomidoras'.endsWith('a'));
console.log('pomidoras'.endsWith('s'));
console.log('pomidoras'.endsWith('as'));
console.log('pomidoras'.endsWith('ras'));
console.log('pomidoras'.endsWith('Ras'));
console.log('pomidoras'.endsWith('pomidoras'));

console.clear();
console.log('pomidoras'.startsWith('a'));
console.log('pomidoras'.startsWith('p'));
console.log('pomidoras'.startsWith('pr'));
console.log('pomidoras'.startsWith('po'));
console.log('pomidoras'.startsWith('pom'));
console.log('pomidoras'.startsWith('pomidoras'));

console.log('selfy.png'.endsWith('.png'));
console.log('selfy.png'.endsWith('.jpg'));

console.log('https://abc.lt'.startsWith('https://'));
console.log('http://abc.lt'.startsWith('http://'));

console.clear();
console.log('pomidoras'.includes('a'));
console.log('pomidoras'.includes('r'));
console.log('pomidoras'.includes('x'));
console.log('pomidoras'.includes('pom'));
console.log('pomidoras'.includes('ido'));
console.log('pomidoras'.includes('ras'));

console.clear();
console.log('pomidoras'.indexOf('a'));
console.log('pomidoras'.indexOf('r'));
console.log('pomidoras'.indexOf('x'));
console.log('pomidoras'.indexOf('pom'));
console.log('pomidoras'.indexOf('ido'));
console.log('pomidoras'.indexOf('ras'));
console.log('pomidoras'.indexOf('gg'));
//           012345
console.log('ffgghh'.indexOf('gg'));

console.log('pomidoras'.indexOf('o'));
console.log('pomidoras'.indexOf('o', 0));
console.log('pomidoras'.indexOf('o', 1));
//           012345
console.log('pomidoras'.indexOf('o', 2));
console.log('pomidoras'.indexOf('o', 6));
console.log('pomidoras storas'.indexOf('o', 2));
console.log('pomidoras storas'.indexOf('o', 7));
console.log('pomidoras storas'.indexOf('o', 12));
console.log('pomidoras storas'.indexOf('o', 13));

console.clear();
console.log(20, 'aaaaaaaaaaaaaaaaaaaa');
console.log(5, 'a'.repeat(5));
console.log(7, 'b-'.repeat(7));
console.log(7, 'labas, '.repeat(3));

console.clear();

let summer = 'vasara';
console.log(summer);

summer = summer.replace('a', '-');
console.log(summer);

summer = summer.replace('a', '-');
console.log(summer);

let bird = 'kikilis';
console.log(bird);

bird = bird.replaceAll('k', '-=K=-');
console.log(bird);

bird = bird.replaceAll('=-', '').replaceAll('-=', '').replaceAll('K', 's');
console.log(bird);

console.log('Ananasas'.replaceAll('a', '-'));

console.clear();
console.log('pomidoras'.slice());
console.log('pomidoras'.slice(0));
console.log('pomidoras'.slice(1));
console.log('pomidoras'.slice(2));
console.log('pomidoras'.slice(-1));
console.log('pomidoras'.slice(-2));
console.log('pomidoras'.slice(-4));
console.log('pomidoras'.slice(0, -4));
console.log('pomidoras'.slice(1, -1));
