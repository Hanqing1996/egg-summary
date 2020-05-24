'use strict'

const {Subscription}=require('egg');

let count=0;

class SomeSubscription extends Subscription{
    static get schedule(){
        return {
            interval:'1s',
            type:'all'
        }
    };
    async subscribe(){
        this.app.logger.error(`some sub:${count++}`);
    }
}

module.exports=SomeSubscription