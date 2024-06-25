"use strict";
let personAge = 18;
if (personAge < 2) {
    console.log("You're a Baby.");
}
else if (personAge >= 2 && personAge < 4) {
    console.log("You're a toddler.");
}
else if (personAge >= 4 && personAge < 13) {
    console.log("You're a Kid.");
}
else if (personAge >= 13 && personAge < 20) {
    console.log("You're a teenager.");
}
else if (personAge >= 20 && personAge < 65) {
    console.log("You're a Adult.");
}
else {
    console.log("You're a Elder.");
}
