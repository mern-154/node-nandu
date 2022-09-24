const express = require("express");

const app = express();

const ProductRoute = require("./productRoutes");
const UserRoute = require("./userRoute");
const AuthRoute = require("./AuthRoute");
const { LOGIN_MSG } = require("../constants/common");
const { Products } = require("../models/productsModels");
const { auth } = require("../middleware/auth");


app.use("/products", auth,ProductRoute);
app.use("/users", auth,UserRoute);
app.use("/auth",AuthRoute);

module.exports = app;