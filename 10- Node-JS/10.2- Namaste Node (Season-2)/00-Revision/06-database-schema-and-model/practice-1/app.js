const express = require("express");
const connectDB = require("./config/database");
const app = express();
const PORT = 8888;

const User = require("./models/user");

app.post("/signup", async (req, res) => {
  let userObj = new User({
    firstName: "Vishal",
    lastName: "Chauhan",
    emailId: "vishalabc@yopmail.com",
    password: "sdfghfdsafs",
    age: 28,
    gender: "Male",
  });

  try {
    await userObj.save();
    res.send("User saved successfully !!");
  } catch (err) {
    console.log("failed to add user !!");
  }
});

connectDB()
  .then(() => {
    console.log("Successfully connected to DB");
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("failed to connect to db");
  });
