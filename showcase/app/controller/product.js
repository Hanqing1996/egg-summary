'use strict';

const {Controller} = require('egg');

const ProductModel=require('../model/product')

const productModel=new ProductModel;

class ProductController extends Controller {
    async index() {
        const { ctx } = this;
        ctx.body = 'product';
    }

    async getOneById(){
        const {id}=this.ctx.query;
        const product=await productModel.getOneById(id);
        this.ctx.body={
            product
        }
    }

    async addOne(){
        const {product}=this.ctx.request.body;
        await productModel.addOne(product)
        this.ctx.body={
            products:await productModel.list()
        }
    }
}

module.exports = ProductController;
