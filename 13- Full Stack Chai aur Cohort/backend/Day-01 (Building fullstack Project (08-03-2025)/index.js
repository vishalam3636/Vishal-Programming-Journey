import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js";

// import all routes
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3636;

//==============================================//
//===== Connect to DB and Create Server ========//
//==============================================//
db();

// user routes
app.use("/api/v1/users", userRoutes);

app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});
