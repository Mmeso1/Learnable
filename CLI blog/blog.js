const savePost = require("./functions").savePost;
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.write("Welcome to the CLI blog!\n");
rl.write("Choose an aciton by selecting a number:\n");
rl.setPrompt(
  "\n 1. View all posts\n 2. Create a post\n 3. Delete a post\n 4. Exit\n\n"
);
rl.prompt();

// switch function to perform actions based on user input
rl.on("line", (input) => {
  switch (input.trim()) {
    case "1":
      console.log("View all posts");
      break;
    case "2":
      createPost();
      break;
    case "3":
      console.log("Delete a post");
      break;
    case "4":
      console.log("Exit");
      rl.close();
      break;
    default:
      console.log("Invalid choice");
  }
});

const askQuestion = (question) => {
  return new Promise((resolve) => rl.question(question, resolve));
};
const createPost = async () => {
  try {
    const title = await askQuestion("> Enter the blog's title: ");
    const image = await askQuestion(
      "> Enter the url to the blog's image if any: "
    );
    const content = await askQuestion("> Enter the content: ");
    const author = await askQuestion("> Enter the author: ");
    savePost(title, image, content, author);
  } catch (error) {
    console.log("What went wrong:", error);
  }
};
