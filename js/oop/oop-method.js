class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.isStudying = false;
        this.marks = [];
    }

    birthday() {
        this.age++;
        return 'Sveikiname su gimtadieniu!';
    }

    hi() {
        return `${this.name} sako: labas!!!`;
    }

    setMark(mark) {
        if (typeof mark !== 'number'
            || !isFinite(mark)
            || mark <= 0
            || mark > 10
            || !Number.isInteger(mark)) {
            return 'Pazymys turi buti teigiamas sveikasis skaicius intervale tarp 1 ir 10';
        }

        this.marks.push(mark);
        return `Pazymys (${mark}) sekmingai pridetas`;
    }

    calcMarksAverage() {
        if (this.marks.length === 0) {
            return `${this.name} neturi pazymiu, del to pazymiu vidurkis negali buti skaiciuojamas`;
        }

        let sum = 0;

        for (const mark of this.marks) {
            sum += mark;
        }

        return sum / this.marks.length;
    }
}

const jonas = new Student('Jonas', 99);

console.log(jonas.calcMarksAverage());
// jonas.birthday();
// console.log(jonas.hi());
console.log(jonas.setMark(10));
console.log(jonas.calcMarksAverage());
console.log(jonas.setMark(4));
console.log(jonas.calcMarksAverage());
