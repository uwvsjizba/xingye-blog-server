const userRouter = require("express").Router();
const creatVaildateCode = require("../util/MyToken.js").creatVaildateCode;
const Result = require("../pojo/Result.js");


// 获取验证码
userRouter.get("/getVaildateCode", (req, res, next)=>{
    let code = creatVaildateCode();
    res.status(200).send(Result._getSucceedResult({code}, "验证码发送成功"));
})


exports.userRouter = userRouter;