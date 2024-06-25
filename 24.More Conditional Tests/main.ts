let car: string = "subaru";
let bike: string = "yamaha";
let fruit: string = "apple";
let number: number = 42;
let userAge: number = 25;
let color: string[] = ["Black", "White", "Grey", "Yellow", "Orange"];

// • Tests for equality and inequality with strings
console.log(" \n• Tests for equality and inequality with strings \n");

console.log("Is car == 'subaru'? I predict True.");
console.log(car == "subaru", "\n");
console.log("Is car != 'subaru'? I predict False.");
console.log(car != "subaru", "\n");

console.log("Is bike == 'yamaha'? I predict True.");
console.log(bike == "yamaha", "\n");
console.log("Is bike != 'yamaha'? I predict false.");
console.log(bike != "yamaha", "\n");

// Tests using the lower case function

console.log(" \n• Tests using the lower case function \n");

console.log("Is fruit.toLowerCase == 'apple'? I predict True");
console.log(fruit.toLowerCase() == "apple", "\n");

console.log("Is fruit.toLowerCase == 'APPLE'? I predict False");
console.log(fruit.toLowerCase() == "APPLE", "\n");

console.log("Is car.toLowerCase == 'subaru'? I predict True");
console.log(car.toLowerCase() == "subaru", "\n");

console.log("Is car.toLowerCase == 'SUBARU'? I predict False");
console.log(car.toLowerCase() == "SUBARU", "\n");

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

console.log(" \n• Tests using equality and inequality with Numerical \n");

console.log("Is number == 42? I predict True.");
console.log(number == 42, "\n");
console.log("Is number != 42? I predict False.");
console.log(number != 42, "\n");

console.log("Is userAge == 25? I predict True.");
console.log(userAge == 25, "\n");
console.log("Is userAge != 30? I predict True.");
console.log(userAge != 30, "\n");

console.log(" \n• Tests using  greater than and less than with Numerical \n");

console.log("Is number > 40? I predict True.");
console.log(number > 40, "\n");
console.log("Is number < 43? I predict True.");
console.log(number < 43, "\n");

console.log("Is userAge > 18? I predict True.");
console.log(userAge > 18, "\n");
console.log("Is userAge < 18? I predict False.");
console.log(userAge < 18, "\n");

console.log(
  " \n• Tests using  greater than or equal to, and less than or equal to with Numerical \n"
);

console.log("Is number >= 42? I predict True.");
console.log(number >= 42, "\n");
console.log("Is number <= 42? I predict True.");
console.log(number <= 42, "\n");

console.log("Is userAge >=50? I predict False.");
console.log(userAge >= 50, "\n");
console.log("Is userAge <= 24? I predict False.");
console.log(userAge <= 24, "\n");

// • Tests using "and" and "or" operators

console.log("Tests using 'and' and 'or' operators \n");

console.log("Is number > 35 && number < 50 ? I predict True");
console.log(number > 35 && number < 50, "\n");

console.log("Is number > 35 || number < 20 ? I predict True");
console.log(number > 35 || number < 20, "\n");

console.log("Is userAge > 35 && number < 50 ? I predict false");
console.log(userAge > 35 && userAge < 50, "\n");

console.log("Is userAge > 35 || number < 50 ? I predict false");
console.log(userAge > 30 || userAge < 18, "\n");

//  Test whether an item is in a array

console.log(" \nTest whether an item is in a array \n");

console.log("Does color includes White ? I predict True");
console.log(color.includes("White"), "\n");
console.log("Does color not includes Indigo ? I predict False");
console.log(color.includes("Indigo"), "\n");
console.log("Does color includes Orange ? I predict True");
console.log(color.includes("Orange"), "\n");

// • Test whether an item is not in a array

console.log(" \nTest whether an item is not in a array \n");

console.log("Does color not includes White ? I predict false");
console.log(!color.includes("White"), "\n");
console.log("Does color includes Indigo ? I predict True");
console.log(!color.includes("Indigo"), "\n");
console.log("Does color not includes Orange ? I predict false");
console.log(!color.includes("Orange"), "\n");
