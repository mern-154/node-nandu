const express = require("express");
const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");
const { route } = require("./src/routes/productRoutes");
const { HOME_MSG } = require("./src/constants/common");

const app = express();

app.use(express.json());

dotenvExpand.expand(dotenv.config());

const PORT = process.env.PORT || 5500;
const SERVER = process.env.SERVER || "";
const ProductRoute = require("../node-nandu/src/routes/productRoutes");
const UserRoute = require("../node-nandu/src/routes/userRoute");

app.get("/", (req, res) => {
  return res.json(HOME_MSG);
});

app.listen(PORT, () => {
  console.log(`Running Successfully on : ${SERVER}`);
});

app.use("/products", ProductRoute);
app.use("/users", UserRoute);
