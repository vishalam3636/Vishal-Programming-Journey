const express = require("express");
const profileRouter = express.Router();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const { userAuth } = require("../middlewares/auth");

const { User } = require("../models/user");

profileRouter.get("/profile", userAuth, async (req, res) => {
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

module.exports = { profileRouter };
