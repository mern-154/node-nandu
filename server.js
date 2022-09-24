const express = require("express");
const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");
const { HOME_MSG } = require("./src/constants/common");

const app = express();

app.use(express.json());

dotenvExpand.expand(dotenv.config());

const PORT = process.env.PORT || 5500;
const SERVER = process.env.SERVER || "";
const MainRoute = require("../node-nandu/src/routes/index");


app.get("/", (req, res) => {
  return res.json(HOME_MSG);
});

app.listen(PORT, () => {
  console.log(`Running Successfully on : ${SERVER}`);
});

app.use("/", MainRoute);

