const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  postContent: {
    type: String,
  },
  title: {
    type: String,
  },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
