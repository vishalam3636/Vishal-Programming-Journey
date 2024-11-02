const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");

const basicDetailsSchema = new Schema(
  {
    firstName: { type: String, required: true, minLength: 3, maxLength: 20 },
    middleName: { type: String, minLength: 3, maxLength: 20 },
    lastName: { type: String, required: true, minLength: 3, maxLength: 20 },
    emailId: {
      type: String,
      required: true,
      unique: true,
      minLength: 4,
      maxLength: 50,
      validate(emailId) {
        if (!validator.isEmail(emailId)) {
          throw new Error("Not a valid email");
        }
      },
    },
    gender: {
      type: String,
      required: true,
      validate(gender) {
        if (!gender === "male" || !gender == "female" || !gender === "others") {
          throw new Error("Wrong gender type");
        }
      },
    },
    password: {
      type: String,
      required: true,
      maxLength: "50",
      validate(password) {
        if (!validator.isStrongPassword(password)) {
          throw new Error("Not a strong password");
        }
      },
    },
    dateOfBirth: { type: Date },
    role: { type: String, default: "user" },
  },
  { timestamps: true }
);

const BasicDetails = mongoose.model("BasicDetails", basicDetailsSchema);

module.exports = BasicDetails;
