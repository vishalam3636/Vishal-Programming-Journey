import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  userId: String,
  houseNo: String,
  area: String,
  locality: String,
  city: String,
  state: String,
});

const address = mongoose.model("Address", addressSchema);
export { address };
