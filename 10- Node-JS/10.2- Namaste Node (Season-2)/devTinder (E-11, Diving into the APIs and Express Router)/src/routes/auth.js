const express = require("express");
const authRouter = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const { User } = require("../models/user");

authRouter.post("/signup", async (req, res) => {
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

authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Invalid Credentials");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid Credentials !!");
    } else {
      const token = jwt.sign({ _id: user._id }, "MAHADEV");

      res.cookie("token", token);
      res.send(user);
    }
  } catch (err) {
    res.send(`${err.message}`);
  }
});

authRouter.post("/logout", (req, res) => {
  try {
    res.cookie("token", null, { expires: new Date(Date.now()) });
    res.send();
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = { authRouter };
