const jwt = require("jsonwebtoken");


/**
 * @param {Number} size 验证码长度
 * @param {Array | String} arr 验证码中会出现的字符（可选）
 * @returns {String}
 */
const creatVaildateCode = function(size = 6, arr){
    arr ||= "1234567890";
    let code = "";
    for(let i=0; i<size; i++){
        let index = Math.floor(Math.random() * 10);
        code += arr[index];
    }
    return code;
};


module.exports = {
    creatVaildateCode
}