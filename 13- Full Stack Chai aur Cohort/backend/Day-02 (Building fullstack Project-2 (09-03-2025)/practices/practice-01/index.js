import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./route/user.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3636;

// handling cors
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// routes
app.use("/api/v1/user", userRoute);

// db connect

// Server listening
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

console.log("Vishal");
