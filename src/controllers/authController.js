const {
    USER_WELCOME_MSG,
    USER_FOUND,
    USER_NOT_FOUND,
    LOGIN_MSG,
    LOGIN_FAIL_PASS_MSG,
    LOGIN_FAIL_EMAIL_MSG,
  } = require("../constants/common");
const { createToken } = require("../helpers/common");
  const { success } = require("../helpers/Responce");
const { Products } = require("../models/productsModels");
const { Users } = require("../models/usersModels");

  
  exports.login = (req, res) => {
    const {email , password} = req.body;
    const userEmail = Users.filter((ele) => ele.email === email);
    const userPassword = Users.filter((ele) => ele.password === password);
    
    if(userEmail.length === 0){
     return success({res,msg:LOGIN_FAIL_EMAIL_MSG,data:{},status:404});
    }
    if(userPassword.length === 0){
      return success({res, msg:LOGIN_FAIL_PASS_MSG,data:{},status:404});
     }

    const token = createToken(userEmail[0]);
    const data = {...userEmail[0],token};

    return success({res, msg :LOGIN_MSG,data:data,status:200});
  };
  
//   exports.detail = (req, res) => {
//     const data = Users.filter((ele) => ele.id === parseInt(req.params.id));
  
//     if (data.length === 0)
//       return success({ res, msg: USER_NOT_FOUND, data: {}, status: 404 });
  
//     return success({ res, msg: USER_FOUND, data: data[0], status: 200 });
//   };
  
  
  