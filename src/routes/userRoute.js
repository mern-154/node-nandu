const express = require("express");
const route = express.Router();
const { user, detail } = require("../controllers/userController");

route.get("/", user);
route.get("/:id", detail);

module.exports = route;
