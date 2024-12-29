const express = require("express");
const app = express();
const PORT = 3636;
const connectDB = require("./config/database");
const User = require("./models/user");

app.use(express.json());

//============= APIs ==========//
// POST Method
app.post("/signup", async (req, res) => {
  console.log(req.body);

  //   const userObj = {
  //     firstName: "Vishal",
  //     lastName: "Chauhan",
  //     emailId: "vishal@xyz.com",
  //     password: "123456",
  //     age: "100",
  //     gender: "Male",
  //   };

  let userObj = req.body;

  try {
    let user = new User({ ...userObj });
    let saveUser = await user.save();
    res.status(201).send(saveUser);
  } catch (err) {
    console.log("Failed to save user: ", err);
    res
      .status(400)
      .send({ error: "Error saving the user", message: err.message });
  }
});

// Feed API- GET /feed - get all the users from the database
app.get("/feed", async (req, res) => {
  try {
    console.log("entered try");

    let allUsers = await User.find();
    console.log(allUsers);
    res.send({
      message: "Get all users API under maintenance...",
      data: allUsers,
    });
  } catch (err) {
    console.log("Error geting users !!");
    res.status(400).send("Failed to get users !!");
  }
});

// GET API, findOne user by email, findOne returns the first matched and find returns the all matched
app.get("/userByEmail", async (req, res) => {
  try {
    let email = req.body.emailId;

    let userData = await User.findOne({ emailId: email });

    res.send({
      message: "Get user by email",
      data: userData,
    });
  } catch (err) {
    res.send("Failed to fetch user by email...");
  }
});

// GET API, filter by all matched values, we'll use find method for it and pass the filter by values
app.get("/filterUser", async (req, res) => {
  // let filterBy = {
  //   firstName: "Vishal",
  //   // lastName: "Chauhan",
  //   // emailId: "vishal@xyz.com",
  // };

  let filterBy = req.body;

  try {
    let filteredData = await User.find(filterBy);

    console.log(filteredData);
    res.send({ message: "Filter user under maintenance", data: filteredData });
  } catch (err) {
    console.log("Error filtering user !!");
    res.send("Failed to filter the user !!");
  }
});

// DELETE API, findByIdAndDelete
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;

  const user = await User.findByIdAndDelete(userId);

  res.send({ message: "User Deleted Successfully !!", data: user });
  try {
  } catch (err) {
    res.status(400).send("Something went wrong !!");
  }
});

// DELETE API, findOneAndDelete()
app.delete("/deleteUserByEmail", async (req, res) => {
  const userEmail = req.body.emailId;
  const user = await User.findOneAndDelete({ emailId: userEmail });

  res.send({ message: "User Deleted Successfully !!", data: user });
  try {
  } catch (err) {
    res.status(400).send("Something went wrong !!");
  }
});

// UPDATE USER API

// Connecting to DB and Listening server
connectDB()
  .then(() => {
    console.log("Database connection established....");
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Failed to connect to DB !!");
  });
