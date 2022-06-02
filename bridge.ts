// design a system using bridge pattern
 // interface
interface Workshop {
    work(): void;
}

// produce class
class Produce implements Workshop {
    work(): void {
        console.log('Production Workshop');
    }
}

// Assemble class
class Assemble implements Workshop {
    work(): void {
        console.log('Assembling Workshop');
    }
}

// abstract class
abstract class Vehicle {
    protected workshop: Workshop;
    
    // constructor
    constructor(workshop: Workshop) {
        this.workshop = workshop;
    }

    // function call
    manufacture(){}

    // Workshop setter
    setWorkshop(workshop: Workshop) {
        this.workshop = workshop;
    }
}

// Car class
class Car extends Vehicle {
    manufacture(): void {
        console.log('Car has been Manufactured');
        this.workshop.work();
    }
}

// Bike class
class Bike extends Vehicle {
    manufacture(): void {
        console.log('Bike has been Manufactured');
        this.workshop.work();
    }
}

// instatiate objects
// car
let vehicle1 = new Car(new Produce());

// Manufacture through the production workshop
let workshop = new Produce();

// manufacture car through the assembling workshop
//let workshop = new Assemble();

vehicle1.setWorkshop(workshop);
vehicle1.manufacture();