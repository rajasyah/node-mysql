const express = require("express");
const productRouter = express.Router();
const connection = require("../config/mysql");
const productController = require("../controller/product");

productRouter.get("/product", productController.index);

productRouter.get("/product/:id", productController.sort);

module.exports = productRouter;
