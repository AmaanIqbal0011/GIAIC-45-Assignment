"use strict";
function make_shirt(size = "large", message = ' I love TypeScript.') {
    console.log(`\nThe size of shirt is ${size} and and the message printed on it is: "${message}"`);
}
//  Make a large shirt and a medium shirt with the default message
make_shirt();
make_shirt("medium");
// and a shirt of any size with a different message
make_shirt("small", "Hello,World");
