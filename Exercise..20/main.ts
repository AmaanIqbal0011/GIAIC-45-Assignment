//  Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let countries : string[] = ['Pakistan','India','Spain','Dubai','Cairo','Egypt']

console.log('\nList of famous landmarks:');
for(let i=0; i < countries.length ; i++){
 let country = countries[i];
 i++
 console.log(`${i} ${country}`)
 i--
}