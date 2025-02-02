const jwt = require("jsonwebtoken");
const { User } = require("../models/user.model");

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      throw new Error("Authentication Failed !!");
    }

    const decryptToken = jwt.verify(token, "MAHADEV");
    if (!decryptToken) {
      throw new Error("Invalid token !!");
    }

    const { _id } = decryptToken;
    if (!_id) {
      throw new Error("Invalid token !!");
    }

    const findUser = await User.findById(_id);
    if (!findUser) {
      throw new Error("Data not found !!");
    }

    if (!findUser) {
      throw new Error("User not found !!");
    } else {
      req.user = findUser;
      next();
    }
  } catch (err) {
    res.status(401).send(`ERROR: ${err.message}`);
  }
};

module.exports = { userAuth };
