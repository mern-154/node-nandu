const {
  USER_WELCOME_MSG,
  USER_FOUND,
  USER_NOT_FOUND,
} = require("../constants/common");
const { success } = require("../helpers/Responce");
const { Users } = require("../models/usersModels");

exports.user = (req, res) => {
  const data = [...Users];
  return res.json({
    success: true,
    msg: USER_WELCOME_MSG,
    data,
  });
};

exports.detail = (req, res) => {
  const data = Users.filter((ele) => ele.id === parseInt(req.params.id));

  if (data.length === 0)
    return success({ res, msg: USER_NOT_FOUND, data: {}, status: 404 });

  return success({ res, msg: USER_FOUND, data: data[0], status: 200 });
};


