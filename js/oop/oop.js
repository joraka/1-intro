// OOP - object oriented programming

function xxx() {
    return 'xxx';
}

class Person {
    constructor(name, age, isMarried) {
        this.name = name;
        this.age = age;
        this.isMarried = isMarried;
        this.isAdult = age >= 18;
        this.randomNumber = Math.random();
        this.extra = xxx();
        this.legsCount = 2;
        this.armsCount = 2;
        this.headCount = 1;
        this.marks = [];
    }
}

const jonas = new Person('Jonas', 99, true);
const maryte = new Person('Maryte', 88);
const jonukas = new Person('Jonukas', 7);

console.log(jonas);
console.log(maryte);
console.log(jonukas);

// Dog, Cat, Car
// const audi = new Car();


