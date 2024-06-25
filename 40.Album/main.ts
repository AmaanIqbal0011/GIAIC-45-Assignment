interface Album {
  artist: string;
  title: string;
  track?: number;
}

function make_album(name: string, title: string, track?: number): Album {
  let album: Album = {
    artist: name,
    title: title,
  };
  if (track !== undefined) {
    album.track = track;
  }
  return album;
}

// Create three albums using the function
let album1 = make_album("The Beatles", "Abbey Road");
let album2 = make_album("Pink Floyd", "The Dark Side of the Moon");
let album3 = make_album("Nirvana", "Nevermind", 12);

console.log(album1);
console.log(album2);
console.log(album3);

// Make at least one new function call that includes the number of tracks on an album
let album4 = make_album("Led Zeppelin", "IV", 8);
console.log(album4);
