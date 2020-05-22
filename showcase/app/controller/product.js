'use strict';

const {Controller} = require('egg');

const products=[];

class ProductController extends Controller {
    async index() {
        const { ctx } = this;
        ctx.body = 'product';
    }

    async getOneById(){
        const {id}=this.ctx.query;
        const product=products.find(p=>p.id==id);
        this.ctx.body={
            product
        }
    }

    async addOne(){
        const {product}=this.ctx.request.body;
        if(product) products.push(product);
        this.ctx.body={
            products
        }
    }
}

module.exports = ProductController;
