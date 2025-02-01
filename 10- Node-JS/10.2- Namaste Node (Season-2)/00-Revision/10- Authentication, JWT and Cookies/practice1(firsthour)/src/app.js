const express = require("express");
const app = express();
const PORT = 3636;
const { connectDB } = require("./config/dbConnect");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const { userAuth } = require("./middlewares/auth");

// models
const { User } = require("./models/user.model");

// middlewares
app.use(express.json());
app.use(cookieParser());

// Create user API
app.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, emailId, password } = req.body;

    const encryptPassword = await bcrypt.hash(password, 10);

    let newUser = new User({
      firstName,
      lastName,
      emailId,
      password: encryptPassword,
    });

    let saveUser = await newUser.save();

    res.send(saveUser);
  } catch (err) {
    res.status(401).send(`ERROR CREATING USER: ${err.message}`);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      req.send("Invalid Credentials");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.send("Invalid Credentials !!");
    } else {
      const token = jwt.sign({ _id: user._id }, "MAHADEV");

      res.cookie("token", token);
      res.send(user);
    }
  } catch (err) {
    res.send(`${err.message}`);
  }
});

app.get("/profile", userAuth, async (req, res) => {
  try {
    let profile = req.user;
    res.send(profile);
  } catch (err) {
    res.status(401).send(`ERROR: ${err.message}`);
  }
});

// Connecting to DB and starting server
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  } catch (err) {
    console.log(`ERROR: ${err.message}`);
  }
};

startServer();
