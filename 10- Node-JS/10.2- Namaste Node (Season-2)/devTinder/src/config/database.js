const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://NamasteDev:dfKskeeYaa0CypYr@namastenode.7yfdg.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
