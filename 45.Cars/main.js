"use strict";
function createCar(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    for (let option of options) {
        const [key, value] = option;
        car[key] = value;
    }
    return car;
}
// Call the function with required information and additional properties
let carInfo = createCar('Toyota', 'Camry', ['color', 'blue'], ['year', 2021]);
// Print the car object to verify the information
console.log(carInfo);
