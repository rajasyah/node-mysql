const productRouterV2 = require("express").Router();
const Product = require("../model/productModelV2");

productRouterV2.get("/product", (req, res) => {
  Product.findAll().then((prod) => res.send(prod));
});

productRouterV2.get("/product/:id", (req, res) => {
  Product.findAll({
    where: {
      id: req.params.id,
    },
  }).then((prod) => res.send(prod));
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

productRouterV2.put("/product/:id", async (req, res) => {
  const { name, price, stock, status } = req.body;
  try {
    await Product.sync();
    const result = await Product.update(
      { name, price, stock, status },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.send(result);
  } catch (e) {
    res.send(e);
  }
});

productRouterV2.delete("/product/:id", (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.send("success"));
});

module.exports = productRouterV2;
