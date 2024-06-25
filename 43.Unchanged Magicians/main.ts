let magicians_names: string[] = [
  "Harry Houdini",
  "David Copperfield",
  "David Blaine",
  "Uri Geller",
];

function show_magicians(magicians_names: string[]): void {
  for (let names of magicians_names) {
    console.log(names);
  }
}
function make_great(magicians_names : string[]) : string[] {
  let great_magicians : string[] = []
  for (let names of magicians_names) {
    great_magicians.push(`The Great ${names}`)
  }
  return great_magicians
}

let great_magicians : string[] = make_great([...magicians_names])

// original names
console.log("original magicians:")
show_magicians(magicians_names)

// // Show the modified magicians
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
