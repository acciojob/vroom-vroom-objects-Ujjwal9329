class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    getMakeModel() {
        return `${this.make} ${this.model}`; // ✅ Corrected template literal
    }
}

class SportsCar extends Car {
    constructor(make, model, topSpeed) {
        super(make, model); // ✅ Calls the parent constructor
        this.topSpeed = topSpeed;
    }

    getTopSpeed() {
        return this.topSpeed;
    }
}

// Do not change this
window.Car = Car;
window.SportsCar = SportsCar;
