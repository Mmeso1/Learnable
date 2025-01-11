const {
  savePost,
  viewPosts,
  deleteThisPost,
  editThisPost,
} = require("./functions");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const displayMenu = () => {
  console.log("\nChoose an action by selecting a number:");
  console.log("1. View all posts");
  console.log("2. Create a post");
  console.log("3. Edit a post");
  console.log("4. Delete a post");
  console.log("5. Exit\n");
  rl.prompt();
};

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

const editPost = async () => {
  try {
    const postNum = await askQuestion(
      "\nEnter the number of the post to edit: "
    );
    const index = parseInt(postNum, 10);

    if (isNaN(index) || index < 1) {
      console.log("Invalid input. Please enter a valid number.");
    } else {
      console.log("Press enter to skip a value you do not want to replace");
      const title = await askQuestion("> Enter the new blog's title: ");
      const image = await askQuestion(
        "> Enter the new url to the blog's image if any: "
      );
      const content = await askQuestion("> Enter the new content: ");
      const author = await askQuestion("> Enter the new author: ");
      let postDetails = { title, image, content, author };
      editThisPost(index, postDetails);
    }
  } catch (error) {
    console.log("What went wrong: ", error);
  }
};

const deletePost = async () => {
  try {
    const postNum = await askQuestion(
      "\nEnter the number of the post to delete: "
    );
    const index = parseInt(postNum, 10);

    if (isNaN(index) || index < 1) {
      console.log("Invalid input. Please enter a valid number.");
    } else {
      deleteThisPost(index);
    }
  } catch (error) {
    console.log("What went wrong: ", error);
  }
};

// switch function to perform actions based on user input
const handleInput = async (input) => {
  switch (input.trim()) {
    case "1":
      viewPosts();
      displayMenu();
      break;
    case "2":
      await createPost();
      displayMenu();
      break;
    case "3":
      await editPost();
      displayMenu();
      break;
    case "4":
      await deletePost();
      displayMenu();
      break;
    case "5":
      console.log("Exit");
      rl.close();
      break;
    default:
      console.log("Invalid choice");
  }
};

rl.on("line", handleInput);
console.log("Welcome to the CLI blog!");
displayMenu();

//I put these at the bottom of the file so that the program can go through the functions before the user can interact with it.
// This is because the functions are hoisted to the top of the file.
