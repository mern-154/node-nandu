const express = require("express");
const route = express.Router();
const { product, detail } = require("../controllers/productController");

route.get("/", product);
route.get("/:id", detail);

module.exports = route;
