import mongoose from "mongoose";

// Export a function that connects to DB

const db = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((res) => {
      console.log(`Connected to Mongodb`);
    })
    .catch((err) => {
      console.log(`ERROR: Error connecting to db:  ${err.message}`);
    });
};

export default db;
