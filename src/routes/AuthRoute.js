const express = require("express");
const route = express.Router();
const { login, user, detail } = require("../controllers/authController");

// route.get("/", user);
// route.get("/:id", detail);
route.post("/login",login);

module.exports = route;