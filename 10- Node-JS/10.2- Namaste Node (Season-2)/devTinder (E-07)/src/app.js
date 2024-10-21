const express = require("express");
const connectDB = require("./config/database");
const app = express();
const PORT = 7777;
const User = require("./models/user");

app.use(express.json());

// Create User
app.post("/signup", async (req, res) => {
  console.log(req.body, ">>> req");
  const { firstName, lastName, email, password } = req.body;

  // Creating a new instance of the user model
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User added successfully !!");
  } catch (err) {
    res.status(400).send("Error saving the user:", err.message);
  }
});

// GET user by email
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  // Send only one user among the same emailId
  try {
    let user = await User.findOne({ emailId: userEmail });
    res.send(user);
  } catch (err) {
    res.status(400).send("Something went wrong");
  }

  // // if there is multiple users with same emailId, it will send all
  // try {
  //   const users = await User.find({ emailId: userEmail });

  //   if (users.length === 0) {
  //     res.status(404).send("User not found !!");
  //   } else {
  //     res.send(users);
  //   }
  // } catch (err) {
  //   res.status(400).send("Something went wrong");
  // }
});

// Feed API- GET /feed - get all the users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});

    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

// Delete user api
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;

  try {
    // const user = await User.findByIdAndDelete({ _id: userId });
    const user = await User.findByIdAndDelete(userId);

    res.send({ message: "User deleted Successfully", user: user });
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

// Update user api
app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;

  try {
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
    });
    console.log(user, ">>> user");

    res.send("User updated successfully");
  } catch (err) {
    res.status(400).send("Something went wrong", err.message);
  }
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
