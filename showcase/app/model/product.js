'use strict';

const products=[]

class ProductModel {
    async list(){
        return products
    }

    async getOneById(id){
        const product=products.find(p=>p.id==id);
        return product
    }

    async addOne(product){
        if(product) products.push(product);
    }
}

module.exports = ProductModel;