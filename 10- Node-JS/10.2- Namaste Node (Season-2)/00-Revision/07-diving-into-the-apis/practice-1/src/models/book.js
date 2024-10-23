const mongoose = require("mongoose");
const { Schema } = mongoose;

const novelSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  summary: String,
  price: Number,
  rating: Number,
  status: Boolean,
  pages: Number,
  //   extra: String,
});

const Novel = mongoose.model("Novel", novelSchema);

module.exports = Novel;
