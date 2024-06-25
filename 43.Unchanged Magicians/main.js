"use strict";
let magicians_names = [
    "Harry Houdini",
    "David Copperfield",
    "David Blaine",
    "Uri Geller",
];
function show_magicians(magicians_names) {
    for (let names of magicians_names) {
        console.log(names);
    }
}
function make_great(magicians_names) {
    let great_magicians = [];
    for (let names of magicians_names) {
        great_magicians.push(`The Great ${names}`);
    }
    return great_magicians;
}
let great_magicians = make_great([...magicians_names]);
// original names
console.log("original magicians");
show_magicians(magicians_names);
// // Show the modified magicians
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
