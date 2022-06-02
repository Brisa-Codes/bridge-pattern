var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// produce class
var Produce = /** @class */ (function () {
    function Produce() {
    }
    Produce.prototype.work = function () {
        console.log('Production Workshop');
    };
    return Produce;
}());
// Assemble class
var Assemble = /** @class */ (function () {
    function Assemble() {
    }
    Assemble.prototype.work = function () {
        console.log('Assembling Workshop');
    };
    return Assemble;
}());
// abstract class
var Vehicle = /** @class */ (function () {
    // constructor
    function Vehicle(workshop) {
        this.workshop = workshop;
    }
    // function call
    Vehicle.prototype.manufacture = function () { };
    // Workshop setter
    Vehicle.prototype.setWorkshop = function (workshop) {
        this.workshop = workshop;
    };
    return Vehicle;
}());
// Car class
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.manufacture = function () {
        console.log('Car has been Manufactured');
        this.workshop.work();
    };
    return Car;
}(Vehicle));
// Bike class
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bike.prototype.manufacture = function () {
        console.log('Bike has been Manufactured');
        this.workshop.work();
    };
    return Bike;
}(Vehicle));
// instatiate objects
// car
var vehicle1 = new Car(new Produce());
// Manufacture through the production workshop
//let workshop = new Produce();
// manufacture car through the assembling workshop
var workshop = new Assemble();
vehicle1.setWorkshop(workshop);
vehicle1.manufacture();
