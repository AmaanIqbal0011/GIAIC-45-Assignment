function make_sandwich(...items: string[]): void {
  console.log("\n Sandwiches Order Summary");
  console.log("The Sandwiches contain the following items: ");
  for (let item = 0;item < items.length;item++) {
    item++
    console.log(`${item}-${items[item]}`);
    item--
  }
}
// Call the function three times with a different number of arguments each time
make_sandwich("Lettuce", "Tomato", "Cheese");
make_sandwich("Ham", "Cheese", "Mustard", "Pickles");
make_sandwich("Turkey", "Bacon", "Lettuce", "Tomato", "Avocado", "Mayo");
