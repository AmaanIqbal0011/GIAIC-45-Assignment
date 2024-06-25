"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestNames = void 0;
//  Exercise : 14
let guestNames = ["Amaan", "Saad", "Sameer", "Eve"];
exports.guestNames = guestNames;
for (let guest of guestNames) {
    console.log(`Dear ${guest}, you are cordially invited to dinner at my place. I would be honored by your presence.\n ThankYou\n`);
}
// Exercise : 15
// Statement about the guest who can't come in
let notPresent = "Saad";
console.log(`\nUnfortunately,${notPresent} can't make it to the dinner. \n`);
// Replace the guest who can't make it with a new guest
let newGuest = "Zohaib";
guestNames[guestNames.indexOf(notPresent)] = newGuest;
for (let guest of guestNames) {
    console.log(`Dear ${guest}, you are cordially invited to dinner at my place. I would be honored by your presence.\n ThankYou\n`);
}
// Exercise : 16
// Statement about the bigger dinner table
console.log("\nGreat news! I found a bigger dinner table.\n");
guestNames.unshift("Ali");
guestNames.splice(2, 0, "Fehar");
guestNames.push("Owais");
for (let guest of guestNames) {
    console.log(`Dear ${guest}, you are cordially invited to dinner at my place. I would be honored by your presence.\n ThankYou\n`);
}
//Exercise 17
//    Statement about only being able to invite two people
console.log("\n Unfortunately, my new dinner table won't arrive in time, so I can only invite two people for dinner. \n");
//Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
for (let i = guestNames.length; i > 2; i--) {
    let removeGuest = guestNames.pop();
    console.log(` \n Sorry My friend ${removeGuest}! You are not invited for party\n`);
}
// Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let guest of guestNames) {
    console.log(` \nDear ${guest}, you are still invited on tomorrow Dinner\n ThankYou\n`);
}
// • Remove the last two names from your list, so you have an empty list
guestNames.splice(0, 2);
//Print your list to make sure you actually have an empty list at the end of your program.
console.log(guestNames);
