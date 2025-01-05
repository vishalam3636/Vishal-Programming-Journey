const express = require("express");
const app = express();
const PORT = 3636;
const dbConnect = require("./config/database");
const bcrypt = require("bcrypt");
const validator = require("validator");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

//=========== middlewares ============//
app.use(express.json());
app.use(cookieParser());

//============= utils ================//
const { validateSignUpData } = require("./utils/validation");

//============= models ===============//
const User = require("./models/user.models");

// =============== ROUTES ============//
// Add User
app.post("/user", async (req, res) => {
  console.log(req.body);

  try {
    // validation of user
    validateSignUpData(req);

    const { firstName, lastName, emailId, password } = req.body;

    // Encrypt the password
    const passwordHash = await bcrypt.hash(password, 10);

    // creating the new instance of the user model
    let newUser = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });
    console.log(newUser, ">>>new User");

    await newUser.save();
    res.send("User added successfully.....");
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

// Login User
app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    console.log(emailId, password, ">>>all login cred");

    if (!validator.isEmail(emailId)) {
      throw new Error("Invalid credentials !!");
    }

    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Not a valid user !!");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      // Create a jwt token
      const token = jwt.sign({ _id: user._id }, "DEV@TINDER$790");
      console.log(token, ">>>token");

      // Add the token to cookie and send the response back to the user

      res.cookie("token", token);
      res.send("Login Successful !!");
    } else {
      throw new Error("Invalid credentials !!");
    }
  } catch (err) {
    res.status(400).send(`ERROR : ${err.message}`);
  }
});

// user profile
app.get("/profile", async (req, res) => {
  try {
    const cookies = req.cookies;

    const { token } = cookies;
    if (!token) {
      throw new Error("Invalid Token");
    }

    // validate my token
    const decodedMessage = jwt.verify(token, "DEV@TINDER$790");
    console.log(decodedMessage, ">>>DecodedMessage");
    const { _id } = decodedMessage;
    console.log("Logged in User Is: " + _id);

    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User does not exist");
    }

    res.send(user);
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

// Database connect
dbConnect().then((res) => {
  console.log("Db Connection successful....");

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
