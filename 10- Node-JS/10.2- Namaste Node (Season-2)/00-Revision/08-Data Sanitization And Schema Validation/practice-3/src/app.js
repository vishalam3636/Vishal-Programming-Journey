require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const connectDb = require("./config/database");

// models
const User = require("./models/user.models");

// middlewares
app.use(express.json());

// Add User
app.post("/user", async (req, res) => {
  console.log(req.body);

  try {
    let newUser = new User(req.body);

    User.init()
      .then(async () => {
        let result = await newUser.save();
        res.status(200).send(result);
      })
      .catch((err) => {
        res.status(400).send(err?.message);
      });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update User (by ID)
app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;
  console.log(data, ">>>Data");

  try {
    // allow user to update only certain fields
    const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age", "skills"];
    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );

    if (!isUpdateAllowed) {
      throw new Error("Update not allowed");
    }

    if (data?.skills?.length > 10) {
      throw new Error("Skills cant be more than 10...");
    }

    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
      runValidators: true,
    });
    res.send(user);
  } catch (err) {
    res
      .status(400)
      .send({ error: "Something went wrong...", message: err.message });
  }
});

// update user by other unique keys (emailId)
app.patch("/updateUserByEmail", async (req, res) => {
  let emailId = req.body.emailId;
  let data = req.body;

  try {
    let user = await User.findOneAndUpdate({ emailId: emailId }, data, {
      returnDocument: "after",
      runValidators: true,
    });

    res.send(user);
  } catch (err) {
    res
      .status(400)
      .send({ error: "Failed to update user by email", details: err.message });
  }
});

connectDb()
  .then((res) => {
    console.log("Successfully connected to DB.....");

    app.listen(PORT, () => {
      console.log(`Server is lostening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Error connecting DB !!`);
  });
