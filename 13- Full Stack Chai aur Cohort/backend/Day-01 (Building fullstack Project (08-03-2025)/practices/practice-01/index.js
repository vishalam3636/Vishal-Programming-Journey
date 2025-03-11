import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import carRoutes from "./routes/car.routes.js";
import addressRoute from "./routes/address.routes.js";
import dbConnect from "./utils/db.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3636;

// middlewares
app.use(express.json());
app.use(express.urlencoded());

// Connecting with DB and Server
dbConnect();

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/cars", carRoutes);
app.use("/api/v1/address", addressRoute);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
