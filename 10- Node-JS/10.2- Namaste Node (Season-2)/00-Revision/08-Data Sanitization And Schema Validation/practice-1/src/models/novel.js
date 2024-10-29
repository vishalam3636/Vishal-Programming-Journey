const mongoose = require("mongoose");
const validator = require("validator");
const { Schema } = mongoose;

const novelSchema = Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 20,
      maxLength: 50,
      validate(title) {
        if (title.length > 20) {
          throw new Error("Title length should not be greater than 20");
        }
      },
    },
    author: {
      type: String,
      required: true,
      trim: true,
      validate(author) {
        if (author.trim() === "kumbojkar") {
          throw new Error("Chutiya author not accepted");
        }
      },
    },
    price: {
      type: Number,
      required: true,
      validate(price) {
        if (price > 1000) {
          throw new Error("Aukat ke bahr ka price");
        }
      },
    },
    rating: { type: Number },
    genre: { type: String, required: true },
    language: { type: String, required: true },
    description: { type: String },
    coverImage: {
      type: String,
      default:
        "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/uploaded_thumb_image/5186/optimized_large_thumb_9862thumb.jpg",
    },
    pageCount: { type: Number, required: true },
    format: { type: String, required: true }, // hardcover, paperbak, e-book
    releaseDate: { type: String },
    isbnNumber: { type: Number, required: true, unique: true },
    // emailId: { type: String, validate(emailId) {} },
    emailId: {
      type: String,
      validate(emailId) {
        if (!validator.isEmail(emailId)) {
          throw new Error("not a valid email");
        }
      },
    },
  },
  { timestamps: true }
);

const Novel = mongoose.model("Novel", novelSchema);

module.exports = Novel;
