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

module.exports = { savePost };
