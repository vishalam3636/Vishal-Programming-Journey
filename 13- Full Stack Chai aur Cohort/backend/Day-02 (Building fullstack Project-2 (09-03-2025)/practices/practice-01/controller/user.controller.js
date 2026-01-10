import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import nodemailer from "nodemailer";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  // 1. Validation
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are mandatory" });
  }

  try {
    // 2. Check if user already exists
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 3. Hash the password (VERY important)
    const hashedPwd = await bcrypt.hash(password, 10);

    let user = await User.create({
      name,
      email,
      password: hashedPwd,
    });
    console.log(user, ">>>user");

    if (!user) {
      return res.status(400).json({ message: "user not registered" });
    }

    let savedUser = await user.save();

    const token = crypto.randomBytes(32).toString("hex");
    console.log(token, ">>>Verification token");
    user.verificationToken = token;

    await user.save();

    // send email
    // Create a test account or replace with real credentials.
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const mailOption = {
      from: process.env.MAILTRAP_SENDEREMAIL,
      to: user.email,
      subject: "Verify your email",
      // text: `Please click on the following link: ${process.env.BASE_URL}/api/v1/users/verify/${token}`, // plain‑text body
      // html: "<b>Hello world?</b>", // HTML body
      html: `
                        <p>Please click on the following link to verify your email:</p>
                        <a href="${process.env.BASE_URL}/api/v1/users/verify/${token}">
                            ${process.env.BASE_URL}/api/v1/users/verify/${token}
                        </a>
                    `,
    };

    await transporter.sendMail(mailOption);

    res.status(201).json({
      message: "User registered",
      success: true,
      user: {
        ud: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
      },
    });
  } catch (err) {
    console.error("Registration error:", err);
    return res.status(500).json({ message: "User registeration failed" });
  }
};

export const verifyUser = async (req, res) => {
  const { token } = req.params;
  console.log(token, ">>>>token");

  if (!token) {
    return res.status(400).json({
      message: "User verification failed",
    });
  }

  try {
    let user = await User.findOne({ verificationToken: token });
    console.log(user, ">>user");
    if (!user) {
      return res.status(400).json({
        message: "User verification failed",
        success: false,
      });
    }

    user.isVerified = true;
    user.verificationToken = undefined;

    await user.save();

    res.status(201).json({
      message: "User verification success !!",
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      message: "User verification failed",
      success: false,
      err: err.message,
    });
  }
};

export const login = async (req, res) => {
  let { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
      success: false,
    });
  }

  try {
    let user = await User.findOne({ email });
    console.log(user, ">>>>user");

    if (!user) {
      res.status(400).json({
        message: "User not found",
        success: false,
      });
    }

    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      return res.status(400).send({
        message: "Invalid email or password",
        success: false,
      });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, "BHOLENATH", {
      expiresIn: "24h",
    });
    const cookieOptions = {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    };
    res.cookie("token", token, cookieOptions);

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    return res.status(500).json({
      message: "Failed to login",
      success: false,
    });
  }
};

export const allUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password -name"); // Exclude password and name

    return res.status(201).json({ users: users, success: true });
  } catch (err) {
    return res.status(500).json({
      message: "Failed getting all users",
      success: false,
    });
  }
};
