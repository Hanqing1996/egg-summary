'use strict';

const carts = [{
    id: 1,
    userId: 1,
    products: [
        {
            productId:1,
            amount:2
        },
        {
            productId:2,
            amount:3
        },
    ]
}]

class CartModel {
    async list() {
        return carts
    }

    async getOneByUserId(userId){
        const cart = carts.find(p => p.id == userId);
        return cart||{userId,products: []}
    }

    async addProductToCart(userId,productId,amount){
        const cart = await this.getOneByUserId(userId);
        const productIndex=cart.products.findIndex(p=>p.productId==productId);

        if(productIndex<0){
            cart.products.push({productId:productId,amount})
        }else {
            cart.products[productIndex].amount+=amount;
        }
        return cart
    }

    async removeProductFromCart(userId,productId){
        const cart = this.getOneByUserId(userId);

        const productIndex=cart.products.map(p=>p.productId).findIndex(productId);
        productIndex&&cart.products.splice(productIndex,1);
    }
}

module.exports = CartModel;