//  Store the locations in a array. Make sure the array is not in alphabetical order.

let locations: string[] = ["Makkah", "Madina", "Sydney", "Spain", "Cairo"];

// Print your array in its original order.

console.log(`\nOriginal Order: ${locations} \n`);

//  Print your array in alphabetical order without modifying the actual list.

let sortedLocations = [...locations].sort();
console.log(`Sorted Order: ${sortedLocations}`);

// • Show that your array is still in its original order by printing it

console.log(`\nOriginal order (after sorting alphabetically): ${locations}`);

//  Print your array in reverse alphabetical order without changing the order of the original list.

let reverseOrder = [...locations].sort().reverse();
console.log(`\nReverse Order : ${reverseOrder}`);

//  Show that your array is still in its original order by printing it again.

console.log(`\nOriginal order (after sorting Reverse): ${locations}`);

// • Reverse the order of your list. Print the array to show that its order has changed.

locations.reverse();
console.log(` \nReversed Order : ${locations}`);

//Reverse the order of your list again. Print the list to show it’s back to its original order.

locations.reverse();
console.log(` \nAgain Reversed Order : ${locations}`);

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

locations.sort();
console.log(`\nAlphabetical order (after sorting): ${locations}`);

//  Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed
locations.sort((a,b)=>b.localeCompare(a))
console.log(' \nReverse alphabetical order:', locations)