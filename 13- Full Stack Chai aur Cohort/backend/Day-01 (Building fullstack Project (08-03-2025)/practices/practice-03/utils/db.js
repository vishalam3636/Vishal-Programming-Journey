import mongoose from "mongoose";

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((res) => {
      console.log("DB Connection successful");
    })
    .catch((err) => {
      console.log("DB Connection failed", err.message);
    });
};

export default dbConnect;
