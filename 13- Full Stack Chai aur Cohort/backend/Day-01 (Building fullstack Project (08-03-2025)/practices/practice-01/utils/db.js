import mongoose from "mongoose";

let dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((res) => {
      console.log("DB Connection Success !!");
    })
    .catch((err) => {
      console.log("DB COnnection Failed !!!");
    });
};

export default dbConnect;
