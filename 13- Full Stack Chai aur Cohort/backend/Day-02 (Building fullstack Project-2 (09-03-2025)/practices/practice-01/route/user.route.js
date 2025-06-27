import express from "express";
const router = express.Router();

import {
  allUsers,
  login,
  register,
  verifyUser,
} from "../controllers/user.controllers.js";

router.post("/register", register);
router.get("/allUser", allUsers);
router.post("/login", login);
router.get("/verify/:token", verifyUser);

export default router;
