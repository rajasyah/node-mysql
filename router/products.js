const express = require("express");
const routeProduct = express.Router();

routeProduct.get("/product", (req, res) => {
  res.send({
    status: "success",
    message: "product page",
  });
});

module.exports = routeProduct;
