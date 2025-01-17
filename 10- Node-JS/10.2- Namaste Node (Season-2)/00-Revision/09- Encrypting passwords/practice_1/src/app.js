const express = require("express");
const app = express();
const PORT = 3636;
const { connectDB } = require("./config/dbConnect");
const bcrypt = require("bcrypt");

// middlewares
app.use(express.json());

// models
const { User } = require("./models/user.model");

// SIGNUP ROUTE
app.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, emailId, password } = req.body;

    // using bcrpt package to hash the password
    const encryptPassword = await bcrypt.hash(password, 10);

    let newUser = new User({
      firstName,
      lastName,
      emailId,
      password: encryptPassword,
    });

    let saveNewUser = await newUser.save();

    res.send(saveNewUser);
  } catch (err) {
    res.status(401).send(`ERROR CREATING USER !!: ${err.message}`);
  }
});

// Login User
app.post("/login", async (req, res) => {
  try {
    let { emailId, password } = req.body;

    let user = await User.findOne({ emailId: emailId });
    if (!user) {
      res.send("Not a valid user !!");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      res.send("Login Successful !!");
    } else {
      res.send("Invalid Credentials !!");
    }
  } catch (err) {
    res.status(401).send(`Error Login user: ${err.message}`);
  }
});

// BELOW CODE TO CONNECT TO DB AND START SERVER
let serverStart = async () => {
  try {
    await connectDB();
    console.log(`DB CONNECTION SUCCESSFUL !!`);

    app.listen(PORT, () => {
      console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
    });
  } catch (err) {
    console.log(
      `SERVER COULDN'T START DUE TO DB CONNECTION FAILURE: ERROR: ${err.message}`
    );
  }
};

serverStart();
