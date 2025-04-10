console.log(Math.random());
console.log(Math.random() * 15);


function randomMax(max){
    return Math.floor(Math.random() * max)
}
randomMax(25)
console.log();

function randomMinMax(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomMinMax(5, 7));
console.log();


function randomMinMaxFloat(min, max, fixedNumber = 2){
    const multiplier = Math.pow(10, fixedNumber);
    return Math.floor((Math.random() * (max - min + 1) + min) * multiplier) / multiplier;
}

console.log(randomMinMaxFloat(5, 7));
console.log(randomMinMaxFloat(5, 7));
console.log(randomMinMaxFloat(5, 7));
console.log(randomMinMaxFloat(5, 7));
console.log();

function randomMinMaxFloatZerofill(min, max, fixedNumber = 2){
    const multiplier = Math.pow(10, fixedNumber);
    const calculatedVal = Math.floor((Math.random() * (max - min + 1) + min) * multiplier) / multiplier;
    return calculatedVal.toFixed(fixedNumber);
}

console.log(randomMinMaxFloatZerofill(5, 11, 3));
console.log(randomMinMaxFloatZerofill(5, 11, 3));
console.log();

const getRandomInt = (max) => Math.floor(Math.random() * max);
const getRandomArr = (count, max) => new Array(count).fill(0).map(() => getRandomInt(max));