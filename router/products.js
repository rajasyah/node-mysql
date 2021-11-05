const express = require("express");
const productRouter = express.Router();
const productController = require("../controller/product");

productRouter.get("/product", productController.index);

productRouter.get("/product/:id", productController.sort);

productRouter.post("/product", productController.store);
productRouter.put("/product/:id", productController.update);
productRouter.delete("/product/:id", productController.destroy);

module.exports = productRouter;
