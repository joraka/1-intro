class Pet {
    constructor(name, fur) {
        this.name = name;
        this.furColor = fur;
        this.legsCount = 4;
        this.sound = '???';
        this.emoji = '🤐';
        this.hasTail = true;
    }

    hi() {
        return `Hi, my name is ${this.name}.`;
    }

    voice() {
        return `${this.name}:${(' ' + this.sound).repeat(2)}!! ${this.emoji.repeat(2)}`;
    }
}

class Dog extends Pet {
    constructor(name, fur) {
        super(name, fur);
        this.sound = 'au';
        this.emoji = '🐕';
    }

    hi() {
        return `Hi, my name is ${this.name} 222.`;
    }

    atnesk() {

    }
}

class Cat extends Pet {
    constructor(name, fur) {
        super(name, fur);
        this.sound = 'miau';
        this.emoji = '🐈';
    }
}

class Hamster extends Pet {
    constructor(name, fur) {
        super(name, fur);
        this.sound = 'krimst';
        this.emoji = '🐹';
        this.hasTail = false;
    }
}

const rex = new Dog('Rex', 'brown');
const brisius = new Dog('Brisius', 'white');
const rainis = new Cat('Rainis', 'grey');
const garfildas = new Cat('Garfildas', 'orange');

console.log(rex.hi());
console.log(brisius.hi());
console.log(rainis.hi());
console.log(garfildas.hi());


class MotorineTransportoPriemone {
    constructor(model) {
        this.model = model;
    }
}

class Automobilis extends MotorineTransportoPriemone {
    constructor(model) {
        super(model);
    }
}

class Elektromobilis extends Automobilis {
    constructor(model) {
        super(model);
    }
}

class ICEautomobilis extends Automobilis {
    constructor(model) {
        super(model);
    }
}

const masarati = new ICEautomobilis('Masarati');
const tesla = new Elektromobilis('Tesla');

class Sunkvezimis extends MotorineTransportoPriemone {
    constructor() { }
}

class Limuzinas extends MotorineTransportoPriemone {
    constructor() { }
}

class Motociklas extends MotorineTransportoPriemone {
    constructor() { }
}

class Keturratis extends MotorineTransportoPriemone {
    constructor() { }
}


/*
Auto
    - Elek
    - ICE

Computer:
    - Stalinis PC
    - Mini PC
    - Laptop
    - Plansete
    - Hibridinis (ekranas kaip atskira dalis)

*/

console.clear();

class Computer {
    constructor(name) {
        this.name = name;
        this.cpu = 'Pentium 2';
        this.ram = '128mb';
        this.hdd = '1gb';
    }
}
class StalinisPC extends Computer {
    constructor(name) {
        super(name);
        this.hasCDrom = true;
    }
}
class Laptop extends Computer {
    constructor(name) {
        super(name);
        this.hasTouchPad = true;
    }
}

const pc0 = new Computer();
const pc1 = new StalinisPC('HP');
const pc2 = new Laptop('Asus');

console.log(pc0);
console.log(pc1);
console.log(pc2);
