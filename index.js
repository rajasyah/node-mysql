const express = require("express");
const app = express();
const router = require("./router/Home");
const productRouter = require("./router/products");
const userRouter = require("./router/users");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(router);
app.use("/api/v1", productRouter);
app.use(userRouter);

app.listen(process.env.PORT || 3000, () =>
  console.log("Server running at http://localhost:3000")
);
