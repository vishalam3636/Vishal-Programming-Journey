import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const db = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connect successful");
    })
    .catch((err) => {
      console.log("Connection failed", err.message);
    });
};

export default db;
