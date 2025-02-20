console.log(typeof 4, typeof 0, typeof -7, typeof 3.14);
console.log(typeof NaN, typeof Infinity, typeof -Infinity);
console.log(typeof '', typeof 'asd');
console.log(typeof true, typeof false);
console.log(typeof undefined);

console.log(typeof null);
console.log(typeof {}, typeof { name: 'Jonas' });
console.log(typeof [], typeof [4]);

const a = null;
if (a === null) {
    console.log('yes: null');
}

const b = {};
if (b === {}) {
    console.log('yes: {}');
}

const c = [];
if (c === []) {
    console.log('yes: []');
}

const d = [];
const e = d;
if (d === e) {
    console.log('yes: [] adresai tie patys');
}

if (Array.isArray(5)) {
    console.log('yes: array');
}

if (Array.isArray('asd')) {
    console.log('yes: array');
}

if (Array.isArray(null)) {
    console.log('yes: array');
}

if (Array.isArray({})) {
    console.log('yes: array');
}

if (Array.isArray([])) {
    console.log('yes: array');
}

/**
 * Ar tai tas objektas, kuri kuriame su {} skliaustais
 */
function isTrueObject(data) {
    if (typeof data !== 'object') {
        return false;
    }

    if (data === null) {
        return false;
    }

    if (Array.isArray(data)) {
        return false;
    }

    return true;
}

function isTrueObject2(data) {
    if (typeof data !== 'object'
        || data === null
        || Array.isArray(data)) {
        return false;
    }

    return true;
}

function isTrueObject3(data) {
    return typeof data === 'object'
        && data !== null
        && !Array.isArray(data);
}

const g = null;
if (g === null) {
    console.log('null???');
}