const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.write("Welcome to the CLI blog!\n");
rl.write("Choose an aciton:\n");
rl.setPrompt(
  " 1. View all posts\n 2. Create a post\n 3. Delete a post\n 4. Exit\n\n"
);
rl.prompt();
rl.on("line", (input) => {
  console.log(input);
});
