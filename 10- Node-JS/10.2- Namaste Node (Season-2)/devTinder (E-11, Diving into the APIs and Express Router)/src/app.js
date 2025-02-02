require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { dbConnect } = require("./config/dbConnect");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

// models
const { User } = require("./models/user");

// middlewares
app.use(express.json());
app.use(cookieParser());

// Routers
const { authRouter } = require("./routes/auth");
const { profileRouter } = require("./routes/profile");
const { requestRouter } = require("./routes/requests");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);

// Connect DB and start server
const startServer = async () => {
  try {
    await dbConnect();

    app.listen(PORT, () => {
      console.log(`Server is listening on PORT ${PORT}`);
    });
  } catch (err) {
    console.log(`ERROR: ${err.message}`);
    console.log(`Could not start server due to DB connection failure !!`);
  }
};

startServer();
