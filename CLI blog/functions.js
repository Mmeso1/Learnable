const fs = require("fs");
const filename = "posts.json";

function savePost(title, image, content, author) {
  //Create an empty array so as read existing data in the json file and store it in posts
  // Then push the new post to the posts array
  let posts = [];
  if (fs.existsSync(filename)) {
    const data = fs.readFileSync(filename, "utf8");

    if (data.trim().length > 0) {
      posts = JSON.parse(data);
      // if the content of the file is not empty, then parse the data and store it in posts
    }
  }

  posts.push({
    id: Date.now(),
    title,
    image,
    content,
    author,
    dateCreated: new Date(),
  }); // I am using Date.now() as the id for the post and new Date() as the date the post was created

  fs.writeFileSync(filename, JSON.stringify(posts, null, 2));
  console.log("Post created successfully");
}

function viewPosts() {
  let posts = [];
  if (fs.existsSync(filename)) {
    const data = fs.readFileSync(filename, "utf8");

    if (data.trim().length > 0) {
      posts = JSON.parse(data);
      console.log(`\n=== Blog Posts ===`);
      posts.forEach((post, index) => {
        console.log(`${index + 1} Title: ${post.title}`);
        console.log(`   Image: ${post.image}`);
        console.log(`   Content: ${post.content}`);
        console.log(`   Author: ${post.author}`);
        console.log(
          `   Date Created: ${new Date(post.dateCreated).toLocaleString()}\n`
        );
        console.log(`-----------------------------\n`);
      });
      // if the content of the file is not empty, then parse the data and store it in posts
    } else {
      console.log("No posts available. Start by creating new ones!");
    }
  }
}

function deleteThisPost(index) {
  if (fs.existsSync(filename)) {
    const data = fs.readFileSync(filename, "utf8");

    if (data.trim().length === 0) {
      console.log("No available post to delete.");
    }

    const posts = JSON.parse(data);
    const postIndex = index - 1;

    if (postIndex < 0 || postIndex >= posts.length) {
      console.log("Invalid post number.");
      return;
    }

    const deletedPost = posts.splice(postIndex, 1);
    fs.writeFileSync(filename, JSON.stringify(posts, null, 2));
    console.log(`Deleted post: "${deletedPost[0].title}"`);
  }
}

module.exports = { savePost, viewPosts, deleteThisPost };
