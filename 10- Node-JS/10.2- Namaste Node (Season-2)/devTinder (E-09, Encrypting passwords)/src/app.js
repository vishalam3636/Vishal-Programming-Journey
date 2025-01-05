const express = require("express");
const app = express();
const PORT = 3636;
const dbConnect = require("./config/database");
const bcrypt = require("bcrypt");
const validator = require("validator");

//============= utils ================//
const { validateSignUpData } = require("./utils/validation");

//============= models ===============//
const User = require("./models/user.models");

//=========== middlewares ============//
app.use(express.json());

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
      res.send("Login Successful !!");
    } else {
      throw new Error("Invalid credentials !!");
    }
  } catch (err) {
    res.status(400).send(`ERROR : ${err.message}`);
  }
});

// Database connect
dbConnect().then((res) => {
  console.log("Db Connection successful....");

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
