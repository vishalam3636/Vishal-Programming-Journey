import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./route/user.routes.js";
import dbConnect from "./utils/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3636;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "OPTIONS", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// db connection
dbConnect();

// routes
app.use("/api/v1/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
