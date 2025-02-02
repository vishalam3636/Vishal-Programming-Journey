const express = require("express");
const requestRouter = express.Router();
const { userAuth } = require("../middlewares/auth");

requestRouter.post(
  "/request/send/interested/:userId",
  userAuth,
  async (req, res) => {
    // Sending connection request logic
    console.log("Sending connection request !!");

    console.log(req.params.userId, ">>>request send to id");

    res
      .status(401)
      .send(
        ` ${req?.user?.firstName} Sending connection request to ${req.params.userId}`
      );
  }
);

module.exports = { requestRouter };
