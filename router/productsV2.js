const productRouterV2 = require("express").Router();
const Product = require("../model/productModelV2");

productRouterV2.get("/product", (req, res) => {
  Product.findAll().then((prod) => res.send(prod));
});

productRouterV2.post("/product", async (req, res) => {
  const { name, price, stock, status } = req.body;
  try {
    await Product.sync();
    const result = await Product.create({ name, price, stock, status });
    res.send(result);
  } catch (e) {
    res.send(e);
  }
});

module.exports = productRouterV2;
