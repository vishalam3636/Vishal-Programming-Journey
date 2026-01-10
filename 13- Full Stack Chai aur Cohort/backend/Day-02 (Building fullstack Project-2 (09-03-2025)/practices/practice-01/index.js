import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./utils/db.js";

// import routes
import userRoute from "./routes/user.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3636;

app.use(express.json());
app.use(
  cors({
    origin: process.env.BASE_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"],
    credentials: true,
  })
);

// db connect
dbConnect();

// routes
app.use("/api/v1/users/", userRoute);

// server run code
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
