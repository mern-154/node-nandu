const jwt = require("jsonwebtoken");
const {SECRET, UN_AUTH} = require("../constants/AuthConstant");
const { success } = require("../helpers/Responce");


exports.auth = (req, res, next) => {
    let token = req.headers.authorization || "";
    if (! token) 
        return success({res,msg: UN_AUTH, data:{},status:401});
    

    token = token.replace("Bearer ", "");


    try {
        const decoded = jwt.verify(token, SECRET);
        if (decoded) 
            next();
         else 
            return success({res,msg:UN_AUTH,data:{},status:401});
        
    } catch (error) {
        return success({res,msg:error.message,data:{},status:500});
    }

};
