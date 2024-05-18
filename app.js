const express = require("express");
const app = express();
const userRouter = require("./src/router/userRouter.js").userRouter;

app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:1125");
    res.setHeader("Access-Control-Allow-Methods", "GET;POST;OPTION");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
})

app.use("/user", userRouter);

app.listen("3000", ()=>{
    console.log("服务器已启动！");
})