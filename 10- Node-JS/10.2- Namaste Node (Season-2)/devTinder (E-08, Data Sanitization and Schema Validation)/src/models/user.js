const mongoose = require("mongoose");
var validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, minLength: 4, maxLength: 50 },
    lastName: { type: String },
    emailId: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate(emailId) {
        if (!validator.isEmail(emailId)) {
          throw new Error("Not a valid email id");
        }
      },
    },
    password: {
      type: String,
      required: true,
      validate(password) {
        if (!validator.isStrongPassword(password)) {
          throw new Error("Not a strong password");
        }
      },
    },
    age: { type: Number, min: 18 },
    gender: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/256/149/149071.png",
      validate(value) {
        if (!value && !["male", "female", "others"].includes(value)) {
          throw new Error("Gender data is not valid");
        }
      },
    },
    photoUrl: {
      type: String,
      validate(photoUrl) {
        if (!validator.isURL(photoUrl)) {
          throw new Error("Invalid photo Url");
        }
      },
    },
    about: { type: String, default: "This is a default about of the user" },
    skills: { type: [String] },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
