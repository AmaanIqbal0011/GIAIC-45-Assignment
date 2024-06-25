interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any;
}

function createCar(
  manufacturer: string,
  model: string,
  ...options: [string, any][]
): Car {
  let car: Car = {
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