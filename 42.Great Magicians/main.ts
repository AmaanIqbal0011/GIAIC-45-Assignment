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

function make_great(magicians_names: string[]): void {
  for (let names of magicians_names) {
    console.log(`The Great ${names}`);
  }
}

make_great(magicians_names);

show_magicians(magicians_names);
