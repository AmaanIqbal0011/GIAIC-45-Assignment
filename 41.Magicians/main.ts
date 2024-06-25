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

show_magicians(magicians_names);
