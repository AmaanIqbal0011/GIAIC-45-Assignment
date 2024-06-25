function make_shirt(size: "large" | "medium" | "small", message: string): void {
  console.log(
    `\nThe size of shirt is ${size} and and the message printed on it is: "${message}"`
  );
}

make_shirt("large", "New Era Of Technology Is Began");
make_shirt("medium", "keep calm and code on");
make_shirt("small", "Hello,World");
