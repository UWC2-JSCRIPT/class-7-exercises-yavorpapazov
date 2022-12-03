/**
 * Car class
 * @constructor
 * @param {String} model
 */
 class Car {
    constructor(model) {
        this.model = model
        this.currentSpeed = 0
    }
    accelerate() {
        this.currentSpeed++
    }
    brake() {
        this.currentSpeed--
    }
    toString() {
        return `Model: ${this.model}. Current speed: ${this.currentSpeed}`
    }
}
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
let ford = new Car('Taurus')
ford.accelerate()
ford.accelerate()
ford.brake()
console.log(ford.toString())
/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */
 class ElectricCar extends Car {
    constructor(model) {
        super(model)
        this.motor = 'electric'
    }
    accelerate() {
        super.accelerate()
        super.accelerate()
    }
    toString() {
        return `Electric car model: ${this.model}. Electric car current speed: ${this.currentSpeed}`
    }
}
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
let nissan = new ElectricCar('Leaf')
nissan.accelerate()
nissan.accelerate()
nissan.brake()
console.log(nissan.toString())