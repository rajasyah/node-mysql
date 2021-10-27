const express = require("express");
const app = express();
const router = require("./router/Home");
const routeProduct = require("./router/products");
const routeUsers = require("./router/users");

app.use(router);
app.use(routeProduct);
app.use(routeUsers);

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
