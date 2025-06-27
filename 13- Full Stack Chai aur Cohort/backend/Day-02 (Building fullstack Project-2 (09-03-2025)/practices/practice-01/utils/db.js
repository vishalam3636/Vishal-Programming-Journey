import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((res) => {
      console.log("DB Connected successfully");
    })
    .catch((err) => {
      console.log("DB Connection failed", err.message);
    });
};

export default dbConnect;
