import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js";

// import all routes
import userRoutes from "./route/user.routes.js";

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

// connect to db
db();

// User routes
app.use("/api/v1/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
