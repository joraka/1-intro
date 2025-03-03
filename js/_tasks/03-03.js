class Vehicle {
  constructor(makerName, makerModel, year, color) {
    if (!makerName) throw new Error('missing makerName');
    if (!makerModel) throw new Error('missing makerModel');
    if (!year) throw new Error('missing year');
    if (!color) throw new Error('missing color');
    this.makerName = makerName;
    this.makerModel = makerModel;
    this.year = year;
    this.color = color;
  }

  printName() {
    console.log(`name: ${this.makerName} ${this.makerModel}`);
  }
}

class CombustionEngineVehicle extends Vehicle {
  constructor(makerName, makerModel, year, color, fualTankSize, fuelCostToMove) {
    if (!fualTankSize) throw new Error('missing fualTankSize');
    if (!fuelCostToMove) throw new Error('missing fualTankSize');
    super(makerName, makerModel, year, color);
    this.engineRunning = false;
    this.fuelStatus = 0;
    this.fuelTankSize = fualTankSize;
    this.fuelCostToMove = fuelCostToMove;
  }

  canMove() {
    if (!this.engineRunning) return { status: false, message: 'engine is off' };
    if (this.fuelStatus <= 0) return { status: false, message: "can't run, missing fuel" };
    return { status: true, message: 'moving' };
  }

  move(steps = 1) {
    const canVehicleMove = this.canMove();
    if (canVehicleMove.status === true) {
      const fuelNeeded = this.fuelCostToMove * steps;
      if (this.fuelStatus > fuelNeeded) {
        console.log(`vehicle is moving ${steps} steps`);
        this.fuelStatus -= fuelNeeded;
        if (this.fuelStatus === fuelNeeded) {
          console.log('out of fuel');
          this.stopEngine();
        }
      } else {
        console.log(
          `vehicle doesnt have enough fuel to finish the route, need ${fuelNeeded}, currenctly have ${this.fuelStatus}`
        );
      }
    } else {
      console.log(canVehicleMove.message);
    }
  }

  checkEngineStatus() {
    if (this.engineRunning) {
      console.log('engine status is on');
    } else {
      console.log('engine status is off');
    }
  }

  checkFuelStatus() {
    console.log(`fuel status: ${this.fuelStatus}`);
  }

  checkFuelTankSize() {
    console.log(`fuel tank size is ${this.fuelTankSize}`);
  }

  fillFuel(capacity) {
    if (!capacity) throw new Error('missing fualTankSize');
    if (this.engineRunning) {
      console.log('cannot refill capacity while engine is running');
    } else if (capacity + this.fuelStatus > this.fuelTankSize) {
      console.log(
        `can\'t fill that much, tank capacity is ${this.fuelTankSize}, current fuel status is ${this.fuelStatus}`
      );
    } else {
      this.fuelStatus += capacity;
      console.log(`${capacity} fuel added to tank, current status is: ${this.fuelStatus}`);
    }
  }

  startEngine() {
    if (this.engineRunning) {
      console.log('engine is already running');
    } else {
      if (this.fuelStatus === 0) {
        console.log("can't start engine, missing fuel");
      } else {
        console.log('engine started');
        this.engineRunning = true;
      }
    }
  }

  stopEngine() {
    if (this.engineRunning) {
      console.log('engine was stopped');
      this.engineRunning = false;
    } else {
      console.log('engine is already stopped');
    }
  }
}

class LandVehicle extends CombustionEngineVehicle {
  constructor(makerName, makerModel, year, color, fualTankSize, fuelCostToMove) {
    super(makerName, makerModel, year, color, fualTankSize, fuelCostToMove);
  }

  drive(steps = 1) {
    console.log('driving: ');
    this.move(steps)
  }
}

class SeaVehicle extends CombustionEngineVehicle {
  constructor(makerName, makerModel, year, color, fualTankSize, fuelCostToMove) {
    super(makerName, makerModel, year, color, fualTankSize, fuelCostToMove);
  }

  sail(steps = 1) {
    this.move(steps);
  }
}

class AirVehicle extends CombustionEngineVehicle {
  constructor(makerName, makerModel, year, color, fualTankSize, fuelCostToMove) {
    super(makerName, makerModel, year, color, fualTankSize, fuelCostToMove);
  }

  fly() {
    if (this.engineRunning) {
      console.log(`${this.makerName} is flying`);
    } else {
      console.log("can't sail with engine off");
    }
  }
}

class Helicopter extends AirVehicle {
  constructor(makerName, makerModel, year, color, fualTankSize, fuelCostToMove) {
    super(makerName, makerModel, year, color, fualTankSize, fuelCostToMove);
  }
}

class Car extends LandVehicle {
  constructor(makerName, makerModel, year, color, fualTankSize, fuelCostToMove, doorCount) {
    super(makerName, makerModel, year, color, fualTankSize, fuelCostToMove);
    this.doorCount = doorCount;
  }

  printWheelCount() {
    console.log(this.wheelCount);
  }
}

class Motorcycle extends LandVehicle {
  constructor(makerName, makerModel, year, color, fualTankSize, fuelCostToMove) {
    super(makerName, makerModel, year, color, fualTankSize, fuelCostToMove);
  }
}

class Boat extends SeaVehicle {
  constructor(makerName, makerModel, year, color, fualTankSize, fuelCostToMove) {
    super(makerName, makerModel, year, color, fualTankSize, fuelCostToMove);
  }
}

const boat = new Boat('bob', '1', 2000, 'red', 100, 15);
boat.sail();
boat.startEngine();
boat.checkFuelStatus();
boat.checkFuelTankSize();
boat.fillFuel(10);
boat.sail();
boat.startEngine();
boat.sail();
boat.fillFuel(10)
boat.stopEngine();
boat.fillFuel(10)
boat.sail()
boat.startEngine()
boat.sail()

const bmw = new Car('bmw', 'i8', 12020, 'blue', 50, 10);
bmw.drive();
bmw.printName();
bmw.checkEngineStatus();
bmw.drive();
bmw.startEngine();
bmw.checkEngineStatus();
bmw.drive();
bmw.stopEngine();
bmw.checkEngineStatus();
bmw.fillFuel(10);
bmw.fillFuel(40);
bmw.fillFuel(1);
bmw.drive();
bmw.startEngine();
bmw.drive(1);
bmw.checkFuelStatus();
bmw.drive(4);
bmw.drive(1);
bmw.drive(1);
bmw.stopEngine();
bmw.startEngine();
bmw.drive();
bmw.drive();
bmw.printName();
