const express = require("express");
// require("./config/database") // works but not correct way
const { connectDB } = require("./config/database"); //  this ensure DB connection first and server start next
const app = express();
const User = require("./models/user");
const PORT = 8000;

// Request Handler For User
app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "sachin",
    lastName: "kohli",
    emailId: "sachink@gmail.com",
    password: "sachin@123",
  };

  const user = new User(userObj);

  await user.save();

  res.send("User added successfully !!");
});

connectDB()
  .then(() => {
    console.log("DB Connected successful !!");

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("failed to connect to database !!!");
  });
