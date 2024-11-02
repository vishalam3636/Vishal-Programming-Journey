const express = require("express");
const app = express();
const PORT = 8888;
// import db connection
const databaseConnect = require("./config/database");
// import User Schema
const BasicDetails = require("./models/basicDetails");

// Middleware-
app.use(express.json());

// Get An User
app.get("/basicDetails/:id", async (req, res) => {
  let userId = req.params.id;
  console.log(userId);

  try {
    let userBasicDetail = await BasicDetails.findById(userId);
    res.send(userBasicDetail);
  } catch (err) {
    res.send("Failed to get user basic detail: " + err.message);
  }
});

// Get All User
app.get("/basicDetails", async (req, res) => {
  try {
    let data = await BasicDetails.find({});
    res.send(data);
  } catch (err) {
    res.send("Failed to get all users basic details: ", err.message);
  }
});

// Add User Request Handler
app.post("/signup", async (req, res) => {
  let newBasicDetails = new BasicDetails(req.body);

  try {
    await BasicDetails.init(); // Initialize the User model's indexes
    let addedUser = await newBasicDetails.save();
    res.send(addedUser.toObject());
  } catch (err) {
    console.log("Error: " + err.message);
    res.send("Failed to add user: " + err.message);
  }
});

// Delete User Request Handler
app.delete("/basicDetails/:id", async (req, res) => {
  let userId = req.params.id;

  try {
    let deletedUser = await BasicDetails.findByIdAndDelete(userId);
    console.log(deletedUser, ">>deletedUser");
    res.send(`Deleted user ${userId}`);
  } catch (err) {
    res.send("Error deleting user: " + err.message);
  }
});

// Update user Request Handler
app.patch("/basicDetails/:id", async (req, res) => {
  let userId = req.params.id;
  let data = req.body;

  let ALLOWED_UPDATES = [
    "firstName",
    "middleName",
    "lastName",
    "gender",
    "dateOfBirth",
    "password",
  ];

  const isUpdateAllowed = Object.keys(data).every((k) =>
    ALLOWED_UPDATES.includes(k)
  );

  try {
    if (!isUpdateAllowed) {
      throw new Error("Update not allowed");
    }

    let updatedUser = await BasicDetails.findByIdAndUpdate(userId, data, {
      returnDocument: "after",
      runValidators: true,
    });

    res.send("Update a user under maintenance");
  } catch (err) {
    res.send("Failed to update user: " + err.message);
  }
});

//===================================================//
//========= Db connection and Server start ==========//
//===================================================//
databaseConnect()
  .then((res) => {
    console.log("DB connection successful !!");
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT} `);
    });
  })
  .catch((err) => {
    console.log("DB connection failed !!");
  });
