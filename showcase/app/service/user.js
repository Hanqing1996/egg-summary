'use strict';

const {Service} = require('egg');

class userService extends Service {
    async isUserInBlackList(userId){
        return true
    }

    async login(username,password){
        const user=await this.ctx.model.user.login(username,password);
        if(!user) throw new Error("invalid username or password");
        return user.id;
    }

    // if user in list
    async isUserLogin(userId){
        const isValidate=await this.ctx.model.user.isUserIdValidate(userId);
        console.log(isValidate);
        return isValidate;
    }
}

module.exports = userService;