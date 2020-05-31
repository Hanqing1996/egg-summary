'use strict'

class BaseHTTP extends Error{
    constructor(msg,code,httpMsg,httpStatusCode) {
        super(msg);
        this.code=code;
        this.httpMsg=httpMsg;
        this.httpStatusCode=httpStatusCode;
    }
}

module.exports=BaseHTTP