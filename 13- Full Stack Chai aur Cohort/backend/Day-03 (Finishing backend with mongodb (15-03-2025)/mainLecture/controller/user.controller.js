import User from "../model/user.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  // get data
  // validate
  // check if user already exists
  // create a user in database
  // create a verification token
  // save token in database
  // send token as a email to user
  // send success status to user

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All field are require !!" });
  }

  try {
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    let user = await User.create({
      name,
      email,
      password,
    });

    if (!user) {
      return res.status(400).json({
        message: "User not registered",
      });
    }

    let token = crypto.randomBytes(32).toString("hex");
    console.log(token, ">>>token");

    user.verificationToken = token;
    console.log(user, ">>>user");

    (await user).save();

    // send email
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.PORT,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const mailOption = {
      from: process.env.MAILTRAP_SENDEREMAIL, // sender address
      to: user.email, // list of receivers
      subject: "Verify your email", // Subject line
      text: "Hello world?", // plain text body
      html: `Please click on the following link:
        ${process.env.BASE_URL}/api/v1/users/verify/${token}
      `, // html body
    };

    await transporter.sendMail(mailOption);

    res
      .status(201)
      .json({ message: "User registered successfully", success: true });
  } catch (err) {
    res
      .status(400)
      .json({ message: "User not registered", err, success: false });
  }
};

const verifyUser = async (req, res) => {
  // get token from url
  // validate token
  // find user based on token
  // if not
  // set isVerified field to true
  // remove verification token
  // save
  // return response

  const { token } = req.params;
  console.log(token, ">>>vtttoken");

  if (!token) {
    return res.status(400).json({ message: "Invalid token" });
  }

  let user = await User.findOne({ verificationToken: token });
  if (!user) {
    return res.status(400).json({ message: "Invalid token" });
  }

  user.isVerified = true;
  user.verificationToken = undefined;

  await user.save();

  res.status(200).send({
    message: "User verified successfully",
    success: true,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    let user = await User.findOne({ email });
    //find user
    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // validate password
    let isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch, ">>>isMatch");

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    let token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );

    const cookieOptions = {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    };

    res.cookie("token", token, cookieOptions);
    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(401).send({
      message: "user login failed",
      err: err.message,
    });
  }
};

const getMe = async (req, res) => {
  try {
    console.log("reached at profile level");
    const data = req.user;
    console.log(data, ">>>data");

    let user = await User.findById(req.user.id).select("-password");
    console.log(user, ">>>>user");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {}
};

const logoutUser = async (req, res) => {
  try {
  } catch (err) {}
};

const forgotPassword = async (req, res) => {
  try {
  } catch (err) {}
};

const resetPassword = async (req, res) => {
  try {
  } catch (err) {}
};

export {
  registerUser,
  verifyUser,
  login,
  getMe,
  logoutUser,
  forgotPassword,
  resetPassword,
};
