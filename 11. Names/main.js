"use strict";
// Store names in an array called names
let names = ["Amaan", "saad", "sameer", "zohaib", "Eve"];
// Print each person's name by accessing each element in the list, one at a time
// 1 method
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// 2 method
for (let name of names) {
    console.log(name);
}
