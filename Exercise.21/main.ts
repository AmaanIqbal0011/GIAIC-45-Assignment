interface personalInformation {
  name: string;
  fatherName: string;
  age: number;
  rollNumber: number;
}

let person1: personalInformation = {
  name: "Amaan",
  fatherName: "Iqbal",
  age: 18,
  rollNumber: 33501,
};

let person2: personalInformation = {
  name: "Sameer",
  fatherName: "Iqbal",
  age: 16,
  rollNumber: 33513,
};

function displaynalInformation(person: personalInformation): void {
    console.log(`\n Information about ${person.name.toUpperCase()}`)
  console.log(`Name: ${person.name}`);
  console.log(`Father Name : ${person.fatherName}`);
  console.log(`Age : ${person.age}`);
  console.log(`Roll Number : ${person.rollNumber}\n`);
}

displaynalInformation(person1);
displaynalInformation(person2);
