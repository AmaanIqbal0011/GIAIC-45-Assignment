let personName : string = "Amaan Iqbal"

// print personName in lowercase
console.log("In lowercase:",personName.toLowerCase())

// print personName in uppercase
console.log(`In Uppercase: ${personName.toUpperCase()}`)

// print personName in titlecase
console.log("In Titlecase:",personName.replace(/\bw/g,c => c.toUpperCase()))