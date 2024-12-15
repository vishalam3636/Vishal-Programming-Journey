const express = require("express");
const app = express();
const PORT = 3636;
const { connectDB } = require("./config/database");

// models
const User = require("./models/user");
const Post = require("./models/post");

// ENDPOINTS (creating APIs)
app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "Captain",
    lastName: "America",
    emailId: "captain@america.com",
    password: "captainamerica@123",
    gender: "Male",
  };

  try {
    // creating a new instance of the user model
    const user = new User(userObj);

    let saveUser = await user.save();

    res.status(201).send(saveUser); // Send a success response
  } catch (err) {
    res
      .status(400)
      .send({ error: "Error saving the user", message: err.message });
  }
});

// Connecting to DB and then starting server
connectDB()
  .then((res) => {
    console.log("Database connection established....");

    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected !!");
  });
