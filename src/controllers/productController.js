const {
  PRODUCT_WELCOME_MSG,
  PRODUCT_FOUND,
  PRODUCT_NOT_FOUND,
} = require("../constants/common");
const { success } = require("../helpers/Responce");
const { Products } = require("../models/productsModels");

exports.product = (req, res) => {
  const data = [...Products];
  return res.json({
    success: true,
    msg: PRODUCT_WELCOME_MSG,
    data,
  });
};
exports.detail = (req, res) => {
  const data = Products.filter((ele) => ele.id === parseInt(req.params.id));

  if (data.length === 0)
    return success({ res, msg: PRODUCT_NOT_FOUND, data: {}, status: 404 });

  return success({ res, msg: PRODUCT_FOUND, data: data[0], status: 200 });
};
