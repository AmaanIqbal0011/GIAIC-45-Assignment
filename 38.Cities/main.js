"use strict";
function describe_city(city, country = "Pakistan") {
    console.log(`\n${city} is in ${country}`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city('New York', 'USA');
