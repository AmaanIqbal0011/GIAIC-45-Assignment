let current_users: string[] = ["amaan", "iqbal", "saad", "Fehar", "Sameer"];
let new_users: string[] = ["Amaan", "reyan", "zohaib", "fehar", "basit"];

let current_users_lowercase: string[] = [];

for (let user of current_users) {
  current_users_lowercase.push(user.toLowerCase());
}
for (let newUser of new_users) {
  let newUser_lowercase = newUser.toLowerCase();

  // Check if newUserLowercase exists in currentUsersLowercase
  if (current_users_lowercase.includes(newUser_lowercase)) {
    console.log(
      `Username '${newUser}' is not available. Please enter a new username.`
    );
  } else {
    console.log(`Username '${newUser}' is available.`);
  }
}
