class Result {
    data;
    msg;
    code;

    constructor(data=null, msg="", code=2000){
        this.data = data;
        this.msg = msg;
        this.code = code;
    }

    /**
     * 
     * @param {String} msg 响应描述
     * @param {Object} data 响应数据
     * @returns {JSON}
     */
    
    static _getSucceedResult(data, msg){
        let result = new Result(data, msg, 2000);
        const json = JSON.stringify(result);
        result = null;
        return json;
    }

    /**
     * @param {Number} code 操作失败状态码
     * @param {String} msg 响应描述
     * @returns 
     */

    static _getFailedResult(msg, code){
        let result = new Result(null, msg, 1000);
        const json = JSON.stringify(result);
        result = null;
        return json;
    }
}


module.exports = Result;