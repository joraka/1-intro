console.clear();
class Car {
  constructor(brand, model, year, doorCount) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.doorCount = doorCount;
  }
}

const bmw1 = new Car("BMW", "i5", 2024, 4);
const bmw2 = new Car("BMW", "X4", 2020, 4);
const toyota1 = new Car("Toyota", "Corolla", 2024, 4);
const toyota2 = new Car("Toyota", "Avensis", 2005, 4);

[bmw1, bmw2, toyota1, toyota2].forEach((car) => console.log(car));
