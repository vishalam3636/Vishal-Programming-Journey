const express = require("express");
const connectDB = require("./config/database");
const app = express();
const PORT = 7777;

const User = require("./models/user");

app.post("/signup", async (req, res) => {
  // Creating a new instance of the user model
  const user = new User({
    firstName: "Sachinnn",
    lastName: "Tendulkar",
    email: "sachin@kohli.com",
    password: "sachin@123",
    _id: "rgdfrgdffvdfsef",
  });

  await user.save();
  res.send("User added successfully !!");
});

connectDB()
  .then(() => {
    console.log("Database connection established !!");
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected !!");
  });
