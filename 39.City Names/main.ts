//  Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted
function city_country(city: string, country: string): string {
  return `\n"${city},${country}"`;
}

// Call your function with at least three city-country pairs,
let city1 = city_country("Karachi", "Pakistan");
let city2 = city_country("Lahore", "Pakistan");
let city3 = city_country("New york", "USA");

//and print the value that’s returned.

console.log(city1);
console.log(city2);
console.log(city3);
