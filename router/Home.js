const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({
    status: "success",
    message: "welcome server api eduwork",
  });
});

module.exports = router;
