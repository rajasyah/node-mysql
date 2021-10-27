const express = require("express");
const userRouter = express.Router();

userRouter.get("/users", (req, res) => {
  res.send({
    status: "success",
    message: "welcome Users",
  });
});

module.exports = userRouter;
