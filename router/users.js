const express = require("express");
const routeUsers = express.Router();

routeUsers.get("/users", (req, res) => {
  res.send({
    status: "success",
    message: "welcome Users",
  });
});

module.exports = routeUsers;
