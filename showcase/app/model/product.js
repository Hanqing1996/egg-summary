'use strict';

const products = [{
        id: 1,
        name: '商品1',
        priceIncents: 10 // 分
    }, {
        id: 2,
        name: '商品2',
        priceIncents: 20 // 分
    }, {
        id: 3,
        name: '商品3',
        priceIncents: 30 // 分
    }]

class ProductModel {
    async list() {
        return products
    }

    async getOneById(id) {
        const product = products.find(p => p.id == id);
        return product
    }

    async addOne(product) {
        if (product) products.push(product);
    }
}

module.exports = ProductModel;