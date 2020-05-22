'use strict';

const {Controller} = require('egg');

// const ProductModel=require('../model/product')
//
// const productModel=new ProductModel;

class ProductController extends Controller {
    async index() {
        const { ctx } = this;
        ctx.body = 'product';
    }

    async getOneById(){
        const {id}=this.ctx.query;
        const product=await this.ctx.model.product.getOneById(id);
        this.ctx.body={
            product
        }
    }

    async addOne(){
        const {product}=this.ctx.request.body;
        await this.ctx.model.product.addOne(product)
        const list=await this.ctx.model.product.list()
        this.ctx.body={
            products:list
        }
    }
}

module.exports = ProductController;
