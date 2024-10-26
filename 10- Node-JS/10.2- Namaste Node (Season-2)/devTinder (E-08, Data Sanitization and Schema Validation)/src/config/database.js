const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    // "mongodb+srv://NamasteDev:dfKskeeYaa0CypYr@namastenode.7yfdg.mongodb.net/devTinder" // old
    "mongodb+srv://rahulzx36:fQd8XdesfgSoJcB3@vstpcluster0.rxvcg.mongodb.net/" // new
  );
};

module.exports = connectDB;
