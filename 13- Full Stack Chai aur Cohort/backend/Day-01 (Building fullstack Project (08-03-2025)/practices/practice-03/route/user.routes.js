import express from "express";
const router = express.Router();
import {
  allMessage,
  allUser,
  register,
} from "../controller/user.controller.js";

router.get("/register", register);
router.get("/alluser", allUser);
router.get("/allmessage", allMessage);

export default router;
