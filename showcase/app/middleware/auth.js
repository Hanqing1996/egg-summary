'use strict'

module.exports=(options)=>{
    return async (ctx,next)=>{
        const {userId}=ctx.request.body;
        const isUserValid=await ctx.service.user.isUserLogin(userId);
        if(!isUserValid) throw new Error('invalid user from middleware');
        await next();
    };
};