'use strict'

const BaseHTTP=require('./base_http');

class InvalidParam extends BaseHTTP{
    constructor(paramName,requirement) {
        const msg=`${paramName} doesn't meet requirement:${requirement}`;
        super(msg,4003,'输入有问题',403)
    }
}

module.exports=InvalidParam