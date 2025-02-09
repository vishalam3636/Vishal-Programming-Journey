const express = require("express");
const profileRouter = express.Router();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { validateEditProfileData } = require("../utils/validation");

const { userAuth } = require("../middlewares/auth");

const { User } = require("../models/user");

profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    let cookies = req.cookies;

    let token = cookies.token;
    if (!token) {
      throw new Error(`Authentication failed !!!`);
    }

    let decryptToken = jwt.verify(token, "MAHADEV");
    let userId = decryptToken._id;

    const findUser = await User.findOne({ _id: userId });

    if (!findUser) {
      throw new Error("Profile not found !!");
    } else {
      res.send(findUser);
    }
  } catch (err) {
    res.status(401).send(`ERROR: ${err.message}`);
  }
});

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    if (!validateEditProfileData(req)) {
      throw new Error("Invalid Edit Request !!");
    }

    const loggedInUser = req.user;

    Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));

    await loggedInUser.save();

    res.send("Profile Updated Successfully !!");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = { profileRouter };
