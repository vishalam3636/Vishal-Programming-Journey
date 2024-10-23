const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  firstName: { type: String }, // String is shorthand for {type: String}
  lastName: { type: String },
  emailId: { type: String },
  password: { type: String },
  age: { type: String },
  type: { type: String },
});

const userModel = model("User", userSchema);

module.exports = userModel;

// ////////////////////////////////////////////////
// ////////// REVISION CREATINGH SCHEMA ///////////
// ////////////////////////////////////////////////
// const mongoose = require("mongoose");
// const { Schema } = mongoose;

// const userSchema = new Schema({
//   firstName: { type: String }, // String is shorthand for {type: String}
//   lastName: { type: String },
//   emailId: { type: String },
//   password: { type: String },
//   age: { type: String },
//   type: { type: String },
// });

// const Blog = mongoose.model("User", userSchema);
