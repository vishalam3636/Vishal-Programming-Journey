const express = require("express");
const connectDB = require("./config/database");
const app = express();
const PORT = 7777;
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  console.log(req.body, ">>> req");
  const { firstName, lastName, email, password } = req.body;

  // Creating a new instance of the user model
  const user = new User(req.body);
  console.log(user, ">>> user");

  try {
    await user.save();
    res.send("User added successfully under maintenance !!");
  } catch (err) {
    res.status(400).send("Error saving the user:", err.message);
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
