'use strict';

const {Controller} = require('egg');

class ProductController extends Controller {
    async addProductToCart(){

        const{userId,productId,amount}=this.ctx.request.body;

        // 用户查询不到，即未处于登录状态
        // const isUserValid=await this.ctx.service.user.isUserLogin(userId);
        // if(!isUserValid) throw new Error('invalid user');

        const isUserInBlackList=await this.ctx.service.user.isUserInBlackList(userId);
        if(!isUserInBlackList) throw new Error('user is banned');

        const cart=await this.ctx.service.cart.addProductToCart(userId,productId,amount);
        this.ctx.body={
            cart
        }
    }
    async removeProducrFromCart(){

    }
    async removeAllFromCart(){

    }
}

module.exports = ProductController;
